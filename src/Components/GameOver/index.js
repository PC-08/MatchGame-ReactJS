import './index.css'

const GameOver = props => {
  const {score, onPlayAgainReq} = props

  const onClickPlayAgainBtn = () => {
    onPlayAgainReq()
  }

  return (
    <div className="bg-go">
      <div className="s-card">
        <img
          className="go-trophy"
          alt="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
        />
        <p className="Score-go">YOUR SCORE</p>
        <p className="Score-go">{score}</p>

        <button onClick={onClickPlayAgainBtn} className="btn-go" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
