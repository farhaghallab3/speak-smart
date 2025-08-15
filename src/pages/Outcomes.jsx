import React from "react";
import StepNavigation from "../components/StepNavigation";

export default function Outcomes({ onNext }) {
  const outcomes = [
    "تحسين مهارات المحادثة",
    "إتقان القواعد الأساسية",
    "زيادة الحصيلة اللغوية",
    "تحسين مهارات الاستماع",
    "الثقة في التحدث باللغة"
  ];

  return (
          <div className="fullscreen-bg">
      <h2 className="text-2xl font-bold mb-4">النتائج المتوقعة</h2>
      <ul className="mb-6 list-disc list-inside">
        {outcomes.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
      <StepNavigation onNext={onNext} />
    </div>
  );
}
