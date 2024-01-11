import { useEffect, useState } from "react";

function BatteryStatusAPI() {
  // Store battery level & charging status states
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    async function updateBatteryInfo() {
      const battery = await navigator.getBattery();

      setBatteryLevel((battery.level * 100).toFixed(0));

      setIsCharging(battery.charging);

      // Event listener for battery level change
      battery.addEventListener("levelchange", () => {
        setBatteryLevel((battery.level * 100).toFixed(0));
      });

      // Event listener for charging status change
      battery.addEventListener("chargingchange", () => {
        setIsCharging(battery.charging);
      });
    }

    updateBatteryInfo();
  }, []);

  return (
    <div>
      <div className="battery">
        <div className="battery__wrapper">
          {/* Battery Level */}
          <div className="battery__info">
            <p className="battery__level">{batteryLevel}%</p>
          </div>

          {/* Battery Bar */}
          <div
            className="battery__bar"
            style={{
              animationIterationCount: "1",
              width: `${batteryLevel}%`,
            }}
          ></div>
        </div>
        <div className="battery__rightBar"></div>
      </div>

      {/* Charging Status */}
      <h1 className="chargingStatus">
        Charging: {isCharging ? "✅" : "❌"}
      </h1>
    </div>
  );
}

export default BatteryStatusAPI;
