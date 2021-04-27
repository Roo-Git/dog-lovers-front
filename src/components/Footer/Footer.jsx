import React from 'react'

function Footer(props) {
    return (
        <div className="footerComponent">
            <div className="section">
                <h5>GeeksHubs Final Project</h5>
                <a href="https://es.wikipedia.org/wiki/Preguntas_frecuentes">
                    <p>FAQ</p>
                </a>
                <a href="https://cinefila.mx/wp-content/uploads/2020/05/Por-qu%C3%A9-Cookie-Monster-merece-su-propio-programa-de-televisi%C3%B3n.jpg">
                    <p>Cookie Preferences</p>
                </a>
            </div>
            <div className="section section2">
            <a href="https://www.youtube.com/watch?v=OgIRAjnnJzI">
                    <p>Help Center</p>
                </a>
                <a href="https://en.wikipedia.org/wiki/Dummy_corporation">
                    <p>Corporate Information</p>
                </a>
            </div>
            <div className="section section2">
                <a href="https://policies.google.com/terms?hl=en-US">
                    <p>Terms of Use</p>
                </a>
                <a href="https://images.app.goo.gl/e7kHcjHsUHw1Hkfu8">
                    <p>Privacy</p>
                </a>
            </div>
        </div>
    )
}

export default Footer