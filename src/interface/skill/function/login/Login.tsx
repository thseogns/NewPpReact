/** @format */

import React from "react";
import type { RootState } from "../../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../.././../features/loginSlice";
interface LoginProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const loginState = useSelector((state: RootState) => state.login.user);
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName.trim() === "" && password.trim() === "") {
      return console.log("공백입니다");
    }
    const userData = { userName, password };
    //dispatch(login());
    // 실제로는 서버로 사용자 로그인 요청을 보내는 것이 일반적입니다
    // 간단하게 API 응답을 모방하기 위해 임의로 사용자 데이터를 생성합니다
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="사용자 이름"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
