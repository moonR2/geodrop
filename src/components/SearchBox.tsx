import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { ChangeEvent, useEffect } from "react";

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
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative">
        <input
          value={value}
          onChange={handleChange}
          className="w-full h-12 px-4 border-gray-300 border rounded-lg pl-12"
        />
        <span className="absolute left-4 top-3">
          {/* Aquí puedes poner el ícono de mapa, por ejemplo: */}
          🗺️
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
