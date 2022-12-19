import ListElement from "../../atoms/ListElement/ListElement";
import {RoutesPath} from "../../constants";
import List from "../../atoms/List/List";
const listElementData = [
  {
    link: RoutesPath.HOME,
    text: "Home",
  },
  {
    link: RoutesPath.USERS,
    text: "Users",
  },
];

const Navbar = () => {
  return (
    <List>
      {listElementData.map(({link, text}, index) => (
        <ListElement key={`${text}-${index}`} link={link} text={text} />
      ))}
    </List>
  );
};

export default Navbar;
