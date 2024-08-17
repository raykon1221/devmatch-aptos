import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black text-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <h1 className="display">DevMatch</h1>

        <div className="flex gap-2 items-center flex-wrap">
          <WalletSelector />
        </div>
      </div>
    </div>
  );
}
