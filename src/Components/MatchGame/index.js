import {Component} from 'react'

import GameOver from '../GameOver'
import Header from '../Header'
import ListItem from '../ListItem'
import TabItem from '../TabItem'

import './index.css'

class MatchGame extends Component {
  state = {
    activeTab: 'FRUIT',
    isPlaying: true,
    activeImg:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    secoends: 60,
    score: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.timer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  timer = () => {
    const {secoends} = this.state

    if (secoends > 0) {
      this.setState(prevState => ({secoends: prevState.secoends - 1}))
    }

    if (secoends === 0) {
      this.componentWillUnmount()
      this.setState({isPlaying: false})
    }
  }

  onTabReq = tabId => {
    this.setState({activeTab: tabId})
  }

  onTumReq = uid => {
    const {activeImg, isPlaying} = this.state
    const {imagesList} = this.props

    const getClickedfromList = imagesList.filter(eachImg => eachImg.id === uid)
    const getActivefromList = imagesList.filter(
      eachImg => eachImg.imageUrl === activeImg,
    )

    if (
      isPlaying === true &&
      getClickedfromList[0].id === getActivefromList[0].id
    ) {
      const randomElement =
        imagesList[Math.floor(Math.random() * imagesList.length)]

      this.setState(prevState => ({
        activeImg: randomElement.imageUrl,
        score: prevState.score + 1,
      }))
    } else {
      this.setState({isPlaying: false, secoends: 0})
    }
  }

  onPlayAgainReq = () => {
    this.setState({secoends: 60, isPlaying: true, score: 0})
    this.componentDidMount()
  }

  render() {
    const {activeTab, secoends, score, activeImg, isPlaying} = this.state
    const {tabsList, imagesList} = this.props

    const fillteredList = imagesList.filter(
      eachImg => eachImg.category === activeTab,
    )

    return (
      <div>
        <Header secoends={secoends} score={score} />
        <div className="game-bg">
          {isPlaying ? (
            <div>
              <div className="img-active-container">
                <img className="active-img" alt="match" src={activeImg} />
              </div>
              <div>
                <ul className="tab-ul">
                  {tabsList.map(eachTab => (
                    <TabItem
                      key={eachTab.tabId}
                      tabId={eachTab.tabId}
                      displayText={eachTab.displayText}
                      onTabReq={this.onTabReq}
                      isTabActive={eachTab.tabId === activeTab}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <ul className="tum-con">
                  {fillteredList.map(eachImg => (
                    <ListItem
                      key={eachImg.id}
                      uid={eachImg.id}
                      imageUrl={eachImg.imageUrl}
                      thumbnailUrl={eachImg.thumbnailUrl}
                      category={eachImg.category}
                      onTumReq={this.onTumReq}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <GameOver score={score} onPlayAgainReq={this.onPlayAgainReq} />
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
