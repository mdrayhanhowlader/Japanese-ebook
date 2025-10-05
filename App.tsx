
import React from 'react';
import Header from './components/Header';
import HiraganaTable from './components/HiraganaTable';
import SpecialCharacter from './components/SpecialCharacter';
import PrintButton from './components/PrintButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-2 sm:p-5 md:p-10">
      <div className="container max-w-7xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl">
        <Header 
          title="🇯🇵 JLPT N5 Hiragana Chart 🇯🇵"
          subtitle="হিরাগানা চার্ট (あ – ん)"
        />
        <main>
          <HiraganaTable />
          <SpecialCharacter />
          <PrintButton />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
