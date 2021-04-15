import PropTypes from 'prop-types'

function Button({ children, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      <style jsx>
        {`
          .btn {
            padding: 8px 15px;
            border: solid 1px var(--orange);
            border-radius: 4px;
            color: var(--orange);
            background: transparent;
            cursor: pointer;
            outline: none;
            font-family: var(--font);
          }
        `}
      </style>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button