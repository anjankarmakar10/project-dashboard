import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  onChange?: () => void;
}

const Dropdown = ({ children, label, onChange }: Props) => {
  return (
    <div className="mb-5 text-neutral-800">
      <label className="text-sm " htmlFor={label}>
        {label}
      </label>
      <select
        onChange={onChange}
        className="w-full border border-neutral-300 py-3 px-4 placeholder:text-neutral-800 placeholder:text-sm mt-1 rounded-md  outline-none focus:outline focus:outline-blue-600 "
      >
        {children}
      </select>
    </div>
  );
};
export default Dropdown;
