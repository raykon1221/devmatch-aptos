import { WalletSelector } from "./WalletSelector";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-black text-white shadow-md py-4 border border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Healthcare for Everyone</h1>

        <nav className="flex gap-4 items-center flex-wrap">
          <Button variant="ghost" onClick={() => window.location.href = "/card"}>
            Portal
          </Button>
          <Button variant="ghost" onClick={() => window.location.href = "/home"}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => window.location.href = "/profile"}>
            Profile
          </Button>
          <Button variant="ghost" onClick={() => window.location.href = "/records"}>
            Records
          </Button>
          <WalletSelector />
        </nav>
      </div>
    </div>
  );
}
