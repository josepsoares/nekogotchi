import { Geolocation, Position } from "@capacitor/geolocation";
import { isPlatform } from "@ionic/react";
import { useEffect, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState<Position>();

  useEffect(() => {
    async function getLocation() {
      if (isPlatform("desktop")) {
        printCurrentPosition();
      } else if (isPlatform("mobile") || isPlatform("tablet")) {
        const permission = await requestPermission();

        if (permission) {
          printCurrentPosition();
        }
      }
    }

    getLocation();
  }, []);

  const printCurrentPosition = async () => {
    // get coordinates
    const coordinates = await Geolocation.getCurrentPosition();

    setLocation(coordinates);
  };

  const requestPermission = async () => {
    // check user permission
    const checkPermission = await Geolocation.checkPermissions();

    if (checkPermission.location === "prompt") {
      const permission = await Geolocation.requestPermissions();
      console.log(permission);
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
