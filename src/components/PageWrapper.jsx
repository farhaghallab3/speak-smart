import React from "react";
import { colors } from "../styles/theme";

export default function PageWrapper({ children }) {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center p-6 text-center"
      style={{
        background: colors.primaryGradient,
        color: colors.textLight,
      }}
    >
      <div className="animate-slideUp fadeIn w-full max-w-4xl">{children}</div>
    </div>
  );
}
