import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import ContactsView from "./views/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import routes from "./routes";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";
import { contactsOperations } from "./redux/contacts";

class App extends Component {
  componentDidMount() {
    this.props.onCurrentUserGetting();
  }

  render() {
    return (
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <PublicRoute key={route.path} {...route} />
            )
          )}

          <PrivateRoute path="/contacts" component={ContactsView} />
        </Switch>
      </Suspense>
    );
  }
}

const mapDispatchToProps = {
  onCurrentUserGetting: authOperations.getCurrentUser,
  onContactsFetching: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
