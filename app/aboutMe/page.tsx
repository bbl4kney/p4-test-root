"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "A tattoo needle can move between 50 and 30,000 times per minute.",
    // string item #0 ^
    "The word &apos;photograph&apos; originates from Greek, meaning drawing with light.",
    // string item #1 ^
    "The average time spent on [web]pages is 54 seconds, while [time spent on] blog posts average 3-5 minutes.",
    // string item #2 ^
    "Cats have unique noseprints the same way we have unique fingerprints.",
    // string item #3 ^
    "Bananas are berries, but strawberries are not.",
    // string item #4 ^
    "Impossible Fish #5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <br />

      <Button
        className="bg-rose-300 text-2xl"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>
      <img alt="alex" src="/alex.JEPG" />
      <p>{fact}</p>
      <p>
        ex&apos;t&apos;ra s&apos;p&apos;ac&apos;e
        &apos;p&apos;ara&apos;&apos;gra&apos;&apos;gh
      </p>
      <div />
      {/* ctrl + / */}
      {/* <Button onPress={() => {setFact(facts[4])}} className="bg-green-800 text-white">
        Press 4 Fact
      </Button> */}
      {/* <p>{fact}</p> */}
      {/* my flexbox starts here */}
      {/* <div className="flex flex-wrap border-dotted border-4 border-gray-600 p-4 justify-center gap-4"> */}
      {/* <p className="border-solid border-1 border-gray-600">child #1 Lorem ipsg elitnisi delectus molestias!</p>
        <p className="border-solid border-1 border-gray-600">child #2 Lorem ipsud quo exercitationem distinctio!</p>
        <p className="border-solid border-1 border-gray-600">child #3</p> */}
      {/* </div> */}
      {/* <p>{fact}</p> */}

      {/* <Button
        onPress={() => { setFact(facts[1]) }}>Press 4 Fact</Button> */}
      {/* <a className="bg-lime-500" href="https://www.chess.com/" target="_blank">Chess.com</a> */}
      {/* <br /> */}
      {/* <Link className="bg-green-700 text-white" href="https://github.com/bbl4kney" >Blakney&apos;s GitHub</Link> */}
      {/* <br /> */}
      {/* <a className="bg-green-400" href="https://www.mrbeastburger.com/">Mr. Beast Burger</a> */}
      {/* <br /> */}
      {/* <Link className="bg-green-500" href="https://www.youtube.com/@bblakneyisd">Blakney&apos;s YouTube channel.</Link> */}
      {/* link to my youtube channel */}
      <br />
      {/* <Button as={link} href="https://issaquah.instructure.com/courses/36871" ><Music />Canvas</Button> */}
      {/* <Button as={link} className="bg-red-600 text-2xl text-white" href="https://www.youtube.com/" target="_blank">Subscribe!</Button> */}
      {/* <Button as={link} className="bg-blue-400" href="https://en.wikipedia.org/wiki/Hampster_Dance?scrlybrkr=195ef377" target="_blank">Hamster Dance!</Button> */}
    </div>
  );
}
