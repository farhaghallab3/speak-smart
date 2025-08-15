import React from "react";
import PageWrapper from "../components/PageWrapper";
import StepNavigation from "../components/StepNavigation";

export default function About({ onNext }) {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-4">من نحن؟</h1>
      <p className="text-lg opacity-90 leading-relaxed mb-6">
        نحن أكاديمية متخصصة في تعليم اللغات بأحدث الأساليب التقنية والتفاعلية،
        مع دعم مستمر وتدريب فردي.
      </p>
      <StepNavigation onNext={onNext} />
    </PageWrapper>
  );
}
