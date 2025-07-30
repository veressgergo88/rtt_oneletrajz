import { FaHouseChimney } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";

import { headerInfo } from "../db/data";

const Header = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-[#354763]">
          {headerInfo.name}
        </h1>
      </div>
      <div className="text-yellow-700 px-8">
        <li className="flex items-center space-x-4">
          <FaHouseChimney />
          <span className="text-md italic">{headerInfo.location}</span>
        </li>
        <li className="flex items-center space-x-4">
          <FaPhoneAlt />
          <span className="text-md italic">{headerInfo.phoneNumber}</span>
        </li>
        <li className="flex items-center space-x-4">
          <IoIosMail />
          <span className="text-md italic">{headerInfo.email}</span>
        </li>
      </div>
    </>
  );
};

export default Header;
