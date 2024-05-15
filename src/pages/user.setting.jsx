import imageUri from '../utils/pic';

function UserSetting() {
  return (
    <div className=" pb-60 pt-20">
      <h1 className="mb-5 text-center font-bold uppercase text-green-700">
        user settings
      </h1>
      <form>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-6 px-10">
          <img
            className="h-40 w-40 rounded-full"
            src={imageUri}
            alt="user profile pics"
          />
          <label
            htmlFor="file-input"
            className="relative  cursor-pointer rounded-md bg-gray-200 font-medium text-gray-700 hover:bg-gray-300"
          >
            <span className="inline-block px-4 py-2 capitalize">
              Change profice picture
            </span>
            <input
              id="file-input"
              name="file-input"
              type="file"
              className="sr-only"
              //   onChange={(e) => setFile(e.target.files)}
            />
          </label>
        </div>
        {/* <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 md:w-4/5">
          <label htmlFor="email">
            <p className="mb-1  text-lg capitalize">email</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 sm:w-4/5"
              type="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="email">
            <p className="mb-1  text-lg capitalize">username</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 sm:w-4/5"
              type="text"
              placeholder="username"
            />
          </label>
          <label htmlFor="email">
            <p className="mb-1  text-lg capitalize">password</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 sm:w-4/5"
              type="password"
              placeholder="password"
            />
          </label>
          <button className="mt-8 w-4/5 rounded-md bg-blue-500 px-2 py-2 text-lg capitalize text-slate-50 sm:w-40">
            save
          </button>
        </div> */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 md:w-4/5">
          <label htmlFor="email">
            <p className="mb-1 text-lg capitalize">email</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 md:w-80"
              type="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="username">
            <p className="mb-1 text-lg capitalize">username</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 md:w-80"
              type="text"
              placeholder="Username"
            />
          </label>
          <label htmlFor="password">
            <p className="mb-1 text-lg capitalize">password</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 md:w-80"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className="mt-8 w-full rounded-md bg-blue-500 px-2 py-2 text-lg capitalize text-slate-50 md:w-80">
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserSetting;
