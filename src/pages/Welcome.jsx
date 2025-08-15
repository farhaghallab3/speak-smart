import React from "react";
import PageWrapper from "../components/PageWrapper";
import StepNavigation from "../components/StepNavigation";

export default function Welcome({ onNext }) {
  return (
    <PageWrapper>
      <img src="/src/logo.png" alt="شعار الأكاديمية" className="w-40 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">مرحباً بك في أكاديمية Speak Smart</h1>
      <p className="text-lg opacity-90 mb-6">
        لتعلم اللغات بطريقة ذكية وفعّالة
      </p>
      <StepNavigation onNext={onNext} />
    </PageWrapper>
  );
}
