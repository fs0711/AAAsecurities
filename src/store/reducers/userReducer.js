const initState = {
    users: [],
    selectedUsers: [],
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
        case 'GET_SELECTED_USERS':
          // console.log(action.payload)
        return {
          ...state,
          selectedUsers: action.payload,
          isLoading: false
        };
      case 'CREATE_USERS':
        return {
          ...state,
         users: users.push(action.payload),
         selectedUsers: selectedUsers.push(action.payload),
        };
        default:
            return {
              ...state
            };
        }
      };

      
      
export default userReducer;