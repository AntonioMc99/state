import React, { useState } from 'react';
import { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 200,
  targetReadingTime = 2
}) => {
  const [text, setText] = useState<string>('');
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0
  });

  const handleTextChange = (input: string) => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    const characters = input.length;
    const wordCount = words.length;
    const readingTime = wordCount / 200; // Average 200 wpm

    setText(input);
    setStats({
      characterCount: characters,
      wordCount,
      readingTime
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} />
      <div className="mt-2 text-xs text-gray-500">
        Min: {minWords} | Max: {maxWords}
      </div>
    </div>
  );
};