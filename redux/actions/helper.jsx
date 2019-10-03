import {SIDEBAR_MENU_TOGGLE} from "Types";

export const sidebarMenuToggle = toggle => (dispatch) => {
    dispatch({ type: SIDEBAR_MENU_TOGGLE, toggle });
};