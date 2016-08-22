import React from 'react'
import {connect} from 'react-redux'
import { increasClickedNumber, addNewButton } from '../actions/buttonActions'

@connect((store) => (
  {
    buttons: store.buttons,
  }
))
export default class App extends React.Component {

  handleButtonClick = (e) => {
    this.props.dispatch(increasClickedNumber(e.currentTarget.dataset.buttonid));
  }

  handleAddButton = (e) => {
    this.props.dispatch(addNewButton())
  }

  render() {
    const { buttons } = this.props;
    return (
      <div class='container'>
        <button onClick={this.handleAddButton}>Add New Button</button>
        <div className="buttons">
          {
            buttons.map((button, i)=>{
              return (
                <button
                  data-buttonid={i}
                  key={i}
                  onClick={this.handleButtonClick}
                  >
                  Button clicked {buttons[i].numberOfClicks} times
                </button>
              )
            })
          }
        </div>

      </div>
    )
  }
}
