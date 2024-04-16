import {
  RiDashboardLine,
  RiTodoLine,
  RiTimeLine,
  RiCheckLine,
  RiTableView,
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
        path: "pending",
        icon: RiTimeLine
      },
      {
        id: "Finished",
        title: "Finalizadas",
        path: "finished",
        icon: RiCheckLine
      },
    ],

  },
  {
    id: "TableProducts",
    title: "TableProducts",
    path: "tableProducts",
    icon: RiTableView
  },

];
