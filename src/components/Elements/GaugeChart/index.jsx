import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

function GaugePointer(props) {
  const { color } = props;
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample(props) {
  const { theme } = useContext(ThemeContext);
  const { desc } = props;
  return (
    <GaugeContainer
      width={130}
      height={100}
      startAngle={-90}
      endAngle={90}
      value={desc}
      sx={() => ({
        [`& .value-arc`]: {
          fill: theme.color,
        },
      })}
    >
      <GaugeReferenceArc />
      <GaugeValueArc className="value-arc" />
      <GaugePointer color={theme.color} />
    </GaugeContainer>
  );
}
