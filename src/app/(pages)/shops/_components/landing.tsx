import Button from "@/app/components/Button/Button";

const LandingShops = () => {
    return ( 
        <section className="mx-auto   mb-8 flex max-w-[1350px] items-center justify-center px-2 pt-2 ">
        <div className="space-y-2 text-center">
          <h1 className="space-y-2 text-2xl font-semibold tracking-wide md:text-5xl lg:text-6xl xl:text-5xl">
            <span className=" block  bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Vous rencontrez des difficultés avec votre Mac ?
            </span>
            <span className="block text-3xl md:text-5xl">
              Contacter le Support
            </span>
            <img src="/macpro.png" alt="mac" className=" w-full" />

            <span className="block text-xl font-semibold md:text-3xl">
              Vous avez besoin d&apos;un conseiller client ?
            </span>
          </h1>
          <div>
            <Button title="09 80 80 67 64" />
            <small>Appel gratuit non surtaxé</small>
          </div>
        </div>
      </section>
     );
}
 
export default LandingShops;