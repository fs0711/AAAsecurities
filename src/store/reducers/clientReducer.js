const initState = {
    clients: [],
    isLoading: false,
  };


  const clientReducer = (state = initState, action) => {
    let index = null;
  
    switch (action.type) {
      case 'GET_CLIENTS':
        return {
          ...state,
          clients: action.payload,
          isLoading: false
        };
      case 'CREATE_CLIENT':
        return {
          ...state,
          clients: clients.push(action.payload)
        };
        default:
            return {
              ...state
            };
        }
      };

      
      
export default clientReducer;