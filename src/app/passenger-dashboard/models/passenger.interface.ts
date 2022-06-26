export interface Passenger {
  id: number;
  name: string;
  active: boolean;
  stamp: number | null;
  checkedIn: boolean;
  baggage: string;
}
