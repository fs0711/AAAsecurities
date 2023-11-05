import axios from 'axios';
import { makeConfig } from './authActions';



export const getAllSites = () => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');
  
    try {
      const data = await axios.get(
        `http://munashrmsapi.digtrosoft.com/api/sites/read`,
        config
      );
      console.log(data.data.response_data)
      if(data.data.response_code === 200)
      {
        dispatch({
          type: 'GET_SITES',
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

  export const createSite = (siteName, contactPerson, cpPhoneNumber, address, city, country, zipCode, cpEmailAddress, client) => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');

    const body = {
      name: siteName,
      client,
      cp_phone_number: cpPhoneNumber,
      cp_email_address: cpEmailAddress,
      contact_person: contactPerson,
      country,
      city,
      zipcode:zipCode,
      address, 

      };
  console.log(body)
    try {


      const res = await axios.post(
        `http://munashrmsapi.digtrosoft.com/api/sites/create`,
        body,
        config
      );
      console.log(res)
      if(res.data.response_code === 200)
      {
        dispatch({
          type: 'CREATE_SITE',
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

