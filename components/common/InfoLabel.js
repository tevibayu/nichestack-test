import PropTypes from 'prop-types'

function InfoLabel({label, children}){
  return (
    <div className='info-label'>
      <style jsx>
        {`
          .info-label {
            margin-bottom: 20px
          }
        `}
      </style>
      <p className='bold'>{label}</p>
      {children}
    </div>
  )
}

InfoLabel.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default InfoLabel