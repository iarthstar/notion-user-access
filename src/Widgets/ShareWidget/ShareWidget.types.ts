import { Person } from "../../App.types";

export interface Props {
  sendData: (data: Person[]) => void;
  people: Person[];
}

export type SelectionHandler = (data: Person[]) => void;

export default {};