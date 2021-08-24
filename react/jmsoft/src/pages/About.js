import React from "react";
import Chart from "react-google-chart";

const About = () => {
  return (
    <div className="content about sub">
      <div className="title">
        <h1 className="wrapper">about</h1>
      </div>
      <div className="anchor-menu wrapper">
        <a href="#challenge">Challenge & Passion</a>
        <a href="#greetings">CEO Greetings</a>
        <a href="#organization">Organization</a>
        <a href="#location">Location</a>
      </div>
      <section id="challenge" className="challenge wrapper">
        <h2>Challenge & Passion</h2>
        <p>
          ㈜제이엠소프트는 쉼 없는 정열로 일에 도전하고 목표를 성취하려는 모습,
          끊임없이 새로운 것을 개발하고 새로운 방법을 모색하는 열정으로 고객과의
          거리를 좁혀나가고 있습니다. 또한 구성원간의 신뢰와 믿음을 통한
          투명경영으로 고객의 Needs를 실현하기 위해 항상 최선을 다하고 있습니다.
        </p>
        <div className="impact">
          <p>Next AI Smart Factory</p>
          <p>IT Service Provider</p>
        </div>
        <p>
          끊임 없는 도전과 열정으로 고객 여러분이 원하는 제품과 기술을
          개발하는데 최선을 다하는 기업이 되겠습니다.
        </p>
      </section>
      <section id="greetings" className="greetings">
        <span className="image"></span>
        <div className="wrapper">
          <h2>CEO Greetings</h2>
          <p className="impact">
            산업과 기술, 사람을 연결하는 Smart Factory 솔루션 전문 S/W 개발 기업
          </p>
          <p>
            저희 ㈜제이엠소프트는 디스플레이, 반도체등 제조사업 분야에서 오랜
            기간 자동화시스템 구축 경험을 바탕으로 우수한 연구개발 인력과 최고의
            컨설팅 인력이 현장에서 고객과 호흡하며 급속한 제조 환경 변화에
            신속하고 효과적으로 대응하여 생산량 및 품질 극대화와 IT 경쟁력
            강화를 위한 솔루션 개발 및 보급에 현재까지 노력을 계속하고 있습니다.
          </p>
          <p>
            생산 라인의 대형화, 치열한 생산 공정개선 노력과 제조 현장의 지속적
            현신을 위하여 기술지향적, 연구 개발 및 솔루션 서비스등 한 차원 높은
            서비스를 제공하기 위한 목표를 자기고 AI Smart Factroy 솔루션 개발에
            주력하고 있습니다.
          </p>
          <p>
            스마트 원격제어(RCS), IIoT, 이미지 딥러닝, RTMS등 효율적인 Smart
            Factocy 솔루션 구축 및 제공 등의 선두 기업으로서 끊임없이 노력하는
            기업이 될것입니다.
          </p>
          <p className="ceo">㈜제이엠소프트 대표이사 안준모</p>
        </div>
      </section>
      <section id="organization" className="organization wrapper">
        <h2>Organization</h2>
        <p>
          ㈜제이엠소프트는 구성원간의 신뢰와 믿음을 통한 투명경영으로 고객의
          Needs를 실현하기 위해 최선을 다하고 있습니다.
        </p>
        <div id="organizationChart"></div>

        <Chart
          width={"100%"}
          height={350}
          chartType="OrgChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Name", "Manager", "ToolTip"],
            [{'v':'대표이사', 'f':'대표이사<div style="color:#36299f; font-style:italic">CEO</div>'},
            '', 'CEO'],
        [{'v':'시스템 사업부', 'f':'시스템 사업부<div style="color:#3b9cff; font-style:italic">Hardware Division</div>'},
            '대표이사', ''],
        [{'v':'소프트웨어 사업부', 'f':'소프트웨어 사업부<div style="color:#3b9cff; font-style:italic">Software Division</div>'},
            '대표이사', ''],
        [{'v':'경영지원', 'f':'경영지원<div style="color:#3b9cff; font-style:italic">Human Resources</div>'},
            '대표이사', ''],
        [{'v':'CS', 'f':'CS<div style="color:#3b9cff; font-style:italic">Customer Services</div>'},
            '대표이사', ''],
        [{'v':'시스템 컨설팅', 'f':'시스템 컨설팅<br />국내/해외 영업'},
            '시스템 사업부', ''],
        [{'v':'소프트웨어 사업부 업무', 'f':'IIoT 솔루션<br />지능형 RCS 솔루션<br />CIM / RTMS<br />SI(Web, 모바일)'},
            '소프트웨어 사업부', ''],
        [{'v':'CS 업무', 'f':'현장 Setup<br />기술지원(CS)<br />장애 대응'},
            'CS', ''],
          ]}
          options={{
            allowHtml: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </section>
      <section id="location" className="location wrapper">
        <h2>Location</h2>
        <p>
          주소: 경기도 용인시 수지구 광교중앙로 338, C동 802호(상현동,
          광교우미뉴브), (주)제이엠소프트
        </p>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.181470518939!2d127.06961423010688!3d37.2987297942698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b10a3aadcb3%3A0x6044f04c081b3ab4!2z6rSR6rWQ7Jqw66-464m067iMIOyngOyLneyCsOyXheyEvO2EsA!5e0!3m2!1sko!2skr!4v1615273034444!5m2!1sko!2skr"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
        <ul>
          <li>연락처: 031-308-5865</li>
          <li>팩스: 031-624-5969</li>
          <li>Email: sales@jm-soft.co.kr</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
