import { GO_FORWARD_CONDITION, RANDOM_NUM_MAX } from '../constants/consts.js';

export function doTrim(names) {
  const newNames = names.map((item) => {
    return item.trim();
  });
  return newNames;
}

export function clearInput(inputId) {
  const inputLocation = document.getElementById(inputId);
  inputLocation.value = '';
  inputLocation.focus();
}

export function findAlertInputId(errKey) {
  if (errKey === 'name error') {
    return 'car-name-input';
  }
  if (errKey === 'number error') {
    return 'racing-number-input';
  }
}

export function makeRandomNumber() {
  return Math.floor(Math.random() * (RANDOM_NUM_MAX + 1));
}

export function isNumberOverStandard(number) {
  if (number > GO_FORWARD_CONDITION) {
    return true;
  }
  return false;
}
