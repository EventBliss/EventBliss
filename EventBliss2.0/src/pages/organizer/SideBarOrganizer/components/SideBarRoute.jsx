import {
  RiDashboardLine,
  RiTodoLine,
  RiTimeLine,
  RiCheckLine,
} from "@remixicon/react";

export const sideBarRoutes = [
  {
    id: "Dashboard",
    title: "Dashboard",
    path: "dashboard",
    icon: RiDashboardLine
  },
  {
    id: "Requests",
    title: "Solicitudes",
    icon: RiTodoLine,
    options: [
      {
        id: "Pending",
        title: "Pendientes",
        path: "/pending",
        icon: RiTimeLine
      },
      {
        id: "Finished",
        title: "Finalizadas",
        path: "/finished",
        icon: RiCheckLine
      },
    ],
  }
];
