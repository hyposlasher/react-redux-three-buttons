export function increasClickedNumber(buttonID) {
  return {
    type: "INCREASE_CLICKED_NUMBER",
    payload: buttonID
  }
}

export function addNewButton() {
  return {
    type: "ADD_NEW_BUTTON"
  }
}
