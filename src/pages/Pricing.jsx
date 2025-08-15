// import { colors } from "../styles/theme";
import PageWrapper from "../components/PageWrapper";
import StepNavigation from "../components/StepNavigation";

export default function Pricing({ onNext }) {
  const plans = [
    { name: "الباقة الأساسية", price: "150 ريال", duration: "شهر واحد", features: ["دروس مباشرة", "دعم عبر الواتساب"] },
    { name: "الباقة المميزة", price: "300 ريال", duration: "3 شهور", features: ["دروس مباشرة", "متابعة شخصية"] },
    { name: "الباقة الذهبية", price: "500 ريال", duration: "6 شهور", features: ["دروس مباشرة", "مدرب خاص"] }
  ];

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">خطط الاشتراك</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {plans.map((plan, i) => (
          <div key={i} className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">{plan.name}</h2>
            <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
            <p className="text-gray-500 mb-4">المدة: {plan.duration}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((f, j) => (
                <li key={j}>✅ {f}</li>
              ))}
            </ul>
            <StepNavigation onNext={onNext} label="اشترك الآن" />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
