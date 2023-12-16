import Tutions from "../pages/tutions/Tutions";
import Tutors from "../pages/tutors/Tutors";
import TutorRequest from "..//pages/tutorRequest/TutorRequest";
import Courses from "..//pages/courses/Courses";
import NotFound from "../pages/404page/NotFound";
import Profile from "../pages/profile/Profile";
import Otp from "../pages/otp/Otp";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";

const routingElements = [
  {
    path: "/tutions",
    element: <Tutions />,
  },
  {
    path: "/tutors",
    element: <Tutors />,
  },
  {
    path: "/request",
    element: <TutorRequest />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routingElements;
