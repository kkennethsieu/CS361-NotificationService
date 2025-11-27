const reviewUrl = "http://localhost:4000";
export const getReview = async (reviewId) => {
  const res = await fetch(`${reviewUrl}/reviews/review/${reviewId}`);
  if (!res.ok) throw new Error("Erro fetching review");
  return res.json();
};
