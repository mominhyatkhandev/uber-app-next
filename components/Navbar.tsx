import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-yellow-500 shadow-md">
      <div className="font-bold text-lg">
        <Image src={'/uber-logo.png'} alt="uber" width={50} height={50}/>
      </div>
      <div className="hidden md:flex items-center justify-center gap-6">
        <h2 className="hover:bg-yellow-400 p-2 rounded-md">Home</h2>
        <h2 className="hover:bg-yellow-400 p-2 rounded-md">History</h2>
        <h2 className="hover:bg-yellow-400 p-2 rounded-md">About</h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
