const $on = (target, event, handler) => {
  target.addEventListener(event, handler);
};

export { $on }