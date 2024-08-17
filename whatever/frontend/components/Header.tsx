import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black text-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <h1 className="display">Healthcare for Everyone</h1>

        <nav className="flex gap-4 items-center flex-wrap">
          <a href="/card" className="text-white-700 hover:text-white-900">Portal</a>
          <a href="/home" className="text-white-700 hover:text-white-900">Home</a>
          <a href="/profile" className="text-white-700 hover:text-white-900">Profile</a>
          <a href="/records" className="text-white-700 hover:text-white-900">Records</a>
          <WalletSelector />
        </nav>
      </div> 
    </div>
  );
}
