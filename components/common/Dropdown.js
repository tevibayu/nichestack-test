import {
  useState,
  useRef
} from 'react'
import PropTypes from 'prop-types'
import useOutsideClick from 'libs/hooks/outside-click'
import ArrowDown from 'components/common/icon/ArrowDown'

function Dropdown({
  placeholder,
  menu,
  onChange,
  style
}) {
  const el = useRef()
  const [selected, setSelected] = useState({})
  const [visible, setVisible] = useState(false)

  const handleSelect = value => {
    onChange && onChange(value)
    setVisible(false)
    setSelected(value)
  }

  useOutsideClick(el, () => {
    setVisible(false)
  });

  return (
    <div
      className='dropdown f mdl'
      style={style}
    >
      <style jsx>
        {`
          .dropdown {
            position: relative;
            width: 100%;
            height: 45px;
            background: #fff;
            border: solid 1px #D1D6DC;
            border-radius: 4px;
            cursor: pointer;
          }
          .selected-wrapper {
            width: 100%;
            padding: 12px 20px;
          }
          .selected-wrapper p {
            font-size: 12px;
            margin-right: 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .menu {
            position: absolute;
            top: calc(100% + 1px);
            left: 0;
            width: 100%;
            background: #fff;
            border: solid 1px #D1D6DC;
            border-radius: 4px;
            padding: 10px 0;
          }
          .menu a {
            display: block;
            padding: 12px 20px;
            font-size: 14px;
          }
          .menu a:hover, .menu a.selected {
            background: #FFECE8;
          }
        `}
      </style>
      <div
        className='f mdl f-rht selected-wrapper'
        ref={el}
        onClick={() => setVisible(true)}
      >
        <p className='bold uppercase'>{selected.title || placeholder}</p>
        <ArrowDown fill='var(--orange)' />
      </div>
      {
        visible &&
        <div className='menu'>
          {
            menu.map(i =>
              <a
                key={i.key}
                value={i.key}
                className={selected === i ? 'selected' : ''}
                onClick={() => handleSelect(i)}
              >
                {i.title}
              </a>)
          }
        </div>
      }
    </div>
  )
}

Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.object
}

export default Dropdown