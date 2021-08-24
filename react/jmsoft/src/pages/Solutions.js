import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Slider from "react-slick";

const Solutions = () => {
  const [index, setIndex] = useState(0);

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

  const sliderSettings2 = {
    lazyLoad: "ondemand",
    autoplay: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="content solutions sub">
      <div className="title">
        <h1 className="wrapper">solutions</h1>
      </div>
      <Tabs
        className="wrapper"
        selectedIndex={index}
        onSelect={(index) => setIndex(index)}
      >
        <TabList className="sub-menu">
          <Tab>Smart IIoT</Tab>
          <Tab>Remote Control System</Tab>
          <Tab>Smart Factory Automation</Tab>
          <Tab>Digital Transformation</Tab>
        </TabList>
        <TabPanel className="smart-iiot">
          <div className="sub-title">
            <h2>
              Smart IIoT <small>Smart Industrial Internet of Things</small>
            </h2>
            <p>
              현재 수집되고 있지 않은 PLC, CIM, File 데이터 수집을 위한 설비
              개조, 변경 없이 데이터를 수집하여 분석에 필요한 Big-Data 구축과
              Rule을 통한 설비 제어가 가능한 제조공정에 특화된 IoT System
            </p>
          </div>
          <section>
            <img
              src={require("../assets/images/solutions/smart-iiot.png")}
              alt=""
            />
          </section>
          <section>
            <img
              src={require("../assets/images/solutions/smart-iiot_02.jpg")}
              alt=""
            />
          </section>
        </TabPanel>
        <TabPanel className="rcs">
          <div className="sub-title">
            <h2>
              RCS <small>Remote Control System</small>
            </h2>
          </div>
          <section className="systems">
            <div>
              <h3>원격장치 통합관리</h3>
              <p>
                원격지에 있는 다양한 원격장치를 원격 통합관리 및 모니터링 할 수
                있는 특화된 솔루션입니다.
              </p>
              <ul>
                <li>PC & Server</li>
                <li>IP Camera(CCTV)</li>
                <li>VNC Server</li>
                <li>DVR / NVR</li>
                <li>
                  PC 기반 장비, PLC Touch Screen (GOT, Pro-Face Remote S/W PC)
                  (키오스크, 반도체 검사장비 등)
                </li>
              </ul>
            </div>
            <div>
              <h3>생산공정 통합관리</h3>
              <p>
                Display, 반도체, 자동차등 제조기업의 생산공정을 안정적으로 원격
                제어 및 통합 모니터링 하는 솔루션입니다.
              </p>
            </div>
            <div>
              <h3>고객중심 커스터마이징</h3>
              <p>
                독자적인 원격제어 및 통합 모니터링 기술을 기반으로 고객이 요청한
                커스터마이징을 적극 수행하는 사용자 중심의 솔루션입니다.
              </p>
            </div>
          </section>
          <section>
            <img
              src={require("../assets/images/sub/solution-rcs.jpg")}
              alt=""
            />
          </section>
          <section>
            <h3>주요기능</h3>
            <Slider className="rcs-function" {...sliderSettings}>
              <div>
                <img
                  src={require("../assets/images/sub/solution-rcs-function1.jpg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require("../assets/images/sub/solution-rcs-function2.jpg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require("../assets/images/sub/solution-rcs-function3.jpg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require("../assets/images/sub/solution-rcs-function4.jpg")}
                  alt=""
                />
              </div>
            </Slider>
          </section>
          <section>
            <h3>제품목록</h3>
            <div className="table">
              <ul className="row th">
                <li>Type</li>
                <li>
                  Product Name
                  <br />
                  Model Name
                </li>
                <li>Resolution</li>
                <li>FPS</li>
                <li>
                  Video Delay(Full)
                  <br />
                  Video Delay(Multi)
                </li>
                <li>
                  Video Switching Delay
                  <br />
                  Keyboard/Mouse Delay
                </li>
              </ul>
              <ul className="row">
                <li>S/W</li>
                <li>
                  NQVM RCS Expert Edition Server/Viewer Ver2.5.4
                  <br />
                  NQVM RCS Expert Edition Server/Viewer Ver2.5.4
                </li>
                <li>All</li>
                <li>≤25fps</li>
                <li>
                  ≤16~80ms
                  <br />
                  ≤16~80ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>S/W</li>
                <li>
                  NQVM RCS Expert Edition Server/Viewer Ver2.5.4 Hyper
                  <br />
                  NQVM RCS Expert Edition Server/Viewer Ver2.5.4 Hyper
                </li>
                <li>All</li>
                <li>≤60fps</li>
                <li>
                  ≤16~80ms
                  <br />
                  ≤16~80ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>H/W</li>
                <li>
                  KVMoIP Lite Encoder 30fps
                  <br />
                  ND100U-KAD-30L
                </li>
                <li>≤1920x1080p/1200p</li>
                <li>≤30fps</li>
                <li>
                  ≤128ms
                  <br />
                  ≤128ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>H/W</li>
                <li>KVMoIP Standard Encoder 30fps ND100U-KAD-30S</li>
                <li>≤1920x1080p/1200p</li>
                <li>≤30fps</li>
                <li>
                  ≤80~96ms
                  <br />
                  ≤80~96ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>H/W</li>
                <li>KVMoIP Standard Encoder 60fps ND100U-KAD-60S</li>
                <li>≤1920x1080p/1200p</li>
                <li>≤60fps</li>
                <li>
                  ≤64~80ms
                  <br />
                  ≤64~80ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>H/W</li>
                <li>KVMoIP Professional Encoder 60fps ND100U-KAD-60P</li>
                <li>≤1920x1080p/1200p</li>
                <li>≤60fps</li>
                <li>
                  ≤32~48ms
                  <br />
                  ≤32~48ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>H/W</li>
                <li>KVMoIP Professional Encoder 30fps 4K ND100U-KAD-30P-4K</li>
                <li>≤3840x2160p</li>
                <li>≤30fps</li>
                <li>
                  ≤48~64ms
                  <br />
                  ≤48~64ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
              <ul className="row">
                <li>H/W</li>
                <li>KVMoIP Professional Encoder 30fps 4K ND100U-KAD-30P-4K</li>
                <li>≤3840x2160p</li>
                <li>≤60fps</li>
                <li>
                  ≤32~48ms
                  <br />
                  ≤32~48ms
                </li>
                <li>
                  ≤0.5s
                  <br />
                  ≤16~64ms
                </li>
              </ul>
            </div>
          </section>
          <section className="nqvm">
            <h3>주요활용처</h3>
            <ul>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/01.png")}
                  alt=""
                />
                <span>생산설비 원격제어</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/02.png")}
                  alt=""
                />
                <span>중요시스템 서버관리</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/03.png")}
                  alt=""
                />
                <span>리소스 알람&모니터링</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/04.png")}
                  alt=""
                />
                <span>산업설비와 연동한 원격관리</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/05.png")}
                  alt=""
                />
                <span>통합관제센터 구축</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/06.png")}
                  alt=""
                />
                <span>사내 전산자원 원격관리</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/07.png")}
                  alt=""
                />
                <span>제조기업 제품 원격검사</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/08.png")}
                  alt=""
                />
                <span>키오스크&DID</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/09.png")}
                  alt=""
                />
                <span>원격 교육</span>
              </li>
              <li>
                <img
                  src={require("../assets/images/solutions/rcs/10.png")}
                  alt=""
                />
                <span>생산공정 통합관리 및 모니터링</span>
              </li>
            </ul>
          </section>
        </TabPanel>
        <TabPanel className="smart-factory-automation">
          <Tabs>
            <TabList className="tabs">
              <Tab>RTMS</Tab>
              <Tab>DMS</Tab>
              <Tab>CIM/GEM</Tab>
              <Tab>PSM</Tab>
            </TabList>
            <TabPanel className="rtms">
              <div className="sub-title">
                <h2>
                  RTMS <small>Realtime Monitoring System</small>
                </h2>
                <p>
                  RTMS는 설비 및 공정 상태를 실시간으로 모니터링 하면서 제로
                  또는 낮은 대기 시간으로 지속적으로 업데이트되는 정보
                  스트리밍을 제공합니다. 관리자가 심각한 문제를 즉시 식별 할
                  수있는 관련 및 현재 데이터의 지연 시간이 짧은 연속 스트림을
                  제공하여 사전에 대비하며, 데이터를 추적함으로써 조직은 추세와
                  성과를 공개하고 예측할 수 있습니다.
                </p>
              </div>
              <section>
                <img
                  src={require("../assets/images/solutions/rtms/rtms.png")}
                  alt=""
                />
              </section>
              <section className="advantages">
                <ul>
                  <li>
                    <h4>역할</h4>
                  </li>
                  <li>설비 Status & Alarm 정보</li>
                  <li>설비/작업자/공정 별 불량 현황</li>
                  <li>공정간 데이터 연계성 분석</li>
                  <li>실시간 분석 데이터 제공</li>
                  <li>Bottleneck 분석 자료 제공</li>
                  <li>설비 가동률 제공</li>
                </ul>
                <ul>
                  <li>
                    <h4>기대효과</h4>
                  </li>
                  <li>지속적인 설비 관리로 설비 신뢰성 확보</li>
                  <li>최저 불량률 실현</li>
                  <li>데이터 수집으로 인한 불필요한 인력 양산 방지</li>
                  <li>데이터 수집 시간 최소화</li>
                  <li>장애 및 불량에 대한 신속한 분석</li>
                  <li>데이터 처리 간소화</li>
                </ul>
              </section>
              <section>
                <Slider className="rtms-slider" {...sliderSettings2}>
                  <div>
                    <img
                      src={require("../assets/images/solutions/rtms/01.png")}
                      alt=""
                    />
                    <span>EQP Monitoring</span>
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/rtms/02.png")}
                      alt=""
                    />
                    <span>Yield Monitoring</span>
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/rtms/03.png")}
                      alt=""
                    />
                    <span>AOI Significant Difference Trend</span>
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/rtms/04.png")}
                      alt=""
                    />
                    <span>Repair Success Rate Trend</span>
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/rtms/05.png")}
                      alt=""
                    />
                    <span>EQP Tact Time Report</span>
                  </div>
                </Slider>
              </section>
            </TabPanel>
            <TabPanel className="dms">
              <div className="sub-title">
                <h2>
                  DMS <small>Defect Management System</small>
                </h2>
                <p>
                  비전 검사 설비에서 검출한 불량에 대해서 별도의 설비 없이
                  가상으로 설비의 데이터와 이미지를 사용하여 불량을 선 판정하는
                  시스템으로 과검출 된 Defect을 DRS에서 작업자가 직접 판정하고,
                  검사 대상 Defect을 선별하여 비전 검사 설비의 Load를 줄여주고
                  물류 성능을 향상합니다. 별도의 설비가 없으므로, 실물이
                  움직이지 않고 판정하므로 빠른 판정이 가능합니다.
                </p>
              </div>
              <section className="advantages">
                <ul>
                  <li>빠른 판정으로 물류 Tact time 최소화</li>
                  <li>
                    다양한 불량 정보 수집, 가공 하여 분석 및 통계데이터 제공
                  </li>
                  <li>불량 검출력 향상 조치 예방에 도움</li>
                  <li>직관적 UI 구성으로 사용자 편의성 증대</li>
                  <li>상세 불량정보 이미지로 조회 가능</li>
                  <li>통계 데이터 Excel 파일 저장 다양한 분석 활용 용의</li>
                </ul>
                <ul>
                  <li>
                    Smart-IT Server의 학습Data를 활용하여 기존 DRS시스템 을
                    고도화 하여 Repair설비의 Load를 줄여주고 물류 성능을
                    향상시킴
                  </li>
                  <li>
                    안정되고 저비용 확장 성이 보장된 무정지 “DMS” 시스템 구축
                  </li>
                  <li>
                    Smart-IT Server와 연동할 수 있는 유연한 인터페이스제공
                  </li>
                  <li>검증된 DRS시스템 제공</li>
                  <li>고객 작업환경에 맞는 UI제공</li>
                </ul>
              </section>
              <section className="interface">
                <h3>DMS와 Runner 서버 간의 Data Interface 구성</h3>
                <img
                  src={require("../assets/images/solutions/dms/dms.png")}
                  alt=""
                />
              </section>
              <section className="process">
                <ul>
                  <li>
                    자동 판정 Process Alive/Dead Check (TCP/IP 통신 연결 상태
                    유무로 판단)
                  </li>
                  <li>
                    자동 판정 Process 및 관리 Process 상태를 DMS Server 에 보고
                    (해당 Process 상태를 모니터링 하기 위한 용도)
                  </li>
                  <li>MES 에서 Image Download 및 저장</li>
                  <li>Download 한 Image 경로를 자동판정 Process 에 전달</li>
                  <li>자동 판정 완료 결과를 DRS Server 에 보고</li>
                  <li>Download 한 Image 를 Data Server 에 Upload</li>
                  <li>SAN Switch 사용으로 인한 Data 전송 안정성 확보</li>
                </ul>
              </section>
              <section>
                <h3>Smart BI Server</h3>
                <Slider className="dms-slider" {...sliderSettings2}>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/01.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/02.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/03.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/04.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/05.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/06.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/solutions/dms/07.png")}
                      alt=""
                    />
                  </div>
                </Slider>
              </section>
            </TabPanel>
            <TabPanel className="cim">
              <div className="sub-title">
                <h2>CIM & GEM</h2>
                <p>
                  비전 검사 설비에서 검출한 불량에 대해서 별도의 설비 없이
                  가상으로 설비의 데이터와 이미지를 사용하여 불량을 선 판정하는
                  시스템
                </p>
              </div>
            </TabPanel>
            <TabPanel className="psm">
              <div className="sub-title">
                <h2>PSM</h2>
                <p>PSM</p>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="digital-transformation">
          <Tabs>
            <TabList className="tabs">
              <Tab>IT Infrastructure</Tab>
            </TabList>
            <TabPanel>
              {/* <!-- <div className="rss">
                <div className="sub-title">
                    <h2>RSS</h2>
                    <p>
                        CO-VIEW는 실시간 영상 원격 상담 솔루션으로, 복잡한 앱 다운로드 없이, SMS(문자발송) 전송만으로 고객과 상담원의 영상 상담이 가능한 새로운 서비스입니다.
                    </p>
                    <p>
                        고객이 보는 모습을 상담사도 실시간으로 같이 볼 수 있기 때문에 전화 설명만으로 불확실한 증상이나 실제 현장상황을 쉽게 파악할 수 있는 고객지향적 원격 상담 및 지원이 가능합니다.
                    </p>
                </div>
                <section className="about">
                    <img src="assets/images/solutions/rss/co-view.png" alt="" />
                    <p>고객의 모바일 폰을 통하여 고객의 눈에 보이는 사물과 현장을 실시간 공유 하는 고객지원 서비스</p>
                </section>
                <section className="advantages">
                    <ul>
                        <li><h4>비 설치형 표준 웹</h4></li>
                        <li>
                            서비스를 받기 위해 모든 고객이 전용 앱을 다운받아야 하는 불편함 없이 음성 통화 중에도 통화 단절없이 ONE-STOP 접속을 통해 바로 연결
                        </li>
                    </ul>
                    <ul>
                        <li><h4>양방향 라이브 서비스</h4></li>
                        <li>고객의 모바일 카메라를 이용한 브라우저 기반의 실시간 영상/사진/스크린(문서, 도면) 공유를 통한 현장 지원 서비스</li>
                    </ul>
                    <ul>
                        <li><h4>다자간 영상 협업</h4></li>
                        <li>1:1 상담만으로 해결이 어려울 때 실시간으로 제3의 전문가를 참여시켜 조언을 구하여 문제를 해결</li>
                    </ul>
                    <ul>
                        <li><h4>실시간 시각화 서비스</h4></li>
                        <li>구두로 설명이 어렵거나, 실시간 작업 지시가 필요할 때 Remote Pointer 기능 및 Live PEN 기능을 이용하면 정확하고 신속한 협업이 가능</li>
                    </ul>
                </section>
            </div> --> */}
              <div className="it-infra">
                <div className="sub-title">
                  <h2>IT Infrastructure</h2>
                  <p>
                    기업들이 사용하는 H/W와 S/W의 수가 늘어가고 이와 관련된
                    유지보수 업체 및 계약건수가 늘어감에 따라 기존 개별 유지보수
                    체계로는 기업의 효율적이고 안정적인 IT운영을 지원하기
                    어려워지고 있습니다. IT 인프라 유지보수 서비스는 하나의
                    단일계약으로 모든IT 인프라에 대한 지원을 하는 새로운 형태의
                    유지보수 서비스입니다.
                  </p>
                  <p>
                    ㈜제이엠소프트는 다양한 컨설팅 및 서비스 운영경험을
                    바탕으로, 고객의 경영과 IT를 유기적으로 통합시켜 빠르게
                    변화하는 비즈니스 환경에 부합할 수 있도록 최적의 시스템을
                    분석, 설계 방안을 제시해 나가겠습니다.
                  </p>
                </div>
                <section className="advantages">
                  <ul>
                    <li>유지보수 프로세스 단일화, 표준화, 절차화</li>
                    <li>유지보수 관리 최적화</li>
                    <li>통합 보고서 관리</li>
                    <li>유지보수 관리 노하우 적용</li>
                  </ul>
                  <ul>
                    <li>통합적인 쟁애관리를 통한 안정적인 운영</li>
                    <li>간접/직접 비용 절감</li>
                    <li>유지보수 기술수준과 관리체계의 조화</li>
                    <li>단일 창구 제공</li>
                  </ul>
                  <ul>
                    <li>PM 의 종합적 관리</li>
                    <li>일원화된 관리를 통한 업무 운영 효율 극대화</li>
                    <li>유지보수 서비스 품질향상을 통한 고가용성 유지</li>
                  </ul>
                </section>
                <section className="before-after">
                  <h3>IT 인프라 통합유지보수</h3>
                  <div>
                    <ul>
                      <li>
                        <h4>통합유지보수 전</h4>
                      </li>
                      <li>
                        <img
                          src={require("../assets/images/solutions/it-infra-before.png")}
                          alt=""
                        />
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h4>통합유지보수 후</h4>
                      </li>
                      <li>
                        <img
                          src={require("../assets/images/solutions/it-infra-after.png")}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Solutions;
