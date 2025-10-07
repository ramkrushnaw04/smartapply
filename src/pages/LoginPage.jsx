import React, { useState } from "react";
import LoginNavbar from "../components/login-page/LoginNavbar";
import LoginForm from "../components/login-page/LoginForm";
import OnboardingModal from "../components/login-page/OnboardingModal";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(null);

  // Onboarding state
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);

  // Onboarding form data
  const [onboardingData, setOnboardingData] = useState({
    // Step 1: Personal Details
    fullName: "",
    phone: "",
    address: "",
    photo: null,
    // Step 2: Educational Details
    degree: "",
    institution: "",
    graduationYear: "",
    fieldOfStudy: "",
    // Step 3: Technical Details
    technologies: [],
    frameworks: [],
    experience: "",
  });

  const techOptions = ["JavaScript", "Python", "Java", "C++", "React", "Node.js", "Go", "TypeScript"];
  const frameworkOptions = ["React", "Angular", "Vue", "Django", "Flask", "Spring", "Express", "Next.js"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
      } else if (password.length < 6) {
        setError("Password must be at least 6 characters.");
      } else if (isSignUp && !username) {
        setError("Please enter a username.");
      } else {
        if (isSignUp) {
          setShowOnboarding(true);
          setOnboardingStep(0);
        } else {
          alert("Login successful! (Simulated)");
        }
      }
    }, 900);
  };

  const nextOnboardingStep = () => {
    if (onboardingStep < 3) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      // Finish onboarding
      setShowOnboarding(false);
      alert("Onboarding complete! Redirecting to dashboard...");
    }
  };

  const prevOnboardingStep = () => {
    if (onboardingStep > 0) {
      setOnboardingStep(onboardingStep - 1);
    }
  };

  const toggleTech = (tech) => {
    setOnboardingData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  const toggleFramework = (framework) => {
    setOnboardingData((prev) => ({
      ...prev,
      frameworks: prev.frameworks.includes(framework)
        ? prev.frameworks.filter((f) => f !== framework)
        : [...prev.frameworks, framework],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {!showOnboarding && <LoginNavbar isSignUp={isSignUp} setIsSignUp={setIsSignUp} />}

      {!showOnboarding && (
        <div className="flex items-center justify-center py-20 px-4">
          <LoginForm
            isSignUp={isSignUp}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            loading={loading}
            error={error}
            focused={focused}
            setFocused={setFocused}
            handleSubmit={handleSubmit}
          />
        </div>
      )}

      <OnboardingModal
        showOnboarding={showOnboarding}
        setShowOnboarding={setShowOnboarding}
        onboardingStep={onboardingStep}
        onboardingData={onboardingData}
        setOnboardingData={setOnboardingData}
        techOptions={techOptions}
        frameworkOptions={frameworkOptions}
        toggleTech={toggleTech}
        toggleFramework={toggleFramework}
        nextOnboardingStep={nextOnboardingStep}
        prevOnboardingStep={prevOnboardingStep}
      />
    </div>
  );
}