import axios, { AxiosResponse } from "axios";
import PostCard from "../components/custom/PostCard";

type Posts = { id: number; userId: number; title: string; body: string }[];
const response = async () => {
  try {
    const res: AxiosResponse<Posts> = await axios(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
const Home = async () => {
  const posts = await response();
  return (
    <section className="text-4xl text-center container mx-auto">
      <h2 className="my-4">All Posts</h2>
      <div className="grid grid-cols-4 justify-center items-stretch gap-2 h-full">
        {posts?.map((item) => (
          <PostCard key={item.id} card={item} />
        ))}
      </div>
    </section>
  );
};

export default Home;
