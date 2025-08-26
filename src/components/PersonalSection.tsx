import profilkep from "../assets/images/profilkep.jpg"
import { personalInfo, sectionTitles, plans } from "../db/data";

import { motion } from "motion/react";
import { useLanguageStore } from "../store/useLanguageStore";

const PersonalSection = () => {
  const { language } = useLanguageStore()
  const title = sectionTitles[language]
  const info = personalInfo[language]
  const plan = plans[language]

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
          {title.personal}
        </h2>
        <div>
          <h3 className="text-lg font-bold text-gray-200">Születési hely</h3>
          <p className="text-sm font-bold text-gray-200">
            {info.birthLocation}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-200">Születési idő</h3>
          <p className="text-sm font-bold text-gray-200">
            {info.birthday}
          </p>
        </div>
      </div>
      <div className="mt-8 space-y-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl text-yellow-700 font-bold">
          {title.website}
        </h2>
        <a href="https://www.mancsmuszak.hu" target="_blank" className="text-gray-200 text-sm hover:font-bold hover:underline">https://www.mancsmuszak.hu</a>
      </div>
      <div className="mt-8 space-y-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl text-yellow-700 font-bold">
          {title.plans}
        </h2>
        <ul className="list-disc px-6">
          {plan.map((list, i) => (
            <li className="text-sm font-bold text-gray-200" key={i}>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PersonalSection;
