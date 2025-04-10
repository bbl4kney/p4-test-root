"use client";
import Image from "next/image";
import { useState } from "react";

export default function ExplorePage() {
  let facts: string[] = ["fact 1", "fact 2", "fact 3"];
  const [fact, setFact] = useState("");

  return (
    <div>
      {/* three column flex */}
      <div className="md:flex justify-center  gap-4">
        {/* flex container */}
        <div className="flex-col gap-4">
          {/* flex column left */}
          <p>{fact}</p>
          <img alt="ferry" src="/ferry.jpg" />
        </div>
        <div className="flex-col gap-4">
          {/* flex column middle */}
          <p>{fact}</p>
          <img alt="house" src="/house.jpg" />
        </div>
        <div className="flex-col gap-4">
          {/* flex column right */}
          <p>{fact}</p>
          <img alt="peach pit eavesdrop" src="/me1.jpg" />
        </div>
        {/* flex container end */}
      </div>

      <h1>Option 1; Flex columns (the long way.)</h1>
      <div className="flex">
        {/* flex grandparent start */}
        <div className=" gap-6 flex justify-start w-1/2 flex-wrap border-1 border-black">
          {/* left side; images */}
          {/* border-1 border-black */}
          <Image
            src="/alex.JPEG"
            // this is that one picture of Alex
            // src="/me1.jpg"
            alt="Alex on the ferry."
            height={2048}
            width={2750}
          />
          <Image
            alt="Carnival cruise smokestack."
            height={2000}
            src="/cruise.jpg"
            width={2992}
          />
          <Image
            alt="Bow of the Walla Walla ferry in the summer."
            height={4492}
            src="/ferry.jpg"
            width={6772}
          />
        </div>
        <div className=" gap-4 flex justify-end w-1/2 flex-wrap">
          {/* right side; text */}
          {/* border-1 border-black */}
          <p>
            this is some sample text about image 1. blah blah blah Alex Alex
            Alex
          </p>
          <p>
            this is some sample text about image 2. blah blah blah Carnival
            crusie smokestack
          </p>
          <p>
            this is some sample text about image 3. blah blah blah Walla Walla
            ferry in the summertime.
          </p>
        </div>
        {/* flex grandparent end */}
      </div>
      <br />
      <h1>Option 2; Stacking flex boxes</h1>
      <div className="flex gap-4 border-1 border-black">
        {/* flex container (row) start */}
        <div className="flex w-1/2">
          {/* flex child start; image half */}
          <img
            alt="Kitten images."
            src="https://cdn.prod.website-files.com/62604bb9b6d9d12008ba1216/627d0cbe0c5bbd447a635839_new-kitten-checklist.jpg"
          />
        </div>
        {/* flex child end */}
        <div className="flex w-1/2 flex-wrap">
          {/* flex child start; text half */}
          <p>###</p>
          <p>this should be a box for descriptions...</p>
          <p>...of kittens</p>
        </div>
        {/* flex child end */}
      </div>
      {/* flex container (row) end */}
      <div className="flex gap-4 border-1 border-black">
        {/* flex container (row) start */}
        <div className="flex w-1/2 flex-wrap">
          {/* flex child start; text half */}
          <p>###</p>
          <p>this should be a box for descriptions...</p>
          <p>...of puppies.</p>
        </div>
        {/* flex child end */}
        <div className="flex w-1/2">
          {/* flex child start; image half */}
          <img
            alt="Puppy images."
            src="https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg"
          />
        </div>
        {/* flex child end */}
      </div>
      {/* flex container (row) end */}
      <div>
        {/* new flex row */}
        <div>
          {/* image child */}
          {/* <img src="#" alt="#" /> */}
        </div>
        <div>
          {/* text child */}
          {/* <p>#</p> */}
        </div>
      </div>
    </div>
  );
}
