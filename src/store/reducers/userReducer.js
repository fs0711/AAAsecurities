const initState = {
    users: [],
    isLoading: false,
  };


  const userReducer = (state = initState, action) => {
    let index = null;
  
    switch (action.type) {
      case 'GET_USERS':
        return {
          ...state,
          users: action.payload,
          isLoading: false
        };
      case 'USERS_LOADING':
        return {
          ...state,
          isLoading: true
        };
        default:
            return {
              ...state
            };
        }
      };

      
      
export default userReducer;