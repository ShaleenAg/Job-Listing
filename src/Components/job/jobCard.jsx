import React from "react";
import { Box, Paper, Grid } from "@mui/material";
import resp from "../../data.json";
import { borderRadius } from "@mui/system";
const New = () => (
  <div
    className="new"
    style={{
      borderRadius: "12px",
      background: "#5CA5A5",
      fontSize: "11px",
      fontWeight: "bold",
      padding: "5px 10px",
      marginRight: "5px",
      textAlign: "center",
      color: "white",
    }}
  >
    NEW!
  </div>
);
const Featured = () => (
  <div
    className="featured"
    style={{
      borderRadius: "12px",
      background: "#2B3939",
      color: "white",
      fontSize: "11px",
      fontWeight: "bold",
      padding: "5px 10px",
      textAlign: "center",
    }}
  >
    FEATURED
  </div>
);
const JobCard = ({
  company,
  logo,
  position,
  role,
  newJob,
  level,
  postedAt,
  type,
  location,
  tags,
  featured,
}) => {
  // const {
  //   company,
  //   logo,
  //   position,
  //   role,
  //   newJob,
  //   level,
  //   postedAt,
  //   type,
  //   location,
  //   tags,
  //   featured,
  // } = resp[0];

  console.log("new job is", resp[0], company);
  const filterTags = [role, level, ...tags];
  return (
    <Box
      className="job-container"
      sx={{
        marginBottom: "20px",
        boxShadow: "5",
      }}
    >
      <Paper className="job-details" sx={{ border: "1px solid white" }}>
        <Box className="job-main" sx={{ margin: "20px" }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={2} lg={1}>
              <div
                className="company-logo"
                style={{
                  width: "100%",
                }}
              >
                <img src={logo} alt={company} style={{ maxWidth: "100%" }} />
              </div>
            </Grid>
            <Grid item xs={12} md={10} lg={5.5}>
              <div
                className="details-main"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="company-details"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="company-name"
                    style={{
                      color: "#5CA5A5",
                      fontSize: "14px",
                      marginRight: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {company}
                  </div>
                  {newJob && <New />}
                  {featured && <Featured />}
                </div>

                <div className="role" style={{ marginBottom: "5px" }}>
                  <b>{position}</b>
                </div>
                <div className="location-type">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      fontSize: "15px",
                      color: "#7C8F8F",
                      padding: "0",
                      margin: "0",
                      listStylePosition: "inside",
                      flexWrap: "wrap",
                    }}
                  >
                    <li style={{ marginRight: "20px", listStyleType: "none" }}>
                      {postedAt}
                    </li>
                    <li style={{ marginRight: "20px" }}>{type}</li>
                    <li style={{ marginRight: "20px" }}>{location}</li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={5}
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: { lg: "end" },
                marginLeft: { md: "16.5%" , lg:"0"},
              }}
            >
              {filterTags.map((tag) => (
                <div
                  className="filter-tags"
                  style={{
                    display: "flex",
                    backgroundColor: "hsl(180, 52%, 96%)",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#5CA5A5",
                    padding: "5px",
                    borderRadius: "4px",
                    marginRight: "10px",
                  }}
                >
                  {tag}
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default JobCard;
