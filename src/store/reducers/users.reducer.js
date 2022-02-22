const initialState = {
  users: [],
  userMsg: "",
};

export function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.users };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.newUser],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.updatedUser.id ? action.updatedUser : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
      };
    case "SET_USER_MSG":
      return { ...state, userMsg: action.userMsg };
    default:
      return state;
  }
}
