import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { ChangeEvent, useEffect } from "react";
import { HiMapPin } from "react-icons/hi2";

const SearchBox = () => {
  const defaultValue = "875";
  const onSelectAddress = (
    address: string,
    lat: number | null,
    lng: number | null,
  ) => {
    console.log(address, lat, lng);
  };
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
  };

  useEffect(() => {
    console.log(status, data);
  }, [status, data]);

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.error(`Error:`, error);
    }
  };

  return (
    <div
      className="bg-white p-4 shadow-md border-gray-200 border"
      style={{ width: "650px" }}
    >
      <div className="relative flex items-center">
        <input
          value={value}
          onChange={handleChange}
          className="w-full h-12 px-4 pl-12 text-black"
        />
        <span className="absolute left-1 top-2">
          <HiMapPin className="text-black text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
