let initialState = {
    tickets: [],
    displayTickets: [],
    stop: true,
    isLoading: false,
    filters: [
        {
            id: 1,
            count: -1,
            checked: true
        },
        {
            id: 2,
            count: 0,
            checked: false
        },
        {
            id: 3,
            count: 1,
            checked: false
        },
        {
            id: 4,
            count: 2,
            checked: false
        },
        {
            id: 5,
            count: 3,
            checked: false
        }
    ],
    sort: [
        {
            id: 1,
            label: "самый дешевый",
            checked: true
        },
        {
            id: 2,
            label: "самый быстрый",
            checked: false
        }
    ]
}

export function ticketsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TICKETS':
            return {
                ...state,
                tickets: action.data,
                displayTickets: action.data
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.data,
                displayTickets: action.data ? [] : state.displayTickets
            }
        case 'SET_STOP':
            return {
                ...state,
                stop: action.data
            }
        case 'CHANGE_FILTER':
            let newFilters = state.filters.map(
                e => e.id === action.data.id ? {
                    ...e,
                    checked: action.data.value
                } : e
            );

            let activeFilters = newFilters.filter(filter => filter.checked).map(filter => filter.count);
            let filteredTickets = state.tickets;

            if(activeFilters.indexOf(-1) === -1) {
                filteredTickets = state.tickets.filter(ticket => {
                    return activeFilters.filter(a => (
                        ticket.segments.map(s => s.stops.length).includes(a)
                    )).length > 0
                });
            }

            return {
                ...state,
                filters: newFilters,
                displayTickets: filteredTickets
            }
        case 'SET_SORT':
            let sortedTickets = [...state.displayTickets];
            if(action.data == 1)
                sortedTickets.sort((a, b) => a.price - b.price);
            else if(action.data == 2)
                sortedTickets.sort((a, b) => {
                    const sumMinutes1 = a.segments.map(e => e.duration).reduce((sum, a) => sum + a, 0);
                    const sumMinutes2 = b.segments.map(e => e.duration).reduce((sum, a) => sum + a, 0);
                    return sumMinutes1 - sumMinutes2;
                });
            return {
                ...state,
                sort: state.sort.map(
                    e => e.id == action.data ? {
                        ...e,
                        checked: true
                    } : {
                        ...e,
                        checked: false
                    }
                ),
                displayTickets: sortedTickets
            }
        default:
            return state;
    }
}
