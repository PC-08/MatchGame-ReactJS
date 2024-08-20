import './index.css'

const Header = props => {
  const {secoends, score} = props

  return (
    <li className="header-bg">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <li className="header-scoreandTimer-COntainer">
        <p className="header-score">
          Score: <sapn className="header-score-span">{score}</sapn>
        </p>
        <li className="header-timer-COntainer">
          <img
            className="header-timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="header-score-span">{secoends} Sec</p>
        </li>
      </li>
    </li>
  )
}

export default Header
