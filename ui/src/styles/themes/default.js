import colors from "../colors";

export default {
  font: {
    colors: {
      primary: colors.black,
    },
  },
  size: {
    content: {
      maxWidth: "840px",
    },
    wrapper: {
      paddingH: "6px",
    },
  },
  shadows: {
    low: `-0.2px 0.6px 0.7px hsl(${colors.shadow} / 0.34),
    -0.4px 1px 1.2px -1.2px hsl(${colors.shadow} / 0.34),
    -0.9px 2.4px 2.9px -2.5px hsl(${colors.shadow} / 0.34)`,
    mid: `0px 0.5px 0.5px hsl(${colors.shadow} / 0.33),
    -0.1px 1.3px 1.4px -0.9px hsl(${colors.shadow} / 0.31),
    -0.3px 3.4px 3.7px -1.9px hsl(${colors.shadow} / 0.29),
    -0.6px 8.5px 9.1px -2.8px hsl(${colors.shadow} / 0.27)`,
    high: `0px 0.5px 0.5px hsl(${colors.shadow} / 0.31),
    -0.2px 2.1px 2.3px -0.4px hsl(${colors.shadow} / 0.3),
    -0.3px 3.8px 4.1px -0.8px hsl(${colors.shadow} / 0.29),
    -0.5px 6.4px 6.9px -1.2px hsl(${colors.shadow} / 0.28),
    -0.8px 10.4px 11.2px -1.6px hsl(${colors.shadow} / 0.27),
    -1.3px 16.6px 17.9px -2px hsl(${colors.shadow} / 0.26),
    -1.9px 25.5px 27.4px -2.4px hsl(${colors.shadow} / 0.25),
    -2.9px 37.9px 40.8px -2.8px hsl(${colors.shadow} / 0.24)`,
  },
  buttons: {
    colors: {
      primaryBg: colors.white,
      primary: colors.red,
      border: colors.black80,
    },
  },
  header: {
    colors: {
      bottomBorder: colors.black80,
      title: colors.black,
      logo: colors.red,

      searchBorder: colors.black80,
      searchBg: colors.white,
      searchIcon: colors.white,
      searchIconBg: colors.red,

      keyColor: colors.black60,
      keyBg1: colors.black80,
      keyBg2: colors.white,
      keyBShadow1: colors.black80,
      keyBShadow2: colors.white,
      keyBShadow3: colors.black60,

      chipHamburgerIcon: colors.black60,
      chipAvatarBg: colors.black80,
    },
  },
  actionBar: {
    colors: {
      bottomBorder: colors.black80,

      categoryIcon: colors.black60,
      categoryName: colors.black60,
    },
  },
};
