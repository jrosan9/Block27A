import React from "react";
import PrimaryDashboard from "./PrimaryDashboard";
import Heading from "./Heading";
import SideBar from "./Sidebar";
import TransactionBar from "./TransactionBar";
import { Dashboard } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { QuestionMark } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
export default function mainDashboard() {
  const toggleDashboard = () => {};
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen, boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <p>The King's Restaurant</p>
      <List>
        {["Dashboard", "FAQ Page"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Home /> : <QuestionMark />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <Dashboard></Dashboard>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <PrimaryDashboard />
      <Heading />
      <SideBar />
      <TransactionBar />
    </>
  );
}
