// import
// external library
import { Route, Switch } from "react-router-dom";
// components
import Header from "./header";
import Groups from "./groups";
import Gallery from "./gallery";
import PageNotFound from "./page-not-found";
import { LoaderWithState } from "./shared/components/loader";
// constants
import { ROUTES } from "./constants/routes";
const App = () => {
  return (
    <>
      <Header />
      <LoaderWithState />
      <Switch>
        <Route
          path={[ROUTES.HOME.URL, ROUTES.GROUPS.URL]}
          exact
          component={Groups}
        />
        {/* <Route path="/groups" exact component={Groups} /> */}
        <Route path={ROUTES.GALLERY.URL} exact component={Gallery} />
        <Route exact component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
