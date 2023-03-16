// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from "react";
import { forwardRef } from "react";
import "./Members.css";

/** 팀원 정보 배열 */
const teamKaffeine = [
  {
    id: 0,
    name: "정현진",
    isPm: true,
    major: "Computer Engineering",
    email: "11ghyeonjin@gachon.ac.kr",
    info: "팀에서 긍정적인 시너지를 내며, 속한 조직과 함께 성장할 수 있는 사람이 되고자 합니다.",
    profileImgAd: "img/tmp.png",
  },
  {
    id: 1,
    name: "강현모",
    isPm: false,
    major: "Computer Engineering",
    email: "kangstar96@gmail.com",
    info: "무엇이든 될 수 있는 원료. 꿈을 꾸는 개발자 강현모입니다",
    profileImgAd: "img/tmp.png",
  },
  {
    id: 2,
    name: "유지나",
    isPm: false,
    major: "AI",
    email: "gnnryu@gmail.com",
    info: "Every adventure requires a first step. -Alice In Wonderland-",
    profileImgAd: "img/tmp.png",
  },
  {
    id: 3,
    name: "이도경",
    isPm: false,
    major: "Software",
    email: "cads225@gachon.ac.kr",
    info: "아이디어를 현실로 만들어가며 성장해 가는 엔지니어",
    profileImgAd: "img/tmp.png",
  },
  {
    id: 4,
    name: "임혜균",
    isPm: false,
    major: "Software",
    email: "hgyim00@gachon.ac.kr",
    info: "어떠한 환경에서도 빠른 활용 능력으로 시너지를 일으키고 같이 일하고 싶은 엔지니어입니다.",
    profileImgAd: "img/tmp.png",
  },
  {
    id: 5,
    name: "한하나",
    isPm: false,
    major: "Computer Engineering",
    email: "han02hana06@gmail.com",
    info: "계단 하나하나를 밟아가며 꼭대기로 올라가는 엔지니어",
    profileImgAd: "img/tmp.png",
  },
];

function MembersCards(props) {
  return (
    <div className="ProfileCard">
      <div className="IconImage ">
        <img src={props.profileImg} alt="" />
      </div>
      <div className="MemberName">
        {props.isPm ? (
          <h2>
            {props.name} / {props.major} / PM
          </h2>
        ) : (
          <h2>
            {props.name} / {props.major}
          </h2>
        )}

        <p>{props.info}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

const Members = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="members-section">
      <header>
        <p className="logo">Kaffe-in</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1>About Us </h1>
          {teamKaffeine.map((member) => (
            <MembersCards
              key={member.id}
              id={member.id}
              name={member.name}
              email={member.email}
              isPm={member.isPm}
              major={member.major}
              info={member.info}
              profileImg={member.profileImgAd}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Members;
