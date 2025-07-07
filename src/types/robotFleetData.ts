export interface Location {
  latitude: number;
  longitude: number;
}

export interface Order {
  orderId: string;
  customerName: string;
  deliveryAddress: string;
  estimatedDelivery: string;
}

export interface Robot {
  robotId: string;
  model: string;
  status: string;
  batteryLevel: number;
  location: Location;
  currentOrder: Order | null;
  latitude?: number;
  longitude?: number;
}
