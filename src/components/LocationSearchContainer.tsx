import usePlacesAutocomplete, {
  getGeocode,
  getZipCode,
} from "use-places-autocomplete";
import { ChangeEvent } from "react";
import SearchResults from "./SearchResults";
import { validateCode } from "@/utils/validation";
import SearchBox from "./SearchBox";

interface LocationSearchContainerProps {
  defaultValue?: string;
  onValidZipCode: () => void;
  onInvalidZipCode: () => void;
}

const LocationSearchContainer = ({
  defaultValue,
  onValidZipCode,
  onInvalidZipCode,
}: LocationSearchContainerProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address: string) => {
    setValue(address, false);

    try {
      const results = await getGeocode({ address });
      const zipCode = await getZipCode(results[0], false);
      const isValid = validateCode(Number(zipCode));

      if (isValid) {
        onValidZipCode();
      } else {
        onInvalidZipCode();
      }

      clearSuggestions();
    } catch (error) {
      console.error(`Error:`, error);
    }
  };

  return (
    <div className="flex flex-col">
      <SearchBox value={value} handleChange={handleChange} />
      <SearchResults results={data || []} onSelectResult={handleSelect} />
    </div>
  );
};

export default LocationSearchContainer;
