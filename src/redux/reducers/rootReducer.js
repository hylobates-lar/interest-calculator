
export default (state = [], { type, payload }) => {
    switch (type) {
      case 'SET_INTEREST':
        return payload;
      default:
        return state;
    }
};


