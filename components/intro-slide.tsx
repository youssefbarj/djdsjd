import MicrobladingSlider from "./microblading-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive slider */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <MicrobladingSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Pourquoi le Microblading
            <br />
            <span className="text-slate-900">change tout</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Regardez cette transformation : d'un sourcil clairsemé à un sourcil parfaitement redessiné poil par poil.
            </p>

            <p>
              Le microblading imite les poils naturels, créant un rendu si réaliste que même les proches ne distinguent
              pas la différence. C'est devenu une technique incontournable en esthétique moderne.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Dans ce module, vous allez apprendre à :</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Identifier les <span className="underline decoration-purple-600">contre-indications médicales</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Adapter la <span className="underline decoration-purple-600">forme selon chaque morphologie</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Exécuter le <span className="underline decoration-purple-600">protocole professionnel complet</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
