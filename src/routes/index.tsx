import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/AppHome";
import AssetproApps from "../views/AssetproApps";
import AssetproDocs from "../views/AssetproDocs";
import AssetproDocsContent from "../views/AssetproDocsContent";
import SearchAllTrue from "../views/SearchAllTrue";
import SearchAllFalse from "../views/SearchAllFalse";
import SearchAppTrue from "../views/SearchAppTrue";
import SearchAppFalse from "../views/SearchAppFalse";
import AssetproFaqContent from "../views/AssetproFaqContent";
import Login from "../views/Login";

export default () => {
  return (
    <Router>
      <Switch>
        // Route for home
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        // Route for assetpro dosc
        <Route path="/:appName" exact component={AssetproApps} />
        <Route path="/:appName/:manualName" exact component={AssetproDocs} />
        <Route path="/:appName/:manualname/:urlTo" exact component={AssetproDocs} />
        <Route
          path="/assetpro/docs/:urlTo/:id"
          exact
          component={AssetproDocsContent}
        />
        // Route for assetpro faq
        <Route path="/assetpro/faq" exact component={AssetproDocs} />
        <Route path="/assetpro/faq/:urlTo" exact component={AssetproDocs} />
        <Route
          path="/assetpro/faq/:urlTo/:id"
          exact
          component={AssetproFaqContent}
        />
        // Route for assetpro app search
        <Route path="/assetpro/searchapptrue" exact component={SearchAppTrue} />
        <Route
          path="/assetpro/searchappfalse"
          exact
          component={SearchAppFalse}
        />
        // Route for all app search
        <Route path="/searchalltrue" exact component={SearchAllTrue} />
        <Route path="/searchallfalse" exact component={SearchAllFalse} />
      </Switch>
    </Router>
  );
};
