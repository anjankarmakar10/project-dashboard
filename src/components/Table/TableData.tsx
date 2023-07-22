import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TableData = ({ children }: Props) => {
  return <td className="p-5 border">{children}</td>;
};
export default TableData;
