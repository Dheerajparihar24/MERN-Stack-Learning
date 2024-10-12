import { Box } from "@chakra-ui/react";
import "./App.css";
import { ProductPage } from "./components/ProductPage";

function App() {
  return (
    <>
      <Box bg="#2F3438" w="100%">
        <ProductPage />
      </Box>
    </>
  );
}

export default App;
