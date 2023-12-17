import React from "react"

export const Jumbotron = () => {
    return (
        <div className="container mt-4 mb-4 bg-light">
            <div className="jumbotron-fluid">
                <div className="container p-5">
                    <h1 className="display-3"><strong>A Warm Welcome!</strong></h1>
                    <p className="lead p-2">
                        Welcome to our bustling online hub! Here, embark on a journey through a digital realm brimming with boundless opportunities, knowledge, and creativity. Discover, learn, and thrive amidst a tapestry woven with diverse perspectives and endless inspiration. We invite you to explore and immerse yourself in a world where possibilities know no limits!
                    </p>
                    <p>
                        <a href="#" className="btn btn-primary btn-lg">
                            Call to Action!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};