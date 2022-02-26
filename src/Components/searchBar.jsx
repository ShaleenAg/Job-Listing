import React from "react";
import { Paper, Box, TextField} from "@mui/material";
import responseData from "../data.json"
import { useState } from "react";
const SearchBar = () => {
  const topResposnes = ["HTML", "Senior", "Junior", "React", "CSS"]
  const [searchResponses, setSearchResponses] = useState([])
  return (
    <Box
      sx={{
        marginTop: "-30px",
        width: "100%",
        marginBottom: "50px",
      }}
    >
      <Paper elevation={5} sx={{ padding: "20px" }}>
        <TextField
          variant="standard"
          sx={{
            color: "#2B3939",
          }}
          InputProps={{
            disableUnderline: true,
            placeholder: "Search",
            style: {
              color: "#2B3939",
              fontWeight: "bold",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar