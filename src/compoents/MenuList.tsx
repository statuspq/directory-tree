import { IMenuItem, IMenuListProps } from "../types";
import MenuItem from "./MenuItem";

const MenuList = (props: IMenuListProps) => {
  const { menuList = [] } = props;
  return (
    <>
      {menuList
        ?.filter((menuItem: IMenuItem) => menuItem?.isDir && !menuItem?.parent)
        ?.map((menuItem: IMenuItem) => (
          <MenuItem menuItem={menuItem} menuList={menuList} key={menuItem.id} />
        ))}
    </>
  );
};

export default MenuList;
