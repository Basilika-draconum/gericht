import { GalleryItemPoison } from "@/components/ui/GalleryItemPoison/GalleryItemPoison";

import data from "@/data/poison.json";

export const GalleryPoison: React.FC = () => {
  const { images } = data;

  return (
    <ul className="flex flex-col gap-6 md:flex-row md:gap-8">
      {images.map(({ src, title, id }) => (
        <li
          key={id}
          className="relative group transition-all cursor-pointer border border-solid border-bg-accent  overflow-hidden w-[250px] h-auto xl:w-[412px] xl:h-[600px]"
        >
          <GalleryItemPoison src={src} title={title} />
        </li>
      ))}
    </ul>
  );
};
