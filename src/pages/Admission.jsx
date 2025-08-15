import React from "react";
import StepNavigation from "../components/StepNavigation";

export default function Admission({ onNext }) {
  return (
          <div className="fullscreen-bg">
      <h2 className="text-2xl font-bold mb-4">آلية القبول</h2>
      <p className="mb-4">يرجى اختيار نوع الدورة المطلوبة قبل بدء التسجيل.</p>
      <p className="mb-6">
        خطوات التسجيل: اختر الدورة المناسبة – أجرِ اختبار تحديد المستوى – اختر الباقة – وافق على العقد – أرسل طلب التسجيل.
      </p>
      <StepNavigation onNext={onNext} />
    </div>
  );
}
