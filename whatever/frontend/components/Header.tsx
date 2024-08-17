import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-black text-white shadow-md py-4 border border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <h1 className="text-xl font-bold">Healthcare for Everyone</h1>

        <nav className="flex gap-4 items-center flex-wrap">
          <a href="/card" className="text-white hover:text-gray-300">Portal</a>
          <a href="/home" className="text-white hover:text-gray-300">Home</a>
          <a href="/profile" className="text-white hover:text-gray-300">Profile</a>
          <a href="/records" className="text-white hover:text-gray-300">Records</a>
          <WalletSelector />
        </nav>
      </div>
    </div>
  );
}
