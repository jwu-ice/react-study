import React, { useState } from "react";
import { ButtonContainer, Container } from "./style";

const DiaryEditor = () => {
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

  const handleSubmit = (e) => {
    console.log(diaryData);
    alert("저장 성공");
  };

  return (
    <Container>
      <h1>오늘의 일기</h1>
      <div>
        <input name="author" value={diaryData.author} onChange={handleChangeData} placeholder={"입력하세요"} />
      </div>
      <div>
        <textarea name="content" value={diaryData.content} placeholder={"입력하세요"} onChange={handleChangeData} />
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
