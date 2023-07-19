import axios from 'axios';
import { makeConfig } from './authActions';



export const getAllEmployees = () => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');
  
    try {
      const data = await axios.get(
        `http://munashrmsapi.digtrosoft.com/api/employees/read`,
        config
      );
      console.log(data.data.response_data)
      if(data.data.response_code === 200)
      {
        dispatch({
          type: 'GET_EMPLOYEES',
          payload:data.data.response_data
        });
      }
      // else 
      // {
      //   dispatch({
      //     type: 'USER_AUTH_FAIL',
      //   }); 
      // }
     
    } catch (err) {
      console.log(err);
    }
  };

  export const createEmployee = (employeeName, email, password, allocatedLeaves, consumedLeaves, probationPeriod, gender, joiningDate, country, city, address, postCode, mobileNum,brpExpiry,siaLicence,siaIssueDate,siaExpiryDate, manager, id) => async (dispatch, getState) => {
   
  
    const config = await makeConfig('application/json');

    const organization = '64a4225fe5f10e65cca94fe3';
    const joiningDateObject  = new Date(joiningDate);
    const unixTimejoining = joiningDateObject.getTime() / 1000;
    const TimebrpExpiry = new Date(brpExpiry);
    const unixTimebrpExpiry = TimebrpExpiry.getState() / 1000;
    const SiaIssueDate = new Date(siaIssueDate);
    const unixsiaIssueDate = SiaIssueDate.getState() / 1000;
    const SiaExpiryDate = new Date(siaExpiryDate);
    const unixsiaExpiryDate = SiaExpiryDate.getState() / 1000;

    const body = {
        name: employeeName, 
        email_address:email ,
        password: password,
        phone_number: mobileNum,
        gender:gender,
        role:2,
        organization:organization,
        manager:manager,
        address: address,
        country,
        city,
        assigned_to: manager,
        assigned_by: id,
        allocated_leaves: allocatedLeaves,
        consumed_leaves: consumedLeaves,
        joining_date: unixTimejoining,
        probation_period: probationPeriod,
        siaLicence,
        brpExpiry:unixTimebrpExpiry,
        siaIssue:unixsiaIssueDate,
        siaExpiry:unixsiaExpiryDate,



      };
  console.log(body)
    try {


      const res = await axios.post(
        `http://munashrmsapi.digtrosoft.com/api/employees/create`,
        body,
        config
      );
      console.log(res)
      if(data.data)
      {
        dispatch({
          type: 'CREATE_EMPLOYEE',
          payload:res.data.response_data
        });
      }
      else 
      {
        dispatch({
          type: 'USER_AUTH_FAIL',
        }); 
      }
     
    } catch (err) {
      console.log(err);
    }
  };

