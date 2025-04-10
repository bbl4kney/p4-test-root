import Image from "next/image";
import Link from "next/link";

import { title } from "@/components/primitives";

export default function RecipesPage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <div className="flex flex-wrap border-dotted border-4 border-gray-600 p-4 justify-center gap-4">
        <p className="border-solid border-1 border-gray-600">
          child #1 Lorem ipsg elitnisi delectus molestias!
        </p>
        <p className="border-solid border-1 border-gray-600">
          child #2 Lorem ipsud quo exercitationem distinctio!
        </p>
        <p className="border-solid border-1 border-gray-600">child #3</p>
        <Link href="https://www.nytco.com/products/games/">lorem</Link>
        <a
          className="bg-green-700"
          href="https://www.nytco.com/products/games/"
        >
          NYT games
        </a>
      </div>
      <img alt="Blakney in the summer of 2024." src="/me1.jpg" />
      <a
        className="bg-green-700"
        href="https://issaquah.instructure.com/courses/36871"
      >
        Web Design Canvas - Home
      </a>
      <Image
        alt="Image of an apt in Capitol Hill"
        height={4492}
        src="/house.jpg"
        width={6774}
      />
      <Image
        alt="Image of an apt in Capitol Hill"
        height={4492}
        src="/house.jpg"
        width={6774}
      />
      <Image
        alt="Image of an apt in Capitol Hill"
        height={4492}
        src="/house.jpg"
        width={6774}
      />
      <Image
        alt="Image of an apt in Capitol Hill"
        height={4492}
        src="/house.jpg"
        width={6774}
      />
    </div>
  );
}
