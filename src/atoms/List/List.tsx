import {FC, ReactNode} from "react";

interface ListProps {
  children: ReactNode;
}

const List: FC<ListProps> = ({children}) => {
  return <ul>{children}</ul>;
};

export default List;
