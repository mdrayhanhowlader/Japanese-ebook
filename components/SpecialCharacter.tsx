
import React from 'react';

const SpecialCharacter: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
      <strong className="text-orange-600 text-lg">বিশেষ অক্ষর:</strong>
      <div className="flex items-center gap-4">
        <span className="font-['Noto_Sans_JP'] font-bold text-4xl text-[#667eea]">ん</span>
        <span className="text-lg text-gray-700 font-semibold">n</span>
        <span className="text-xl text-[#764ba2] font-semibold">ন/ম (শব্দের শেষে অনুসারে)</span>
      </div>
    </div>
  );
};

export default SpecialCharacter;
