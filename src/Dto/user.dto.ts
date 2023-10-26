export type UpdateUser = {
  userId: number;
  user: {
    email?: string;
    name?: string;
    hashedPassword?: string;
  };
};
