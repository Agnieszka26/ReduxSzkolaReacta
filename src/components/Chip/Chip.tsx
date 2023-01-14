import { FC } from "react";
import styles from "./Chip.module.scss";

interface ChipProps {
  name: string;
  surname: string;
  img: string;
}

const Chip: FC<ChipProps> = ({ name, surname, img }) => {
  return (
    <div className={styles.chip}>
      <img src={img} alt="Person" width="96" height="96" />
      {name} {surname}
    </div>
  );
};

export default Chip;
