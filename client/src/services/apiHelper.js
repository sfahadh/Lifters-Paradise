import axios from 'axios';

const url = 'https://lifters-paradise.herokuapp.com';

export const loginUser = async (loginData) => {
  try {
    const resp = await axios.post(`${url}/auth/login/`, loginData)
    return resp.data
  } catch (e) {
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await axios.post(`${url}/users`, registerData)
    return resp.data
  } catch (e) {
  }
}