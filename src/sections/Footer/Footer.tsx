import { ContactsInfo } from "@/components/base/ContactsInfo/ContactsInfo";
import { WorkTime } from "@/components/base/WorkTime/WorkTime";
import { Sociables } from "@/components/base/Sociables/Sociables";

import Spoon from "~/icons/spoon.svg";

import data from "@/data/footer.json";

export const Footer: React.FC = () => {
  const { slogan, description } = data;

  return (
    <footer className="-mt-[142px] md:-mt-[252px] pt-[248px] pb-[68px] md:pt-[348px] md:pb-[108px] section-bg">
      <div className="container">
        <div className="flex flex-col gap-[34px] md:gap-[64px]">
          <div className="flex flex-col gap-5 md:gap-1 md:flex-row md:justify-between">
            <ContactsInfo />
            <div className="flex flex-col items-center xl:w-[438px]">
              <p className="mt-6 md:mt-8 mb-4 text-center font-sans text-[13px] md:text-base text-text-secondary font-normal not-italic leading-7 tracking-[0.64px]">
                {slogan}
              </p>
              <Spoon className="w-10 h-[9px] mb-4" />
              <Sociables />
            </div>
            <WorkTime />
          </div>
          <p className="font-sans text-text-secondary text-center text-[13px] md:text-base not-italic font-normal leading-7 tracking-[0.64px]">
            {description}
          </p>
        </div>
      </div>
    </footer>
  );
};
