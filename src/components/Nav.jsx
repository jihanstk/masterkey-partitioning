import Link from "next/link";

const Nav = () => {
  return (
    <div className="!w-full  z-20 flex justify-between items-center px-5 mb-8 shadow-sm py-5 border">
      <div className="">
        <h1 className="text-2xl font-bold">partitioning & Alphabets</h1>
      </div>
      <div className=" ">
        <Link className="hover:text-green-500 duration-300 " href="/alphabets">
          Alphabets
        </Link>
      </div>
    </div>
  );
};

export default Nav;
