export default function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="relative">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-600 transition-all duration-500"
        />
      </div>
      <div className="flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`text-sm ${
              index + 1 <= currentStep ? "text-green-500" : "text-gray-400"
            }`}
          >
            Step {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
