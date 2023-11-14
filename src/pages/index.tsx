import { Wrapper, Status } from "@googlemaps/react-wrapper";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <p>Loading...</p>;
    case Status.FAILURE:
      return <p>Error!</p>;
    case Status.SUCCESS:
      return <p>OK!</p>;
  }
};

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      render={render}
    >
      <p>Hello</p>
    </Wrapper>
  );
};

export default Home;
