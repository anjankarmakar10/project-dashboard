import Button from "../Buttons/Button";

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const Pagination = ({ page, setPage }: Props) => {
  return (
    <div className="py-5 flex gap-1 items-center w-fit mx-auto">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <Button
            key={index}
            onClick={() => setPage(index + 1)}
            bg={index + 1 === page ? "#2563EB" : ""}
            color={index + 1 === page ? "#fff" : ""}
            variant="outline"
            size="sm"
          >
            {index + 1}
          </Button>
        ))}
    </div>
  );
};
export default Pagination;
