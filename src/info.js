import React from "react";

function Info(props) {
  console.log(props);
  const { data1 } = props;
  const { data2 } = props;
  const { data3 } = props;
  const { data4 } = props;
  const { data5 } = props;

  return <h3>
    이름 : {data1} <br></br>
    나이 : {data2} <br></br>
    성별 : {data3} <br></br>
    이메일 : {data4} <br></br>
    주소 : {data5} <br></br>
    </h3>;
}

// export : 해당 파일을 외부에서 import 할경우 외부에서 지정한 함수, class, 변수 등을 사용할 수 있도록
// 설정하는 명령어
// default : 해당 파일을 import 할 경우 기본적으로 사용할 수 있는 함수, class, 변수로 등록
export { Info };
export default Info;
