import Image from "next/image";

import { IGalleryItemPoisonProps } from "./types";

export const GalleryItemPoison: React.FC<IGalleryItemPoisonProps> = ({
  src,
  title,
}) => {
  return (
    <>
      <Image
        src={src}
        alt={title}
        width={412}
        height={600}
        className="object-contain group-hover:scale-110 transition-all"
      />
      <div className="absolute top-0 left-0 w-full h-full z-[5] transition-all bg-text-extra group-hover:opacity-80 opacity-0  group-hover:text-text-white text-8 xl:text-[45px] font-semibold tracking-[1.8px] leading-[58.5] capitalize flex items-center justify-center">
        {title}
      </div>
    </>
  );
};
