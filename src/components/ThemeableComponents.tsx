import redThemeMap from "../themes/red";
import blueThemeMap from "../themes/blue";
import defaultThemeMap from ".";

import { Themes, useThemeContext } from "../ThemeContext";

interface ThemeableComponentsProps {
  theme?: Themes;
  [key: string]: unknown;
}

const componentMap = {
  red: redThemeMap,
  blue: blueThemeMap,
  default: defaultThemeMap
};

const ThemeableComponents = new Proxy(defaultThemeMap, {
  get(target, prop, reciever) {
    return ({ theme: override, ...props }: ThemeableComponentsProps) => {
      const { currentTheme } = useThemeContext();

      const theme = override ?? currentTheme;

      const components = {
        ...target,
        ...componentMap[theme]
      };

      // @NOTE
      // - Handle symbol props normally
      // - This is just to prevent errors
      if (typeof prop !== "string") {
        return Reflect.get(target, prop, reciever);
      }

      // @NOTE
      // - Deliberately check target keys
      // - This reminds devs to add new components to the defaults
      if (!(prop in target)) {
        throw new Error(
          `'${prop}' does not exist on 'ThemeableComponents', have you added it to the default component map?`
        );
      }

      return components[prop as keyof typeof components](props);
    };
  }
});

export default ThemeableComponents;
