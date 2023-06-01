import { Box, Grid, Typography } from "@mui/material";
import tickButton from "../../assets/Icons/radio-button.png";
import badgeButton from "../../assets/Icons/badge.png";
import { useContext } from "react";
import { Context } from "../../contexts/CommonContext";

const alignCenter = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};
const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
};

const plans = [
  {
    title: "Third-Party Insurance",
    amount: "599",
    show: false,
  },
  {
    title: "Comprehensive Insurance",
    amount: "1,355",
    show: true,
  },
];

export const Plans = () => {
  const { selectPlan, setSelectPlan } = useContext(Context);
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6" >Choose your Plan</Typography>
      <Grid container spacing={2} my={1}>
        {plans.map((data, i) => (
          <Grid key={data.title} item xs={12} sm={6}>
            <Box
              sx={{
                padding: 3,
                borderRadius: 3,
                background:
                  selectPlan === false && i === 0
                    ? "linear-gradient(101.27deg, rgb(154, 240, 45, .29) -1.28%, rgb(71, 207, 225, 0.12) 104.86%)"
                    : selectPlan === true && i === 1
                    ? "linear-gradient(101.27deg, rgb(154, 240, 45, .29) -1.28%, rgb(71, 207, 225, 0.12) 104.86%)"
                    : "#fff",
                maxWidth: "13rem",
                cursor: "pointer",
                border:  selectPlan === !false && i === 0 ? "1px solid  rgb(0,0,0, .15)" : selectPlan === !true && i === 1 ? "1px solid  rgb(0,0,0, .15)" : null
              }}
              onClick={() => setSelectPlan(data.show)}
            >
              <Grid container sx={{ marginBottom: 2 }}>
                <Grid item xs={10}>
                  <Typography variant="h5">{data.title}</Typography>
                </Grid>
                <Grid item xs={2} sx={center}>
                  {selectPlan === false && i == 0 ? (
                    <img src={tickButton} alt="" />
                  ) : selectPlan === true && i === 1 ? (
                    <img src={tickButton} alt="" />
                  ) : null}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="body2">starting from</Typography>
                  <Box sx={alignCenter}>
                    <Typography variant="body2">AED</Typography>
                    <Typography variant="h6">{data.amount}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={center}>
                  <img src={badgeButton} alt="" />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
