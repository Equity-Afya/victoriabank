/* Sidebar.js */
'use client'
import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const Menus = [
    { title: "Overview" },
    { title: "Transactions" },
    { title: "Loyalty Cards", gap: true },
    { title: "Subscriptions" },
    { title: "Debts" },
    { title: "Legal information" },
    { title: "Notifications", gap: true },
    { title: "Setting" },
  ];

  const closedMenus = Menus.map((menu, index) => ({
    ...menu,
    icon: index + 1,
  }));

  return (
    <div className="flex">
      {!open && (
        <div className={styles.closedContent}>
          <button className={styles.openBtn} onClick={toggleSidebar}>
            Open
          </button>
          <ul className={styles.closedList}>
            {closedMenus.map((menu, index) => (
              <li key={index} className={styles.closedListItem}>
                <span className={styles.icon}>{menu.icon}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={` ${
          open ? styles.sidebarOpen : styles.sidebarClosed
        } ${styles.sidebar} ${styles.duration}`}
      >
        <div className={`${styles.content}`}>
          <button className={`${styles.closeBtn}`} onClick={toggleSidebar}>
            Close
          </button>
          <div className={`${styles.flex} ${styles.gap}`}>
          </div>
          <ul className={`${styles.pt}`}>
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`${styles.listItem} ${
                  Menu.gap && styles.mt9
                } ${index === 0 && styles.bgLight}`}
              >
                <span className={`${!open && styles.hidden}`}>{Menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
