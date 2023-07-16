const initState = {
    employees: [],
    isLoading: false,
  };


  const clientReducer = (state = initState, action) => {
    let index = null;
  
    switch (action.type) {
      case 'GET_EMPLOYEES':
        return {
          ...state,
          employees: action.payload,
          isLoading: false
        };
      case 'CREATE_EMPLOYEE':
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

      
      
export default clientReducer;