/* eslint-disable no-unused-vars */
import Button from '../component/button.componet';
import FormUi from '../component/form';
import { RotatingLines } from 'react-loader-spinner';

import { useState } from 'react';
import { useAuth } from '../context/user.context';
import { useNavigate, Link } from 'react-router-dom';
import { BASEURLDEV, PROFILE_PIC } from '../utils/constant';
import axios from 'axios';

function NewDistPage() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [placeOfResidence, setPlaceofResidence] = useState('');
  const [stateOfOrigin, setStateOfOrigin] = useState('');
  const [nationality, setNationality] = useState('');
  const [phone, setPhone] = useState('');
  const [referral, setReferral] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function registerNewDist(
    email,
    firstname,
    lastname,
    placeOfResidence,
    stateOfOrigin,
    nationality,
    phone,
    referral,
  ) {
    try {
      setIsLoading(true);
      const response = await axios.post(`${BASEURLDEV}/dist/newDist`, {
        email,
        firstname,
        lastname,
        placeOfResidence,
        stateOfOrigin,
        nationality,
        phone,
        referralCode: referral,
      });
      if (response.status === 201) {
        console.log(response);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
    }
  }
  async function handleApiCall(e) {
    e.preventDefault();
    await registerNewDist(
      email,
      firstname,
      lastname,
      placeOfResidence,
      stateOfOrigin,
      nationality,
      phone,
      referral,
    );
  }
  return (
    <FormUi apiCall={handleApiCall}>
      <h1 className="text-left text-lg font-bold uppercase">fill the form</h1>
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="firstname"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="lastname"
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="state of origin"
        onChange={(e) => setStateOfOrigin(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="place of residence"
        onChange={(e) => setPlaceofResidence(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="nationality"
        onChange={(e) => setNationality(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="tel"
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="w-4/5 rounded-md border px-2 py-2"
        type="text"
        placeholder="referral code / name"
        onChange={(e) => setReferral(e.target.value)}
      />
      {/* <label
        htmlFor="file-input"
        className="relative w-4/5 cursor-pointer rounded-md bg-gray-200 font-medium text-gray-700 hover:bg-gray-300"
      >
        <span className="inline-block px-4 py-2">Choose a Photo</span>
        <input
          id="file-input"
          name="file-input"
          type="file"
          className="sr-only"
          onChange={(e) => setFile(e.target.files)}
        />
      </label> */}

      <Button
        classname={`text-lg bg-green-300 hover:bg-green-700 hover:text-slate-50 w-4/5 rounded-md ${isLoading ? 'hidden' : ''} border px-2 mt-5 py-2`}
      >
        Submit
      </Button>
      {isLoading && <RotatingLines height="40" width="40"></RotatingLines>}
    </FormUi>
  );
}

export default NewDistPage;
