const INITIAL_STATE = { mood: '(っ・ω・）っ≡≡≡≡≡≡☆' };

const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_MOOD':
      return { ...state, mood: action.payload };
    default:
      return state;
  }
};

const store = Redux.createStore(moodReducer);
