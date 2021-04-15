import PropTypes from 'prop-types'

function Input({
  icon,
  ...props
}) {
  return (
    <div className='input'>
      <style jsx>
        {`
          .input {
            position: relative;
            width: 100%;
          }
          .input input {
            height: 45px;
            width: 100%;
            padding: ${icon ? '0 20px 0 50px' : '0 20px'};
            border: solid 1px #D1D6DC;
            border-radius: 4px;
            font-family: var(--font);
            outline: none;
          }
          .icon {
            position: absolute;
            left: 20px;
            top: 13px;
          }
        `}
      </style>
      {
        icon &&
        <div className='icon'>
          {icon}
        </div>
      }
      <input {...props} />
    </div>
  )
}

Input.propTypes = {
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string
}

export default Input