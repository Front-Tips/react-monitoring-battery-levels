import { useBattery } from "@uidotdev/usehooks";

function ReactUseHooks() {
  const batteryState = useBattery();
  const batteryLevel = (batteryState.level * 100).toFixed(0);
  const isCharging = batteryState.charging ? "✅" : "❌";

  return (
    <div>
      <div className="battery">
        <div className="battery__wrapper">
          {/* Battery Level */}
          <div className="battery__info">
            <p className="battery__level">{batteryLevel}%</p>
          </div>

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
      <h1 className="chargingStatus">Charging: {isCharging}</h1>
    </div>
  );
}

export default ReactUseHooks;
