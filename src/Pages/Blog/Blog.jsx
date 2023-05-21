const Blog = () => {
  return (
    <div className="my-16">
      <div className=" flex items-center justify-center bg-gradient-to-r from-amber-400 to-mediumPurple bg-opacity-80 h-full md:h-52 rounded-md">
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
              <p className="text-gray-500 my-5">
                <strong>Access Token:</strong> An access token is a credential
                that is used to authorize and authenticate a user when making
                requests to an API or server. <br />
                <strong>Refresh Token:</strong> A refresh token is a long-lived
                credential that is used to obtain a new access token when the
                current access token expires.
                <br />
                <strong>Where to store?</strong> We can store it in localStorage
                or HTTP-only cookie. Though LocalStorage is not the best option
              </p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: Compare SQL and NoSQL databases?
              </h4>
              <p className="text-gray-500 my-5">
                <strong>SQL:</strong> SQL databases are structured with
                predefined schemas, ensuring data consistency and allowing
                complex relationships.
                <br />
                <strong>NoSQL:</strong> NoSQL databases have dynamic schemas,
                enabling flexibility and easy scalability horizontally.
              </p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: What is express js? What is Nest JS ?
              </h4>
              <p className="text-gray-500 my-5">
                <strong>Express JS:</strong> Express.js is a minimalistic web
                framework for Node.js, providing a set of features for building
                web applications and APIs. It offers simplicity, flexibility,
                and a large ecosystem of middleware for handling HTTP requests.
                <br />
                <strong>Nest JS:</strong> NestJS is a progressive,
                TypeScript-based framework for building efficient and scalable
                server-side applications. It includes features like dependency
                injection, decorators, and powerful modules to enhance
                productivity and maintainability
              </p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: What is MongoDB aggregate and how does it work ?
              </h4>
              <p className="text-gray-500 my-5">
                MongoDB's aggregate is a powerful aggregation framework that
                allows you to perform complex data manipulations and
                transformations on documents within a collection. It provides a
                flexible and efficient way to analyze and process data.
                <br />
                <strong>How it Works?</strong> The aggregate pipeline consists
                of multiple stages, such as $match, $group, $sort, $project, and
                more. Each stage operates on the documents sequentially,
                transforming and filtering the data based on the specified
                criteria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
