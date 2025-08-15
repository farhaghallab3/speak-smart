import React, { useState } from "react";

const CourseSelection = ({ onNext }) => {
  const [course, setCourse] = useState("");

  return (
          <div className="fullscreen-bg">
    <div style={{
      height: "80vh",
      width: "100%",
      backgroundColor: "#16a085",
      color: "#fff",
      borderRadius: 10,
      padding: 40,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>اختيار الدورة المطلوبة</h2>
        <select 
          value={course}
          onChange={e => setCourse(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            fontSize: 18,
            borderRadius: 6,
            border: "none",
          }}
        >
          <option value="" disabled>اختر نوع الدورة</option>
          <option value="beginners">دورة للمبتدئين</option>
          <option value="intermediate">دورة المستوى المتوسط</option>
          <option value="advanced">دورة المستوى المتقدم</option>
        </select>

        <p style={{ marginTop: 30, fontSize: 18 }}>
          خطوات التسجيل: 
          <br />
          1. اختيار نوع الدورة المناسب. 
          <br />
          2. ملء استمارة التسجيل.
          <br />
          3. الانضمام إلى الدورة.
        </p>
      </div>

      <button 
        onClick={onNext} 
        disabled={!course}
        style={{
          padding: "15px 30px",
          fontSize: 18,
          fontWeight: "bold",
          backgroundColor: course ? "#27ae60" : "#95a5a6",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: course ? "pointer" : "not-allowed",
          alignSelf: "center",
        }}
      >
        متابعـة
      </button>
    </div>
    </div>
  );
};

export default CourseSelection;
