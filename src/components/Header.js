import styled from "styled-components";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { signOutAPI } from "../actions";

const Header = (props) => {
  return (
    <div>
      <Container>
        <Content>
          <Logo>
            <Link to="/home">
              <img src="images/home-logo.svg"></img>
            </Link>
          </Logo>
          <Search>
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <SearchIcon>
              <img src="images/search-icon.svg" />
            </SearchIcon>
          </Search>
          <Nav>
            <NavListWrap>
              <NavList>
                <a>
                  <img src="images/nav-home.svg" />
                  <span>Home</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="images/nav-network.svg" />
                  <span>My Network</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="images/nav-jobs.svg" />
                  <span>Jobs</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="images/nav-messaging.svg" />
                  <span>Messaging</span>
                </a>
              </NavList>

              <NavList>
                <a>
                  <img src="images/nav-notifications.svg" />
                  <span>Notifications</span>
                </a>
              </NavList>
              <User>
                <a>
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} />
                  ) : (
                    <img src="images/user.svg" />
                  )}
                  <span>Me
                  <img src="images/down-icon.svg" />
                  </span>
                  
                </a>
                <SignOut onClick={()=>props.SignOut()}>Sign Out</SignOut>
              </User>
              <Work>
                <a>
                  <img src="images/nav-work.svg" />
                  <span>
                    Work
                    <img src="images/down-icon.svg" />
                  </span>
                </a>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      font-weight: 400;
      line-height: 1.75;
      height: 34px;
      font-size: 14px;
      box-shadow: none;

      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 80px;
  height: 40px;
  font-size: 14px;
  padding: 2px;
  transition-duration: 167ms;
  text-align: center;
  display: None;
`;
const User = styled(NavList)`
a>svg{
    width:24px;
    border-radius:50%;
}
a>img{
    width:25px;
    height:25px;
    border-radius:50%;

}
span{
    display:flex;
    align-items:center;
}
&:hover{
    ${SignOut}
    {
        align-items:center;
        display:flex;
        justify-content:center;
    }
}
}`; /*borrow styling*/

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
const mapStateToProps=(state)=>{
  return {
    user:state.userState.user,
  };
};
const mapDispatchToProps=(dispatch)=>({
  SignOut:()=>dispatch(signOutAPI()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
