import data from "@/data/footer.json";

export const ContactsInfo: React.FC = () => {
  const { contact } = data;

  return (
    <address className="flex flex-col text-text-addaccent items-center">
      <h3 className="mb-4 md:mb-6 text-2xl md:text-[32px] font-normal not-italic leading-[41.6px] tracking-[1.28px] capitalize">
        {contact.title}
      </h3>
      <a
        href="https://maps.app.goo.gl/jqK7cHuGY8EZmoXr7"
        target="_blank"
        className="font-sans mb-2 text-[13px] md:text-base text-center text-text-secondary font-normal not-italic leading-7 tracking-[0.64px] cursor-pointer transition-all hover:text-text-accent focus:text-text-accent"
      >
        {contact.subtitle}
      </a>
      <ul className="font-sans flex flex-col gap-[2px]">
        {contact.numbers.map(({ tell, number, id }) => (
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
  );
};
