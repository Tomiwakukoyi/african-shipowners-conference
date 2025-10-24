import { Calendar, MapPin, Users, Clock } from "lucide-react";

export default function ConferenceDetails() {
  const details = [
    {
      icon: Calendar,
      label: "Dates",
      value: "February 9-11, 2025",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
    },
    {
      icon: Clock,
      label: "Duration",
      value: "3 Days",
    },
    {
      icon: Users,
      label: "Host",
      value: "Federal Republic of Nigeria",
    },
  ];

  return (
    <section id="details" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  {detail.label}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {detail.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
