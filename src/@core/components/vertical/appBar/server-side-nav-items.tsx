import { useEffect, useState } from "react";
import * as Icons from "mdi-material-ui";
import api from "@/@core/utils/api";

const ServerSideNavItemsVertical = () => {
  const [menuItems, setMenuItems] = useState([]);

  const getItems = () => {
    api.get("/api/horizontal-nav/data").then((response) => {
      const menuArray = response.data;
      const finalMenuArray = (items: any) => {
        return items.map((item: any) => {
          if (item.icon) {
            // @ts-ignore
            item.icon = Icons[item.icon];
            if (item.children) {
              finalMenuArray(item.children);
            }
            return item;
          }
          return item;
        });
      };
      setMenuItems(finalMenuArray(menuArray));
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  return menuItems;
};

export default ServerSideNavItemsVertical;
