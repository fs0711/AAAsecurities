const initState = {
    sites: [],
    isLoading: false,
  };


  const sitesReducer = (state = initState, action) => {
    let index = null;
  
    switch (action.type) {
      case 'GET_SITES':
        return {
          ...state,
          sites: action.payload,
          isLoading: false
        };
      case 'CREATE_SITE':
        return {
          ...state,
          sites: sites.push(action.payload)
        };
        default:
            return {
              ...state
            };
        }
      };

      
      
export default sitesReducer;