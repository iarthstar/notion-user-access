import { Person } from "../../App.types";
import { SelectionHandler } from "../../Widgets/ShareWidget/ShareWidget.types";

export interface Props {
    people: Person[];
    selected: Person[];
    setSelected: SelectionHandler;
}

export default {};