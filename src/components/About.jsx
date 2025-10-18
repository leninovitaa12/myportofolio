export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hey! I'm Leni Novitasari, an IT student with a passion for creating beautiful and functional digital experiences. My
              journey started with multimedia during high school, where I discovered my love for visual storytelling and
              creative design.
            </p>

            <p>
              I've been actively involved in publication and documentation teams. I was part
              of the{" "}
              <a
                href="https://www.instagram.com/reel/C-6vg1nBil3/?igsh=MXQ3c2huam9sYXB1eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link-inline"
              >
                PKKMB 2024
              </a>{" "}
              documentation team and also worked as an editor for the{" "}
              <a
                href="https://www.instagram.com/reel/DB6GaLahC-g/?igsh=MTBucGx0bzJxcjB0Zw=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link-inline"
              >
                Dies Natalis 2024
              </a>{" "}
              publication. These experiences taught me the importance of attention to detail and effective
              communication.
            </p>

            <p>
              Currently, my time is dedicated to learning and building with a focus on software technologies. I’m deep into the software stack: HTML5, CSS, JavaScript, Bootstrap, Laravel, React, and Python. 
              I’m also exploring new territory by tackling fundamental Machine Learning (ML) concepts and experimenting with basic IoT setups to broaden my skills.
            </p>

            <p>
              Aside from tech, I love listening to Ariana Grande, ENHYPEN, Lany, NIKI, Kendric Lamar, EXO, and much
              more. Check out my{" "}
              <a
                href="https://open.spotify.com/user/31ov3wy2xronqiivqbddvgmnpuie?si=5df4tXYIR8CGLAyupMKTfw"
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-link-inline"
              >
                Spotify
              </a>{" "}
              for my favorite tracks. I also love Marvel, Harry Potter, Korean Dramas, and my cats! 
              Here are some of my favorite books that have inspired me:
            </p>
          </div>

          <div className="about-photo">
            <img src="/models/leni_novita.jpeg" alt="Leni Novita" className="profile-photo" />
          </div>
        </div>

        <div className="books-container">
          <FavoriteBooks />
        </div>
      </div>
    </section>
  )
}

import FavoriteBooks from "./FavoriteBooks"
