
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#667eea] mb-2 text-shadow-lg">
        {title}
      </h1>
      <p className="text-center text-[#764ba2] text-xl sm:text-2xl mb-8 font-semibold">
        {subtitle}
      </p>
    </header>
  );
};

export default Header;
