import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RobotStatus from ".";

describe("RobotStatus component", () => {
  it("renders the status text and image with correct alt", () => {
    render(
      <RobotStatus
        status="Idle"
        iconSrc="/idle-icon.svg"
        iconAlt="robot is idled"
      />
    );

    expect(screen.getByRole("region")).toHaveTextContent("Idle");

    const img = screen.getByAltText("robot is idled");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/idle-icon.svg");
  });

  it("sets the correct aria-label on the region", () => {
    render(
      <RobotStatus
        status="Charging"
        iconSrc="/charging-icon.svg"
        iconAlt="robot is charging"
      />
    );
    expect(screen.getByRole("region")).toHaveAttribute(
      "aria-label",
      "Robot status: Charging"
    );
  });
});
