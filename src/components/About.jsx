export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 flex items-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Container dengan centering yang presisi */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-16">
        {/* Grid layout: Text di kiri, Photo di kanan - CENTERED */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center justify-items-center">
          
          {/* LEFT: Text Content */}
          <div className="space-y-4 w-full">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Leni Novitasari</h2>

            <p className="text-[1.05rem] leading-relaxed text-gray-300">
              I started my journey in multimedia, where I developed skills in
              video editing and graphic design, creating content like posters
              and visual materials. I've also edited several videos for campus
              activities, including:
            </p>

            {/* Instagram video links */}
            <div className="mb-6">
              <a
                href="https://www.instagram.com/reel/C-6vg1nBil3/?igsh=MXQ3c2huam9sYXB1eg=="
                className="video-link text-[1.05rem] text-pink-400 hover:underline mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pkkmb PNM 2024
              </a>

              <span className="mx-2">•</span>

              <a
                href="https://www.instagram.com/reel/DB6GaLahC-g/?igsh=MTBucGx0bzJxcjB0Zw=="
                className="video-link text-[1.05rem] text-pink-400 hover:underline ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dies Natalies PNM 2024
              </a>
            </div>

            <p className="text-[1.05rem] leading-relaxed text-gray-300">
              Beyond multimedia, I'm an Information Technology student who loves reading novels and spending time with cats. I'm actively learning web development, machine learning, IoT, robotics, and other areas of modern technology.
            </p>

            <p className="text-[1.05rem] leading-relaxed text-gray-300">
              I enjoy combining creativity with engineering to craft experiences that are useful, elegant, and reliable. In the future, I would love to apply my knowledge to create meaningful solutions.
            </p>

            <p className="text-[1.05rem] leading-relaxed text-gray-300">
              Aside from tech, I love listening to Ariana Grande, ENHYPEN, Lany, NIKI, Kendric Lamar, EXO, and much more Check out my{" "}
              <a
                href="https://open.spotify.com/user/31dv5s7m7bg5pnxzdy3atcfrs5im?si=9dc7e193aae94f3e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spotify underline"
              >
                Spotify
              </a>{" "}
              for my favorite tracks. I also love Marvel, Harry Potter, and
              my cats!
            </p>
          </div>

          {/* RIGHT: Photo - Fixed 400x550px */}
          <div className="flex justify-center items-center">
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ width: 400, height: 550 }}
            >
              <img
                src="/models/leni_novita.jpeg"
                alt="Leni Novita"
                className="block object-cover object-top rounded-2xl"
                width={400}
                height={550}
                style={{ display: "block", width: "400px", height: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}