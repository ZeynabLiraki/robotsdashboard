import { render, screen, fireEvent } from "@testing-library/react";
import { Robot } from "../../../types/robotFleetData";
import RobotCard from ".";

jest.mock("../../BatteryIndicator/index.tsx", () => () => (
  <div>BatteryIndicator</div>
));
jest.mock("./RobotMapWrapper", () => (props: any) => (
  <div data-testid="robot-status">
    <img alt={props.iconAlt} src={props.iconSrc}  />
    <span>{props.status}</span>
  </div>
));
jest.mock("./GPSInfoSection", () => (props: any) => (
  <div data-testid="gps-info" onClick={props.onMapClick}>
    GPS Info
  </div>
));
jest.mock("./CurrentOrderDetails", () => (props: any) => (
  <div data-testid="current-order-details">
    {props.customerName} - {props.deliveryAddress}
  </div>
));
jest.mock("./RobotMapWrapper", () => () => (
  <div data-testid="robot-map-wrapper">MapWrapper</div>
));
jest.mock(
  "../../MapModal/index.tsx",
  () => (props: any) =>
    props.open ? (
      <div data-testid="map-modal">
        MapModal
        <button onClick={props.onClose}>Close</button>
      </div>
    ) : null
);

const robotBase: Robot = {
  robotId: "R1",
  model: "ModelX",
  status: "Idle",
  location: { latitude: 10, longitude: 20 },
  batteryLevel: 75,
  currentOrder: null,
};

describe("RobotCard", () => {
  it("renders robot info and battery level", () => {
    render(<RobotCard robot={robotBase} />);
    expect(screen.getByText(/R1 – ModelX/)).toBeInTheDocument();
  });

  it("shows correct status icon and status text", () => {
    render(<RobotCard robot={robotBase} />);
    const status = screen.getByTestId("robot-status");
    expect(status).toHaveTextContent("Idle");
    const img = status.querySelector("img");
    expect(img).toHaveAttribute("alt", "robot is idled");
  });

  it("opens and closes map modal on GPS info click and close button click", () => {
    render(<RobotCard robot={robotBase} />);
    expect(screen.queryByTestId("map-modal")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("gps-info"));
    expect(screen.getByTestId("map-modal")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByTestId("map-modal")).not.toBeInTheDocument();
  });

  it("disables return button when status is neither Idle nor On Delivery", () => {
    const robotWithError = { ...robotBase, status: "Error" as any };
    render(<RobotCard robot={robotWithError} />);
    const btn = screen.getByRole("button", { name: /Return robot to base/i });
    expect(btn).toBeDisabled();
  });

  it("enables return button and sets status to 'Returning ... ' when clicked", () => {
    render(<RobotCard robot={robotBase} />);

    const btn = screen.getByRole("button", { name: /Return robot to base/i });
    expect(btn).toBeEnabled();

    fireEvent.click(btn);

    expect(screen.getByTestId("robot-status")).toHaveTextContent(
      "Returning ..."
    );
    expect(btn).toBeDisabled();
  });

  it("renders current order details when status is 'On Delivery' and currentOrder exists", () => {
    const robotOnDelivery: Robot = {
      ...robotBase,
      status: "On Delivery",
      currentOrder: {
        customerName: "Alice",
        deliveryAddress: "123 Main St",
        estimatedDelivery: "2 PM",
        orderId: "O123",
      },
    };
    render(<RobotCard robot={robotOnDelivery} />);

    expect(screen.getByTestId("current-order-details")).toHaveTextContent(
      "Alice - 123 Main St"
    );
    expect(screen.queryByTestId("robot-map-wrapper")).not.toBeInTheDocument();
  });

  it("renders map wrapper when not on delivery or no current order", () => {
    render(<RobotCard robot={robotBase} />);
    expect(screen.getByTestId("robot-map-wrapper")).toBeInTheDocument();
    expect(
      screen.queryByTestId("current-order-details")
    ).not.toBeInTheDocument();
  });
});
