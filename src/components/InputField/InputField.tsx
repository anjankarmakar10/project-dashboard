interface Props {
  label: string;
  placeholder?: string;
  type: "text" | "email" | "number" | "password";
  defaultValue?: string | number;
}

const InputField = ({ label, placeholder, type, defaultValue }: Props) => {
  return (
    <div className="mb-5 text-neutral-800">
      <label className="text-sm" htmlFor={label}>
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full border border-neutral-300 py-3 px-4 placeholder:text-neutral-800 placeholder:text-sm mt-1 rounded-md  outline-none focus:outline focus:outline-blue-600 "
        type={type}
      />
    </div>
  );
};
export default InputField;
