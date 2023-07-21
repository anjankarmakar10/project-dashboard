import Image from "next/image";
import search from "@/assets/icon/search.svg";

interface Props {
  placeholder?: string;
  onSubmit?: () => void;
  onSearchClick?: () => void;
}

const SearchInput = ({ placeholder, onSearchClick, onSubmit }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className="min-w-[350px] p-2 rounded-md border border-neutral-300 flex items-center gap-1"
    >
      <input
        className="outline-none w-full placeholder:text-neutral-800 text-base"
        type="text"
        placeholder={placeholder || "Search content.."}
      />
      <Image
        onClick={onSearchClick}
        className="cursor-pointer ml-auto "
        src={search}
        width={24}
        height={24}
        alt="Search "
      />
    </form>
  );
};
export default SearchInput;
