import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Admission from "./pages/Admission";
import PlacementTest from "./pages/PlacementTest";
import Pricing from "./pages/Pricing";
import Outcomes from "./pages/Outcomes";
import Requirements from "./pages/Requirements";
import Contract from "./pages/Contract";
import RegistrationForm from "./pages/RegistrationForm";
import Confirmation from "./pages/Confirmation";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

export default function App() {
  const [step, setStep] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const pages = [
    <Welcome onNext={() => setStep(step + 1)} />,
    <About onNext={() => setStep(step + 1)} />,
    <Admission onNext={() => setStep(step + 1)} />,
    <PlacementTest onNext={() => setStep(step + 1)} />,
    <Pricing onNext={() => setStep(step + 1)} />,
    <Outcomes onNext={() => setStep(step + 1)} />,
    <Requirements onNext={() => setStep(step + 1)} />,
    <Contract onNext={() => setStep(step + 1)} />,
    <RegistrationForm onNext={() => setStep(step + 1)} />,
    <Confirmation />,
  ];

  // لو المستخدم دخل /#/admin => تفعيل وضع لوحة التحكم
  React.useEffect(() => {
    if (window.location.hash.startsWith("#/admin")) {
      setIsAdmin(true);
    }
  }, []);

  if (isAdmin) {
    return loggedIn ? (
      <AdminDashboard onLogout={() => setLoggedIn(false)} />
    ) : (
      <AdminLogin onLogin={() => setLoggedIn(true)} />
    );
  }

  return (
    <div dir="rtl" className="w-full h-screen bg-gray-50 flex items-center justify-center">
      {pages[step]}
    </div>
  );
}
