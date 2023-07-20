interface Props {
  children: React.ReactNode;
  variant: "outline" | "fill";
  color?: string;
  bg?: string;
  onClick?: () => void;
}

const Button = ({ children, variant, color, bg, onClick }: Props) => {
  return (
    <button
      style={{
        background: `${bg && variant === "fill" && bg}`,
        color: `${color && color}`,
        borderColor: `${variant === "outline" && color}`,
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
