import axios from "axios";
const addPatientAction = async (patientBody) => {
  const { testsInput, homeVisit, ...rest } = patientBody;
  const userAdded = await axios.post("http://localhost:3000/user", {
    ...rest,
  });
  const test = await axios.get(
    `http://localhost:3000/tests/name/${testsInput}`,
    {
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    }
  );
  const patientAdded = await axios.post(
    "http://localhost:3000/patients",
    {
      userId: userAdded.data.user.id,
      testId: test.data.id,
      homeVisit: homeVisit === "Yes" ? true : false,
    },
    {
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    }
  );
  return patientAdded;
};

export default addPatientAction;
