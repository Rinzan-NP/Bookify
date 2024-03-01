import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserWrapper from "./Wrapper/UserWrapper";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<UserWrapper />}></Route>
                
            </Routes>
        </Router>
    );
}

export default App;
