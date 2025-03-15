import Home from "../User/Pages/Home/Home";
import Questions from "../User/Pages/Questions/Questions";
import Favorites from "../User/Pages/Favorites/Favorites";
import NotFound from "../User/Pages/NotFound/NotFound";
import User from "../User/User";
import Admin from "../Admin/Admin";
import Dashboard from "../Admin/Pages/Dashboard/Dashboard";
import AddQuestions from "../Admin/Pages/AddQuestions/AddQuestions";
import Login from "../User/Pages/Login/Login";
import ProtectedRoute from "../Admin/Components/ProtectedRoute";
import AdminQuestions from "../Admin/Pages/Questions/AdminQuestions";
const Routes = [
  {
    // user
    path: "/",
    element: <User />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    // admin
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "addQuestions",
        element: (
          <ProtectedRoute>
            <AddQuestions />
          </ProtectedRoute>
        ),
      },
      {
        path: "adminQuestions",
        element: (
          <ProtectedRoute>
            <AdminQuestions />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default Routes;
