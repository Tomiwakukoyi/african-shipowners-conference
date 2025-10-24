import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">⚓</span>
              </div>
              <span className="font-bold text-lg">ASC 2025</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              African Shipowners' Conference - Promoting African Ownership in Shipping & Blue Economy
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#details" className="hover:text-accent transition-colors">
                  Conference Details
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-accent transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-accent transition-colors">
                  Themes
                </a>
              </li>
              <li>
                <a href="#objectives" className="hover:text-accent transition-colors">
                  Objectives
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>info@asc2025.ng</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+234 (0) XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <span className="text-accent">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <span className="text-accent">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <span className="text-accent">in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2025 African Shipowners' Conference. All rights reserved. Hosted by the Federal Republic of Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}
