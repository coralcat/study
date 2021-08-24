import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Slider from "react-slick"

const Services = () => {
  const [index, setIndex] = useState(0);

  const sliderSettings = {    
    lazyLoad: 'ondemand',
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div class="content services sub">
      <div class="title">
        <h1 class="wrapper">services</h1>
      </div>
      <div class="wrapper">
        <Tabs selectedIndex={index} onSelect={(index) => setIndex(index)}>
          <TabList className="sub-menu tabs">
            <Tab>System Integration</Tab>
            <Tab>System Consulting</Tab>
          </TabList>
        </Tabs>
      </div>
      <div class="tab-content wrapper">
        <Tabs selectedIndex={index} onSelect={(index) => setIndex(index)}>
          <TabPanel className="system-integration" activeClass="active">
            <div class="sub-title wrapper">
              <h2>System Integration</h2>
              <p>
                고객의 다양한 전산시스템 구축 요구에 따라 컨설팅에서부터
                시스템설계, 개발, 구축, 관리, 분석, 교육, 유지보수 공정에
                이르기까지 일련의 정보서비스를 고객의 경영환경에 맞게 유기적으로
                통합 구축하는 서비스 사업입니다.
              </p>

              <p>
                ㈜제이엠소프트의 시스템 통합(SI, System Integration) 서비스는
                비즈니스 환경에서의 경쟁우의를 선점하도록 도와 드립니다. 전문
                정보기술과 오랜 경험으로 축적된 업무 노하우를 바탕으로 고객사가
                변화하는 경영환경에 탄력적으로 대응 할 수 있도록 고객의
                사업전략에 따라 정보시스템의 분석, 설계, 개발, 사후관리에
                이르기까지 통합 관리하는 최적의 시스템을 구축해 드리겠습니다.
              </p>
            </div>
            <section class="process wrapper">
              <dl>
                <dt>고객요구사항 분석</dt>
                <dd>프로젝트 목표파악</dd>
                <dd>프로젝트 범주확인</dd>
                <dd>요구기능 사항파악</dd>
              </dl>
              <dl>
                <dt>서비스전략 컨설팅</dt>
                <dd>시스템기능 분석 및 설계</dd>
                <dd>DB구축 및 모델링 설계</dd>
                <dd>UI 디자인 설계</dd>
              </dl>
              <dl>
                <dt>서비스전략 수립</dt>
                <dd>기존전산 인프라분석</dd>
                <dd>Hardware, Software 선정</dd>
                <dd>시스템 구성 모델링 정의</dd>
              </dl>
              <dl>
                <dt>서비스 운영</dt>
                <dd>시스템 사용자 교육</dd>
                <dd>시스템활용 전략적방향 제시</dd>
                <dd>시스템 유지보수</dd>
              </dl>
            </section>
            <section class="benefit">
              <div class="wrapper">
                <h3>기대효과</h3>
                <p>
                  전문 컨설턴트에 의한 시스템 설계로 안정된 시스템 설계 및
                  구현을 통해 원활한 서비스 지원 기타 SI개발 솔루션을 적용한
                  시스템의 유연성 부여 및 통합 관리 시스템 지원 설계 단계부터
                  구현 단계까지의 토털 컨설팅 서비스를 통한 유지보수의
                  융통성부여 및 업그레이드 용이 위탁, 공동개발 등 다양한 개발
                  방식지원을 통한 단가감소 효과 유발
                </p>
              </div>
            </section>
            <section>
              <Slider className="services-slider" {...sliderSettings}>
                <div>
                  <img
                    src={require("../assets/images/services/02.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={require("../assets/images/services/03.png")}
                    alt=""
                  />
                </div>
              </Slider>
            </section>
          </TabPanel>
          <TabPanel className="system-consulting">
            <div class="sub-title wrapper">
              <h2>System Consulting</h2>
              <p>
                고객의 전산시스템 최적화를 위해 가장 적합한 시스템 전산장비를
                선정하여 조달 및 발주하는 서비스로 대용량 처리를 위한 서버와
                중소형 서버에 이르기까지 최적의 시스템을 구성하기 위한 컨설팅 및
                납품 서비스를 통해 보다 나은 안정적인 전산 시스템을 이루도록
                지원합니다.
              </p>
              <p>
                ㈜제이엠소프트는 다양한 컨설팅 및 서비스 운영경험을 바탕으로,
                고객의 경영과 IT를 유기적으로 통합시켜 빠르게 변화하는 비즈니스
                환경에 부합할 수 있도록 최적의 시스템을 분석, 설계 방안을 제시해
                나가겠습니다.
              </p>
            </div>
            <section class="process wrapper">
              <dl>
                <dt>고객요구사항 분석</dt>
                <dd>시스템 성능 목표파악</dd>
                <dd>시스템 성능 범주확인</dd>
                <dd>운영관리 S/W 파악확인</dd>
              </dl>
              <dl>
                <dt>전산장비 선정</dt>
                <dd>기존전산 인프라분석</dd>
                <dd>Hardware, Software분석</dd>
                <dd>최적화 시스템 장비견적 비교</dd>
              </dl>
              <dl>
                <dt>전산장비 컨설팅</dt>
                <dd>전산장비 조달 및 발주</dd>
                <dd>전산장비 확인</dd>
                <dd>전산장비 설치 및 성능테스트</dd>
              </dl>
              <dl>
                <dt>전산장비 운영</dt>
                <dd>전산장비 운영 테스트</dd>
                <dd>안정적 운영을 위한</dd>
                <dd>하드웨어 A/S</dd>
                <dd>향후 업그레이드 조치 확인</dd>
              </dl>
            </section>
            <section class="benefit">
              <div class="wrapper">
                <h3>기대효과</h3>
                <p>
                  S/W 성능 및 운영 범주에 가장 적합한 전산장비 도입으로 최적화
                  전산시스템 성능 발휘 하드웨어 전문가에 의한 일체의 전산장비 및
                  각종 기본장치에 대한 설치와 성능 테스트를 통해 불필요한
                  시간단축 및 가장 안정적인 시스템 설비제공 전산설비의 안정적
                  운영을 위한 하드웨어 A/S 서비스를 통해 장애 발생시 절대적 복구
                  시간 단축 향후 업그레이드 조치 시 기존 전산설비 분석으로 대체
                  전산설비 도입
                </p>
              </div>
            </section>
            <section>
              <Slider className="services-slider" {...sliderSettings}>
                <div>
                  <img
                    src={require("../assets/images/services/02.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={require("../assets/images/services/03.png")}
                    alt=""
                  />
                </div>
              </Slider>
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
