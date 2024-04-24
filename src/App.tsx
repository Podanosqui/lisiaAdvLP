import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./assets/pages/home/Home";
import { Stack } from "@mui/material";
import DireitoPrevidenciario from "./assets/pages/direitoPrevidenciario/DireitoPrevidenciario";


function App() {

  return (
    <>
      <Stack width="100%" alignItems="center" justifyContent="center">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/direito-previdenciario" element={<DireitoPrevidenciario />} />
            <Route index element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </Stack>
    </>
  )
}

export default App;
