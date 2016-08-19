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
  console.log(action.payload);
  console.log(buttons[action.payload]);
  switch (action.type) {
    case "INCREASE_CLICKED_NUMBER": {
      return [...buttons, buttons[action.payload].numberOfClicks++ ]
    }
  }
  return state
}
