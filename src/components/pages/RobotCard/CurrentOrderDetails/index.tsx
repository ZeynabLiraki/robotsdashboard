import {
  OrderInfoRow,
  InfoIcon,
  InfoLabel,
  CurrentOrderBox,
  InfoRow,
  CurrentInfoIcon,
  SmallBoldText,
} from "../RobotCard.styles";
import OrderInfo from "../../../../assets/Icons/Order-info.svg";
import IDIcon from "../../../../assets/Icons/ID-icon.svg";
import genderNeutralUser from "../../../../assets/Icons/Gender-neutral-user.svg";
import address from "../../../../assets/Icons/Address.svg";
import eta from "../../../../assets/Icons/ETA.svg";
import { Typography } from "@mui/material";
import { format } from "date-fns";

interface CurrentOrderDetailsProps {
  orderId: string;
  customerName: string;
  deliveryAddress: string;
  estimatedDelivery: string;
  ariaLabel?: string;
  role?: string;
}

const CurrentOrderDetails: React.FC<CurrentOrderDetailsProps> = ({
  orderId,
  customerName,
  deliveryAddress,
  estimatedDelivery,
  ariaLabel = "Current order details",
}) => (
  <section role="region" aria-label={ariaLabel}>
    <OrderInfoRow>
      <InfoIcon
        src={OrderInfo}
        alt="Order information icon"
        aria-hidden="true"
        loading="lazy"
      />
      <InfoLabel variant="body2">Order Info</InfoLabel>
    </OrderInfoRow>
    <CurrentOrderBox>
      <InfoRow>
        <CurrentInfoIcon
          src={IDIcon}
          alt="Order ID icon"
          aria-hidden="true"
          loading="lazy"
        />
        <InfoLabel variant="body2">Id:</InfoLabel>
        <Typography variant="body2" fontWeight="bold">
          {orderId}
        </Typography>
      </InfoRow>

      <InfoRow>
        <CurrentInfoIcon
          src={genderNeutralUser}
          alt="Customer icon"
          aria-hidden="true"
          loading="lazy"
        />
        <InfoLabel variant="body2">Name:</InfoLabel>
        <Typography variant="body2" fontWeight="bold">
          {customerName}
        </Typography>
      </InfoRow>

      <InfoRow>
        <CurrentInfoIcon src={address} alt="Address icon" aria-hidden="true" />
        <InfoLabel variant="body2">Address:</InfoLabel>
        <Typography variant="body2" fontWeight="bold">
          {deliveryAddress}
        </Typography>
      </InfoRow>

      <InfoRow>
        <CurrentInfoIcon
          src={eta}
          alt="Estimated delivery time icon"
          aria-hidden="true"
          loading="lazy"
        />
        <InfoLabel variant="body2">ETA:</InfoLabel>
        <SmallBoldText variant="body2">
          {format(new Date(estimatedDelivery), "MMM d, yyyy 'at' HH:mm")}
        </SmallBoldText>
      </InfoRow>
    </CurrentOrderBox>
  </section>
);

export default CurrentOrderDetails;
