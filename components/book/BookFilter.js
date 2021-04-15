import Input from 'components/common/Input'
import Dropdown from 'components/common/Dropdown'
import Search from 'components/common/icon/Search'
import BookContext from 'libs/hooks/book'
const filterMenu = [
  {
    title: 'Name A-Z',
    key: 'name_asc'
  },
  {
    title: 'Name Z-A',
    key: 'name_desc'
  },
  {
    title: 'New Published',
    key: 'date_recent'
  },
  {
    title: 'Old Published',
    key: 'date_old'
  }
]

export default function BookFilter() {
  const {
    setSort,
    setSearch
  } = BookContext.useContainer()

  const handleSortChange = value => {
    setSort(value)
  }

  const handleSearchChange = value => {
    setSearch(value)
  }

  return (
    <div
      style={{
        margin: '20px 0',
        width: '100%'
      }}
      className='f'
    >
      <Input
        placeholder='Search book name or author'
        type='text'
        icon={<Search fill='#ddd' />}
        onChange={e => handleSearchChange(e.target.value)}
        style={{
          borderRadius: '4px 0 0 4px'
        }}
      />
      <Dropdown
        placeholder='Sort'
        menu={filterMenu}
        onChange={e => handleSortChange(e)}
        style={{
          minWidth: 160,
          maxWidth: 160,
          borderRadius: '0 4px 4px 0',
          borderLeft: 0
        }}
      />
    </div>
  )
}