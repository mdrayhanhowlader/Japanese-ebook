
import React from 'react';
import { HIRAGANA_DATA, TABLE_HEADERS } from '../constants';
import type { HiraganaCharacter } from '../types';

const CharacterCell: React.FC<{ character: HiraganaCharacter | null }> = ({ character }) => {
  if (!character) {
    return <td className="border-2 border-gray-200 bg-gray-100"></td>;
  }
  
  return (
    <td className="border-2 border-gray-200 p-2 sm:p-4 text-center bg-white transition-all duration-300 ease-in-out hover:bg-indigo-50 hover:scale-105 hover:shadow-lg cursor-pointer">
      <span className="block font-['Noto_Sans_JP'] font-bold text-4xl sm:text-5xl text-[#667eea] mb-1">
        {character.hiragana}
      </span>
      <span className="block text-sm sm:text-base text-gray-600 font-semibold mb-1">
        {character.romaji}
      </span>
      <span className="block text-lg sm:text-xl text-[#764ba2] font-semibold">
        {character.bangla}
      </span>
    </td>
  );
};

const HiraganaTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse shadow-lg my-5">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header.vowel} className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 text-lg font-bold border-2 border-[#5568d3]">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HIRAGANA_DATA.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((char, charIndex) => (
                <CharacterCell key={charIndex} character={char} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HiraganaTable;
