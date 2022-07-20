export const breakpoints = {
  mobile: "320px",
  tablet: "481px",
  laptop: "769px",
  desktop: "1025px",
};

export default {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
