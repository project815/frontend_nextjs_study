import { useEffect, useState } from "react";

const tmpData = [
  {
    number: 1,
    title: "9월달 시스템 안내입니다.",
    day: "2020.09.19",
  },
  {
    number: 2,
    title: "안녕하세요. 공지사항 전달드립니다.",
    day: "2020.09.17",
  },
  {
    number: 3,
    title: "개인정보 처리방침 변경 사전 안내",
    day: "2020.09.12",
  },
  {
    number: 4,
    title: "iOS 10.0 이하 지원 중단 안내",
    day: "2020.09.10",
  },
  {
    number: 5,
    title: "이용약관 변경 안내",
    day: "2020.08.01",
  },
  {
    number: 6,
    title: "개인정보 처리방침 변경 사전 안내",
    day: "2020.07.19",
  },
];

export default function Section08Quiz2() {
  const [data, setData] = useState<any[]>([]);
  const onClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    console.log(e.target.id);

    const newData = data.map((item) => {
      if (String(item.number) === e.target.id) {
        return {
          ...item,
          checked: e.target.checked,
        };
      }
      return item;
    });

    setData(newData);

    const allChecked = newData.every((item) => item.checked);

    console.log("allChecked : ", allChecked);

    // Update the "all" checkbox based on the result
    (document.getElementById("all") as HTMLInputElement).checked = allChecked;
  };
  const onClickAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          checked: e.target.checked,
        };
      });
    });
  };
  useEffect(() => {
    const newData = tmpData.map((item) => ({
      ...item,
      checked: false,
    }));
    setData(newData);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div
      style={{
        width: "1100px",
        height: "800px",
        border: "1px solid",
        borderColor: "black",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead
          style={{
            height: "50px",
            backgroundColor: "#FAFAFA",
            borderBottom: "1px solid #E6E7E6",
            borderTop: "1px solid #E6E7E6",
          }}
        >
          <tr>
            <th style={{ width: "10%", borderRight: "none" }}>
              <input id="all" type="checkbox" onChange={onClickAllCheck} />
            </th>
            <th style={{ width: "15%" }}>번호</th>
            <th style={{ width: "50%", paddingRight: "140px" }}>제목</th>
            <th style={{ width: "30%" }}>작성일</th>
          </tr>
        </thead>
        {data.map((i) => (
          <tbody
            key={i.number}
            style={{
              height: "50px",
              borderBottom: "1px solid #E6E7E6",
              borderTop: "1px solid #E6E7E6",
            }}
          >
            <tr>
              <th>
                <input
                  id={String(i.number)}
                  type="checkbox"
                  onChange={onClickCheckbox}
                  checked={i?.checked}
                />
              </th>
              <td style={{ textAlign: "center" }}>{i.number}</td>
              <td style={{ paddingLeft: "20px" }}>{i.title}</td>
              <td style={{ textAlign: "center" }}>{i.day}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button
        style={{
          backgroundColor: "#EA3B6E",
          width: "150px",
          height: "50px",
          marginTop: "10px",
          borderRadius: "30px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        선택 삭제
      </button>
    </div>
  );
}
