"use client"
import Partition from "@/components/Partition";
import { useState } from "react";
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
export default function Home() {
  const [partitions, setPartitions] = useState([{ id: 1, direction: 'H' }]);
  console.log(partitions);
  const handleRemove = (id) => {
    setPartitions(partitions.filter(p => p.id !== id));
  };

  return (
    <div className="relative w-full h-screen border-2 border-black flex">
      {partitions.map(partition => (
        <Partition
          key={partition.id}
          id={partition.id}
          initialDirection={partition.direction}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};


