import React from 'react'


export const Footer = (props) => {
  return (
    <footer>
        <section className="sitemap wrapper">
          <div>
            <h3><a href="about.html">about</a></h3>
            <ul>
              <li>Challenge & Passion</li>
              <li>CEO Greeting</li>
              <li>Organization</li>
              <li>Location</li>
            </ul>
          </div>
          <div>
            <h3><a href="solutions-iiot.html">solution</a></h3>
            <ul>
              <li>Smart IIoT Solution</li>
              <li>Remote Control System</li>
              <li>Smart Factory Automation</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
          <div>
            <h3><a href="services.html">services</a></h3>
            <ul>
              <li>System Integration</li>
              <li>System Consulting</li>
            </ul>
          </div>
          <div>
            <h3><a href="support.html">support</a></h3>
          </div>
        </section>
        <section className="information wrapper">
          <div>
            <address>경기도 용인시 수지구 광교중앙로 338, C동 802호(상현동, 광교우미뉴브) ㈜제이엠소프트</address>
            <ul>
              <li>tel: 031-308-5865</li>
              <li>fax: 031-624-5969</li>
              <li><a href="mailto:sales@jm-soft.co.kr">e-mail: sales@jm-soft.co.kr</a></li>
            </ul>
          </div>
          <div className="copyright">Copyright © JM-SOFT Co., Ltd. All Rights Reserved.</div>
        </section>
      </footer>
  )
}