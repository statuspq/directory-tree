import { useState } from "react";
import IconDown from "../assets/IconDown";
import IconRight from "../assets/IconRight";
import { IMenuItem, IMenuItemProps } from "../types";

const MenuItem = (props: IMenuItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { menuItem, menuList = [] } = props;
  if (!menuItem) return null;
  return (
    <div className="pl-6">
      <div
        className="flex flex-row text-white items-center mb-1"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {menuItem?.isDir &&
          (isExpanded ? (
            <IconDown color="white" />
          ) : (
            <IconRight color="white" />
          ))}
        <p className="ml-2">{menuItem.name}</p>
      </div>
      {menuItem?.isDir && isExpanded && (
        <>
          {menuList
            ?.filter(
              (childMenuItem: IMenuItem) => childMenuItem.parent === menuItem.id
            )
            ?.map((menuItem: IMenuItem) => (
              <MenuItem
                menuItem={menuItem}
                menuList={menuList}
                key={menuItem.id}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default MenuItem;
