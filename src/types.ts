export type IMenuItem = {
  id: number;
  name: string;
  parent?: number;
  isDir?: boolean;
};

export type IMenuItemProps = {
  menuItem: IMenuItem;
  menuList: IMenuItem[];
};

export type IMenuListProps = {
  menuList: IMenuItem[];
};
