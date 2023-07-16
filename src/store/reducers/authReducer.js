const initState = {
  token: localStorage.getItem('token'),
  expiration: localStorage.getItem('expirationTime'),
  isAuthenticated: null,
  isLoading: null,
  is_expired: false,
  is_revoked: false,
  status: null,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true
      };

    case 'LOGIN_SUCCESS':
      // console.log(action.payload)
      localStorage.setItem('token', action.payload.access_token);
      localStorage.setItem('expirationTime', action.payload.expiry_time)
      return {
        ...state,
        token: action.payload.access_token,
        expiration: action.payload.expiry_time,
        isAuthenticated: true,
        isLoading: false,
        status: action.payload.status,
        user: action.payload.user
      };

      case 'LOGOUT_USER':
        localStorage.removeItem('token');
        // localStorage.removeItem('expirationTime');
      return {
        ...state,
        isAuthenticated: false,
        expiration: '',
        token:'',
        status: '',
        user: ''

        // Reset any other authentication-related state
      };
      case 'USER_AUTH_FAIL':
        return {
          ...state,
          isAuthenticated: false,
        }
    default:
      return state;
  }
};

export default authReducer;
