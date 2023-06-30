"use client";

import Button from "./Button/Button";

function Entreprise() {
  return (
    <section className="flex min-h-screen flex-col items-center mb-24 ">
      <span className=" center bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text pt-20 text-center text-4xl font-medium text-transparent">
        Votre appareil n&apos;est peut-être pas si mal en point que vous le
        pensez !
      </span>
      <img
        src="/appless.jpg"
        alt="et"
        width={1960}
        height={1102}
      />
      <p className="text-bold px-4 text-justify md:px-60 md:text-xl pt-8">
        Offrez une seconde jeunesse à votre Mac et évitez de le remplacer. Nous
        possédons les ressources et les compétences nécessaires pour installer,
        optimiser et personnaliser votre ordinateur selon vos souhaits, en
        veillant à ce que les logiciels dont vous avez besoin soient
        correctement configurés. nous pouvons reconditionner votre machine, lui
        donner une seconde vie voire la booster. Un ancien Mac vieux de 10 ans
        peut encore remplir ses fonctions s&apos;il est bien restauré. Lors de la
        réinitialisation de votre Mac, nous veillons à sauvegarder toutes vos
        données avant de remettre votre système à zéro.
      </p>
      <div className="pt-5">
      <Button title="09 80 80 67 64" />
      </div>
    </section>
  );
}

export default Entreprise;
