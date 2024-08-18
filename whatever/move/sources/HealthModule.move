module module_addr::health_module {
    use std::string::String;
    use aptos_framework::table::{Self, Table};
    use std::signer;
    use std::vector;

    // Structs
    struct MedicalRecord has key, store, copy, drop {
        record_id: u64,
        patient_address: address,
        details: String,
        email: String,
    }

    struct VaccineRecord has key, store, copy, drop {
        vaccine_id: u64,
        patient_address: address,
        vaccine_type: String,
        date_administered: u64,
        verification: bool,
        email: String,
    }

    struct MedicalAppointment has key, store, copy, drop {
        appointment_id: u64,
        email: String,
        patient_address: address,
        hospital_address: address,
    }

    // Table to store records
    struct HealthSystem has key {
        medical_records: Table<u64, MedicalRecord>,
        vaccine_records: Table<u64, VaccineRecord>,
        appointments: Table<u64, MedicalAppointment>,
        record_counter: u64,
        vaccine_counter: u64,
        appointment_counter: u64,
    }

    // Struct to store the admin account
    struct Admin has key {
        admin: address,
    }

    // Initialize the module with the deployer as the admin
    public fun initialize(admin: &signer) {
        let admin_address = signer::address_of(admin);
        move_to(admin, Admin { admin: admin_address });

        let health_system = HealthSystem {
            medical_records: table::new(),
            vaccine_records: table::new(),
            appointments: table::new(),
            record_counter: 0,
            vaccine_counter: 0,
            appointment_counter: 0,
        };
        move_to(admin, health_system);
    }

    // Function to check if the caller is the admin
    public fun is_admin(caller: &signer): bool acquires Admin {
        let admin_resource = borrow_global<Admin>(signer::address_of(caller));
        signer::address_of(caller) == admin_resource.admin
    }

    // Patient functions
    public entry fun upload_medical_record(account: &signer, details: String, email: String) acquires HealthSystem {
        let health_system = borrow_global_mut<HealthSystem>(@module_addr);
        let record_id = health_system.record_counter + 1;
        let new_record = MedicalRecord {
            record_id,
            patient_address: signer::address_of(account),
            details,
            email,
        };
        table::upsert(&mut health_system.medical_records, record_id, new_record);
        health_system.record_counter = record_id;
    }

    public entry fun upload_vaccine_record(account: &signer, vaccine_type: String, date_administered: u64, verification: bool, email: String) acquires HealthSystem {
        let health_system = borrow_global_mut<HealthSystem>(@module_addr);
        let vaccine_id = health_system.vaccine_counter + 1;
        let new_record = VaccineRecord {
            vaccine_id,
            patient_address: signer::address_of(account),
            vaccine_type,
            date_administered,
            verification,
            email,
        };
        table::upsert(&mut health_system.vaccine_records, vaccine_id, new_record);
        health_system.vaccine_counter = vaccine_id;
    }

    public entry fun book_appointment(account: &signer, hospital_address: address, email: String) acquires HealthSystem {
        let health_system = borrow_global_mut<HealthSystem>(@module_addr);
        let appointment_id = health_system.appointment_counter + 1;
        let new_appointment = MedicalAppointment {
            appointment_id,
            email,
            patient_address: signer::address_of(account),
            hospital_address,
        };
        table::upsert(&mut health_system.appointments, appointment_id, new_appointment);
        health_system.appointment_counter = appointment_id;
    }

    // Query functions
    public fun get_medical_records(account: &signer): vector<MedicalRecord> acquires HealthSystem {
        let health_system = borrow_global<HealthSystem>(@module_addr);
        let records = vector::empty<MedicalRecord>();
        let i = 0;
        while (i < health_system.record_counter) {
            if (table::contains(&health_system.medical_records, i)) {
                let record = table::borrow(&health_system.medical_records, i);
                if (record.patient_address == signer::address_of(account)) {
                    vector::push_back(&mut records, *record);
                };
            };
            i = i + 1;
        };
        records
    }

    public fun get_vaccine_records(account: &signer): vector<VaccineRecord> acquires HealthSystem {
        let health_system = borrow_global<HealthSystem>(@module_addr);
        let records = vector::empty<VaccineRecord>();
        let i = 0;
        while (i < health_system.vaccine_counter) {
            if (table::contains(&health_system.vaccine_records, i)) {
                let record = table::borrow(&health_system.vaccine_records, i);
                if (record.patient_address == signer::address_of(account)) {
                    vector::push_back(&mut records, *record);
                };
            };
            i = i + 1;
        };
        records
    }

    public fun get_appointments(account: &signer): vector<MedicalAppointment> acquires HealthSystem {
        let health_system = borrow_global<HealthSystem>(@module_addr);
        let appointments = vector::empty<MedicalAppointment>();
        let i = 0;
        while (i < health_system.appointment_counter) {
            if (table::contains(&health_system.appointments, i)) {
                let appointment = table::borrow(&health_system.appointments, i);
                if (appointment.patient_address == signer::address_of(account)) {
                    vector::push_back(&mut appointments, *appointment);
                };
            };
            i = i + 1;
        };
        appointments
    }

    public fun get_hospital_appointments(hospital_address: address): vector<MedicalAppointment> acquires HealthSystem {
        let health_system = borrow_global<HealthSystem>(@module_addr);
        let appointments = vector::empty<MedicalAppointment>();
        let i = 0;
        while (i < health_system.appointment_counter) {
            if (table::contains(&health_system.appointments, i)) {
                let appointment = table::borrow(&health_system.appointments, i);
                if (appointment.hospital_address == hospital_address) {
                    vector::push_back(&mut appointments, *appointment);
                };
            };
            i = i + 1;
        };
        appointments
    }

    public fun get_patient_records(patient_address: address): (vector<MedicalRecord>, vector<VaccineRecord>) acquires HealthSystem {
        let health_system = borrow_global<HealthSystem>(@module_addr);
        let medical_records = vector::empty<MedicalRecord>();
        let vaccine_records = vector::empty<VaccineRecord>();

        let i = 0;
        while (i < health_system.record_counter) {
            if (table::contains(&health_system.medical_records, i)) {
                let record = table::borrow(&health_system.medical_records, i);
                if (record.patient_address == patient_address) {
                    vector::push_back(&mut medical_records, *record);
                };
            };
            i = i + 1;
        };

        let i = 0;
        while (i < health_system.vaccine_counter) {
            if (table::contains(&health_system.vaccine_records, i)) {
                let record = table::borrow(&health_system.vaccine_records, i);
                if (record.patient_address == patient_address) {
                    vector::push_back(&mut vaccine_records, *record);
                };
            };
            i = i + 1;
        };

        (medical_records, vaccine_records)
    }
}