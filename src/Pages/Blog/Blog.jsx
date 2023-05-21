import { useRef } from "react";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  const ref = useRef();
  return (
    <div ref={ref}>
      <div className=" flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-80 h-full md:h-52 ">
        <h1 className="text-3xl font-bold py-10 text-center underline underline-offset-8 decoration-blue-500">
          Blogs
        </h1>
      </div>
      <div className="my-16">
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: What is an access token and refresh token? How do they
                work and where should we store them on the client-side?
              </h4>
              <p className="text-gray-500 my-5"> Answer</p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: Compare SQL and NoSQL databases?
              </h4>
              <p className="text-gray-500 my-5"> Answer</p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: What is express js? What is Nest JS ?
              </h4>
              <p className="text-gray-500 my-5"> Answer</p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: What is MongoDB aggregate and how does it work ?
              </h4>
              <p className="text-gray-500 my-5"> Answer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
