import api from '../api/api'

export const setTicketsActionCreator = (tickets) => ({
    type: 'SET_TICKETS',
    data: tickets
});

export const setLoadTicketsActionCreator = (isLoading) => ({
    type: 'SET_LOADING',
    data: isLoading
});

export const setStopTicketsActionCreator = (stop) => ({
    type: 'SET_STOP',
    data: stop
});

export const changeFilterActionCreator = (id, value) => ({
    type: 'CHANGE_FILTER',
    data: {id, value}
});

export const setSortActionCreator = (id) => ({
    type: 'SET_SORT',
    data: id
});

export const getTicketsThunkCreator = () => {
    return (dispatch) => {
        dispatch(setLoadTicketsActionCreator(true));
        api.getTickets().then(response => {
            dispatch(setTicketsActionCreator(response.data.tickets.slice(0, 5)));
            dispatch(setLoadTicketsActionCreator(false));
            dispatch(setStopTicketsActionCreator(response.data.stop));
            dispatch(setSortActionCreator(1));
        });
    }
}