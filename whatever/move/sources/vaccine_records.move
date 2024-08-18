module todolist_addr::vaccine_records {

use aptos_framework::event;
use std::string::String;
use std::signer;
use aptos_std::table::{Self, Table};
use aptos_framework::account;

const E_NOT_INITIALIZED: u64 = 1;
const E_VACCINE_ALREADY_VERIFIED: u64 = 2;
const E_VACCINE_NOT_FOUND: u64 = 3;

struct VaccineRegistry has key {
    records: Table<u64, VaccineRecord>,
    add_vaccine_event: event::EventHandle<VaccineRecord>,
    vaccine_counter: u64
}

struct VaccineRecord has store, drop, copy {
    vaccine_id: u64,
    patient_address: address,
    vaccine_type: String,
    date_administered: String,
    administered: bool,
    verified: bool
}

public entry fun create_registry(account: &signer) {
    let registry = VaccineRegistry {
        records: table::new(),
        add_vaccine_event: account::new_event_handle<VaccineRecord>(account),
        vaccine_counter: 0
    };
    move_to(account, registry);
}

public entry fun add_vaccine(account: &signer, vaccine_type: String, date_administered: String) acquires VaccineRegistry {
    let addr = signer::address_of(account);
    assert!(exists<VaccineRegistry>(addr), E_NOT_INITIALIZED);
    let registry = borrow_global_mut<VaccineRegistry>(addr);
    let counter = registry.vaccine_counter + 1;
    let new_record = VaccineRecord {
        vaccine_id: counter,
        patient_address: addr,
        vaccine_type,
        date_administered,
        administered: false,
        verified: false
    };
    table::upsert(&mut registry.records, counter, new_record);
    registry.vaccine_counter = counter;
    event::emit_event<VaccineRecord>(
        &mut borrow_global_mut<VaccineRegistry>(addr).add_vaccine_event,
        new_record
    );
}

public entry fun update_vaccine_status(account: &signer, vaccine_id: u64) acquires VaccineRegistry {
    let addr = signer::address_of(account);
    assert!(exists<VaccineRegistry>(addr), E_NOT_INITIALIZED);
    let registry = borrow_global_mut<VaccineRegistry>(addr);
    let record = table::borrow_mut(&mut registry.records, vaccine_id);
    assert!(!record.administered, E_VACCINE_ALREADY_VERIFIED);
    record.administered = true;
}

public entry fun verify_vaccine(account: &signer, vaccine_id: u64) acquires VaccineRegistry {
    let addr = signer::address_of(account);
    assert!(exists<VaccineRegistry>(addr), E_NOT_INITIALIZED);
    let registry = borrow_global_mut<VaccineRegistry>(addr);
    let record = table::borrow_mut(&mut registry.records, vaccine_id);
    assert!(!record.verified, E_VACCINE_ALREADY_VERIFIED);
    record.verified = true;
}
















#[test(admin = @0x123)]
public entry fun test_vaccine_flow(admin: signer) acquires VaccineRegistry {
    use std::string;

    // Create a registry
    create_registry(&admin);

    // Add a new vaccine record
    add_vaccine(&admin, string::utf8(b"COVID-19 Vaccine"), string::utf8(b"2024-08-17"));
    let event_count = event::counter(&borrow_global<VaccineRegistry>(signer::address_of(&admin)).add_vaccine_event);
    assert!(event_count == 1, 4);

    // Check the vaccine record details
    let registry = borrow_global<VaccineRegistry>(signer::address_of(&admin));
    assert!(registry.vaccine_counter == 1, 5);
    let vaccine_record = table::borrow(&registry.records, registry.vaccine_counter);
    assert!(vaccine_record.vaccine_id == 1, 6);
    assert!(vaccine_record.administered == false, 7);
    assert!(vaccine_record.verified == false, 8);
    assert!(vaccine_record.vaccine_type == string::utf8(b"COVID-19 Vaccine"), 9);
    assert!(vaccine_record.date_administered == string::utf8(b"2024-08-17"), 10);
    assert!(vaccine_record.patient_address == signer::address_of(&admin), 11);

    // Update the vaccine status to administered
    update_vaccine_status(&admin, 1);
    let registry = borrow_global<VaccineRegistry>(signer::address_of(&admin));
    let vaccine_record = table::borrow(&registry.records, 1);
    assert!(vaccine_record.administered == true, 12);

    // Verify the vaccine record
    verify_vaccine(&admin, 1);
    let registry = borrow_global<VaccineRegistry>(signer::address_of(&admin));
    let vaccine_record = table::borrow(&registry.records, 1);
    assert!(vaccine_record.verified == true, 13);
}

#[test(admin = @0x123)]
#[expected_failure(abort_code = E_NOT_INITIALIZED)]
public entry fun cannot_update_without_registry(admin: signer) acquires VaccineRegistry {
    use std::string;
    
    // Try to update a vaccine record without creating a registry
    update_vaccine_status(&admin, 1);
}

#[test(admin = @0x123)]
#[expected_failure(abort_code = E_VACCINE_ALREADY_VERIFIED)]
public entry fun cannot_verify_already_verified_vaccine(admin: signer) acquires VaccineRegistry {
    use std::string;

    // Create a registry and add a vaccine
    create_registry(&admin);
    add_vaccine(&admin, string::utf8(b"COVID-19 Vaccine"), string::utf8(b"2024-08-17"));
    
    // Verify the vaccine record
    verify_vaccine(&admin, 1);

    // Attempt to verify the vaccine record again
    verify_vaccine(&admin, 1);
}

}
