import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h2>error</h2>
                        <h3>page not found</h3>
                        <h3>the requested page URL
                            <span className="text-danger">{this.props.location.pathname}</span>
                            {' '}Not found!!
                            </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;