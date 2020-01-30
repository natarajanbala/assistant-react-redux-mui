export const openModal = (menu) => ({
    type: 'OPEN_MODAL',
    clickedMenu: menu,
    target: null
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
});

export const openCreateMenu = (event) => ({
    type: 'OPEN_MENU',
    target: event.currentTarget
});

export const closeCreateMenu = () => ({
    type: 'CLOSE_MENU',
    target: null
});

export const startDateChange = (newDate) => ({
    type: 'START_DATE_CHANGE',
    newDate: newDate
});

export const endDateChange = (newEndDate) => ({
    type: 'END_DATE_CHANGE',
    endDate: newEndDate
})

