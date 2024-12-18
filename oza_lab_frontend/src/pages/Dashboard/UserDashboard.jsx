import React, { useEffect, useState } from "react";
import DashboardItem from "../../components/DashboardItem";
import Navbar from "../../components/Navbar";
// import Sidebar from '../../components/Sidebar'
import { styled } from "@mui/material/styles";
import UserDashboardItem from "../../components/DashboardItem/UserDashboardItem";
import ReportTable from "../../components/Report/ReportTable";
import { useNavigate } from "react-router-dom";

export const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${240}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('authorization') === ''  || localStorage.getItem('authorization') === undefined || localStorage.getItem("authorization") === null) {
      navigate('/')
    }
  })
  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <Main open={open}>
        <UserDashboardItem />
      </Main>
    </div>
  );
};

export default UserDashboard;
