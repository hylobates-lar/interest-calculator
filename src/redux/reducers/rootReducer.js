
export default (state = 0, { type, payload }) => {
    switch (type) {
      case 'SET_INTEREST':
        return payload;
      default:
        return state;
    }
};


