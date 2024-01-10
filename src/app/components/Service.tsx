"use client";


export default function Service() {
  return (
    <>
      <section className=" min-h-screen  bg-[#FBFBFB]">
        <div className="space-y-10 py-16">
          <p className="text-center text-xl p-6 font-medium  tracking-wide">
            <span className="block text-2xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Votre Mac a un problème ? 
            </span>
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">il est bloqué, l&apos;écran est figé, votre Mac tourne au ralenti, oubli de mot de passe , certains programmes ne fonctionnent plus…</span>
            
          </p>
          <div className="flex flex-wrap items-center justify-center  md:w-full ">
            <div className="flex flex-col items-center        p-4 md:w-1/2 ">
              <img
                src="/icons8-lock-100.png"
                width={100}
                height={100}
                alt="lock"
                className="headerIcon"
              />
              <div className="servicetext">Problème de mot de passe ?</div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <img
                src="/icons8-update-100.png"
                width={100}
                height={100}
                alt="update"
                className="headerIcon"
              />

              <div className="servicetext">
              Pas de mise à jour possible !
              </div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <img
                src="/icons8-reset-100.png"
                width={100}
                height={100}
                alt="reset"
                className="headerIcon"
              />

              <div className="servicetext">
              Votre Mac semble très lent ?
              </div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <img
                src="/icons8-download-100.png"
                width={100}
                height={100}
                alt="download"
                className="headerIcon"
              />

              <div className="servicetext">Votre Mac est figé sur la pomme ?</div>
            </div>
            <div className="flex flex-col items-center         p-4 md:w-1/2">
              <img
                src="/icons8-service-150.png"
                width={100}
                height={100}
                alt="service"
                className="headerIcon"
              />

              <div className="servicetext">
              Votre Mac est verrouillé ?
              </div>
            </div>
            <div className="flex flex-col items-center p-4 md:w-1/2">
              <img
                src="/icons8-power-off-button-100.png"
                width={100}
                height={100}
                alt="power-off-button"
                className="headerIcon"
              />

              <div className="servicetext">Problèmes de démarrage</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
