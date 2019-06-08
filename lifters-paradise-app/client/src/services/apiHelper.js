import axios from 'axios';

const url = 'http://localhost:3000';

export const loginUser = async (loginData) => {
  try {
    const resp = await axios.post(`${url}/auth/login/`, loginData)
    console.log(resp);
    return resp.data
  } catch (e) {
    console.log(e)
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await axios.post(`${url}/users`, registerData)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}