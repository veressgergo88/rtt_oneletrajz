import { jobInfo, educationInfo, sectionTitles } from "../db/data";

import { useLanguageStore } from "../store/useLanguageStore";

type ExperienceInfoProps = {
  titleKey: "experience" | "education"
};

const ExperienceInfo = ({ titleKey }: ExperienceInfoProps) => {
  const { language } = useLanguageStore()

  const title = titleKey === "experience" ? sectionTitles[language].experience : sectionTitles[language].education
  const infos = titleKey === "experience" ? jobInfo[language] : educationInfo[language]

  return (
    <div className="text-[#354763]">
      <div className="border-b-2 border-gray-500 py-2">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {infos.map((info, index) => (
        <div key={index} className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-12 py-4">
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold">{info.infoTitle}</h3>
            <p className="text-md italic">{info.infoDate}</p>
          </div>
          <ul className="lg:w-2/3 px-6">
            {info.infoList.map((list, listIndex) => (
              <li className="text-lg list-disc list-outside" key={listIndex}>
                {list}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceInfo;
