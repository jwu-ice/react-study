import DiaryList from "components/Diary/DiaryList";
import React from "react";
import DiaryEditor from "./components/Diary/DiaryEditor";
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "쥬",
    content: "안녕하세요 반갑슴다.",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "나는 홍길동",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "전우치",
    content: "난 전우치다.",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
