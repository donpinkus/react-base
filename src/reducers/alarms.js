import merge from 'lodash.merge'

const initialState = {
  loading: false,
  loaded: false,
  data: []
};

export default function alarms(state = initialState, action = {}) {

  let newState = merge({}, state);

  // Client Ports, Network Ports, Optical Modules
  switch (action.type) {
    // Client Ports
    case "LOADING_ALARMS":
      newState = {
        ...state,
        loading: true,
        loaded: false
      }
      return newState;
    case "LOADED_ALARMS":
      newState = {
        loading: false,
        loaded: true,
        data: action.data
      }
      return newState;
    default:
      return state;
  }
}

