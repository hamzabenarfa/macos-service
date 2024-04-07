"use client"

import { MonitorUp, RotateCcw, Wifi } from "lucide-react"
import Button from "./Button/Button"

export default function Tarif() {
  return (
    <section className="p-8 bg-[#f7f7f7] space-y-4 " >
      <div className="flex flex-col-reverse md:flex-row justify-around">

        <div className="space-y-4 md:space-y-20 flex items-start justify-center flex-col">
          <div>

            <h1 className="text-4xl font-bold mb-1 text-slate-800">
              Découvrez notre assistance en temps réel,
            </h1>
            <h1 className="text-2xl font-semibold max-w-xl text-slate-800">
              Nos outils avancés et sécurisés de prise en main à distance nous permettent d&apos;effectuer un diagnostic précis et de résoudre de nombreux problèmes directement, sans que vous ayez à vous déplacer.
            </h1>
          </div>
          <div className=" flex flex-col items-center justify-center" >
            <div className="flex flex-col md:flex-row gap-2">
              <Button title="09 80 80 36 43" />
              <a href="https://macos-service.screenconnect.com/" target="_blank" className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                Connection à distance
              </a>
            </div>
            <small className="block mt-2">Appel gratuit non surtaxé</small>
          </div>


        </div>
        <img src="tarif.jpg" alt="" className="md:w-2/5" />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 " id="tarif">
        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start  w-80">
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-xl">Optimisation  </h1>
            <MonitorUp />
          </div>
          <h1>Ce tarif comprend : </h1>
          <br />
          <div className="">
            <h3>-Formatage de votre disque dur </h3>
            <h3>-Création de votre partition</h3>
            <h3>-Installation de votre Système </h3>
            <h3>-Configuration de votre Internet</h3>
            <h3>-Recherche des mises à jour Prix: </h3>
            <p className=" text-center font-bold">120 €</p>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start w-80">
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-xl">Configuration basique</h1>
            <Wifi />
          </div>
          <h1>Ce tarif comprend : </h1>
          <div className="">
            <h3>-Diagnostique du système  </h3>
            <h3>-Nettoyage de votre disque dur</h3>
            <h3>-Vérification et réparation des registres </h3>
            <h3>-Optimisation Index système </h3>
            <h3>-Vérification et test Hardware
              Prix:  </h3>
            <p className=" text-center font-bold">49 €</p>
          </div>

        </div>

        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start w-80">
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-xl">Réinstallation Complète </h1>
            <RotateCcw />
          </div>
          <h1>Ce tarif comprend : </h1>
          <div className="">
            <h3>-Installation, configuration logicielle  </h3>
            <h3>-Maintenance du système </h3>
            <h3>-Optimisation de votre système  </h3>
            <h3>-Mise à jour de votre système  </h3>
            <h3>-Configuration messagerie Mail</h3>
            <h3>-Configuration de vos services
              Prix:   </h3>
            <p className=" text-center font-bold">149 €</p>
          </div>
        </div>
      </div>

    </section>
  )
}
