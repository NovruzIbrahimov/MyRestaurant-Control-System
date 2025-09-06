import admin from "../assets/images/admin.jpg";
import user from "../assets/images/user.jpg";
import moderator from "../assets/images/moderator.jpg";

const usersData = [
  {
    id: 1,
    name: "Novruz İbrahimov",
    email: "novruz@example.com",
    role: "Admin",
    avatar: admin,
  },
  {
    id: 2,
    name: "Aysel Məmmədova",
    email: "aysel@example.com",
    role: "User",
    avatar: user,
  },
  {
    id: 3,
    name: "Elvin Quliyev",
    email: "elvin@example.com",
    role: "Moderator",
    avatar: moderator,
  },
];

export default usersData;
