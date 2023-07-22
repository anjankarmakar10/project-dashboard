import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TableHead = ({ children }: Props) => {
  return (
    <thead className="bg-neutral-300">
      <tr>{children}</tr>
    </thead>
  );
};
export default TableHead;
