import _ from "lodash";

const Debounce = (fn, limit = 300) => {
  return _.debounce(fn, limit);
};

const Throttle = (fn, limit = 300) => {
  return _.throttle(fn, limit);
};

export { Debounce, Throttle };
