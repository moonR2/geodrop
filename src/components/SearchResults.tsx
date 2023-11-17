import { FiMapPin } from "react-icons/fi";

interface SearchResult {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface SearchResultsProps {
  results: SearchResult[];
  onSelectResult: (address: string) => void;
}

const SearchResults = ({ results, onSelectResult }: SearchResultsProps) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <ul className="list-none p-0 m-0">
      {results.map((result) => (
        <div
          key={result.place_id}
          className="bg-white p-4 shadow-md border-gray-200 border max-h-40 hover:bg-gray-200"
          style={{ width: "650px" }}
          onClick={() => onSelectResult(result.description)}
        >
          <div className="relative flex items-center">
            <li key={result.place_id} className="cursor-pointer py-2 px-8 ml-4">
              <div className="text-black">
                {result.structured_formatting.main_text}
              </div>
              <div className="text-gray-500 text-sm">
                {result.structured_formatting.secondary_text}
              </div>
            </li>
            <span className="absolute left-1">
              <FiMapPin className="text-gray-400 text-2xl" />
            </span>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default SearchResults;
