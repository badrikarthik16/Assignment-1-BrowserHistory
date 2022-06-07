import './index.css'

const BrowserHistoryItem = props => {
  const {BrowserHistoryDetails, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = BrowserHistoryDetails

  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="browser-list-item">
      <div className="browser-item">
        <div className="history-container">
          <p className="time-md">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="domain">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>

        <button
          type="button"
          className="delete-btn"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
