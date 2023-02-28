import './css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Market from "./Market/Market";
import Layout from "./Layout";
import Social from "./Social/Social";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/Social" element={<Social/>}/>
                    <Route path="/Market" element={<Market/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
