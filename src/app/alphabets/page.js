"use client"
import Tile from '@/components/Tile';
import { useState } from 'react';


const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const Page = () => {
    const [outputString, setOutputString] = useState('');

    const handleTileClick = letter => {
      let newOutputString = outputString + letter;
      newOutputString = newOutputString.replace(/(.)\1{2,}/g, match => '_'.repeat(match.length / 3));
      setOutputString(newOutputString);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="grid grid-cols-6 gap-2 mb-4">
          {alphabet.map(letter => (
            <Tile key={letter} letter={letter} onClick={handleTileClick} />
          ))}
        </div>
        <div id="outputString" className="text-xl border shadow-sm p-4 w-3/4 text-center">
          {outputString}
        </div>
      </div>
    );;
};

export default Page;