// Test component placeholder
const TestComponent = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl border border-blue-200/50">
      <p className="text-2xl font-black mb-2">Modern Design System Active!</p>
      <p className="font-medium leading-relaxed">Inter font, sophisticated colors, and enhanced animations are now working. The new design follows SOLID principles with healthcare-focused styling.</p>
      <div className="mt-4 flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold">Tailwind CSS v4 + Design System</span>
      </div>
    </div>
  );
};

export default TestComponent;