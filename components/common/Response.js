import Button from 'components/common/Button'
import PropTypes from 'prop-types'

function Response({ 
  action, 
  textAction,
  title, 
}) {
  return (
    <div className='f f-ctr mdl f-c' style={{minHeight: 200}}>
      <p style={{marginBottom: 20}}>{title}</p>
      {
        action && 
        <Button onClick={action}>{textAction}</Button>
      }
    </div>
  )
}

Response.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string.isRequired,
  textAction: PropTypes.string
}

export default Response