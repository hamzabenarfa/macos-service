import Button from "./Button/Button";

export default function Landing() {
  return (
    <section className="flex bg-[url('/images/white-bg-landing.jpeg')] bg-cover bg-no-repeat bg-center text-white text-center py-40 relative">
      <div className="relative pl-8 md:pl-16 z-10 flex flex-col items-start justify-start gap-4">
       
      <h1 className="hidden md:block text-left text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">
          Un Problème Sur Votre Mac ?
        </h1>
        <h1 className="md:hidden text-left text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">
          Un Problème 
        </h1>
        <h1 className="md:hidden text-left text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">
        Sur Votre </h1>
        <h1 className="md:hidden text-left text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-black">

        Mac ?</h1>
        <div className="flex flex-col text-black text-left  max-w-xs md:max-w-md">
          <p>Obtenez une assistance immédiate à distance, <br className="hidden md:block" />
            sans rendez-vous et sans vous déplacer !</p>
        </div>

        <div>
          <Button title="09 70 70 82 21" />
          <small className="block mt-2 text-black">Appel gratuit non surtaxé</small>
        </div>
      </div>
    </section>
  );
}
