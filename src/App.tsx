import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import "./styles.css";

import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        {/* <Button colorScheme="teal">ボタン</Button>
        <p>aaaaaa</p> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}
