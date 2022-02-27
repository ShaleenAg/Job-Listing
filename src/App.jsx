import React from "react";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import theme from "./theme";
import responseData from "./data.json";
import "./index.css";
import Header from "./Components/header";
import SearchBar from "./Components/searchBar";
import JobCard from "./Components/job/jobCard";
function App() {
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilterData] = useState([]);

  const FilterTags = () => {
    console.log('FilterTags triggered')
    return (
      <div
        className="filters"
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "10px",
          marginBottom: "24px",
        }}
      >
        {filters.map((filter, index) => {
          return (
            <div
              className="filter-tag"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
              key={index}
            >
              <Paper
                elevation={0}
                className="filter-name"
                sx={{
                  backgroundColor: "#FFF",
                  fontFamily: "Spartan",
                  fontWeight: "700",
                  height: "100%",
                  padding: "3px 8px",
                  color: "#5CA5A5",
                  borderRadius: "4px 0px 0px 4px",
                }}
              >
                {filter}
              </Paper>
              <Paper
                data-filter={filter}
                elevation={0}
                className="close-button"
                onClick={(event) => {
                  console.log("close button", event.target.dataset.filter);
                  setFilters(
                    filters.filter((fil) => fil !== event.target.dataset.filter)
                  );
                }}
                sx={{
                  backgroundColor: "#5CA5A5",
                  color: "#FFF",
                  height: "100%",
                  fontFamily: "Spartan",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "3px 8px",
                  borderRadius: "0px 4px 4px 0px",
                }}
              >
                X
              </Paper>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (filters.length !== 0) {
      const newData = responseData.filter((resp) => {
        return filters.every((filter) => {
          return (
            resp.role === filter ||
            resp.level === filter ||
            resp.tags.includes(filter)
          );
        });
      });
      setFilterData(newData);
      console.log('filtered jobs')
    } else {
      setFilterData(responseData);
    }
  }, [filters]);

  const filterHandler = (filter) => {
    console.log('filter handler triggered')
    const index = filters.findIndex(
      (element) => filter.toLowerCase() === element.toLowerCase()
    );
    if (index === -1) setFilters([...filters, filter]);
    else console.log('filters already present', filter)
  };

  useEffect(() => {
    console.log("filters are", filters);
  }, [filters]);
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
          <SearchBar filterHandler={filterHandler} />
          {filters.length > 0 && <FilterTags />}
          {/* {responseData.map((response) => (
                    <h1>{response.company}</h1>
                ))} */}
          <div className="job-list">
            {filteredData.map((resp) => (
              <JobCard {...resp} filterHandler={filterHandler} key={resp.id} />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
