import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  value: string | number;
  onClick?: () => void;
}

const DropdownItem = ({ children, value, onClick }: Props) => {
  return (
    <option onClick={onClick} value={value} className="font-normal text-base">
      {children}
    </option>
  );
};
export default DropdownItem;
