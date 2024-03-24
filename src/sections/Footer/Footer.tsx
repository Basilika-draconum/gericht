import Image from "next/image";
import Spoon from "~/icons/spoon.svg";
import data from "@/data/footer.json";

export const Footer: React.FC = () => {
  const { contact, working, icons, slogan, description } = data;
  return (
    <footer className="section section-bg">
      <div className="container">
        <div className="flex flex-col gap-[34px] md:gap-[64px]">
          <div className="flex flex-col gap-5 md:gap-1 md:flex-row md:justify-between">
            <address className="flex flex-col text-text-addaccent items-center">
              <h3 className="mb-4 md:mb-6 text-2xl md:text-[32px] font-normal not-italic leading-[41.6px] tracking-[1.28px] capitalize">
                {contact.title}
              </h3>
              <p className="font-sans mb-2 text-[13px] md:text-base text-text-secondary font-normal not-italic leading-7 tracking-[0.64px]">
                {contact.subtitle}
              </p>
              <ul className="font-sans flex flex-col gap-[2px]">
                {contact.numbers &&
                  contact.numbers.map(({ tell, number, id }) => (
                    <li key={id}>
                      <a
                        href={`tel:${tell}`}
                        className="text-[13px] md:text-base text-text-secondary font-normal not-italic leading-7 tracking-[0.64px] cursor-pointer transition-all hover:text-text-accent focus:text-text-accent"
                      >
                        {number}
                      </a>
                    </li>
                  ))}
              </ul>
            </address>
            <div className="flex flex-col items-center xl:w-[438px]">
              <p className="mt-6 md:mt-8 mb-4 text-center font-sans text-[13px] md:text-base text-text-secondary font-normal not-italic leading-7 tracking-[0.64px]">
                {slogan}
              </p>
              {/* <Image src={spoon.src} alt={spoon.alt} width={9} height={40} className="w-[9px] h-[40px] text-text-accent mb-4"/> */}
              <Spoon className="w-10 h-[9px] mb-4" />
              <ul className="flex gap-4 ">
                {icons &&
                  icons.map(({ alt, href, src, id }) => (
                    <li key={id}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={alt}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          width={24}
                          height={24}
                          className="text-text-addaccent cursor-pointer transition-all hover:text-text-accent focus:text-text-accent"
                        />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-4 md:mb-6 text-2xl md:text-[32px] text-text-addaccent font-normal not-italic leading-[41.6px] tracking-[1.28px] capitalize">
                {working.title}
              </h3>
              <ul className="font-sans flex flex-col gap-2">
                {working.times &&
                  working.times.map(({ day, time, id }) => (
                    <li
                      key={id}
                      className="flex flex-col items-center gap-[2px] text-[13px] md:text-base text-text-secondary font-normal not-italic leading-7 tracking-[0.64px] cursor-pointer transition-all group"
                    >
                      <p className=" group-hover:text-text-accent group-focus:text-text-accent">
                        {day}
                      </p>
                      <p className="group-hover:text-text-accent group-focus:text-text-accent">
                        {time}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <p className="font-sans text-text-secondary text-center text-[13px] md:text-base not-italic font-normal leading-7 tracking-[0.64px]">
            {description}
          </p>
        </div>
      </div>
    </footer>
  );
};
