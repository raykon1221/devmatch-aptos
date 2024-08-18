module module_addr::TransactionModule {
    
    use aptos_framework::coin;
    use std::signer;
    use aptos_framework::aptos_coin::AptosCoin;

    // Struct to hold the contract's state
    struct ContractState has key {
        balance: u64,
    }

    // Initialize the contract with zero balance
    public fun initialize(account: &signer) {
        let contract_state = ContractState { balance: 0 };
        move_to(account, contract_state);
    }

    // Function to transfer Aptos tokens to the smart contract
    public fun transfer_to_contract(account: &signer, amount: u64) acquires ContractState {
        let contract_address = signer::address_of(account);
        let coin = coin::withdraw<AptosCoin>(account, amount);
        coin::deposit<AptosCoin>(contract_address, coin);
        
        // Update the contract's state
        let contract_state = borrow_global_mut<ContractState>(contract_address);
        contract_state.balance = contract_state.balance + amount;
    }

    // Function to get the contract's balance
    public fun get_balance(account: &signer): u64 acquires ContractState {
        let contract_address = signer::address_of(account);
        let contract_state = borrow_global<ContractState>(contract_address);
        contract_state.balance
    }
}