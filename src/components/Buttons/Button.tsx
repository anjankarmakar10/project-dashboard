interface Props {
  children: React.ReactNode;
  variant: "outline" | "fill";
  color?: string;
  bg?: string;
  size?: "sm" | "md";
  onClick?: () => void;
}

const Button = ({ children, variant, color, bg, onClick, size }: Props) => {
  return (
    <button
      style={{
        background: `${bg && bg}`,
        color: `${color && color}`,
        borderColor: `${bg && bg}`,
        fontSize: `${size === "sm" ? ".875rem" : "1rem"}`,
        padding: `${size === "sm" && "7px 15px"}`,
      }}
      onClick={onClick}
      className={`p-3 rounded-md font-medium ${
        variant === "fill"
          ? ` text-white bg-blue-600`
          : `bg-transparent border text-neutral-600 border-neutral-600`
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
