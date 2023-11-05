import axios from 'axios';
import { makeConfig } from './authActions';



export const getAllCLients = () => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');
  
    try {
      const data = await axios.get(
        `http://munashrmsapi.digtrosoft.com/api/clients/read`,
        config
      );
      console.log(data.data.response_data)
      if(data.data.response_code === 200)
      {
        dispatch({
          type: 'GET_CLIENTS',
          payload:data.data.response_data
        });
      }
      else if(data.data.response_code === 401 || data.data.response_code === 5001)
      {
        dispatch({
          type: 'USER_AUTH_FAIL',
        }); 
      }
     
    } catch (err) {
      console.log(err);
    }
  };

  export const createClient = (clientName, contactPerson, cpNumber, address, city, country, zipCode, cpEmail, numberOfSites) => async (dispatch, getState) => {
   
  const number = [cpNumber]
    const config = await makeConfig('application/json');

    const organization = '64a4225fe5f10e65cca94fe3';

    const body = {
      name: clientName,
      // organization,
      cp_phone_number: number,
      cp_email_address: cpEmail,
      contact_person: contactPerson,
      country,
      city,
      zipcode:zipCode,
      };
  console.log(body)
    try {
      const res = await axios.post(
        `http://munashrmsapi.digtrosoft.com/api/clients/create`,
        body,
        config
      );
      console.log(res)
      if(res.data.response_code === 200)
      {
        dispatch({
          type: 'CREATE_CLIENT',
          payload:res.data.response_data
        });
      }
      else 
      {
        // dispatch({
        //   type: 'USER_AUTH_FAIL',
        // });
        alert(res.data.response_message);
      }
     
    } catch (err) {
      console.log(err);
    }
  };

