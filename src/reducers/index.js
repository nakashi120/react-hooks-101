// action = {
//     type: 'CREATE_EVENT',
//     title: '2020年東京オリンピックのお知らせ',
//     body: '2020年に東京オリンピックがあります。つきましては...'
// }

// # before
// state = []
// # after
// state = [
//     { id: 10, title:'タイトル10', body: 'ボディー10'},
//     { id: 11, title:'タイトル11', body: 'ボディー11'},
//     { id: 12, title:'タイトル12', body: 'ボディー12'},
// ]

const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id, ...event}]
        case 'DELETE_EVENT':
        case 'DELETE_ALL_EVENTS':
        default:
            return state
    }
}

export default events