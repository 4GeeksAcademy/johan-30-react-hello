import React from "react";
const Jumbotron = () => {
    return (
        <div className="container mt-4">
            <div className="p-5 mb-4 bg-body-secondary rounded">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit sociis nunc facilisis, himenaeos nec aliquam magnis senectus et augue pharetra donec iaculis, morbi scelerisque egestas sociosqu habitasse class volutpat fusce mollis.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;