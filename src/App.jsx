import React from "react";
import { useState } from "react";
import { Paper, Box, Card } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import theme from "./theme";
import responseData from "./data.json";
import "./index.css";
import Header from "./Components/header";
import SearchBar from "./Components/searchBar";
import JobCard from "./Components/job/jobCard";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <div
          className="main"
          style={{
            maxWidth: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10%",
          }}
        >
          <SearchBar />
          {/* {responseData.map((response) => (
                    <h1>{response.company}</h1>
                ))} */}
          <div className="job-list" >
            {responseData.map((resp) => (
              <JobCard {...resp} />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
