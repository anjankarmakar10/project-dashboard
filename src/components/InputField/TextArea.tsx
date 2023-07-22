interface Props {
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  cols?: number;
  rows?: number;
}

const TextArea = ({
  label,
  placeholder,
  defaultValue,
  inputRef,
  cols,
  rows,
}: Props) => {
  return (
    <div className="mb-5 text-neutral-800">
      <label className="text-sm" htmlFor={label}>
        {label}
      </label>

      <textarea
        name={label}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        defaultValue={defaultValue}
        className="w-full border border-neutral-300 py-3 px-4 placeholder:text-neutral-800 placeholder:text-sm mt-1 rounded-md  outline-none focus:outline focus:outline-blue-600 min-h-[165px] resize-none"
      />
    </div>
  );
};
export default TextArea;
