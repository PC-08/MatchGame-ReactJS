import './index.css'

const TabItem = props => {
  const {tabId, displayText, isTabActive, onTabReq} = props

  const onClickTab = () => {
    onTabReq(tabId)
  }

  const activeClass = isTabActive ? 'active-tab-li' : ''

  return (
    <li onClick={onClickTab}>
      <button type="button" className={`tab-btn ${activeClass}`}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
