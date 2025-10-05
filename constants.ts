
import type { HiraganaCharacter } from './types';

export const TABLE_HEADERS = [
  { vowel: 'a', label: 'あ段 (a)' },
  { vowel: 'i', label: 'い段 (i)' },
  { vowel: 'u', label: 'う段 (u)' },
  { vowel: 'e', label: 'え段 (e)' },
  { vowel: 'o', label: 'お段 (o)' },
];

export const HIRAGANA_DATA: (HiraganaCharacter | null)[][] = [
  [
    { hiragana: 'あ', romaji: 'a', bangla: 'আ' },
    { hiragana: 'い', romaji: 'i', bangla: 'ই' },
    { hiragana: 'う', romaji: 'u', bangla: 'উ' },
    { hiragana: 'え', romaji: 'e', bangla: 'এ' },
    { hiragana: 'お', romaji: 'o', bangla: 'ও' },
  ],
  [
    { hiragana: 'か', romaji: 'ka', bangla: 'কা' },
    { hiragana: 'き', romaji: 'ki', bangla: 'কি' },
    { hiragana: 'く', romaji: 'ku', bangla: 'কু' },
    { hiragana: 'け', romaji: 'ke', bangla: 'কে' },
    { hiragana: 'こ', romaji: 'ko', bangla: 'কো' },
  ],
  [
    { hiragana: 'さ', romaji: 'sa', bangla: 'সা' },
    { hiragana: 'し', romaji: 'shi', bangla: 'শি' },
    { hiragana: 'す', romaji: 'su', bangla: 'সু' },
    { hiragana: 'せ', romaji: 'se', bangla: 'সে' },
    { hiragana: 'そ', romaji: 'so', bangla: 'সো' },
  ],
  [
    { hiragana: 'た', romaji: 'ta', bangla: 'তা' },
    { hiragana: 'ち', romaji: 'chi', bangla: 'চি' },
    { hiragana: 'つ', romaji: 'tsu', bangla: 'ৎসু' },
    { hiragana: 'て', romaji: 'te', bangla: 'তে' },
    { hiragana: 'と', romaji: 'to', bangla: 'তো' },
  ],
  [
    { hiragana: 'な', romaji: 'na', bangla: 'না' },
    { hiragana: 'に', romaji: 'ni', bangla: 'নি' },
    { hiragana: 'ぬ', romaji: 'nu', bangla: 'নু' },
    { hiragana: 'ね', romaji: 'ne', bangla: 'নে' },
    { hiragana: 'の', romaji: 'no', bangla: 'নো' },
  ],
  [
    { hiragana: 'は', romaji: 'ha', bangla: 'হা' },
    { hiragana: 'ひ', romaji: 'hi', bangla: 'হি' },
    { hiragana: 'ふ', romaji: 'fu', bangla: 'ফু' },
    { hiragana: 'へ', romaji: 'he', bangla: 'হে' },
    { hiragana: 'ほ', romaji: 'ho', bangla: 'হো' },
  ],
  [
    { hiragana: 'ま', romaji: 'ma', bangla: 'মা' },
    { hiragana: 'み', romaji: 'mi', bangla: 'মি' },
    { hiragana: 'む', romaji: 'mu', bangla: 'মু' },
    { hiragana: 'め', romaji: 'me', bangla: 'মে' },
    { hiragana: 'も', romaji: 'mo', bangla: 'মো' },
  ],
  [
    { hiragana: 'や', romaji: 'ya', bangla: 'ইয়া' },
    null,
    { hiragana: 'ゆ', romaji: 'yu', bangla: 'ইউ' },
    null,
    { hiragana: 'よ', romaji: 'yo', bangla: 'ইয়ো' },
  ],
  [
    { hiragana: 'ら', romaji: 'ra', bangla: 'রা' },
    { hiragana: 'り', romaji: 'ri', bangla: 'রি' },
    { hiragana: 'る', romaji: 'ru', bangla: 'রু' },
    { hiragana: 'れ', romaji: 're', bangla: 'রে' },
    { hiragana: 'ろ', romaji: 'ro', bangla: 'রো' },
  ],
  [
    { hiragana: 'わ', romaji: 'wa', bangla: 'ওয়া' },
    null,
    null,
    null,
    { hiragana: 'を', romaji: 'wo/o', bangla: 'ও' },
  ],
];
