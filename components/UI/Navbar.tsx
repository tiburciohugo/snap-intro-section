import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <Image src={"/assets/logo.svg"} alt="Logo" width={86} height={35} />

      <button
        onClick={handleClick}
        className="transition duration-300 ease-in-out md:hidden"
      >
        {!isClicked ? (
          <Image
            src={"/assets/icon-menu.svg"}
            alt="Menu"
            width={32}
            height={18}
          />
        ) : (
          <Image
            src={"/assets/icon-close-menu.svg"}
            alt="Menu"
            width={24}
            height={24}
          />
        )}
      </button>
    </div>
  );
}
