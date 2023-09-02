import { Box, Flex } from "@chakra-ui/react";
import { ChatList } from "../components/Chat-List";
import { Header } from "../components/header";
import { SearchPanel } from "../components/search-panel";

export function LeftPanel(props) {
  return (
    <Flex direction="column" w="30%" {...props}>
      <Box>
        <Header />
        <SearchPanel />
      </Box>
      <ChatList flex="1" overflow="auto" />
    </Flex>
  );
}
