"use client"

import Button from "./Button/Button";

export default function Landing() {
  // const [showButton, setShowButton] = useState(false);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 650) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="mx-auto   flex max-w-[1350px] items-center justify-center px-2 pt-4 mb-16 ">
      <div className="space-y-8 text-center">
        <h1 className="space-y-2 text-2xl md:text-5xl font-semibold tracking-wide lg:text-6xl xl:text-5xl">
          <span className=" block  bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Vous rencontrez des difficultés avec votre Mac ?
          </span>
          <span className="block text-3xl md:text-5xl">Contacter le Support</span>
          <img src="/macpro.png" alt="mac" width={750} height={750} />
        
          <span className="block text-xl font-semibold md:text-3xl">Obtenez rapidement l'assistance dont vous avez besoin, sans vous déplacer en magasin.</span>
        
        </h1>
        <div>
          <Button title="09 80 80 67 64" />
          <small>Appel gratuit non surtaxé</small>
        </div>
        {/* <div
          className={`${showButton ? "fixed bottom-4 right-4 " : ""} `}
        >
          <Button title="09 80 80 67 64" />
        </div> */}
      </div>
    </section>
  );
}
