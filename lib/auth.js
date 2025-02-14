export const login = async (email, password) => {
  // Add API call to authenticate user
  return { success: true, user: { name: "John Doe", email } };
};

export const logout = async () => {
  // Add API call to log out user
  return { success: true };
};
