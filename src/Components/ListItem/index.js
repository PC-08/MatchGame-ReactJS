import './index.css'

const ListItem = props => {
  const {uid, thumbnailUrl, onTumReq} = props

  const onClickTum = () => {
    onTumReq(uid)
  }

  return (
    <li onClick={onClickTum}>
      <button className="thum-btn" type="button">
        <img className="tum-img" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ListItem
