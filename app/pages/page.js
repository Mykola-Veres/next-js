import Image from "next/image";

import Heading from "../components/Heading";
import picture from "../../public/4seasons.jpg";

// export const getStaticProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   return { props: { pages: data } };
// };

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) {
    // return { notFound: true };
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Pages() {
  const data = await getData();
  console.log(data, data);

  return (
    <>
      <Heading text="FFFFFFFFFFFFFFFFFFFFFFFFFFFF"></Heading>
      <h2 className={`mb-3 text-4xl font-semibold mt-20`}>
        Learn{" "}
        <span className="mt-20 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>{" "}
      <div className={`mb-3 text-4xl font-semibold mt-20`}>
        <Image
          src={picture}
          alt="picture"
          width={200}
          height={200}
          placeholder="blur"
        ></Image>
      </div>
      <ul>
        <div className={`mb-3 text-4xl font-semibold mt-20 bg-red-800`}>
          {data && <p>{data.title}</p>}
        </div>
      </ul>
    </>
  );
}
