import './index.css'

import {RiDeleteBin7Line} from 'react-icons/ri'

const MusicItem = props => {
  const {item, deleteFunction} = props
  const {imageUrl, name, genre, duration, id} = item
  const deleteButton = () => {
    deleteFunction(id)
  }
  return (
    <li className="li-item">
      <div className="li-3">
        <img src={imageUrl} alt="track" className="img" />
        <div className="li-2">
          <p className="li-head">{name}</p>
          <p className="li-g">{genre}</p>
        </div>
      </div>
      <div className="li-1">
        <div className="li-3">
          <p className="li-para">{duration}</p>
          <button
            type="button"
            className="icon-cont butt"
            onClick={deleteButton}
          >
            <RiDeleteBin7Line className="icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
