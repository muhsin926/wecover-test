import { Box, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import tickIcon from "../../assets/Icons/Icon.png";
import PropTypes from "prop-types";
import "../../styles/style.css";

export const CompanyInfo = ({ companies }) => {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        {companies.map((company, i) => (
          <Grid
            container
            key={i}
            sx={{
              border: "1px solid  rgb(0,0,0, .15)",
              padding: 3,
              borderRadius: 5,
              marginBottom: 3,
            }}
          >
            <Grid item xs={12} sm={2}>
              <img src={company.log} alt="" />
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={3}>
                {company.info.map((data) => (
                  <>
                    <Grid key={data.company} item xs={12} sm={6} md={4}>
                      <Typography
                        className="subtitle2"
                        variant="subtitle2"
                      >
                        Company
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {data.company}
                      </Typography>
                    </Grid>
                    <Grid key={data.company} item xs={12} sm={6} md={4}>
                      <Typography className="subtitle2" variant="subtitle2">
                        Insurance Type
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {data.insuranceType}
                      </Typography>
                    </Grid>
                    <Grid key={data.company} item xs={12} sm={6} md={4}>
                      <Typography className="subtitle2" variant="subtitle2">
                        Final Price
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {data.finalPrice}
                      </Typography>
                    </Grid>
                    <Grid key={data.company} item xs={12} sm={6} md={4}>
                      <Typography className="subtitle2" variant="subtitle2">
                        Repair Type
                      </Typography>
                      <Typography variant="body1">{data.repairType}</Typography>
                    </Grid>
                    <Grid key={data.company} item xs={12} sm={6} md={4}>
                      <Typography className="subtitle2" variant="subtitle2">
                        Car Value
                      </Typography>
                      <Typography variant="body1">{data.carValue}</Typography>
                    </Grid>
                    <Grid key={data.company} item xs={12} sm={6} md={4}>
                      <Typography className="subtitle2" variant="subtitle2">
                        Excess
                      </Typography>
                      <Typography variant="body1">{data.excess}</Typography>
                    </Grid>
                  </>
                ))}
              </Grid>

              <Typography
                my={2}
                sx={{ marginTop: 5 }}
                className="subtitle2"
                variant="subtitle2"
              >
                What is Covered
              </Typography>
              <Grid container>
                {company.covered.map((data) => (
                  <Grid
                    key={data}
                    item
                    xs={6}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <img
                      src={tickIcon}
                      style={{ width: "12px", height: "12px" }}
                      alt=""
                    />
                    <Typography variant="body1">{data}</Typography>
                  </Grid>
                ))}
              </Grid>

              <Typography
                my={2}
                sx={{ marginTop: 5 }}
                className="subtitle2"
                variant="subtitle2"
              >
                Add-Ons
              </Typography>
              <Grid container rowSpacing={2}>
                {company.addOnes.map((data) => (
                  <Grid key={data} item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 1,
                      }}
                    >
                      <Typography variant="body1">{data.title}</Typography>
                      <FormControlLabel
                        control={<Switch checked={data.switch} />}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
};

CompanyInfo.propTypes = {
  companies: PropTypes.array,
};
