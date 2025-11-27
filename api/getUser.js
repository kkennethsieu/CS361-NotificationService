const userUrl = "http://localhost:3000";
export const getUser = async (userId) => {
  const res = await fetch(`${userUrl}/auth/user/${userId}`);
  if (!res.ok) throw new Error("Erro fetching user");
  return res.json();
};
