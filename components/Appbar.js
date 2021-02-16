import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import { PageHeader } from "../styled";

const AppBar = ({ isAuthenticated }) => (
  <PageHeader>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </PageHeader>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
