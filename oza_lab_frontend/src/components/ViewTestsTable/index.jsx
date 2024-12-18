import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import viewTestAction from "../Actions/ViewTests";
import deleteTests from "../Actions/DeleteTests";
import GetTestById from "../Actions/GetTestById";
import PermissionContext from "../../context/PermissionContext";
import { CAN_EDIT_TEST } from "../../constants/permission";
import { Table } from "react-bootstrap";
// import EditIcon from "@mui/icons-material/Edit";
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

const ViewTestsTable = () => {
  const [test, setTest] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const { permission } = useContext(PermissionContext);
  const navigate = useNavigate();
  let sno = 0;
  useEffect(() => {
    const getTests = async () => {
      const test = await viewTestAction();
      setTest(test.data);
    };
    getTests();
  }, [deleted]);

  const edit = async (id) => {
    const { data } = await GetTestById(id);
    navigate("/test/viewTest/edit", { state: data });
  };

  const deleteTest = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = async () => {
    const { data } = await deleteTests(id);
    if (data) {
      setDeleted(!deleted);
      setOpen(false);
    }
  };

  const handleClose = async (id) => {
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
    //         <b>Short Name</b>
    //       </ListItemText>
    //       <ListItemText style={style}>
    //         <b>Price</b>
    //       </ListItemText>
    //       <ListItemText style={style}>
    //         <b>Is Active</b>
    //       </ListItemText>
    //       {permission.includes(CAN_EDIT_TEST) && (
    //         <ListItemText style={style}>
    //           <b>Actions</b>
    //         </ListItemText>
    //       )}
    //     </ListItem>
    //     {test.length > 0 ? (
    //       test.map((test, index) => {
    //         return (
    //           <ListItem key={index}>
    //             <ListItemText style={style}>{(sno += 1)}</ListItemText>
    //             <ListItemText style={style}>{test.name}</ListItemText>
    //             <ListItemText style={style}>{test.shortName}</ListItemText>
    //             <ListItemText style={style}>{test.price}</ListItemText>
    //             <ListItemText style={style}>
    //               <span
    //                 style={{
    //                   backgroundColor: test.isActive === true ? "green" : "red",
    //                   color: "white",
    //                 }}
    //               >
    //                 {test.isActive === true ? "Active" : "InActive"}
    //               </span>
    //             </ListItemText>
    //             {permission.length > 0 &&
    //               permission.includes(CAN_EDIT_TEST) && (
    //                 <ListItemText style={style}>
    //                   <Button onClick={() => edit(test.id)}>
    //                     <EditIcon />
    //                   </Button>
    //                   <Button onClick={() => deleteTest(test.id)}>
    //                     <DeleteIcon />
    //                   </Button>
    //                   <Dialog
    //                     style={{ margin: "20px" }}
    //                     className="MuiDialog-root"
    //                     open={open}
    //                     keepMounted
    //                     onClose={handleClose}
    //                     aria-describedby="alert-dialog-slide-description"
    //                   >
    //                     <DialogTitle>
    //                       {"Are you sure you want to delete this Test?"}
    //                     </DialogTitle>
    //                     <DialogActions>
    //                       <Button onClick={handleClose}>Cancel</Button>
    //                       <Button onClick={() => handleDelete()}>
    //                         Confirm Delete
    //                       </Button>
    //                     </DialogActions>
    //                   </Dialog>
    //                 </ListItemText>
    //               )}
    //           </ListItem>
    //         );
    //       })
    //     ) : (
    //       <ListItem>
    //         <ListItemText>No Tests.</ListItemText>
    //       </ListItem>
    //     )}
    //   </List>
    // </Main>

    <Main>
      <>
        <p>
          <h2 align="center">Test Details</h2>
          <br></br>
        </p>
      </>
      {/* <div className="row"> */}
      {/* <div class="col-12"> */}
      {/* <div class="card recent-sales overflow-auto"> */}
      <div className="table-responsive">
        <table className=" table align-middle mb-0 bg-white table table-hover ">
          <thead className="bg-light ">
            <tr>
              <th className="fs-5 text-center">Sr No.</th>
              <th className="fs-5 text-center">Name</th>
              <th className="fs-5 text-center">Short Name</th>
              <th className="fs-5 text-center">Status</th>
              <th className="fs-5 text-center">Price</th>
              {/* <th className="fs-5 text-center">Actions</th> */}
              {permission.includes(CAN_EDIT_TEST) && (
                <th className="fs-5 text-center">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {test.length > 0 ? (
              test.map((test, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <p className="text-center fs-5">{(sno += 1)}</p>
                    </td>
                    <td>
                      <div className="align-items-center text-center ">
                        <div className="ms-1 ">
                          <p className=" mb-1 fs-5">{test.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1 text-center fs-5">
                        {test.shortName}
                      </p>
                    </td>

                    <td>
                      <div className="text-center">
                        <p
                          className={` badge rounded-pill  fs-6 ${
                            test.isActive ? "bg-success" : "bg-danger"
                          }`}
                        >
                          {test.isActive === true ? "Active" : "InActive"}
                        </p>
                      </div>
                    </td>

                    <td>
                      <p className="text-center  fs-5">{test.price}</p>
                    </td>
                    {/* <td>
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded"
                    >
                      Edit
                    </button>
                  </td> */}

                    {permission.length > 0 &&
                      permission.includes(CAN_EDIT_TEST) && (
                        <td>
                          <div className="text-center">
                            <Button onClick={() => edit(test.id)}>
                              <EditIcon />
                            </Button>
                            <Button onClick={() => deleteTest(test.id)}>
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
                                {"Are you sure you want to delete this Test?"}
                              </DialogTitle>
                              <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={() => handleDelete()}>
                                  Confirm Delete
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                        </td>
                      )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Tests.</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {/* <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-1">
                        <p className="fw-bold mb-1">Alex Ray</p>
                        <p className="text-muted mb-0">alex.ray@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">Consultant</p>
                    <p className="text-muted mb-0">Finance</p>
                  </td>
                  <td>
                    <span className="badge bg-danger rounded-pill d-inline">
                      Onboarding
                    </span>
                  </td>
                  <td>Junior</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Kate Hunington</p>
                        <p className="text-muted mb-0">
                          kate.hunington@gmail.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">Designer</p>
                    <p className="text-muted mb-0">UI/UX</p>
                  </td>
                  <td>
                    <span className="badge bg-warning rounded-pill d-inline">
                      Awaiting
                    </span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      <a href="" className="link-primary">
                        <EditIcon />
                      </a>
                    </button>
                  </td>
                </tr> */}
          </tbody>
        </table>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </Main>
  );
};

export default ViewTestsTable;
