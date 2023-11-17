import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/material";
import { useApp } from "@/app/contexts/AppContext";

export default function SearchBar() {
  const { project, setDisplayProject, setFilterProject } = useApp();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event, value) => {
    setSelectedValue(value);
  };

  // filter data after submit

  const filtered = ({ data, select }) => {
    return data.filter((item) => item.Tags.some((tag) => tag.name === select));
  };

  const handleSubmit = () => {
    if (selectedValue !== null) {
      const filterData = filtered({ data: project, select: selectedValue });
      setFilterProject(filterData);
      setDisplayProject(filterData.slice(0, 6));
    }
  };

  const handleClear = () => {
    setFilterProject(project);
    setDisplayProject(project.slice(0, 6));
  };

  // Get tag
  const tagNames = project.map((item) => {
    return item.Tags.map((tag) => tag.name);
  });

  // Flatten the array of arrays into one array
  const flatten = (arr) => arr.flat();
  const flattenedTags = flatten(tagNames);

  // Get unique values using Set and spread
  const uniqueTags = [...new Set(flattenedTags)];

  return (
    <Stack
      direction="row"
      sx={{
        height: "40px",
        border: "3px solid transparent",
        borderRadius: "20px",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={uniqueTags}
        sx={{
          width: 300,
          height: "50px",
          background: "white",
          borderRadius: "3px",
          "& .MuiInputBase-root": {
            height: "50px",
          },
        }}
        onChange={handleChange}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          );
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <button
        style={{
          width: "50px",
          height: "50px",
          border: "none",
          background: "#343434",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        style={{
          width: "50px",
          height: "50px",
          background: "#FD6687",
          border: "1px solid transparent",
          borderRadius: "0px 5px 5px 0px",
        }}
        onClick={handleClear}
      >
        Clear
      </button>
    </Stack>
  );
}
