import { FaHouseChimney } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";

import huFlag from "../assets/images/huFlag.jpg"
import enFlag from "../assets/images/enFlag.jpg"

import { useLanguageStore } from "../store/useLanguageStore";

import { headerInfo } from "../db/data";

const Header = () => {
  const { language, setLanguage } = useLanguageStore()
  const info = headerInfo[language]

  return (
    <>
      <div className="flex gap-4">
        <img src={huFlag} alt="HU" className="w-8 cursor-pointer" onClick={() => setLanguage("hu")}/>
        <img src={enFlag} alt="EN" className="w-8 cursor-pointer" onClick={() => setLanguage("en")}/>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-[#354763]">
          {info.name}
        </h1>
      </div>
      <div className="text-yellow-700 px-8">
        <li className="flex items-center space-x-4">
          <FaHouseChimney />
          <span className="text-md italic">{info.location}</span>
        </li>
        <li className="flex items-center space-x-4">
          <FaPhoneAlt />
          <span className="text-md italic">{info.phoneNumber}</span>
        </li>
        <li className="flex items-center space-x-4">
          <IoIosMail />
          <span className="text-md italic">{info.email}</span>
        </li>
      </div>
    </>
  );
};

export default Header;
