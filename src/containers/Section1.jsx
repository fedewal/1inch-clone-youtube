import React from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Button,
  Hidden,
} from "@mui/material";
import { section1Content } from "../utils/content";
import LaunchButton from "../components/buttons/LaunchButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import useMeasure from "react-use-measure";
import Title from "../components/Title/index";

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
  const [ref, { height }] = useMeasure();
  return (
    <Box>
      {/*main background*/}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} style={{ width: "100%" }} />
      </Box>
      {/*background elements*/}
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG} style={{ width: "100%", opacity: 0 }} />
        <img
          src={ShootingStarImage}
          style={{
            position: "absolute",
            with: "100%",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />
        <Hidden mdDown>
          <img
            src={TreesImage}
            style={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              right: 0,
              left: 0,
            }}
          />
        </Hidden>

        <img
          src={CliffImage}
          style={{
            position: "absolute",
            height: "100%",
            right: 0,
            top: 0,
            backgroundSize: "cover",
          }}
        />
        <img
          src={HorseImage}
          style={{
            position: "absolute",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />
        <Box
          sx={{
            bgcolor: "background.default",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "500px",
            top: height,
          }}
        ></Box>
      </Box>
      {/*content*/}
      <Container sx={{ height: "80vh" }}>
        <Stack sx={{ height: "inherit" }} justifyContent="center">
          <Title variant={{xs:"h3", sm:"h2", md:"h1"}} sx={{ letterSpacing: "0.02em", mb: 1 }}>
            {title}
          </Title>

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
