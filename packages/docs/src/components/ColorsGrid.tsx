import { colors } from "@wfl-junior-ignite-design-system/tokens";
import { getContrast } from "polished";
import { Fragment } from "react";

export const ColorsGrid: React.FC = () => (
  <Fragment>
    {Object.entries(colors).map(([key, color]) => (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "white") < 3.5 ? "#111" : "white",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    ))}
  </Fragment>
);
