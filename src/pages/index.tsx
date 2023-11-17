import { useLoadScript, Libraries } from "@react-google-maps/api";
import LocationSearchContainer from "@/components/LocationSearchContainer";
import Modal from "@/components/Modal";
import { useState } from "react";
import BaseLayout from "@/components/BaseLayout";

const libraries: Libraries = ["places"];

const Home = () => {
  // This help us lazy load the google maps script which is required by use-places-autocomplete
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: libraries,
  });

  const [showModalValidCode, setShowModalValidCode] = useState(false);
  const [showModalInvalidCode, setShowModalInvalidCode] = useState(false);

  if (loadError)
    return (
      <BaseLayout>
        <p className="text-black font-bold text-4xl mb-4">
          Oops, something went wrong. Try again later.
        </p>
      </BaseLayout>
    );

  if (!isLoaded)
    return (
      <BaseLayout>
        <p className="text-black font-bold text-4xl mb-4">Loading...</p>
      </BaseLayout>
    );

  return (
    <BaseLayout>
      {showModalValidCode && (
        <Modal
          title="Address updated"
          subtitle="New address added to your account"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClose={() => setShowModalValidCode(false)}
          onConfirm={() => setShowModalValidCode(false)}
        />
      )}
      {showModalInvalidCode && (
        <Modal
          title="Out of Delivery Area"
          subtitle={`"Wherever I go, there I am."`}
          message={`Sadly, this quote is not true for us. In other words, we are not operating in your area (yet), but things change every day.`}
          submessage="Sign up to our newsletter to get notified."
          onClose={() => setShowModalInvalidCode(false)}
          onConfirm={() => setShowModalInvalidCode(false)}
        />
      )}
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
          onInvalidZipCode={() => setShowModalInvalidCode(true)}
          onValidZipCode={() => setShowModalValidCode(true)}
        />
      </div>
    </BaseLayout>
  );
};

export default Home;
