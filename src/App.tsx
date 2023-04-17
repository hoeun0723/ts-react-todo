import React from "react";
import Title from "./components/Title";
import Container from "./components/Container";
import Input from "./components/Input";
import List from "./components/List";

const App: React.FC = () => {
  const items = [
    {
      text: "공부",
    },
    {
      text: "산책",
      done: true,
    },
    {
      text: "잠자기",
      done: true,
    },
  ];
  return (
    <div className="App">
      <Title />
      <Container>
        <List items={items} />
        <Input />
      </Container>
    </div>
  );
};

export default App;
