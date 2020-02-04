const addMain = (state = { openModal: false }, action) => {
    console.log('action - ', action);
    switch (action.type) {
        case 'OPEN_MODAL': {
            return {
                ...state,
                openModal: true,
                menuTarget: null,
                clickedMenu: action.clickedMenu
            }
        }
        case 'CLOSE_MODAL': {
            return {
                ...state,
                openModal: false
            }
        }
        case 'OPEN_MENU': {
            return {
                ...state,
                openMenu: true,
                menuTarget: action.target
            }
        }
        case 'CLOSE_MENU': {
            return {
                ...state,
                openMenu: false,
                menuTarget: action.target
            }
        }
        default:
            return state;
    }
}

export default addMain