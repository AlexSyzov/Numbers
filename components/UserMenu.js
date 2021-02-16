import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth";
import { WelcomeBox, UserBox, UserButton } from "../styled";

const UserMenu = ({ avatar, name, onLogout }) => (
  <UserBox>
    <img src={avatar} alt="avatar" width="32" />
    <WelcomeBox>Welcome, {name}</WelcomeBox>
    <UserButton type="button" onClick={onLogout}>
      Log out
    </UserButton>
  </UserBox>
);

const mapStateToProps = (state) => ({
  avatar: "https://icon-library.com/images/141782.svg.svg",
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
