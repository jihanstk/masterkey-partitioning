const Tile = ({ letter, onClick }) => {
  return (
    <div
      className="flex justify-center items-center w-12 h-12 bg-gray-300 border cursor-pointer"
      onClick={() => onClick(letter)}
    >
      {letter}
    </div>
  );
};

export default Tile;
