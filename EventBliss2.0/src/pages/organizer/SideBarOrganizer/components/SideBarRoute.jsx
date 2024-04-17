import {
  RiDashboardLine,
  RiTodoLine,
  RiTimeLine,
  RiCheckLine,
  RiTableView,
  RiVerifiedBadgeFill,
  RiCloseLargeFill,
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
    title: "Requests",
    icon: RiTodoLine,
    options: [
      {
        id: "Pending",
        title: "Pending",
        path: "pending",
        icon: RiTimeLine
      },
      {
        id: "Finished",
        title: "Finished",
        path: "finished",
        icon: RiCheckLine
      },
      {
        id: "Approved",
        title: "Approved",
        path: "approved",
        icon: RiVerifiedBadgeFill
      },
      {
        id: "Denied",
        title: "Denied",
        path: "denied",
        icon: RiCloseLargeFill
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
