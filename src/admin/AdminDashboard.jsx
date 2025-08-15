import React, { useState } from "react";

export default function AdminDashboard({ onLogout }) {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students") || "[]")
  );

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["الاسم,البريد,الجوال,الحالة", ...students.map(s => `${s.name},${s.email},${s.phone},${s.status}`)].join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "students.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">لوحة تحكم الأكاديمية</h1>
        <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded">
          خروج
        </button>
      </div>
      <button onClick={exportCSV} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
        تصدير CSV
      </button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">الاسم</th>
            <th className="border p-2">البريد</th>
            <th className="border p-2">الجوال</th>
            <th className="border p-2">الحالة</th>
            <th className="border p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.phone}</td>
              <td className="border p-2">{s.status}</td>
              <td className="border p-2">
                <button onClick={() => deleteStudent(i)} className="bg-red-500 text-white px-2 py-1 rounded">
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
