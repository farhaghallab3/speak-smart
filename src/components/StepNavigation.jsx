import React from "react";
import { colors } from "../styles/theme";

export default function StepNavigation({ onNext, label = "متابعة" }) {
  return (
    <button
      className="mt-6 px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-transform transform hover:scale-105"
      style={{
        background: colors.textLight,
        color: colors.primary,
      }}
      onClick={onNext}
    >
      {label}
      
    </button>
  );
}
