import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "aaaaaaaa" }]);

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        {/* <div className="text-2xl text-center">Which Pokémon is Rounder?</div> */}
        {/* <div className="p-2" /> */}
        {/* <div className="border rounded p-8 flex justify-between items-center max-w-2xl"> */}
          {/* <div className="w-16 h-16 bg-red-200" /> */}
          {/* <div className="p-8">Vs</div> */}
          {/* <div className="w-16 h-16 bg-red-200" /> */}
        {/* </div> */}

        {getContent(data, isLoading)}

      </div>
    </>
  );
};

export default Home;

function getContent(data:any, isLoading:boolean){
  if (isLoading) return <div>Loading..</div>;
  if (data) return <div className="text-4xl">{data.greeting}</div>;
}
