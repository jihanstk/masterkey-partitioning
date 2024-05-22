import { useState } from "react";
import "react-resizable/css/styles.css";

const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const Partition = ({ id, initialDirection, onRemove }) => {
  const [partitions, setPartitions] = useState([]);
  const [color] = useState(getRandomColor());

  const handleSplit = (direction) => {
    const newId1 = partitions.length
      ? Math.max(...partitions.map((p) => p.id)) + 1
      : id * 2;
    const newId2 = newId1 + 1;
    const newPartition1 = {
      id: newId1,
      direction: direction,
      color: getRandomColor(),
    };
    const newPartition2 = {
      id: newId2,
      direction: direction,
      color: getRandomColor(),
    };

    setPartitions([newPartition1, newPartition2]);
  };

  const handleRemove = (id) => {
    setPartitions(partitions.filter((p) => p.id !== id));
    console.log(partitions);
  };
  console.log(partitions);
  return (
    <div
      className="flex-1 m-1"
      style={{
        position: "relative",
        backgroundColor: color,
        border: "1px solid black",
      }}
    >
      {partitions.length === 0 ? (
        <div className="flex justify-center items-center flex-1 h-full">
          <button
            className="m-2 p-2 bg-blue-500 text-white"
            onClick={() => handleSplit("V")}
          >
            V
          </button>
          <button
            className="m-2 p-2 bg-green-500 text-white"
            onClick={() => handleSplit("H")}
          >
            H
          </button>
          <button
            className="m-2 p-2 bg-red-500 text-white"
            onClick={() => handleRemove(id)}
          >
            -
          </button>
        </div>
      ) : (
        <div
          className={`flex ${
            partitions[0].direction === "V" ? "flex-col" : "flex-row"
          } w-full h-full`}
        >
          {partitions.map((p) => (
            <Partition
              key={p.id}
              id={p.id}
              initialDirection={p.direction}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Partition;
