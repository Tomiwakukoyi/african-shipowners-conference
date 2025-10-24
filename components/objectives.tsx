"use client"

import { Target, Users, Compass, Crown } from "lucide-react"

export default function Objectives() {
  const objectives = [
    {
      number: "01",
      title: "Reaffirm Continental Commitment",
      description:
        "Reaffirm the commitment of the African Union Commission, African Heads of States and Governments, and maritime stakeholders to prudent and sustainable management of Africa's maritime resources.",
      icon: Target,
    },
    {
      number: "02",
      title: "Increase African Ownership",
      description:
        "Increase African ownership and participation in Africa's shipping industry through actualization of more African-owned vessels and sustainable development of maritime infrastructure.",
      icon: Users,
    },
    {
      number: "03",
      title: "Accelerate Maritime Development",
      description:
        "Accelerate work on the roadmap to harness Africa's maritime domain resources for Africans, in alignment with AUC, AfCFTA, AfDB, IMO, and REC agendas.",
      icon: Compass,
    },
    {
      number: "04",
      title: "Elevate Nigeria's Leadership",
      description:
        "Elevate and affirm the role of Nigeria's government and Ministry of Marine and Blue Economy as champions for sustainable management of the continent's maritime resources.",
      icon: Crown,
    },
  ]

  return (
    <section id="objectives" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Conference Objectives</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic goals driving Africa's maritime transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent/30 group-hover:w-1.5 transition-all duration-300" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                    {objective.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{objective.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
