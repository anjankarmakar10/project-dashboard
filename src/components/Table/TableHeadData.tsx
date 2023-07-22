import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TableHeadData = ({ children }: Props) => {
  return <th className="p-5 border text-start">{children}</th>;
};
export default TableHeadData;
