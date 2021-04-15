import Link from 'next/link'

function Menu(){
  return (
    <div className="f">
    <style jsx>
          {`
          .menu {
            display: block;
            background: #fff;
            padding: 12px 15px;
            margin-top: 10px;
            margin-right: 10px;
            border-radius: 4px;
            margin-bottom: 10px;
            border-left: solid 5px var(--orange);
            cursor: pointer;
          }
          
        `}
        </style>
      <Link href='/'>
      <a className="menu bold">Home</a>
      </Link>
      <Link href='/books'>
      <a className="menu bold">Books</a>
      </Link>
    </div>
  )
}

export default Menu