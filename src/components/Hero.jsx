import ModelCanvas from "./ModelCanvas.jsx"
import Typewriter from "./Typewriter.jsx"

export default function Hero() {
  const sentences = [
    "An Information Technology student who loves reading novels and adores cats.",
    "I'm learning web development, machine learning, IoT, robotics, and other modern IT technologies.",
  ]

  return (
    <div className="hero section container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-20">
      {/* Hero content on left (order-first on desktop), animation on right (order-last on desktop) */}
      <div className="w-full md:w-1/2 text-center md:text-left order-first md:order-last">
        {/* Social icons row with Instagram added and hover colors */}
        <div className="social-row flex justify-center md:justify-start gap-4 mb-6" aria-label="social links">
          <a
            href="https://github.com/leninovitaa12/"
            className="icon-link-social hover:text-github transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg className="icon w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5 0-1.1.38-2 .99-2.71-.1-.26-.43-1.3.09-2.71 0 0 .83-.27 2.73 1.03A9.3 9.3 0 0 1 12 6.84c.84 0 1.69.11 2.48.32 1.9-1.3 2.73-1.03 2.73-1.03.92.65.59 1.33.09 2.71.62.71.99 1.61.99 2.71 0 3.88-2.34 4.73-4.57 4.99.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/leni-novita/"
            className="icon-link-social hover:text-linkedin transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg className="icon w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3Zm-9.5 15V10H7v8Zm9 0v-4.5c0-2.42-1.29-3.54-3-3.54a2.64 2.64 0 0 0-2.41 1.32h-.05V10H11v8h2.1v-4.4c0-1.16.22-2.27 1.65-2.27s1.45 1.26 1.45 2.34V18ZM8 8.75A1.25 1.25 0 1 0 8 6.25a1.25 1.25 0 0 0 0 2.5Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/leninovitaa12/"
            className="icon-link-social hover:text-instagram transition-colors"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg className="icon w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.948 0-3.204.013-3.668.072-4.948.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </a>
          <a
            href="mailto:leninovitaa12@gmail.com"
            className="icon-link-social hover:text-email transition-colors"
            aria-label="Email"
            title="Email"
          >
            <svg className="icon w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" />
            </svg>
          </a>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">Hi, I'm Leni Novita.</h1>
        <span className="badge block text-gray-400 text-sm sm:text-base mt-3">IT Student • Reader • Cat Lover</span>

        <div className="mt-6 mb-6 text-sm sm:text-base leading-relaxed">
          {/* Typewriter sentence */}
          <Typewriter sentences={sentences} typeSpeed={26} deleteSpeed={16} pauseBetween={1400} startDelay={350} />
        </div>
      </div>

      <div
        className="w-full md:w-1/2 flex justify-center items-center h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] order-last md:order-first"
        style={{ background: "transparent", padding: 0 }}
        aria-label="3D animation"
      >
        <ModelCanvas />
      </div>
    </div>
  )
}
