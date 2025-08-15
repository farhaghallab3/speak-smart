import React, { useState } from "react";
import StepNavigation from "../components/StepNavigation";

export default function RegistrationForm({ onNext }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    education: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/YOUR_EMAIL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    // تخزين محلي للإدارة
    const existing = JSON.parse(localStorage.getItem("students") || "[]");
    localStorage.setItem("students", JSON.stringify([...existing, { ...form, status: "نشط" }]));
    onNext();
  };

  return (
          <div className="fullscreen-bg">
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-full text-center p-4 w-full max-w-md">
      <input name="name" placeholder="الاسم" value={form.name} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
      <input name="age" placeholder="العمر" value={form.age} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
      <input name="email" placeholder="البريد الإلكتروني" value={form.email} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
      <input name="phone" placeholder="الجوال" value={form.phone} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
      <input name="education" placeholder="المستوى التعليمي" value={form.education} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
      <button className="bg-teal-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:bg-teal-700 transition-all duration-300 text-lg font-semibold">إرسال</button>
    </form>
    </div>  
  );
}
