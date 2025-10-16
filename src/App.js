import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [tip, setTip] = useState("");
  const [ageTip, setAgeTip] = useState("");
  const [boxColor, setBoxColor] = useState("#ffe8f0");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseInt(age);

    if (!h || !w || !a || h <= 0 || w <= 0 || a <= 0) {
      setBmi(null);
      setCategory("Please enter valid inputs.");
      setColor("red");
      setTip("");
      setAgeTip("");
      setBoxColor("#ffe8f0");
      return;
    }

    const bmiValue = w / ((h / 100) ** 2);
    const roundedBmi = bmiValue.toFixed(2);
    setBmi(roundedBmi);

    if (bmiValue < 18.5) {
      setCategory("Underweight 😕");
      setColor("#039be5");
      setTip("Consider a balanced diet with more calories. 🍽️");
      setBoxColor("#e3f2fd"); // soft blue
    } else if (bmiValue < 24.9) {
      setCategory("Normal ✅");
      setColor("#43a047");
      setTip("Great! Keep maintaining your healthy lifestyle.");
      setBoxColor("#e8f5e9"); // soft green
    } else if (bmiValue < 29.9) {
      setCategory("Overweight ⚠️");
      setColor("#fb8c00");
      setTip("Try adding light exercise and watching portions. 🏃‍♀️");
      setBoxColor("#fff3e0"); // soft orange
    } else {
      setCategory("Obese ❌");
      setColor("#e53935");
      setTip("Consult a doctor for proper weight management. 🩺");
      setBoxColor("#ffebee"); // soft red
    }

    if (a < 18) {
      setAgeTip("You're still growing! Focus on nutrition, sleep, and activity. 🥗🛌🏃‍♂️");
    } else if (a <= 30) {
      setAgeTip("Stay active and eat balanced meals to maintain good health. 💪🍎");
    } else if (a <= 50) {
      setAgeTip("Watch your weight, avoid stress, and get regular checkups. 🧘‍♀️🩺");
    } else {
      setAgeTip("Prioritize joint health, light exercise, and medical advice. 👨‍⚕️🦴");
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setBmi(null);
    setCategory("");
    setColor("");
    setTip("");
    setAgeTip("");
    setBoxColor("#ffe8f0");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="e.g. 25"
      />

      <label>Height (cm):</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="e.g. 170"
      />

      <label>Weight (kg):</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="e.g. 65"
      />

      <div className="buttons">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetForm}>Reset</button>
      </div>

      {bmi && (
        <div id="result" style={{ color: color, backgroundColor: boxColor }}>
          <div>
            Your BMI is <strong>{bmi}</strong> ({category})
          </div>
          <div className="health-tip">{tip}</div>
          <div className="age-tip"> <strong>Age Advice:</strong> {ageTip}</div>
        </div>
      )}

      {!bmi && category && (
        <div id="result" style={{ color: "red", backgroundColor: boxColor }}>
          {category}
        </div>
      )}
      
    </div>
  );
}

export default App;
