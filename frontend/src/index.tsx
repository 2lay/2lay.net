import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

const wrapper = document.getElementById("root");

import Home from "./routes/home";
import "./index.css";
import Navbar from "./_components/navbar";

if (!wrapper) {
    throw new Error("Wrapper root not found");
}

render(() =>
    <div class="px-10 pt-5">
        <Navbar />
        <div class="mt-5">
            <Router>
                <Route path="*" component={Home} />
            </Router>
        </div>
    </div>,
    wrapper)
