import React from "react";
import StepNavigation from "../components/StepNavigation";

export default function PlacementTest({ onNext }) {
  return (
        <div className="fullscreen-bg">
      <h2 className="text-2xl font-bold mb-4">اختبار تحديد المستوى</h2>
      <p className="mb-6">
        الاختبار يتكون من عدة أقسام لتحديد مستواك الحالي بدقة، يشمل قواعد اللغة والمحادثة والاستماع.
      </p>
      <StepNavigation onNext={onNext} />
    </div>
  );
}
