export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Unable to fetch posts");
  return res.json();
}
