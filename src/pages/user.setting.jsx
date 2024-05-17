/* eslint-disable no-unused-vars */
import useSWR from 'swr';
import imageUri from '../utils/pic';
import { useState } from 'react';
import { useAuth } from '../context/user.context';
import Notify from '../component/notification';
import fileToDataURI from '../utils/create.imagae.blob';

function UserSetting() {
  const [file, setFile] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { useLocalStorage, updateUser } = useAuth();
  const user = useLocalStorage('user', null);

  async function handleUserUpdate(e) {
    setIsLoading(true);
    e.preventDefault();
    const imageDataUri = await fileToDataURI(file[0]);
    console.log('IMAGE', imageDataUri);
    const userEmail = email === '' ? user[0].email : email;
    const userUsername = username === '' ? user[0].username : username;
    const userPhoto = imageDataUri === '' ? user[0].profilePic : imageDataUri;
    await updateUser(userEmail, userUsername, userPhoto);
    setIsLoading(false);
  }

  return (
    <div className=" pb-60 pt-20">
      <h1 className="mb-5 text-center font-bold uppercase text-green-700">
        user settings
      </h1>
      <form onSubmit={(e) => handleUserUpdate(e)}>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-6 px-10">
          <div className="h-40 w-40 rounded-full border-4 border-green-600 px-1 py-1">
            <img
              className="h-full w-full rounded-full"
              src={user[0].profilePic || imageUri}
              alt="user profile pics"
            />
          </div>
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
              onChange={(e) => setFile(e.target.files)}
            />
          </label>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 pr-8 md:w-4/5">
          <label htmlFor="email" className="w-full md:w-80">
            <p className="mb-1 text-lg capitalize">email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 "
              type="email"
              placeholder={`${user[0].email}`}
            />
          </label>
          <label htmlFor="username " className="w-full md:w-80">
            <p className="mb-1 text-lg capitalize">username</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 "
              type="text"
              placeholder={`${user[0].username}`}
            />
          </label>
          {/* <label htmlFor="password">
            <p className="mb-1 text-lg capitalize">password</p>
            <input
              className="w-full rounded-md border bg-none px-4 py-2 outline-none focus-visible:ring-4 md:w-80"
              type="password"
              placeholder="Password"
            />
          </label> */}
          <button
            disabled={isLoading}
            className={`mt-8 w-full rounded-md ${isLoading ? 'bg-blue-200 text-slate-900' : 'bg-blue-500  text-slate-50'} px-2 py-2 text-lg capitalize  md:w-80`}
          >
            {isLoading ? 'saving...' : 'save'}
          </button>
        </div>
      </form>
      <Notify></Notify>
    </div>
  );
}

export default UserSetting;
