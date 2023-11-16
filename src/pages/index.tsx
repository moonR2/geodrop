import { useLoadScript, Libraries } from "@react-google-maps/api";
import LocationSearchContainer from "@/components/LocationSearchContainer";

const libraries: Libraries = ["places"];

const Home = () => {
  // This help us lazy load the google maps script which is required by use-places-autocomplete
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: libraries,
  });

  if (loadError) return <div>error</div>;
  if (!isLoaded) return <div>loading</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <div className="flex flex-col items-center justify-center flex-grow space-y-5">
        <div className="space-y-20">
          <p className="text-black font-bold text-4xl mb-4">
            Where are you located?
          </p>
          <div className="text-center">
            <p className="text-black text-2xl mb-4">
              So we know where to drop off the stuff
            </p>
            <p className="text-gray-500 text-lg mb-4 max-w-sm">
              We won&apos;t share your address with anyone with your ex (or
              whoever).
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <LocationSearchContainer
            defaultValue=""
            onInvalidZipCode={() => console.log("invalid")}
            onValidZipCode={() => console.log("valid")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
