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
import { TableDemo } from "@/components/Location";

function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <Header />
      
      <div className="bg-gradient-to-r from-white-600 to-black text-black shadow-md py-2"></div>
      <div className="min-h-screen bg-gradient-to-r from-white-600 to-black flex flex-col">
        <div className="flex items-center justify-center flex-col mt-12">
          {connected ? (
            <Routes>
              <Route path="/card" element={<CardWithForm />} />
              <Route path="/home" element={<Home />} />
              <Route path="/records" element={<Records />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<CardWithForm />} />
              <Route path="/location" element={<TableDemo />} />
            </Routes>
          ) : (
            <CardWithForm/>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
