interface Props {
  title: string;
  subtitle?: string;
}

const FormHeader = ({ title, subtitle }: Props) => {
  return (
    <header>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-base font-light">{subtitle}</p>
    </header>
  );
};
export default FormHeader;
