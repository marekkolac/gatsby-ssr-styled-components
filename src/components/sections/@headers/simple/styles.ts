import styled from 'styled-components'

// @mixins
import Gradient from '@Mixins/gradient'
import SectionSpacing from '@Mixins/section-spacing'

export const Section = styled.header`
  width: 100%;
  display: flex;
`
// ${SectionSpacing('20px', null, null, '15px', null, '10px')};
export const LogoHolder = styled.div`
  display: flex;
  align-items: center;
`

// ${({ theme }) => Gradient(theme.colors.primary, theme.colors.complementary)};
// ${SectionSpacing('20px', null, null, '15px', null, '10px')};
export const NavigationHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`