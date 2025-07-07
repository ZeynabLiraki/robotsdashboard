import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import CurrentOrderDetails from ".";

describe("CurrentOrderDetails", () => {
  const props = {
    orderId: "12345",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Springfield",
    estimatedDelivery: "2025-07-10T14:30:00.000Z",
  };

  it("renders the section with correct aria-label", () => {
    render(<CurrentOrderDetails {...props} ariaLabel="Custom label" />);
    expect(
      screen.getByRole("region", { name: "Custom label" })
    ).toBeInTheDocument();
  });

  it("renders all the labels and values correctly", () => {
    render(<CurrentOrderDetails {...props} />);

    expect(screen.getByText(/Order Info/i)).toBeInTheDocument();
    expect(screen.getByText(/Id:/i)).toBeInTheDocument();
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Address:/i)).toBeInTheDocument();
    expect(screen.getByText(/ETA:/i)).toBeInTheDocument();

    expect(screen.getByText(props.orderId)).toBeInTheDocument();
    expect(screen.getByText(props.customerName)).toBeInTheDocument();
    expect(screen.getByText(props.deliveryAddress)).toBeInTheDocument();

    const formattedDate = format(
      new Date(props.estimatedDelivery),
      "MMM d, yyyy 'at' HH:mm"
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
