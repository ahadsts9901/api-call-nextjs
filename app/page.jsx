import AccordionMUI from "./MUI/Server/AccordionMUI"
import axios from "axios"
import MiniDrawer from "./MUI/Server/MiniDrawer"

export default async function Home() {

  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.data

  return (
    <>
      <MiniDrawer data={

        posts ? posts?.map((post, index) => (
          <AccordionMUI key={index} title={post.title} text={post.body} />
        )) : null

      } />
    </>
  );
}
