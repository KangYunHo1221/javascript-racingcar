import { makeRandomNumber, isNumberOverStandard } from '../utils/utils.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }
  setLocation(location) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  getName() {
    return this.name;
  }

  moveFoward() {
    if (isNumberOverStandard(makeRandomNumber())) {
      this.location += 1;
      return true;
    }
    return false;
  }
}
