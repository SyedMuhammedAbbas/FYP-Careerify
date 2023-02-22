import { useEffect } from "react";

function Map() {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
    });
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
}

export default Map;
