import React from "react";
import StepNavigation from "../components/StepNavigation";

export default function Requirements({ onNext }) {
  return (
          <div className="fullscreen-bg">
      <h2 className="text-2xl font-bold mb-4">الشروط والمتطلبات</h2>
      <p className="mb-6">
        يجب على الطالب تجهيز جهاز كمبيوتر أو هاتف ذكي واتصال إنترنت جيد، بالإضافة إلى التفرغ لمواعيد الحصص.
      </p>
      <StepNavigation onNext={onNext} />
    </div>
  );
}
