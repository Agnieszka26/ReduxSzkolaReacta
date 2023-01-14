import List from "../../atoms/List/List";
import ListElement from "../../atoms/ListElement/ListElement";
import { RoutesPath } from "../../constants";
import styles from "./Navbar.module.scss";

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
    <div className={styles.container}>
      <nav className={styles.nav}>
        <List>
          {listElementData.map(({ link, text }, index) => (
            <ListElement key={`${text}-${index}`} link={link} text={text} />
          ))}
        </List>
      </nav>
    </div>
  );
};

export default Navbar;
