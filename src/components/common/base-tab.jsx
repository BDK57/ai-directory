import { Tabs, Tab } from "@heroui/tabs";
import { useState } from "react";

const BaseTab = ({
  items = [],
  defaultSelectedKey = "1",
  variant = "underlined", // bordered, light, underlined
  color = "primary", // primary, secondary, success, warning, danger
  radius = "md", // none, sm, md, lg, full
  size = "md", // sm, md, lg
  className = "",
  onSelectionChange = () => {},
  classNames = {},
}) => {
  const [selected, setSelected] = useState(defaultSelectedKey);

  const handleSelectionChange = (key) => {
    setSelected(key);
    onSelectionChange(key);
  };

  // Default classNames
  const defaultClassNames = {
    tabList: "gap-2",
    tab: "data-[selected=true]:bg-red-500 data-[selected=true]:text-primary-white transition-colors",
    tabContent: "group-data-[selected=true]:text-primary-white",
    cursor: "bg-red-500",
  };

  // Merge default and custom classNames (override only `cursor` if provided)
  const mergedClassNames = {
    ...defaultClassNames,
    ...classNames, // Overrides only the provided keys (e.g., cursor)
  };

  return (
    <div className={className}>
      <Tabs
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        variant={variant}
        color={color}
        radius={radius}
        size={size}
        aria-label="Dynamic Tabs"
        classNames={mergedClassNames}
      >
        {items.map((item) => (
          <Tab
            key={item.id}
            id={item.id}
            title={
              <div className="flex items-center gap-2">
                {item.icon && <span>{item.icon}</span>}
                <span>{item.title}</span>
                {item.count && (
                  <span className="text-xs bg-primary-white-20 px-2 py-1 rounded-full">
                    {item.count}
                  </span>
                )}
              </div>
            }
            disabled={item.disabled}
          >
            <div className="p-4">{item.content}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default BaseTab;
