import { HiMapPin } from "react-icons/hi2";
import { ChangeEvent } from "react";

interface SearchBoxProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({ value, handleChange }: SearchBoxProps) => {
  return (
    <div
      className="bg-white p-4 shadow-md border-gray-200 border"
      style={{ width: "650px" }}
    >
      <div className="relative flex items-center">
        <input
          value={value}
          onChange={handleChange}
          className="w-full h-12 px-4 pl-12 text-black outline-none focus:outline-none bg-transparent"
        />
        <span className="absolute left-1 top-2">
          <HiMapPin className="text-black text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
