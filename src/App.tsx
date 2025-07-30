import Header from "./components/Header";
import PersonalSection from "./components/PersonalSection";
import ExperienceInfo from "./components/ExperienceInfo";

import { jobInfo, educationInfo } from "./db/data";

import { useState } from "react";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "motion/react";

function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
   <div className="bg-[#e6ebf2]">
    <div className="flex max-w-7xl mx-auto rounded shadow-md shadow-black">
      <aside className={`bg-[#354763] flex flex-col ${isOpened ? "w-75" : "w-16"} shadow-lg shadow-black duration-300 ease-in-out fixed lg:static z-10 lg:z-0 h-screen lg:h-auto overflow-y-auto`}>
        <div className="flex justify-end p-4">
          <button className="cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
            {isOpened ?  <FaRegArrowAltCircleLeft size={30} color="#e5e7eb" /> : <FaRegArrowAltCircleRight size={30} color="#e5e7eb"/>}
          </button>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1.7 }}
        className="px-4">
          { isOpened && <PersonalSection />}
        </motion.div>
      </aside>
      <main className="bg-gray-200 flex flex-col w-full pl-12">
        <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1}}
        className="flex lg:flex-row flex-col gap-4 justify-evenly items-center pt-4">
          <Header />
        </motion.section>
        <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="p-8">
          <ExperienceInfo title="Tapasztalat" infos={jobInfo}/>
          <ExperienceInfo title="Tanulmányok" infos={educationInfo}/>
        </motion.section>
      </main>
    </div>
   </div>
  );
}

export default App;
