import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BasicSkill } from "./ChildTabs";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    color: "gray",
    "&.Mui-selected": {
      color: "#4EE1A0",
    },
    "& .MuiTabs-indicator": {
      bgcolor: "#4EE1A0",
    },
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="none"
          >
            <Tab label="Web Basic" value="1" sx={tabStyles} />
            <Tab label="API" value="2" sx={tabStyles} />
            <Tab label="Other" value="3" sx={tabStyles} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <BasicSkill type="skill" />
        </TabPanel>
        <TabPanel value="2">
          <BasicSkill type="api" />
        </TabPanel>
        <TabPanel value="3">
          <BasicSkill type="other" />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
