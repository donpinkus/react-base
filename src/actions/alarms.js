import axios from 'axios'

import { switchDomain } from '../config.js';

export function loadAlarms() {
  return function (dispatch){
    dispatch(loadingAlarms());

    return axios.get(switchDomain + '/public/v1/state/Alarms')
      .then(function(response){
        var data = response.data.Objects;
        
        dispatch(loadedAlarms(data));
      });
  }
}

export function loadingAlarms() {
  return {
    type: "LOADING_ALARMS"
  }
}

export function loadedAlarms(json) {
  return {
    type: "LOADED_ALARMS",
    data: json
  }
}

// Alarm notice
export function newAlarm(newAlarm) {
  return {
    type: "NEW_ALARM",
    alarm: newAlarm
  }
}

export function hideAlarmNotice() {
  return {
    type: "HIDE_ALARM_NOTICE"
  }
}

