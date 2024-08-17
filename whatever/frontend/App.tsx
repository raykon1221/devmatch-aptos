import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Internal Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AcoountInfo";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";

// Pages
import { Home } from "./components/Home";
import { Records } from "./components/Records";
import { Profile } from "./components/Profile";
import { CardWithForm } from "./components/Card";

function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <Header />
      
      {/* Menubar Component */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarItem>Save</MenubarItem>
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* Add more MenubarMenu as needed */}
      </Menubar>

      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/records" element={<Records />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <CardWithForm/>
        )}
      </div>
    </Router>
  );
}

export default App;
