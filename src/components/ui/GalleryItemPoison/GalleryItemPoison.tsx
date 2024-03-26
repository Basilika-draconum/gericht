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
        className="object-contain"
      />
      <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 transition-all bg-text-extra group-hover:opacity-40 opacity-0  group-hover:text-text-white text-8 xl:text-[45px] font-semibold tracking-[1.8px] leading-[58.5] capitalize">
        {title}
      </p>
    </>
  );
};
