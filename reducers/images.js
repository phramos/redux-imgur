function images(currentState, action){
    var DEFAULT_STATE = {data:[], loading:false};
    var nextState = Object.assign({},currentState);
    if (currentState === undefined) { // look at to Note 1.1

        nextState = DEFAULT_STATE;// Note1.2
        return nextState;
    }
    switch (action.type) {
      case 'FIND_IMAGES': // look at Note2.1
        nextState.data = action.data;
        nextState.loading = false;
        return nextState;// Note2.2
      case 'FIND_IMAGES_LOADING': // look at Note2.1
        nextState.loading = true;
        return nextState;// Note2.2
      default:
        nextState = currentState;
        return nextState;
    }
}