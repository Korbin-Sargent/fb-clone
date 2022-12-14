import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { React, useRef } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { storageRef } from "../firebase";
import firebase from "firebase";
import firestore from "firstore";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);

  const sendPost = (e) => {
    //Prevent page from refreshing
    e.preventDefault();
    // block post if input field is empty
    if (!inputRef.current.value) return;

    await addDoc(collection(db, "userPosts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });

  <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
    <div className="flex space-x-4 p-4 items-center">
      <Image
        className="rounded-full"
        src={session.user.image}
        width={40}
        height={40}
        layout="fixed"
      />
      <form className="flex flex-1">
        <input
          className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          type="text"
          ref={inputRef}
          placeholder={`What's on your mind, ${session.user.name}?`}
        />
        <button hidden type="submit">
          Submit
        </button>
      </form>
    </div>

    <div className="flex items-center justify-evenly p-3 border-t">
      <div className="inputIcon">
        <VideoCameraIcon className="h-7 text-red-500" />
        <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
      </div>

      <div className="inputIcon">
        <CameraIcon className="h-7 text-green-400" />
        <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
      </div>

      <div className="inputIcon">
        <FaceSmileIcon className="h-7 text-yellow-300" />
        <p className="text-xs sm:test-sm xl:text-base">Feeling/Activity</p>
      </div>
    </div>
  </div>;
}

export default InputBox;
