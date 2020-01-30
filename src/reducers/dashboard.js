const dashboard = (state = [], action) => {
    switch (action.type) {
        case SHOW_UPCOMING: {
            return state; // return tasks with future date sorted by asc
        }
        case SHOW_PAST: {
            return state; //return tasks with past date sorted by desc
        }
        case VIEW_TASK: {
            return state; // view the task clicked;
        }
        default:
            return state;
    }
}

export default dashboard