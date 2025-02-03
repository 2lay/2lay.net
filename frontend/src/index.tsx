import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

const wrapper = document.getElementById("root");

import Home from "./routes/home";
import "./index.css";

if (!wrapper) {
    throw new Error("Wrapper root not found");
}

render(() => <Router>
    <Route path="*" component={Home} />
</Router>, wrapper)
