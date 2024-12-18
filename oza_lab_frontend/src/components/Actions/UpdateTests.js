import axios from "axios";
const updateTest = async (id, updateBody) => {
  const updatePatient = await axios.patch(`http://localhost:3000/tests/${id}`, {
    ...updateBody,
  }, {
    headers: {
      'authorization': localStorage.getItem('authorization'),
    }
  });
  return updatePatient;
};

export default updateTest;