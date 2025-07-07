import { render, screen, fireEvent } from "@testing-library/react";
import GPSInfoSection from "./";

describe("GPSInfoSection", () => {
  const defaultProps = {
    latitude: 35.6892,
    longitude: 51.389,
    currentStatus: "Idle",
  };

  it("renders latitude and longitude labels and values", () => {
    render(<GPSInfoSection {...defaultProps} />);
    expect(screen.getByText(/Latitude/i)).toBeInTheDocument();
    expect(screen.getByText(/Longitude/i)).toBeInTheDocument();
    expect(screen.getByText("35.6892")).toBeInTheDocument();
    expect(screen.getByText("51.389")).toBeInTheDocument();
  });

  it("does not show map button when currentStatus is not 'On Delivery'", () => {
    render(<GPSInfoSection {...defaultProps} />);
    expect(
      screen.queryByRole("button", { name: /map/i })
    ).not.toBeInTheDocument();
  });

  it("shows map button when currentStatus is 'On Delivery'", () => {
    render(<GPSInfoSection {...defaultProps} currentStatus="On Delivery" />);
    expect(screen.getByRole("button", { name: /map/i })).toBeInTheDocument();
  });

  it("calls onMapClick when map button is clicked", () => {
    const onMapClick = jest.fn();
    render(
      <GPSInfoSection
        {...defaultProps}
        currentStatus="On Delivery"
        onMapClick={onMapClick}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /map/i }));
    expect(onMapClick).toHaveBeenCalledTimes(1);
  });
});
