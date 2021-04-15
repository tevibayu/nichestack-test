import PropTypes from 'prop-types'

function Tag({ type }) {
  let style = {
    background: 'var(--green)',
    border: 'var(--green)',
    color: '#fff'
  }
  let text = type
     
  return (
    <div className='tag'>
      <style jsx>
        {`
          .tag {
            font-size: 12px;
            padding: 5px 12px;
            border-radius: 4px;
            background: ${style.background};
            border: solid 1px ${style.border};
            color: ${style.color};
          }
        `}
      </style>
      {text}
    </div>
  )
}

Tag.propTypes = {
  type: PropTypes.string.isRequired
}

export default Tag