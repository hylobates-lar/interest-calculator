
export default (state = 0.00, { type, payload }) => {
    switch (type) {
      case 'SET_INTEREST':
        return payload;
      default:
        return state;
    }
};


