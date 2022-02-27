import React from "react";
import { Box } from "@mui/material";
import headerMobile from "../images/bg-header-mobile.svg";
import headerDesktop from "../images/bg-header-desktop.svg";
const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url(${headerMobile})`,
          md: `url(${headerDesktop})`,
          lg: `url(${headerDesktop})`,
        },
        height: "150px",
        borderBottom: "3px solid hsl(180, 29%, 50%)",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    />
  );
};

export default Header;
