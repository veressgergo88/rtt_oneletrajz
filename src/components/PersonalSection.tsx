import { personalInfo } from "../db/data";
import profilkep from "../assets/images/profilkep.jpg"
import { motion } from "motion/react";

const PersonalSection = () => {
  return (
    <>
      <div className="flex justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1 }}
          className="h-50 rounded-full shadow-sm shadow-black"
          src={profilkep}
          alt="profilkep"
        />
      </div>
      <div className="mt-8 space-y-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl text-yellow-700 font-bold">
          SZEMÉLYES INFORMÁCIÓK
        </h2>
        <div>
          <h3 className="text-lg font-bold text-gray-200">Születési hely</h3>
          <p className="text-sm font-bold text-gray-200">
            {personalInfo.birthLocation}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-200">Születési idő</h3>
          <p className="text-sm font-bold text-gray-200">
            {personalInfo.birthday}
          </p>
        </div>
      </div>
      <div className="mt-8 space-y-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl text-yellow-700 font-bold">
          REFERENCIA WEBOLDAL
        </h2>
        <a href="https://www.mancsmuszak.hu" target="_blank" className="text-gray-200 text-lg hover:font-bold hover:underline">Mancs Műszak</a>
      </div>
      <div className="mt-8 space-y-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl text-yellow-700 font-bold">
          TERVEK
        </h2>
        <ul className="list-disc px-6">
          <li className="text-sm font-bold text-gray-200">NEXT.JS, REACT NATIVE elsajátítása</li>
          <li className="text-sm font-bold text-gray-200">Saas alkalmazások készítése</li>
          <li className="text-sm font-bold text-gray-200">Gépi tanulás / Mesterséges Intelligencia programozása</li>
        </ul>
      </div>
    </>
  );
};

export default PersonalSection;
