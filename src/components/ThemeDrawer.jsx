import { useThemeContext } from '../context/ThemeContext';
import { Drawer } from 'vaul';

import SVGclose from "../assets/icons/close.svg?react";
//import SVGpicker from "../assets/icons/color-picker.svg?react";
import './ThemeDrawer.css';

export function ThemeDrawer({children}) {
  const { color, setColor } = useThemeContext();
  const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "purple"];

  return (
    <Drawer.Root>
      <Drawer.Trigger className="vaul-drawer-trigger">
        {children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="vaul-drawer-overlay" />
        <Drawer.Content className="vaul-drawer-content">
          <Drawer.Close className="vaul-drawer-close"><SVGclose /></Drawer.Close>
          <span className="vaul-drawer-handle"></span>
          <Drawer.Title className="vaul-drawer-title">Choose Colour</Drawer.Title>
          <button className="theme-colors">
            {colors.map((c) => (
              <span
                key={c}
                className={`theme-color theme-color-${c} ${color === c ? "active" : ""}`}
                onClick={() => setColor(c)}
              ></span>
            ))}
          </button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}