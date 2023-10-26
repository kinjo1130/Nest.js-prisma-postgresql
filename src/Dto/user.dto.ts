export type UpdateUserDto = {
  userId: number;
  user: {
    email?: string;
    name?: string;
    hashedPassword?: string;
  };
};
