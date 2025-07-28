export React from 'react';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

const App = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Character Counter</h1>
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </main>
  );
};

export default App;