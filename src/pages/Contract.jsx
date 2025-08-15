import React, { useState } from "react";
import StepNavigation from "../components/StepNavigation";

export default function Contract({ onNext }) {
  const [agree, setAgree] = useState(false);

  return (
        <div className="fullscreen-bg">
      <h2 className="text-2xl font-bold mb-4">العقد الإلكتروني</h2>
      <div className="border p-4 h-40 overflow-y-scroll mb-4 text-sm bg-gray-50 text-right">
        <p>
          هذا العقد يوضح شروط وأحكام الاشتراك في أكاديمية Speak Smart. يجب الالتزام بمواعيد الحصص
          وعدم مشاركة المحتوى مع الغير.
        </p>
      </div>
      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        أوافق على الشروط والأحكام
      </label>
      <StepNavigation onNext={agree ? onNext : null} label="أوافق وأكمل التسجيل" />
    </div>
  );
}
