import {
  SIDEBAR_MENU_TOGGLE,
} from "Types";

const initialState = {
  sidebarShow: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_MENU_TOGGLE:
      return {
        ...state,
        sidebarShow: action.toggle,
      };
    default:
      return state;
  }
};
