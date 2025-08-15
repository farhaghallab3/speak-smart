import React, { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "speaksmart123") {
      onLogin();
    } else {
      alert("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">تسجيل دخول الإدارة</h2>
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full mb-3 rounded"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          دخول
        </button>
      </form>
    </div>
  );
}
