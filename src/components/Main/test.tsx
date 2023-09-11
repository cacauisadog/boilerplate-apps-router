import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderize o componente
    const { container } = render(<Main />)
    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // verificar se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
