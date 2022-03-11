import React from "react";
import {
  Paper,
  Box,
  TextField,
  Button,
  ListItemText,
  List,
  Divider,
  ListItemButton,
} from "@mui/material";
import { useState, useRef } from "react";

const topResponses = ["HTML", "Senior", "Junior", "React", "CSS"];
const searchSuggestions: string[] = [
  "Fullstack",
  "Midweight",
  "Python",
  "React",
  "JavaScript",
  "Sass",
  "CSS",
  "Backend",
  "Junior",
  "Ruby",
  "RoR",
  "HTML",
  "Frontend",
  "Vue",
  "Django",
];
interface TopSuggestionsProps {
  filterHandler: (filter: string) => void;
}
const TopSuggestions = ({ filterHandler }: TopSuggestionsProps) => {
  return (
    <Paper
      elevation={5}
      sx={{ maxWidth: { xs: "100%", md: "45%" }, marginTop: "10px" }}
    >
      <List sx={{ paddingTop: "20px", paddingBottom: "30px" }}>
        {topResponses.map((response, index) => {
          return (
            <>
              <ListItemButton
                key={index}
                sx={{
                  paddingTop: "20px",
                  paddingBottom: "10px",
                }}
                onClick={(
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) => {
                  console.log("top suggestion clicked");
                  const text = (event.target as Node).textContent || "";
                  filterHandler(text);
                }}
              >
                <ListItemText
                  primary={response}
                  primaryTypographyProps={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                />
                {/* <p>{response}</p> */}
              </ListItemButton>
              <Divider variant="middle" textAlign="center" />
            </>
          );
        })}
      </List>
    </Paper>
  );
};

interface SuggestionProps {
  responses: JSX.Element[];
}

const Suggestions = ({ responses }: SuggestionProps) => {
  return (
    <Paper
      elevation={5}
      sx={{ maxWidth: { xs: "100%", md: "45%" }, marginTop: "10px" }}
    >
      <List sx={{ paddingTop: "20px", paddingBottom: "30px" }}>
        {responses.map((resp) => (
          <>
            {resp}
            <Divider variant="middle" textAlign="center" />
          </>
        ))}
      </List>
    </Paper>
  );
};
interface SearchBarProps {
  filterHandler: (filter: string) => void;
}
const SearchBar = ({ filterHandler }: SearchBarProps) => {
  const intialResponse: JSX.Element[] = [];
  const [searchResponses, setSearchResponses] = useState(intialResponse);
  const [isFocused, setFocus] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [showSuggestions, setSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const buildSuggestions = (eventValue: string) => {
    setSearchResponses(
      searchSuggestions
        .filter((suggestion: string) => {
          const lowerSuggestion = suggestion.toLowerCase();
          const val = eventValue.toLowerCase();
          return lowerSuggestion.indexOf(val) > -1;
        })
        .map((suggestion) => {
          const lowerSuggestion = suggestion.toLowerCase();
          const val = eventValue.toLowerCase();
          const ind = lowerSuggestion.indexOf(val);
          return (
            <ListItemButton
              sx={{
                paddingTop: "20px",
                paddingBottom: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              onClick={(event) => {
                console.log("build suggestions item clicked", event);
                const text = (event.target as Node).textContent || "";
                filterHandler(text);
              }}
            >
              {suggestion.substring(0, ind)}
              <mark style={{ backgroundColor: "#f7e7d0" }}>
                {suggestion.substring(ind, ind + val.length)}
              </mark>
              {suggestion.substring(ind + val.length, suggestion.length)}
            </ListItemButton>
          );
        })
    );
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;
    console.log("current value is ", eventValue);
    if (eventValue !== "") {
      setSuggestions(false);
    } else {
      setSuggestions(true);
    }

    setSearchValue(eventValue);

    buildSuggestions(eventValue);
  };
  return (
    <Box
      sx={{
        marginTop: "-30px",
        width: "100%",
        marginBottom: "24px",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          variant="standard"
          sx={{
            color: "#2B3939",
          }}
          fullWidth
          onFocus={() => {
            setFocus(true);
            setSuggestions(true);
            if (searchValue !== "") buildSuggestions(searchValue);
          }}
          onBlur={() => {
            setTimeout(() => {
              setFocus(false);
              setSuggestions(false);
            }, 200);
            // setFocus(false);
            // setSuggestions(false);
          }}
          onChange={handleOnChange}
          inputRef={searchRef}
          InputProps={{
            disableUnderline: true,
            placeholder: "Search",
            style: {
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
            },
          }}
        />
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "#C5C5C5",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          onClick={() => {
            if (searchRef.current !== null) {
              const val = searchRef.current.value;
              const index = searchSuggestions.findIndex((element) => {
                return element.toLowerCase() === val;
              });
              if (index > -1) filterHandler(searchSuggestions[index]);
              else filterHandler(val);
            }
          }}
        >
          Submit
        </Button>
      </Paper>
      {isFocused && showSuggestions && searchValue === "" && (
        <TopSuggestions filterHandler={filterHandler} />
      )}

      {isFocused && !showSuggestions && searchValue !== "" && (
        <Suggestions responses={searchResponses} />
      )}
    </Box>
  );
};

export default SearchBar;
