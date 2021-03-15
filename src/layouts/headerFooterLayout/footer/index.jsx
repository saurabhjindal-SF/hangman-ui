import React from 'react';
const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer shadow-lg">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-6  text-lg-left text-center">
                            2021 @ Copyright Sourcefuse. All rights reserved.
                        </div>
                        <div className="col-md-6  text-lg-right text-center">
                            <a href="https://en.wikipedia.org/wiki/Hangman_(game)" target="_black" rel="noopener noreferrer">
                                Rules
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};
export default React.memo(Footer);
