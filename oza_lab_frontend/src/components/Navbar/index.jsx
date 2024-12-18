import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { Button, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BiotechIcon from "@mui/icons-material/Biotech";
import GetUserById from "../Actions/GetUserById";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NavBar = ({ open, setOpen }) => {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [openUserCollapse, setOpenUserCollapse] = React.useState(false);
  const [openTestCollapse, setOpenTestCollapse] = React.useState(false);
  const [openReportsCollapse, setOpenReportsCollapse] = React.useState(false);
  const [openSlotsCollapse, setOpenSlotsCollapse] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  function handleOpenSettings() {
    setOpenCollapse(!openCollapse);
  }

  function handleUserOpenSettings() {
    setOpenUserCollapse(!openUserCollapse);
  }

  function handleOpenTestsSettings() {
    setOpenTestCollapse(!openTestCollapse);
  }

  function handleOpenReportsSettings() {
    setOpenReportsCollapse(!openReportsCollapse);
  }
  function handleOpenSlotsSettings() {
    setOpenSlotsCollapse(!openSlotsCollapse);
  }

  React.useEffect(() => {
    const getUser = async () => {
      const userData = await GetUserById(localStorage.getItem("userId"));
      setUserData(userData.data);
    };
    getUser();
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={() => {
              if (
                localStorage.getItem("rolId") === "1" ||
                localStorage.getItem("rolId") === "2"
              ) {
                navigate("/dashboard");
              } else {
                navigate("/user/dashboard");
              }
            }}
            variant="h6"
            noWrap
            component="div"
          >
            OZA-LAB
          </Button>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "end",
              alignContent: "end",
              textAlign: "right",
            }}
          >
            <span>
              <PersonIcon />
              {userData.firstName} {userData.lastName}
            </span>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flex: '1' }}> */}
          {/* <Button onClick={() => {
              navigate('/dashboard')
            }}>
              OZA-LAB
            </Button> */}
          <img
            src={require("../../assets/images/oza-lab-logo.png")}
            alt="logo"
            height="50px"
            style={{ marginRight: "30px" }}
          />
          {localStorage.getItem("roleId") === "1" ? (
            <span style={{ fontSize: "13px", marginRight: "20px" }}>
              Super Admin
            </span>
          ) : localStorage.getItem("roleId") === "2" ? (
            "Admin"
          ) : (
            "User"
          )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          {/* </div> */}
        </DrawerHeader>
        <Divider />
        <List>
          {localStorage.getItem("roleId") === "1" ||
          localStorage.getItem("roleId") === "2" ? (
            <ListItem key={1} disablePadding>
              <ListItemButton onClick={() => navigate("/dashboard")}>
                <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem key={1} disablePadding>
              <ListItemButton onClick={() => navigate("/user/dashboard")}>
                <ListItemIcon>{<SummarizeIcon />}</ListItemIcon>
                <ListItemText primary={"Reports"} />
              </ListItemButton>
            </ListItem>
          )}
          {localStorage.getItem("roleId") === "1" ? (
            <>
              <ListItem button onClick={handleUserOpenSettings}>
                <ListItemIcon>{<CoPresentIcon />}</ListItemIcon>
                <ListItemText primary="Users" />
                {openUserCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openUserCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => navigate("/user/addUser")}>
                    <ListItemText inset primary="Add User" />
                  </ListItemButton>
                  <ListItemButton onClick={() => navigate("/user/viewUser")}>
                    <ListItemText inset primary="View User" />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          ) : (
            localStorage.getItem("roleId") === "2" && (
              <>
                <ListItem key={1} disablePadding>
                  <ListItemButton onClick={() => navigate("/user/viewUser")}>
                    <ListItemIcon>{<PersonIcon />}</ListItemIcon>
                    <ListItemText primary={"View User"} />
                  </ListItemButton>
                </ListItem>
              </>
            )
          )}
          {(localStorage.getItem("roleId") === "1" ||
            localStorage.getItem("roleId") === "2") && (
            <>
              <ListItem button onClick={handleOpenSettings}>
                <ListItemIcon>{<PersonIcon />}</ListItemIcon>
                <ListItemText primary="Patients" />
                {openCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/patient/addPatient")}
                  >
                    <ListItemText inset primary="Add Patient" />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => navigate("/patient/viewPatient")}
                  >
                    <ListItemText inset primary="View Patient" />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}
          {localStorage.getItem("roleId") === "1" ? (
            <>
              <ListItem button onClick={handleOpenTestsSettings}>
                <ListItemIcon>{<BiotechIcon />}</ListItemIcon>
                <ListItemText primary="Tests" />
                {openTestCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openTestCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => navigate("/test/addTest")}>
                    <ListItemText inset primary="Add Test" />
                  </ListItemButton>
                  <ListItemButton onClick={() => navigate("/test/viewTest")}>
                    <ListItemText inset primary="View Test" />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          ) : localStorage.getItem("roleId") === "2" ? (
            <>
              <ListItem key={1} disablePadding>
                <ListItemButton onClick={() => navigate("/test/viewTest")}>
                  <ListItemIcon>{<BiotechIcon />}</ListItemIcon>
                  <ListItemText primary={"Tests"} />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem key={1} disablePadding>
                <ListItemButton onClick={() => navigate("/test/viewTest")}>
                  <ListItemIcon>{<BiotechIcon />}</ListItemIcon>
                  <ListItemText primary={"Tests"} />
                </ListItemButton>
              </ListItem>
              <ListItemButton onClick={() => navigate("/homeVisit/add")}>
                <ListItemIcon>
                  <BookOnlineIcon />
                </ListItemIcon>
                <ListItemText primary="Book Slot" />
              </ListItemButton>
              <ListItem key={1} disablePadding>
                <ListItemButton onClick={() => navigate("/")}>
                  <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            </>
          )}
          {(localStorage.getItem("roleId") === "1" ||
            localStorage.getItem("roleId") === "2") && (
            <>
              <ListItem button onClick={handleOpenReportsSettings}>
                <ListItemIcon>{<DescriptionIcon />}</ListItemIcon>
                <ListItemText primary="Reports" />
                {openReportsCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openReportsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/reports/AddReport")}
                  >
                    <ListItemText inset primary="Create report" />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => navigate("/reports/ViewReport")}
                  >
                    <ListItemText inset primary="View Reports" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItem button onClick={handleOpenSlotsSettings}>
                <ListItemIcon>{<InsertInvitationIcon />}</ListItemIcon>
                <ListItemText primary="Slots" />
                {openSlotsCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openSlotsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/homeVisit/pending")}
                  >
                    <ListItemText inset primary="Pending request" />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => navigate("/homeVisit/approved")}
                  >
                    <ListItemText inset primary="Approved request" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItem key={1} disablePadding>
                <ListItemButton onClick={() => navigate("/")}>
                  <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
        <Divider />
        <List></List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
};

export default NavBar;
