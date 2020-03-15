import React, { Component } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

var menus = [
    {
        to: "/",
        label: "trang chu",
        activeOnlyWhenExact: true
    },
    {
        to: "/products",
        label: "Danh sach san pham",
        activeOnlyWhenExact: false
    },

]

export default class Menu extends Component {
    customLink = ({ label, to, activeOnlyWhenExact }) => {
        let match = useRouteMatch({
            path: to,
            exact: activeOnlyWhenExact
        });
        return (

            <li className={"nav-item " + ((match) ? "active" : " ")}>
                <Link className="nav-link" to={to} > {label} </Link>
            </li>
        )
    }

    renderMenu = (menus) => {
        if (menus.length > 0)
            return (
                menus.map((item, key) => {
                    return <this.customLink to={item.to} label={item.label} activeOnlyWhenExact={item.activeOnlyWhenExact} key={key} />
                })
            )
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="/">API</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {this.renderMenu(menus)}
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
