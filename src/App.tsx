import React from "react";
import Title from "./components/Title";
import Container from "./components/Container";
import Input from "./components/Input";
import List from "./components/List";

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Container>
        <List />
        <Input />
      </Container>
    </div>
  );
};

export default App;
