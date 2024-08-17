import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AcoountInfo";

// Import Menubar component
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from"@/components/ui/menubar";

function App() {
  const { connected } = useWallet();

  return (
    <>
      <Header />
      {/* Menubar Component */}
      <Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem><MenubarItem>Open</MenubarItem><MenubarItem>Save</MenubarItem><MenubarItem>Exit</MenubarItem></MenubarContent></MenubarMenu><MenubarMenu><MenubarTrigger>Edit</MenubarTrigger><MenubarContent><MenubarItem>Undo</MenubarItem><MenubarItem>Redo</MenubarItem></MenubarContent></MenubarMenu>
        {/* Add more MenubarMenu as needed */}
      </Menubar>
      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Card className="bg-gray-800 shadow-lg">
            <CardContent className="flex flex-col gap-10 pt-6">
              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
            </CardContent>
          </Card>
        ) : (
          <CardHeader className="shadow-lg">
            <CardTitle>To get started Connect a wallet</CardTitle>
          </CardHeader>
        )}
        
      </div>
    </>
  );
}

export default App;
