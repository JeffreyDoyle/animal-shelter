const errorMiddleware = store => next => action => {
  console.log('action', action);
  if (action.error && action.error === true) {
    if (action.payload && action.payload.response && action.payload.response.status && action.payload.response.status !== 200) {
      alert(action.payload.response);
    }
    alert(action);
  } else if (action.payload) {
    if (action.payload.status) {
      if (typeof action.payload.status === 'number' && action.payload.status !== 200 && action.payload.status !== 420) {
        alert(action.payload.response);
      }
    }
  }
  return next(action);
};

export default errorMiddleware;
