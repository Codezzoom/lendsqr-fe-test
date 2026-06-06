import usersData from "../data/users.json";
import type { User } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve(usersData as User[]);
    }, 800);
  });
};
