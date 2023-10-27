import React from "react";
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { section1Content } from "../utils/content";
import LaunchButton from "../components/buttons/LaunchButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Google } from "@mui/icons-material";

const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content;

const CustomButton = ({ children }) => (
  <Button
    variant="outlined"
    sx={{
      //justifyContent: 'flex-start',
      borderRadius: 4,
      color: "text.primary",
      borderColor: "text.primary",
      height: 58,
    }}
  >
    {children}
  </Button>
);

const Section1 = () => {
  return (
    <Box>
      {/*main background*/}
      <Box sx={{ position: "fixed", zIndex: -25, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} />
      </Box>
      {/*background elements*/}
      <Box
        sx={{ position: "absolute", with: "100%", top: 0, left: 0, right: 0 }}
      >
        <img src={ShootingStarImage} style={{ position: "absolute" }} />
        <img src={TreesImage} style={{ position: "absolute" }} />
        <img src={CliffImage} style={{ position: "absolute" }} />
        <img src={HorseImage} style={{ position: "absolute" }} />
      </Box>
      {/*content*/}
      <Container sx={{ height: "80vh" }}>
        <Stack sx={{ height: "inherit" }} justifyContent="center">
          <Typography variant="h1" sx={{ letterSpacing: "0.02em", mb: 1 }}>
            {title}
          </Typography>

          <Typography variant="h2" sx={{ letterSpacing: "0.05em", mb: 5 }}>
            {subtitle}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            <LaunchButton sx={{ height: 58, px: 3 }} />
            <CustomButton>
              <AppleIcon sx={{ fontSize: 36, ml: -1 }} />
              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Download on the
                </Typography>
                <Typography variant="h5">App Store</Typography>
              </Stack>
            </CustomButton>
            <CustomButton>
              <GoogleIcon sx={{ fontSize: 36, ml: -1 }} />
              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Get it on
                </Typography>
                <Typography variant="h5">Google Play</Typography>
              </Stack>
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
