import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.scss";
import "./content.scss";

export default function Layout({ children }) {
    return (
        <Fragment>
            <Header/>
            <main className="content">
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
}
