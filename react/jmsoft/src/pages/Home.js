import React from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: true,
    dots: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="content main">
      <section id="slider">
        <Slider className="text-slider" {...sliderSettings}>
          <div>
            <div className="text wrapper">
              <div className="title">
                <strong>Smart</strong>IIoT
              </div>
              <p>
                산업 환경에서 사용되는 IoT 기술로 데이터를 처리하는 고급 분석
                플랫폼 (Smart Industrial Internet of Things)
              </p>
              <Link to="/solutions/smart-iiot">
                <button>Read more</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="text wrapper">
              <div className="title">
                <strong>Remote</strong>Control System
              </div>
              <p>원격제어 및 통합 모니터링 시스템</p>
              <button>Read more</button>
            </div>
          </div>
          <div>
            <div className="text wrapper">
              <div className="title">
                <strong>Smart</strong>Factory Automation
              </div>
              <p>
                산업설비, 생산물류 운영시스템, RTMS, 공장 자동화 시스템, 통합
                시스템
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div>
            <div className="text wrapper">
              <div className="title">
                <strong>Digital</strong>Transformation
              </div>
              <p>
                사물 인터넷(IoT), 클라우드 컴퓨팅, 인공지능(AI), 빅데이터 솔루션
                등 정보통신기술(ICT)을 플랫폼으로 구축·활용
              </p>
              <button>Read more</button>
            </div>
          </div>
        </Slider>
      </section>
      <section id="business-area" className="wrapper">
        <h1>business area</h1>
        <div className="cards">
          <Link to="/solutions/smart-iiot" className="card">
            <div className="title">
              Smart
              <br />
              IIoT
            </div>
            <ul>
              <li>Industrial IoT System</li>
              <li>EQP/MES Data Integration</li>
              <li>Big Data Messaging Middleware</li>
            </ul>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
              </svg>
            </button>
          </Link>
          <Link to="/solutions/remote-control-system" className="card">
            <div className="title">Remote Control System</div>
            <ul>
              <li>
                Remote Control System
                <br />
                (S/W, H/W)
              </li>
              <li>
                Process Control System
                <br />
                (PC, HMI, CCTV, I/O Unit)
              </li>
            </ul>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
              </svg>
            </button>
          </Link>
          <a href="solutions-fa.html" className="card">
            <div className="title">Smart Factory Automation</div>
            <ul>
              <li>RTMS (Real Time Monitoring System)</li>
              <li>DMS (Defect Management System)</li>
              <li>CIM/GEM</li>
              <li>EQP/PLC Control</li>
            </ul>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
              </svg>
            </button>
          </a>
          <a href="solutions-dt.html" className="card">
            <div className="title">Digital Transformation</div>
            <ul>
              <li>A.I. Deep Learning</li>
              <li>RSS (Remote Support System)</li>
              <li>System Parts</li>
              <li>- H/W : HP, Dell, Renovo, Etc.</li>
              <li>- S/W : Management Service IT Infrastructure</li>
            </ul>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
              </svg>
            </button>
          </a>
        </div>
      </section>
      <section id="services">
        <div className="image-wrapper image-wrapper-01">
          <div className="image"></div>
        </div>
        <div className="wrapper">
          <h1>services</h1>
          <div className="services">
            <div className="si">
              <div className="title">System Integration</div>
              <ul>
                <li>
                  전문 컨설턴트에 의한 시스템 설계로 안정된 시스템 설계 및
                  구현을 통해 원활한 서비스 지원
                </li>
                <li>
                  기타 SI개발 솔루션을 적용한 시스템의 유연성 부여 및 통합 관리
                  시스템 지원
                </li>
                <li>
                  설계 단계부터 구현 단계까지의 토털 컨설팅 서비스를 통한
                  유지보수의 융통성부여 및 업그레이드 용이
                </li>
                <li>
                  위탁, 공동개발 등 다양한 개발 방식지원을 통한 단가감소 효과
                  유발
                </li>
              </ul>
            </div>
            <div>
              <div className="image-wrapper image-wrapper-02">
                <div className="image"></div>
              </div>
              <div className="sc">
                <div className="title">System Consulting</div>
                <ul>
                  <li>
                    S/W 성능 및 운영 범주에 가장 적합한 전산장비 도입으로 최적화
                    전산시스템 성능 발휘
                  </li>
                  <li>
                    하드웨어 전문가에 의한 일체의 전산장비 및 각종 기본장치에
                    대한 설치와 성능 테스트를 통해 불필요한 시간단축 및 가장
                    안정적인 시스템 설비제공
                  </li>
                  <li>
                    전산설비의 안정적 운영을 위한 하드웨어 A/S 서비스를 통해
                    장애 발생시 절대적 복구 시간 단축
                  </li>
                  <li>
                    향후 업그레이드 조치 시 기존 전산설비 분석으로 대체 전산설비
                    도입
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="customers">
        <div className="wrapper">
          <h1>customers</h1>
          <div className="customers">
            <div>
              <img src={require("../assets/images/logo/ss_display.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/ss_semi.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/imarket.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/oncell_tech.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/wonik.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/sk_siltron.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/charm.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/yang.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/ap_systems.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/enc_tech.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/atomy.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/innodep.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/lilycover.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/dsht.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/bukedu.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/gsi.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/volans.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/humin_tech.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/ani.png")} />
            </div>
            <div>
              <img src={require("../assets/images/logo/hive_vision.png")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
