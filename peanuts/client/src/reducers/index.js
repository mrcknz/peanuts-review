import { actionTypes } from '../actions';

const initialState = {
  doables: [
    {
      doable: 'get almond milk',
      notes: 'http://amzn.eu/d/0KIJc45',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    },
    {
      doable: 'rule the world',
      notes: '',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    },
    {
      doable: 'call mom',
      notes: '+41 44 761 69 49',
      isResult: '',
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_DOABLE:
      return state;

    default:
      return state;
  }
}