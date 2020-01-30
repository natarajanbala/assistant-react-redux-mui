const taskTodo = (state = {startDate: new Date()}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state;
        case 'START_DATE_CHANGE': {
            return {
                ...state,
                startDate: action.newDate
            };
        }
        case 'END_DATE_CHANGE': {
            return {
                ...state,
                endDate: action.endDate
            };
        }
        default:
            return state;
    }
}

export default taskTodo