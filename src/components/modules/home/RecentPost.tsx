/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { getRecentPost } from "@/src/services/recentPost";
import { IPosts } from "../../../../types/posts.Type";

const RecentPost =async () => {
 const {data:posts} = await getRecentPost()
  return (
    <Container>
      <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
      <p className="text-center">
        A List of items that have been recently Found and reported
      </p>
      <div className="my-8 rid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {
          posts.map((post:IPosts) =>(
            <p>{post.title}</p>
          ))
        }
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default-50">
            <Link href="/found-items">
            See All
            </Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPost;
