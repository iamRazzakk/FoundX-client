import Landing from "@/src/components/modules/home/Landing";
import RecentPost from "@/src/components/modules/home/RecentPost";
import { Suspense } from "react";
import Loading from "./found-items/_components/loading";
import ErrorBoundary from "@/src/components/ErrorBoundaring";

export default function Home() {
  return (
    <>
      <Landing />
      <ErrorBoundary fallback={<p>Error...</p>}>
        <Suspense fallback={<Loading />}>
          <RecentPost />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
