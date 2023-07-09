import axios from 'axios';
import { makeConfig } from './authActions';



export const getAllUsers = () => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');
  
    try {
      const data = await axios.get(
        `http://munashrmsapi.digtrosoft.com/api/users/read`,
        config
      );
    //   console.log(data.data.response_data)
      dispatch({
        type: 'GET_USERS',
        payload:data.data.response_data
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const createUser = (name, email_address, password, gender, role, phoneNumber, id) => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');

    const organization = '64a4225fe5f10e65cca94fe3';
    const body = JSON.stringify({
        name, 
        email_address,
        password,
        gender,
        role,
        organization,
        manager:id,
        phone_number:phoneNumber

      });
  
    try {


      const res = await axios.post(
        `http://munashrmsapi.digtrosoft.com/api/users/create`,
        body,
        config
      );
      console.log(res)
    //   dispatch({
    //     type: 'GET_USERS',
    //     payload:data.data.response_data
    //   });
    } catch (err) {
      console.log(err);
    }
  };

