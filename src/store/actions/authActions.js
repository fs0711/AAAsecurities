import axios from 'axios';









export const loginUser = (credentials) => async (
    dispatch,
    getState
  ) => {
    // console.log(credentials)
    dispatch({
      type: 'USER_LOADING'
    });
  
    const config = {
      headers: {
        'Content-type': 'Application/json'
      }
    };

    const email_address = credentials.email;
    const password = credentials.password;

    const body = JSON.stringify({
        email_address,
        password,
    });
  
    try {
     const data =  await axios.post(
        `http://munashrmsapi.digtrosoft.com/api/users/login/web`,
        body,
        config
      );
    //   console.log(data.data.response_data)
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data.data.response_data
      });
    } catch (err) {
      console.log(err.message)
    //   dispatch({
    //     type: 'LOGIN_FAIL'
    //   });
  
    //   dispatch({
    //     type: 'GET_ERRORS',
    //     message: err.response.data,
    //     id: 'LOGIN_FAIL',
    //     status: err.response.status
    //   });
    }

    
  };

  export const logoutUser = () => (dispatch) => {
     dispatch({
        type: 'LOGOUT_USER'
      });
    }

  export const makeConfig = async (type) => {
    const token = await localStorage.getItem('token');
    const config = {
            headers: {
              
               'x-session-key' : token,
              'x-session-type': type
            }
          };
  
    return config;
  };