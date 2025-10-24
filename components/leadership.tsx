export default function Leadership() {
  const leaders = [
    {
      honorific: "HIS EXCELLENCY",
      name: "BOLA AHMED TINUBU",
      honors: "GCFR",
      position: "PRESIDENT, COMMANDER-IN-CHIEF OF THE ARMED FORCES",
      affiliation: "FEDERAL REPUBLIC OF NIGERIA",
      image: "/images/tinubu2.png",
    },
    {
      honorific: "HIS EXCELLENCY",
      name: "KASHIM SHETTIMA",
      honors: "GCON",
      position: "VICE PRESIDENT",
      affiliation: "FEDERAL REPUBLIC OF NIGERIA",
      image: "/images/shettima.jpeg",
    },
    {
      honorific: "HON. MINISTER",
      name: "ADEBAYO ADEOLUWA OYETOLA",
      honors: "CON",
      position: "MINISTER OF MARINE AND BLUE ECONOMY",
      affiliation: "FEDERAL REPUBLIC OF NIGERIA",
      image: "/images/oyetola.jpg",
    },
    // {
    //   honorific: "DR.",
    //   name: "MAGDALENE AJANI",
    //   honors: "MNI",
    //   position: "PERMANENT SECRETARY",
    //   affiliation: "MINISTRY OF MARINE AND BLUE ECONOMY",
    //   image: "/official-portrait-permanent-secretary.jpg",
    // },
    // {
    //   honorific: "SECRETARY GENERAL",
    //   name: "FUNMI FOHLAMI",
    //   honors: "",
    //   position: "SECRETARY GENERAL",
    //   affiliation: "AFRICAN SHIPOWNERS ASSOCIATION",
    //   image: "/official-portrait-secretary-general.jpg",
    // },
  ];

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Conference Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Distinguished officials and maritime leaders championing Africa's
            blue economy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {leaders.slice(0, 3).map((leader, index) => (
            <div key={index} className="group w-full max-w-xs">
              <div className="relative overflow-hidden rounded-t-lg bg-card border border-border/50 transition-all">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div
                className={`text-center space-y-1 p-3 border border-border/50 ${
                  index === 0
                    ? "bg-yellow-600/90"
                    : index === 1
                    ? "bg-yellow-600/90"
                    : "bg-black/90"
                } backdrop-blur-sm`}
              >
                <div className="text-xs font-medium text-white uppercase tracking-wide">
                  {leader.honorific}
                </div>
                <div className="text-sm font-bold text-white uppercase">
                  {leader.name}
                  {leader.honors && (
                    <span className="text-xs font-normal ml-1">
                      {leader.honors}
                    </span>
                  )}
                </div>
                <div className="text-[10px] font-medium text-white uppercase tracking-wide">
                  {leader.position}
                </div>
                <div className="text-[9px] text-white/80 uppercase tracking-wide">
                  {leader.affiliation}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-8">
          {leaders.slice(3).map((leader, index) => (
            <div key={index + 3} className="group w-full max-w-xs">
              <div className="relative overflow-hidden rounded-t-lg bg-card border border-border/50 transition-all">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center space-y-1 bg-black/90 backdrop-blur-sm p-3 border border-border/50">
                <div className="text-xs font-medium text-white uppercase tracking-wide">
                  {leader.honorific}
                </div>
                <div className="text-sm font-bold text-white uppercase">
                  {leader.name}
                  {leader.honors && (
                    <span className="text-xs font-normal ml-1">
                      {leader.honors}
                    </span>
                  )}
                </div>
                <div className="text-[10px] font-medium text-white uppercase tracking-wide">
                  {leader.position}
                </div>
                <div className="text-[9px] text-white/80 uppercase tracking-wide">
                  {leader.affiliation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
