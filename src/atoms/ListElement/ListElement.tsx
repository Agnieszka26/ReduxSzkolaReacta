import {FC} from "react";
import {Link} from "react-router-dom";

interface ListElementProps {
  text: string;
  link: string;
}
const ListElement: FC<ListElementProps> = ({text, link}) => {
  return (
    <li>
      <Link to={link}>{text}</Link>
    </li>
  );
};

export default ListElement;
