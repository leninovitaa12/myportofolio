"use client"

import { Github, Linkedin, Instagram, Mail, TicketIcon as TikTok } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/leninovitaa12/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/leni-novita/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/lenissii?", label: "Instagram" },
    { icon: Mail, href: "mailto:leninovitaa12@gmail.com", label: "Email" },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-centered">
          <div className="footer-socials-centered">
            <h4 className="footer-section-title">Connect</h4>
            <div className="footer-social-icons">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        <div className="footer-bottom-centered">
          <p className="footer-copyright">© {currentYear} Leni Novita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
