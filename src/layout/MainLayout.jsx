import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import EmergencyBanner from "../components/EmergencyBanner";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden">

      {/* Top Bar */}
      <TopBar />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      <EmergencyBanner />
    </div>
  );
}