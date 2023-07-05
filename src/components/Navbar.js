import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Hone",
    "Sale",
    "지속가능성",
  ];

  const gotoLogin = () => {
    // 로그인 버튼을 누르면 로그인 페이지로 이동
    navigate("/login");
  };
  const gotoMain = () => {
    // 로고를 누르면 메인페이지로 이동
    navigate("/");
  };
  const search = (event) => {
    // console.log(event.key);
    if (event.key == "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="container mt-5">
      <div
        className="cursor d-flex justify-content-end align-items-center"
        onClick={gotoLogin}
      >
        <i className="far fa-user"></i>
        {authenticate ? (
          <div
            onClick={() => {
              setAuthenticate(false);
            }}
          >
            <span>로그아웃</span>
          </div>
        ) : (
          <div
            onClick={() => {
              setAuthenticate(true);
            }}
          >
            <span>로그인</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <img
          onClick={gotoMain}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="d-flex mt-5">
        <ul className="d-flex flex-grow-1 justify-content-center align-items-center">
          {menuList.map((item) => {
            return (
              <li key={item} className="px-2">
                {item}
              </li>
            );
          })}
        </ul>
        <div>
          <i className="fas fa-search"></i>
          <input type="text" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
