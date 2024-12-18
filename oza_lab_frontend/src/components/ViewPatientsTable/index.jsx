import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import viewPatientAction from "../Actions/ViewPatients";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GetPatientById from "../Actions/GetPatientById";
import { useNavigate } from "react-router-dom";
import deletePatients from "../Actions/DeletePatients";
import viewUserAction from "../Actions/ViewUsers";
import viewTestAction from "../Actions/ViewTests";

const style = {
  width: "100px",
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    marginLeft: `240px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const ViewPatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [users, setUsers] = useState([]);
  const [tests, setTests] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const navigate = useNavigate();
  let sno = 0;
  useEffect(() => {
    const getPatients = async () => {
      const response = await viewPatientAction();
      const userResponse = await viewUserAction();
      const testResponse = await viewTestAction();
      if (response.data.patients) {
        setPatients(response.data.patients);
      } else {
        setPatients([]);
      }
      setUsers(userResponse.data);
      setTests(testResponse.data);
    };
    getPatients();
  }, [deleted]);

  const edit = async (id) => {
    const { data } = await GetPatientById(id);
    navigate("/patient/viewPatient/edit", { state: data });
  };

  const handleDelete = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePatient = async () => {
    const { data } = await deletePatients(id);
    setDeleted(!deleted);
    setOpen(false);
  };

  return (
    // <Main>
    //   <List>
    //     <ListItem>
    //       <ListItemText style={style}>
    //         <b>Sr No.</b>
    //       </ListItemText>
    //       <ListItemText style={style}>
    //         <b>Name</b>
    //       </ListItemText>
    //       <ListItemText style={style}>
    //         <b>Test Name</b>
    //       </ListItemText>
    //       <ListItemText style={style}>
    //         <b>Home Visit</b>
    //       </ListItemText>
    //       <ListItemText style={style}>
    //         <b>Actions</b>
    //       </ListItemText>
    //     </ListItem>

    //     {patients.length > 0 ? (
    //       patients.map((patient, index) => {
    //         const userData = users.filter((user) => user.id === patient.userId);
    //         const testData = tests.filter((test) => test.id === patient.testId);
    //         return (
    //           <ListItem key={index}>
    //             <ListItemText style={style}>{(sno += 1)}</ListItemText>
    //             <ListItemText style={style}>
    //               {userData[0].firstName} {userData[0].lastName}
    //             </ListItemText>
    //             <ListItemText style={style}>{testData[0].name}</ListItemText>
    //             <ListItemText style={style}>
    //               {patient.homeVisit === true ? "Yes" : "No"}
    //             </ListItemText>
    //             <ListItemText style={style}>
    //               <Button onClick={() => edit(patient.id)}>
    //                 <EditIcon />
    //               </Button>
    //               <Button onClick={() => handleDelete(patient.id)}>
    //                 <DeleteIcon />
    //               </Button>
    //               <Dialog
    //                 style={{ margin: "20px" }}
    //                 className="MuiDialog-root"
    //                 open={open}
    //                 keepMounted
    //                 onClose={handleClose}
    //                 aria-describedby="alert-dialog-slide-description"
    //               >
    //                 <DialogTitle>
    //                   {"Are you sure you want to delete this Patient? "}
    //                 </DialogTitle>
    //                 <DialogActions>
    //                   <Button onClick={handleClose}>Cancel</Button>
    //                   <Button onClick={() => deletePatient()}>
    //                     Confirm Delete
    //                   </Button>
    //                 </DialogActions>
    //               </Dialog>
    //             </ListItemText>
    //           </ListItem>
    //         );
    //       })
    //     ) : (
    //       <ListItem style={{ width: "100%" }}>No Patient Found</ListItem>
    //     )}
    //   </List>
    // </Main>

    <Main>
      <>
        <p>
          <h2 align="center">Patients Detail</h2>
          <br></br>
        </p>
      </>
      <div className="table-responsive">
        <table className=" table align-middle mb-0 bg-white table table-hover ">
          <thead className="bg-light ">
            <tr>
              <th className="fs-5 text-center">Sr No.</th>
              <th className="fs-5 text-center">Name</th>
              <th className="fs-5 text-center">Test Name</th>
              <th className="fs-5 text-center">Home Visit</th>
              {localStorage.getItem("roleId") === "1" && (
                <th className="fs-5 text-center">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient, index) => {
                const userData = users.filter(
                  (user) => user.id === patient.userId
                );
                const testData = tests.filter(
                  (test) => test.id === patient.testId
                );
                return (
                  <tr key={index}>
                    <td>
                      <p className="text-center fs-5">{(sno += 1)}</p>
                    </td>
                    <td>
                      <div className="align-items-center text-center ">
                        <div className="ms-1 ">
                          <p className=" mb-1 fs-5">
                            {userData[0].firstName} {userData[0].lastName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1 text-center fs-5">
                        {testData[0].name}
                      </p>
                    </td>
                    {/* {patient.homeVisit === true ? "Yes" : "No"} */}
                    <td>
                      <div className="text-center fs-5">
                        <p
                          className={` badge rounded-pill  fs-6 ${
                            patient.homeVisit === true
                              ? "bg-success"
                              : "bg-primary"
                          }`}
                        >
                          {patient.homeVisit === true ? "Yes" : "No"}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Button onClick={() => edit(patient.id)}>
                          <EditIcon />
                        </Button>
                        <Button onClick={() => handleDelete(patient.id)}>
                          <DeleteIcon />
                        </Button>
                        <Dialog
                          style={{ margin: "20px" }}
                          className="MuiDialog-root"
                          open={open}
                          keepMounted
                          onClose={handleClose}
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogTitle>
                            {"Are you sure you want to delete this Patient? "}
                          </DialogTitle>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => deletePatient()}>
                              Confirm Delete
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Patients Found.</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default ViewPatientsTable;
