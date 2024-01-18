import './index.css'

const registrationStatusConstans = {
  yetToRegister: 'YET_TO_REGISTER',
  regClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const renderYetToRegister = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="event-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-me-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredEvent = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="tick-image"
        alt="registered"
      />
      <h2 className="already-registered">
        You have already registered for the event
      </h2>
    </div>
  )
  const renderRegistrationsClosed = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h2 className="already-registered">Registrations Are Closed Now!</h2>
      <p className="event-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  switch (registrationStatus) {
    case registrationStatusConstans.registered:
      return renderRegisteredEvent()

    case registrationStatusConstans.yetToRegister:
      return renderYetToRegister()

    case registrationStatusConstans.regClosed:
      return renderRegistrationsClosed()

    default:
      return (
        <p className="not-clicked">
          Click on an event, to view its registration details
        </p>
      )
  }
}

export default ActiveEventRegistrationDetails
