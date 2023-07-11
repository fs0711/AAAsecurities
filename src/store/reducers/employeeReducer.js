const initState = {
    employees: [],
    isLoading: false,
  };


  const userReducer = (state = initState, action) => {
    let index = null;
  
    switch (action.type) {
      case 'GET_EMPLOYEES':
        return {
          ...state,
          employees: action.payload,
          isLoading: false
        };
      case 'CREATE_USERS':
        return {
          ...state,
          employees: employees.push(action.payload)
        };
        default:
            return {
              ...state
            };
        }
      };

      
      
export default userReducer;