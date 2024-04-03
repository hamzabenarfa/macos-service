"use client"

import Button from "./Button/Button"

export default function Support() {
  return (
    <section className="p-8 flex flex-col-reverse md:flex-row justify-around bg-[#f7f7f7] items-center" id="tarif">
      <div className="space-y-4 md:space-y-20 flex items-center justify-center flex-col">

      <h1 className="text-5xl font-bold">Tarifs.</h1>
      <div className=" flex flex-col items-center justify-center">
          <Button title="09 80 80 36 43" />
          <small className="block mt-2">Appel gratuit non surtaxé</small>
        </div>
      </div>
      <img src="tarif.jpg" alt="" className="md:w-2/5"/>


    </section>
  )
}
