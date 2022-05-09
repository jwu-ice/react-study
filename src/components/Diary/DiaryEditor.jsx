import React, { useState, useRef } from "react";
import { ButtonContainer, Container } from "./DiaryEditor.style";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [diaryData, setDiaryData] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeData = (e) => {
    setDiaryData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    if (diaryData.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (diaryData.content.length < 1) {
      contentInput.current.focus();
      return;
    }

    alert("저장 성공");
  };

  return (
    <Container>
      <h1>오늘의 일기</h1>
      <div>
        <input
          name="author"
          value={diaryData.author}
          onChange={handleChangeData}
          placeholder={"작성자를 입력해주세요."}
          ref={authorInput}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={diaryData.content}
          onChange={handleChangeData}
          placeholder={"일기 내용을 입력해주세요."}
          ref={contentInput}
        />
      </div>
      <div>
        {"오늘의 감정점수 : "}
        <select name="emotion" value={diaryData.emotion} onChange={handleChangeData}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <ButtonContainer>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default DiaryEditor;
