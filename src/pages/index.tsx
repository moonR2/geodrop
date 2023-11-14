import { useLoadScript, Libraries } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { ChangeEvent } from "react";

const libraries: Libraries = ["places"];

const SearchBox = () => {
  const defaultValue = "Tokyo, Japan";
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
    setValue(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
  };

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
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <p className="text-black text-center mb-2">Where are you located?</p>
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
    </div>
  );
};

const Home = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: libraries,
  });

  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  if (loadError) return <div>error</div>;
  if (!isLoaded) return <div>loading</div>;

  return (
    <div>
      <SearchBox />
    </div>
  );
};

export default Home;
