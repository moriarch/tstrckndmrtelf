const ACTION_CHANGE_URL = 'ACTION_CHANGE_URL';
const ACTION_CHANGE_ITEMS = 'ACTION_CHANGE_ITEMS';
const ACTION_DETAIL = 'ACTION_DETAIL';
const ACTION_CLOSE_DETAIL = 'ACTION_CLOSE_DETAIL';


export default function appReducer(state, action) {
  switch (action.type) {
    case ACTION_CHANGE_URL: {
     
      return {...state, mainRequest: action.payload,loading:true}
    }
    case ACTION_DETAIL: {
      return {...state, current:action.payload}
    }
    case ACTION_CLOSE_DETAIL: {
      return {...state, current:null}
    }
    case ACTION_CHANGE_ITEMS: {
      return {...state, items:[...action.payload.results], info:{...action.payload.info}, loading:false}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export {ACTION_CHANGE_URL, ACTION_CHANGE_ITEMS, ACTION_DETAIL, ACTION_CLOSE_DETAIL};