import styled from 'styled-components'

export const NavBar = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: 'roboto';
`
export const LogoImg = styled.img`
  width: 150px;
  height: 35px;
`
export const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
`
export const ListItem = styled.li`
  list-style: none;
  margin-right: 20px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => (props.mode === 'dark' ? '#ffffff' : null)};
`
export const ProfileImg = styled.img`
  height: 35px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MenuButton = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => (props.mode === 'dark' ? '#ffffff' : null)};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  width: 70px;
  height: 35px;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  @media screen and (max-width: 767px) {
    border: 0px;
  }
`
export const LogoutText = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIcon = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => (props.mode === 'dark' ? '#ffffff' : null)};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupCard = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#181818'};
  border-radius: 10px;
  padding: 20px;
`
export const Description = styled.p`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
  font-size: 16px;
`
export const CancelButton = styled.button`
  width: 80px;
  height: 30px;
  color: #909090;
  border-radius: 8px;
  border: 1px solid #909090;
  margin: 15px;
  background-color: transparent;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  width: 80px;
  height: 30px;
  color: #ffffff;
  border: 0px;
  margin: 15px;
`
