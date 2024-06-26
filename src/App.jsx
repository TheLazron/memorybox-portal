import { useState } from "react";
import { Text } from "@mantine/core";
import Login from "./pages/Login";
import VideoBg from "./assets/video.mp4";
import Dashboard from "./layout/DashboardLayout";
import { ConnectWithAppPage } from "./pages/ConnectWithApp.jsx";
import Signup from "./pages/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import LiveLocation from "./components/dashboardSections/Live-location";
import SetReminder from "./components/dashboardSections/Set-Reminder";
import Testing from "./components/dashboardSections/testingSec";
import UpdatePrescription from "./components/dashboardSections/Update-Prescription";
import MonitorPerformance from "./components/dashboardSections/MonitorPerformance";
import component from "./pages/a";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<component />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/connect-app" element={<ConnectWithAppPage />} />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route
              className="text-2xl text-light-blue"
              path="/dashboard"
              element={<Dashboard />}
            >
              <Route
                path={"/dashboard/live-location"}
                element={<LiveLocation />}
              />
              <Route
                path={"/dashboard/set-reminders"}
                element={<SetReminder />}
              />
              <Route
                path={"/dashboard/update-prescription"}
                element={<UpdatePrescription />}
              />
              <Route
                path={"/dashboard/performance"}
                element={<MonitorPerformance />}
              />
            </Route>
          </>
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
