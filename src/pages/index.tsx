import { useLoadScript, Libraries } from "@react-google-maps/api";
import SearchBox from "../components/SearchBox";

const libraries: Libraries = ["places"];

const Home = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: libraries,
  });

  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  if (loadError) return <div>error</div>;
  if (!isLoaded) return <div>loading</div>;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <p className="text-black text-center mb-2">Where are you located?</p>
      <SearchBox />
    </div>
  );
};

export default Home;
