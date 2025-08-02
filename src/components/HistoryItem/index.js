import './index.css'

const HistoryItem = props => {
  const {itemDetails, onDeleteItem, isDarkMode} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const deleteItem = () => {
    onDeleteItem(id)
  }

  const itemThemeClassName = isDarkMode ? 'dark-theme-item' : ''

  return (
    <li className={`historyitem ${itemThemeClassName}`}>
      <p className="time">{timeAccessed}</p>
      <div className="item">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="details">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
      <button
        className="btn"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem