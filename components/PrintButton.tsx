
import React from 'react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="print:hidden block mx-auto my-8 px-10 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full text-lg font-bold cursor-pointer shadow-md hover:translate-y-[-3px] hover:shadow-xl transition-all duration-300"
    >
      🖨️ Print / PDF সেভ করুন
    </button>
  );
};

export default PrintButton;
