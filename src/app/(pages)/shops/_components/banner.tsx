"use client"
const Banner = () => {
    return ( 
        <div className=" flex flex-col items-start justify-center gap-20 p-4 md:flex-row">
        <div className="flex flex-col items-start ">
          <p className="font-bold">Mac 100% Vérifié</p>
          <div>
            <p>Chaque Mac est inspecté, testé,</p>
            <p>nettoyé et reinstallé</p>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <p className="font-bold">Garantie 12 mois</p>
          <div>
            <p>Nos Mac sont garantis 1 an.</p>
            <p>Extension possible à 2 ans</p>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <p className="font-bold">Livraison offerte</p>
          <div>
            <p>Livraison gratuite sans minimum</p>
            <p>d&apos;àchat</p>
          </div>
        </div>
      </div>
     );
}
 
export default Banner;