import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
