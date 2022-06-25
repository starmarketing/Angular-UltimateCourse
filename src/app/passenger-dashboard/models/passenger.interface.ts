export interface Child {
  name: string;
  age: number | null;
}
export interface Passenger {
  id: number;
  name: string;
  active: boolean;
  stamp: number | null;
  checkedIn: boolean;
  children: Child[] | null;
}
