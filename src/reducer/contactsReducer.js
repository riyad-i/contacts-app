
//store all state logic

/**
 * @description Store all the state logic
 * @param {*} state : current state
 * @param {*} action : objects with the type and payload
 * @returns 
 */


export default function contactsReducer(state, action) {
    const {type, payload} = action;

    switch(type) {

        case 'fetched_data':
            return [
                ...payload
            ];

        case 'add_contact':
            break

        default:
            return []
    }
}