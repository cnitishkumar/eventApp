import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {name, location, imageUrl, id} = eventDetails
  const onClickingEvent = () => {
    setActiveEventId(id)
  }

  const activeClass = isActive ? 'active-class' : ''

  return (
    <li className="list-item">
      <button type="button" className="event-button" onClick={onClickingEvent}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${activeClass}`}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
