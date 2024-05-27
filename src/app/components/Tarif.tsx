"use client"

import { MonitorUp, RotateCcw, Wifi } from "lucide-react"
import Button from "./Button/Button"

export default function Tarif() {
  return (
    <section className="p-8 md:p-16 bg-white space-y-4  " >
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="space-y-4 md:space-y-20 flex items-start justify-center flex-col">
          <div>

            <div id="service" />
            <h1 className="text-4xl font-bold mb-2 text-slate-800">
              Découvrez notre assistance en temps réel,
            </h1>


            <h1 className="text-2xl font-semibold max-w-xl text-slate-800">
            Votre ordinateur est bloqué !
            </h1>
            <h1 className="text-2xl font-semibold max-w-xl text-slate-800">
            Mac est sur une ancienne version ?
            </h1>
            <h1 className="text-2xl font-semibold max-w-xl text-slate-800">
            Pas de possibilité de mettre à jour !
            </h1>
            <h1 className="text-2xl font-semibold max-w-2xl text-slate-800">
            Un spécialiste est là pour vous aider,
            </h1>
          </div>

          <div className=" flex flex-col items-center justify-center" >
            <div className="flex flex-col md:flex-row gap-2">
              <Button title="09 70 70 82 21" />
              {/* <a href="https://macos-service.screenconnect.com/" target="_blank" className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                Connection à distance
              </a> */}
            </div>
            <small className="block mt-2 capitalize">Appel gratuit & non surtaxé</small>
          </div>


        </div>
        <img src="images/macc.jpeg" alt="" className="md:w-[65%]" />
      </div>
     
      <div className="w-full flex flex-col md:flex-row items-center justify-around gap-4 ">
        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start  w-80">
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-xl">Optimisation  </h1>
            <MonitorUp />
          </div>

          <br />
          <div className="">
            <h3>-Formatage de votre disque dur </h3>
            <h3>-Création de votre partition</h3>
            <h3>-Installation de votre Système </h3>
            <h3>-Configuration de votre Internet</h3>
            <h3>-Recherche des mises à jour </h3>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start w-80">
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-xl">Configuration basique</h1>
            <Wifi />
          </div>

          <div className="">
            <h3>-Diagnostique du système  </h3>
            <h3>-Nettoyage de votre disque dur</h3>
            <h3>-Vérification et réparation des registres </h3>
            <h3>-Optimisation Index système </h3>
            <h3>-Vérification et test Hardware
            </h3>
          </div>

        </div>

        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start w-80">
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-xl">Réinstallation Complète </h1>
            <RotateCcw />
          </div>
          <div className=""  >
            <h3>-Installation, configuration logicielle  </h3>
            <h3>-Maintenance du système </h3>
            <h3>-Optimisation de votre système  </h3>
            <h3>-Mise à jour de votre système  </h3>
            <h3>-Configuration messagerie Mail</h3>
            <h3>-Configuration de vos services
            </h3>
          </div>
        </div>

        
      </div>
      <div className="mx-auto pt-20 text-2xl text-center font-bold ">
        <p>Pour tous vos soucis Mac, notre équipe experte offre une assistance rapide et efficace, </p>
        <p>de l&apos;installation à la résolution des problèmes de blocage et de lenteur</p>
      </div>
    </section>
  )
}
