import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  link: string;
  children: ReactNode;
}

const MenuItem = ({ title, link, children }: Props) => {
  return (
    <Link
      href={link}
      className="flex text-white items-center justify-center text-sm gap-1"
    >
      {children}
      <p className="mb-[-4px]">{title}</p>
    </Link>
  );
};
export default MenuItem;
