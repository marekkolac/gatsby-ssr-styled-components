import styled from 'styled-components'

// @mixins
import Gradient from '@Mixins/gradient'

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  p {
    padding: 10px;
    margin: 10px;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
`

export const Sidebar = styled.aside`
  width: 320px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => Gradient(
    theme.colors.primary,
    theme.colors.complementary,
  )};
`

export const Content = styled.main`
  width: 80%;
  border: 1px dashed black;
`