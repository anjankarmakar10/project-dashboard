import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  onClick?: () => void;
  color?: string;
  fontSize?: number;
  width?: number;
}

const ListItem = ({ title, image, onClick, color, fontSize, width }: Props) => {
  return (
    <article
      style={{
        color: `${color && color}`,
        fontSize: `${fontSize && fontSize}px`,
      }}
      onClick={onClick}
      className="flex text-neutral-800 items-center justify-center text-sm gap-1 cursor-pointer font-medium "
    >
      <Image width={width || 18} height={18} src={image} alt={title} />
      <p className="mb-[-4px]">{title}</p>
    </article>
  );
};
export default ListItem;
