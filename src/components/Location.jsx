import navigation_image from "../assets/yellow_navigation.svg";
import { useGeolocated } from "react-geolocated";

function Location() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return (
    <div className="py-3 px-5 flex items-center rounded-xl bg-[#434B8C] w-[360px]">
      <img className="text-start" src={navigation_image} alt="Navigation" />
      {!isGeolocationAvailable ? (
        <div className="text-center w-full">
          Your browser does not support Geolocation
        </div>
      ) : !isGeolocationEnabled ? (
        <div className="text-center w-full">Geolocation is not enabled</div>
      ) : (
        <>
          <span className="text-sm text-center w-full">
            {coords
              ? `${coords.latitude}, ${coords.longitude}`
              : "Fetching location..."}
          </span>
        </>
      )}
    </div>
  );
}

export default Location;
