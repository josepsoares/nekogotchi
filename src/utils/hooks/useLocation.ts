import { Geolocation, Position } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState<Position>();

  useEffect(() => {
    async function getLocation() {
      const permission = await requestPermission();

      if (permission) {
        printCurrentPosition();
      }
    }

    getLocation();
  }, []);

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    setLocation(coordinates);
  };

  const requestPermission = async () => {
    const checkPermission = await Geolocation.checkPermissions();

    if (!checkPermission) {
      await Geolocation.requestPermissions();
      return true;
    } else {
      return false;
    }
  };

  return {
    location,
    printCurrentPosition,
  };
}
