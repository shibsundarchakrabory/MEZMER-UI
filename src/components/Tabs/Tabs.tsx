import React, { useState } from "react";
import styles from "./Tabs.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import { TabsProps, Tab } from "./types";

const Tabs: React.FC<TabsProps> = ({ tabs, theme = "default" }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label || "");

  let containerClassName = `${styles.tabsContainer} `;
  containerClassName += ThemeFunctionConponent(theme);

  return (
    <div className={containerClassName}>
      <div className={styles.tabList}>
        {tabs.map((tab: Tab) => (
          <button
            key={tab.label}
            className={`${styles.tabButton} ${
              activeTab === tab.label ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.find((tab: Tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
