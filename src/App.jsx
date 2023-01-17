import "./App.scss";
import Auth from "./components/Auth";
import Sidebar from "./components/Sidebar";
import { Switch, useColorMode } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Control from "./pages/Control"
import Projects from "./pages/Projects"
import Teams from "./pages/Teams"
import Tasks from "./pages/Tasks"
import Notes from "./pages/Notes"
import Calendary from "./pages/Calendary"
import SignupForm from "./pages/Register";
import LoginForm from "./pages/Login";
// import Count from "../pages/Count"

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <aside>
        <Sidebar />
      </aside>
      <main>
      <Switch
          id="dark_mode"
          colorScheme="teal"
          size="lg"
          onChange={toggleColorMode}
          className="dark-mode"
        />
        {/* <Auth /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/control" element={<Control />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/calendary" element={<Calendary />} />
          <Route path="/account" element={<Auth />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
