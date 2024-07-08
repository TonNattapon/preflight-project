const LoginCard = () => {
  return (
    <>
      <div className="p-10 bg-white rounded-t-3xl w-full h-full">
        <div className="mb-4 mt-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <a
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            href="*"
          >
            Log in
          </a>
        </div>
        <div className="text-center mt-4">
          <a
            className="inline-block align-baseline font-bold text-sm text-black hover:bg-gray-300 rounded-xl bg-gray-100 py-2 px-4 mt-2"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
