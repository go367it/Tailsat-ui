import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-2xl text-center py-4">Object Ui</h1>
            <Link href="/documentation">
              <button className="bg-blue-500 py-3 px-4 text-white">
                Documentation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
