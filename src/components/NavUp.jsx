import { AppBar, Container, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from "../assets/Logo.png";

const NavUp = () => {
  return (
    <>
      <Container className="container">
        <AppBar
          className="appbar"
          sx={{
            boxShadow: "none",
          }}
        >
          <Stack
            direction="row"
            sx={{
              boxShadow: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              height: "72px",
              bgcolor: "#fff",
              color: "black",
            }}
          >
            <div className="logo">
              <img src={Logo} alt="Destinize" width="119px" height="29px" />
            </div>
            <div className="Search">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="search-input"
              />
            </div>
            <div
              className="lang"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <LanguageIcon />
              <Typography variant="subtitle2">Bahasa Indonesia</Typography>
              <ArrowDropDownRoundedIcon />
            </div>
            <div className="location" style={{}}>
              <LocationOnIcon />
              <div className="sub-text">
                <Typography variant="subtitle2">Lokasi</Typography>
                <Stack className="flex-row">
                  <span>Indonesia, Yogyakarta</span>
                  <ArrowDropDownRoundedIcon />
                </Stack>
              </div>
            </div>
          </Stack>
        </AppBar>
      </Container>
    </>
  );
};

export default NavUp;
