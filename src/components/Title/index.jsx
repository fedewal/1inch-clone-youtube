import { Typography } from "@mui/material";
import React from "react";

const Title = ({ variant = "h6", sx = {}, children, ...props }) => {
  const _component =
    typeof variant !== "object"
      ? variant
      : variant.xl || variant.md || variant.sm || variant.sx || "";

  const _variantStyles =
    typeof variant !== "object"
      ? variant
      : {
          xs: variant.xs,
          sm: variant.sm || variant.xs,
          md: variant.md || variant.sm || variant.xs,
          xl:
            variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
        };
  return (
    <Typography
      variant=""
      sx={{
        ...sx,
        typography: typeof _variantStyles === "object" && _variantStyles,
      }}
      component = {_component}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
