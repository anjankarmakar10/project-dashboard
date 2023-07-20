import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  link: string;
  image: StaticImageData;
}

const MenuItem = ({ title, link, image }: Props) => {
  return (
    <Link
      href={link}
      className="flex text-white items-center justify-center text-sm gap-1"
    >
      <Image width={18} height={18} src={image} alt={title} />
      <p className="mb-[-4px]">{title}</p>
    </Link>
  );
};
export default MenuItem;
