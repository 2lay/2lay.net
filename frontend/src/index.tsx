import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import Home from "./routes/home";
import "./index.css";
import Layout from "./layout";

const wrapper = document.getElementById("root");

if (!wrapper) {
    throw new Error("Wrapper root not found");
}

render(() =>
    <Router>
        <Route path="/" component={Layout}>
            <Route path="/" component={Home} />
            <Route path="/projects" component={() => <div>Projects</div>} />
            <Route path="/contact" component={() => <div>Contact</div>} />
        </Route>
    </Router>,
    wrapper
);
