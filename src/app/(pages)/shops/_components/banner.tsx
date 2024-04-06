"use client"
const Banner = () => {
  return (
    <div className=" flex flex-col md:items-center justify-center gap-20 p-6 pt-10 md:flex-row">



      <img src="./payments.png" alt="" className="w-1/2 md:w-1/4" />



      <div className="flex flex-col md:flex-row gap-4">

        <div className="flex flex-col items-start ">
          <p className="font-bold">Mac 100% Vérifié</p>
          <div>
            <p>Chaque Mac est inspecté, </p>
            <p>testé, nettoyé et reinstallé</p>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <p className="font-bold">Garantie 12 mois</p>
          <div>
            <p>Nos Mac sont garantis 1 an.</p>
            <p>Extension possible à 2 ans</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Banner;