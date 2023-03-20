// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from "react";
import { forwardRef } from "react";
import "./Members.css";

import { teamKaffeine } from "../static/memberStatic";

/** 팀원 정보 배열 */

function MembersCards(props) {
  if (props.id % 2 === 0) {
    return (
      <div className="ProfileCardA">
        <div className="IconImage ">
          <img src={props.profileImg} alt="" />
        </div>
        <div className="MemberName">
          {props.isPm ? <h2>{props.name} / 👑PM👑</h2> : <h2>{props.name}</h2>}
          <p>{props.info}</p>
          <p>{props.email}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="ProfileCardB">
      <div className="IconImage ">
        <img src={props.profileImg} alt="" />
      </div>
      <div className="MemberName">
        <h2>{props.name}</h2>
        <p>{props.info}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

const Members = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="cv">
        <div className="content" id="members">
          <h1>About Us </h1>
          {teamKaffeine.map((member) => (
            <MembersCards
              key={member.id}
              id={member.id}
              name={member.engName}
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
