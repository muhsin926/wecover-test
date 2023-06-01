import {
  Box,
  Button,
  Grid,
  Hidden,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Companies } from "./Companies";
import { SideBar } from "./SideBar";
import { SearchOutlined } from "@mui/icons-material";
import { Replay } from "@mui/icons-material";
import { companies } from "./constant";
import "../../styles/style.css";

export const SelectingCompanies = () => {
  return (
    <Box className="outerBox">
      <Box className="mainBox" sx={{ width: "100%" }}>
        <Grid container>
          <Hidden mdDown>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: 2,
              }}
            >
              <TextField
                sx={{ width: "20rem" }}
                placeholder="Search by key-word or value"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <Button sx={{ color: "black" }} startIcon={<Replay />}>
                Reset Filters
              </Button>
            </Box>
            <Companies companies={companies} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
