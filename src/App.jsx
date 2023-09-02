import "./App.css";
import { LeftPanel } from "./components/Left-panel";
import { RightPanel } from "./components/Right-panel";

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex h="100vh">
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
}

export default App;
