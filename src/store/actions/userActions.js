import axios from 'axios';
import { makeConfig } from './authActions';
import { lte } from 'lodash';



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

  export const createUser = (name, email_address, password, gender, role, phoneNumber, manager, organization) => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');
    const roleNumber = parseInt(role, 10);

    const body = {
        name: name, 
        email_address: email_address,
        password: password,
        gender:gender,
        role:roleNumber,
        organization:organization,
        manager:manager,
        phone_number:phoneNumber

      };
  
    try {


      const res = await axios.post(
        `http://munashrmsapi.digtrosoft.com/api/users/create`,
        body,
        config
      );
      // console.log(res)
      dispatch({
        type: 'CREATE_USERS',
        payload:res.data.response_data
      });
    } catch (err) {
      console.log(err);
    }
  };

