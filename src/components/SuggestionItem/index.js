// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, addInput} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    addInput(suggestion)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p>{suggestion}</p>
        <button className="arrow-button" type="button" onClick={onClickArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
