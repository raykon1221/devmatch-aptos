module module_addr::TransactionModuleTest {
    use aptos_framework::coin::{balance, mint};
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::account;
    use module_addr::TransactionModule;
    use std::signer;

    fun setup_accounts(account: &signer) {
        // Mint some coins to the sender
        mint<AptosCoin>(account, 1000);
    }

    #[test]
    fun test_initialize(account: &signer) {
        setup_accounts(account);

        // Initialize the contract
        TransactionModule::initialize(account);

        // Get the balance of the contract
        let balance = TransactionModule::get_balance(account);

        // Assert that the balance is zero after initialization
        assert!(balance == 0, 100);
    }

    #[test]
    fun test_transfer_to_contract(account: &signer) {
        setup_accounts(account);

        let amount = 100;

        // Initialize the contract
        TransactionModule::initialize(account);

        // Get the initial balance of the contract
        let initial_balance = TransactionModule::get_balance(account);

        // Transfer tokens to the contract
        TransactionModule::transfer_to_contract(account, amount);

        // Get the final balance of the contract
        let final_balance = TransactionModule::get_balance(account);

        // Assert that the contract's balance has increased by the amount
        assert!(final_balance == initial_balance + amount, 101);

        // Assert that the sender's balance has decreased by the amount
        let sender_balance = balance<AptosCoin>(signer::address_of(account));
        assert!(sender_balance == 1000 - amount, 102);
    }

    #[test]
    fun test_get_balance(account: &signer) {
        setup_accounts(account);

        let amount = 100;

        // Initialize the contract
        TransactionModule::initialize(account);

        // Transfer tokens to the contract
        TransactionModule::transfer_to_contract(account, amount);

        // Get the balance of the contract
        let balance = TransactionModule::get_balance(account);

        // Assert that the balance is equal to the transferred amount
        assert!(balance == amount, 103);
    }
}