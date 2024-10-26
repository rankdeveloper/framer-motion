import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          background: "orange",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "10px",
        }}
      />

      <div className="bg-gray-900 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, i) => (
          <div key={i} className="bg-gray-200 p-5">
            <h2 className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, unde.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              sunt quidem vero sint dicta ex assumenda maxime unde praesentium
              vel id cumque, doloremque at dignissimos. Aperiam tenetur eum iure
              illo! Optio, enim iste! Error aspernatur labore aperiam quae modi
              excepturi obcaecati aut, reprehenderit illo, quam accusamus.
              Recusandae doloribus necessitatibus aliquid ullam voluptas.
              Tempore accusamus esse aspernatur ratione enim dolore ullam quasi.
              Recusandae incidunt laborum, accusamus ut quis est voluptatibus
              sint harum omnis, sit odio et reprehenderit perspiciatis inventore
              ex possimus quod ad porro dolor unde rem? Laboriosam est sint
              suscipit fugit deserunt, incidunt assumenda? Accusamus mollitia
              ullam debitis alias voluptatibus?
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
