import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="p-7 bg-white rounded-xl h-fit">{children}</section>
  );
};
export default Container;
