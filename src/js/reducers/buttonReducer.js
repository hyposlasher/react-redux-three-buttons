const buttons = [
  {
    id: 0,
    numberOfClicks: 0
  },
  {
    id: 1,
    numberOfClicks: 0
  },
  {
    id: 2,
    numberOfClicks: 0
  }
]


export default (state = buttons, action) => {
  switch (action.type) {
    case "INCREASE_CLICKED_NUMBER": {
      return [...state, ...state[action.payload].numberOfClicks++]
    }
    case "ADD_NEW_BUTTON": {
      return [
        ...state,
        {
          id: state.length++,
          numberOfClicks: 0

        }
      ]
    }
  }
  return state
}
