import Tutions from "../pages/tutions/Tutions";
import Tutors from "../pages/tutors/Tutors";
import TutorRequest from "..//pages/tutorRequest/TutorRequest";
import Courses from "..//pages/courses/Courses";
import NotFound from "../pages/404page/NotFound";
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
    path: "*",
    element: <NotFound />,
  },
];

export default routingElements;
