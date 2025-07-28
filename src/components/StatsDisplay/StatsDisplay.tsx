import React from 'react';
import { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true
}) => {
  const formatReadingTime = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-4 text-gray-800">
      <div className="flex justify-between mb-2">
        <span>Characters</span>
        <span>{stats.characterCount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Words</span>
        <span>{stats.wordCount}</span>
      </div>
      {showReadingTime && (
        <div className="flex justify-between">
          <span>Reading Time</span>
          <span>{formatReadingTime(stats.readingTime)}</span>
        </div>
      )}
    </div>
  );
};