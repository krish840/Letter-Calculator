// Write your code here.
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {letters: '', count: 0}

  OnChangeSearchInput = event => {
    this.setState({
      letters: event.target.value,
      count: event.target.value.length,
    })
  }

  makeLettersEmpty = () => {
    this.setState({letters: '', count: 0})
  }

  render() {
    const {letters, count} = this.state
    const formElement = (
      <form>
        <input
          value={letters}
          onChange={this.OnChangeSearchInput}
          type="search"
          placeholder="Enter the phrase"
          id="phrase"
        />
        <label for="phrase">Enter the phrase</label>
      </form>
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png alt should be letters calculator"
          alt="letters calculator"
        />
        <h1>Calculate the Letters you enter</h1>
        {formElement}
        <p onClick={this.makeLettersEmpty}>No.of letters: {count}</p>
      </div>
    )
  }
}

export default LettersCalculator
