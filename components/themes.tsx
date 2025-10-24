"use client"

import { Waves, TrendingUp, DollarSign, Zap, Users, Shield } from "lucide-react"

export default function Themes() {
  const themes = [
    {
      title: "Harnessing the Blue Economy",
      description:
        "Exploring sustainable use of ocean resources and inland waters for economic growth, improved livelihoods, and job creation.",
      topics: [
        "Sustainable marine resource management",
        "Growing African ship registries",
        "Investment opportunities in shipping and aquaculture",
      ],
      icon: Waves,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Maximizing AfCFTA Benefits",
      description:
        "Exploring implications of the Africa Continental Free Trade Area on the maritime sector and maximizing benefits for African shipowners.",
      topics: [
        "Maritime transport in intra-African trade",
        "Transforming ports into world-class gateways",
        "Policy frameworks and regulatory adjustments",
      ],
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Financing Strategies",
      description:
        "Securing adequate financing and investment crucial for growth of African-owned ships and fleet expansion.",
      topics: [
        "Blue bonds as financing strategy",
        "Innovative financing models",
        "Public-private partnerships and international funding",
      ],
      icon: DollarSign,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Capacity Building & Technology",
      description:
        "Developing skills and adopting new technologies essential for competitiveness of African shipowners.",
      topics: [
        "Training and development programs",
        "Digitalization and automation",
        "Green technologies and decarbonization",
      ],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Maritime Employment",
      description:
        "Ensuring credible maritime development of Africa's youth across all spheres of the maritime industry.",
      topics: [
        "Seafarers training and development",
        "Maritime research institutions",
        "Women in shipping and maritime sectors",
      ],
      icon: Users,
      color: "from-rose-500 to-red-500",
    },
    {
      title: "Maritime Security",
      description: "Eradicating maritime crimes endemic in Africa's maritime domain to enable resource harnessing.",
      topics: [
        "African navies and coastguards",
        "Maritime domain awareness",
        "Naval air assets and deterrence capabilities",
      ],
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section id="themes" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Conference Themes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six interactive group sessions covering critical maritime and blue economy topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => {
            const IconComponent = theme.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${theme.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{theme.description}</p>

                  <ul className="space-y-2.5">
                    {theme.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span
                          className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.color} font-bold mt-0.5 flex-shrink-0`}
                        >
                          ▸
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
