const RENAME = "RENAME";
const DELETE = "DELETE";
const ADD = "ADD";


export const selectStates = (state: string[]) => state;



let initialState: string[] = []

function filterTags(tags: string[]) {
    return tags.filter(tag => tag !== '');
}

const reducer = (state: string[] = initialState, action: any) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            return [...state.filter(tag => tag !== action.payload)]
        case RENAME:
            let tags = state;
            let index = state.findIndex(tag => tag === action.payload.oldTag);
            tags[index] = action.payload.tag;
            tags = filterTags(tags);
            return [...tags];
        default:
            return state;
    }
}
export default reducer;