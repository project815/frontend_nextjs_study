import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCHPROFILE = gql`
  query {
    fetchProfile(name: "철수") {
      age
    }
  }
`;

export default function Section04Quiz() {
  const [person1Age, setPersonAge] = useState();

  //   const [] = useQuery(FETCHPROFILE);

  const onClickFetchProfile = async () => {
    try {
      //   person1AgeFetchProfile();
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div>
      <div>1. 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)</div>
      <div>
        나이 : <span>{}</span>
        <button onClick={onClickFetchProfile}></button>
      </div>
    </div>
  );
}
