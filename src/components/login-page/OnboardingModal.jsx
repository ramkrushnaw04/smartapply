import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonalDetailsStep from "./onboarding/PersonalDetailsStep";
import EducationalDetailsStep from "./onboarding/EducationalDetailsStep";
import TechnicalSkillsStep from "./onboarding/TechnicalSkillsStep";
import CompletionStep from "./onboarding/CompletionStep";

export default function OnboardingModal({
  showOnboarding,
  setShowOnboarding,
  onboardingStep,
  onboardingData,
  setOnboardingData,
  techOptions,
  frameworkOptions,
  toggleTech,
  toggleFramework,
  nextOnboardingStep,
  prevOnboardingStep,
}) {
  const totalSteps = 4;
  const stepTitles = ["Personal Details", "Educational Background", "Technical Skills", "Completion"];

  return (
    <AnimatePresence>
      {showOnboarding && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-gray-50 overflow-y-auto"
        >
          <div className="min-h-screen flex flex-col">
            {/* Content Section */}
            <div className="flex-1 flex items-center justify-center py-12 px-4">
              <div className="w-full max-w-xl">
                {/* Progress Dots - Inside page */}
                <div className="mb-8">
                  <div className="flex items-center justify-center">
                    {[...Array(totalSteps)].map((_, index) => (
                      <React.Fragment key={index}>
                        {/* Dot */}
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{
                            scale: index === onboardingStep ? 1.2 : 1,
                          }}
                          className="relative flex items-center justify-center cursor-pointer"
                          onClick={() => {
                            if (index < onboardingStep) {
                              const diff = onboardingStep - index;
                              for (let i = 0; i < diff; i++) {
                                prevOnboardingStep();
                              }
                            }
                          }}
                        >
                          <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                              index <= onboardingStep
                                ? "bg-gray-900 border-gray-900"
                                : "bg-white border-gray-300"
                            }`}
                          />
                          {index < onboardingStep && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Line between dots */}
                        {index < totalSteps - 1 && (
                          <div
                            className={`h-0.5 w-16 sm:w-24 md:w-32 transition-all duration-300 ${
                              index < onboardingStep ? "bg-gray-900" : "bg-gray-300"
                            }`}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={onboardingStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
                      {onboardingStep === 0 && (
                        <PersonalDetailsStep
                          onboardingData={onboardingData}
                          setOnboardingData={setOnboardingData}
                        />
                      )}

                      {onboardingStep === 1 && (
                        <EducationalDetailsStep
                          onboardingData={onboardingData}
                          setOnboardingData={setOnboardingData}
                        />
                      )}

                      {onboardingStep === 2 && (
                        <TechnicalSkillsStep
                          onboardingData={onboardingData}
                          setOnboardingData={setOnboardingData}
                          techOptions={techOptions}
                          frameworkOptions={frameworkOptions}
                          toggleTech={toggleTech}
                          toggleFramework={toggleFramework}
                        />
                      )}

                      {onboardingStep === 3 && (
                        <CompletionStep
                          onboardingData={onboardingData}
                          nextOnboardingStep={nextOnboardingStep}
                        />
                      )}
                    </div>

                    {/* Navigation Buttons - Under Section */}
                    {onboardingStep < 3 && (
                      <div className="mt-6 px-4">
                        <div className="flex items-center justify-between">
                          {/* Back Button with Arrow */}
                          <button
                            onClick={prevOnboardingStep}
                            disabled={onboardingStep === 0}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-200 bg-white text-gray-700 font-semibold text-sm shadow-sm transition hover:border-gray-900 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <ChevronLeft className="w-5 h-5" />
                            Back
                          </button>

                          {/* Step Counter in the middle */}
                          <div className="text-center">
                            <span className="text-sm font-semibold text-gray-900">
                              Step {onboardingStep + 1} of {totalSteps}: {stepTitles[onboardingStep]}
                            </span>
                          </div>

                          {/* Next Button */}
                          <button
                            onClick={nextOnboardingStep}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-900 text-white font-semibold text-sm shadow-lg transition hover:bg-gray-800 hover:shadow-xl"
                          >
                            Next
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}