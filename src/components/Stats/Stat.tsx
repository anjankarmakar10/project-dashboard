import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  value: string | number;
  image: StaticImageData | string;
}

const Stat = ({ title, value, image }: Props) => {
  return (
    <article className="flex items-center gap-2 p-5 rounded-xl bg-white w-full">
      <Image src={image} width={45} height={45} alt={title} />
      <div className="">
        <span className="text-xs">{title}</span>
        <h3 className="text-2xl font-semibold">{value}</h3>
      </div>
    </article>
  );
};
export default Stat;
