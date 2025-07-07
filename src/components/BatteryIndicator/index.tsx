import {
  BatteryBody,
  BatteryContainer,
  BatteryFill,
  BatteryText,
  BatteryTip,
} from "./BatteryIndicator.styles";

type BatteryIndicatorProps = {
  level: number;
};

const getBatteryColor = (level: number): string => {
  if (level <= 25) return "#FF0000";
  if (level <= 75) return "#FFA500";
  return "#20DD20";
};

const BatteryIndicator: React.FC<BatteryIndicatorProps> = ({
  level,
}) => {
  const clampedLevel = Math.min(100, Math.max(0, level));
  const batteryColor = getBatteryColor(clampedLevel);
  const percentageText = `${clampedLevel}%`;

  return (
    <div>
      <BatteryContainer>
        <BatteryBody>
          <BatteryFill fillColor={batteryColor} level={clampedLevel} />

          <BatteryText $color="black" $clipInset={`0 0 0 ${clampedLevel}%`}>
            {percentageText}
          </BatteryText>

          <BatteryText
            $color="white"
            $clipInset={`0 ${100 - clampedLevel}% 0 0`}
          >
            {percentageText}
          </BatteryText>
        </BatteryBody>

        <BatteryTip />
      </BatteryContainer>
    </div>
  );
};

export default BatteryIndicator;
