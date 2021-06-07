import { render } from '@testing-library/react'
import { Search } from '../search'

describe('Search component', () => {
  it('renders to the DOM', () => {
    const { queryByRole } = render(<Search />)

    const clientInput = queryByRole('textbox')
    const searchButton = queryByRole('button')

    expect(clientInput).toBeInTheDocument()
    expect(clientInput).toHaveValue('')

    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveTextContent('Поиск')
  })
})
