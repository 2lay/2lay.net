import { ParentComponent } from 'solid-js';
import { RouteSectionProps } from "@solidjs/router";
import Navbar from "./_components/navbar";

const Layout: ParentComponent<RouteSectionProps> = (props) => {
    return (
        <div class="px-10 pt-5">
            <Navbar />
            <div class="mt-5">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
