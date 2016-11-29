import merge from 'lodash.merge';

const initialState = {
  alarmNotice: {
    show: false,
    info: null
  }
}

export default function sitewide(state = initialState, action = {}) {

  let newState = merge({}, state);

  switch (action.type) {
    case "NEW_ALARM":
      return {
        ...state,
        alarmNotice: {
          show: true,
          info: action.alarm
        }
      }
    case "HIDE_ALARM_NOTICE":
      return {
        ...state,
        alarmNotice: {
          show: false,
          info: null
        }
      }
    default:
      return state;
  }
}