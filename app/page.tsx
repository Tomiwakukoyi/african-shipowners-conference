import Header from "@/components/header"
import Hero from "@/components/hero"
import Leadership from "@/components/leadership"
import ConferenceDetails from "@/components/conference-details"
import Themes from "@/components/themes"
import Objectives from "@/components/objectives"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Leadership />
      <ConferenceDetails />
      <Objectives />
      <Themes />
      <Footer />
    </main>
  )
}
