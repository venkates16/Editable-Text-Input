import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    active: true,
    inputValue: '',
  }

  getSave = () => this.setState(prev => ({active: !prev.active}))

  onInputChange = event => this.setState({inputValue: event.target.value})

  getCard = () => {
    const {active, inputValue} = this.state
    return (
      <div className="card">
        <h1>Editable Text Input</h1>

        {active ? (
          <div className="editText">
            <input
              value={inputValue}
              type="text"
              onChange={this.onInputChange}
            />
            <button className="btn" type="button" onClick={this.getSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="editText">
            {' '}
            <p>{inputValue}</p>
            <button type="button" className="btn" onClick={this.getSave}>
              Edit
            </button>
          </div>
        )}
      </div>
    )
  }

  render() {
    return <div className="container">{this.getCard()}</div>
  }
}

export default EditableText
