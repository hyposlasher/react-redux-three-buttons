import React from 'react'
import {connect} from 'react-redux'
import { buttonActions } from '../actions/buttonActions'

@connect((store) => (
  {
    buttons: store.buttons,
  }
))
export default class App extends React.Component {

  handleButtonClick = (e) => {
    this.props.dispatch(buttonActions(e.currentTarget.dataset.buttonid));
    // console.log(e.currentTarget.dataset.button);
  }

  render() {
    const { buttons } = this.props;
    console.log(buttons);
    return (
      <div class='container'>

        <button
          data-buttonid="0"
          onClick={this.handleButtonClick}
        >
          Button clicked {buttons[0].numberOfClicks} times
        </button>

        <button
          data-buttonid="1"
          onClick={this.handleButtonClick}
        >
          Button clicked {buttons[1].numberOfClicks} times
        </button>

        <button
          data-buttonid="2"
          onClick={this.handleButtonClick}
        >
          Button clicked {buttons[2].numberOfClicks} times
        </button>

      </div>
    )
  }
}
