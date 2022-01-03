import { BatteryInfo, Device, DeviceInfo } from "@capacitor/device";
import { useEffect, useState } from "react";

export function useDeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>();
  const [batteryInfo, setBatteryInfo] = useState<BatteryInfo>();

  useEffect(() => {
    logDeviceInfo();
    logBatteryInfo();
  }, []);

  const logDeviceInfo = async () => {
    const info = await Device.getInfo();

    setDeviceInfo(info);
  };

  const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();

    setBatteryInfo(info);
  };

  return {
    deviceInfo,
    batteryInfo,
    logDeviceInfo,
    logBatteryInfo,
  };
}
