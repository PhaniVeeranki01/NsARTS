const works = [
  { n: "01", title: "Between the Blue", type: "Acrylic on canvas", cls: "work-blue" },
  { n: "02", title: "Soft Collision", type: "Mixed media", cls: "work-sun" },
  { n: "03", title: "Memory of Green", type: "Oil & pastel", cls: "work-green" },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Ns ARTS home"><span>Ns</span> ARTS</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">Studio</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Inquire <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <p className="eyebrow"><span /> Independent art studio · Est. 2024</p>
        <h1>Art that lets<br/><i>feeling</i> take form.</h1>
        <div className="hero-bottom">
          <p>Original paintings and considered objects, created to bring color, character, and a little wonder into everyday spaces.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected artwork"><span>Explore<br/>the work</span><b>↓</b></a>
        </div>
        <div className="hero-art" aria-label="Abstract composition in blue, red, yellow, and black">
          <span className="shape cobalt"/><span className="shape vermilion"/><span className="shape cream"/><span className="shape ink"/><span className="scribble">N</span>
          <p>ORIGINAL<br/>WORKS</p>
        </div>
      </section>

      <section className="manifesto shell">
        <p className="section-label">The studio</p>
        <p className="big-copy">We make art for the <em>curious</em> — pieces that hold a room, invite a second look, and become part of your story.</p>
      </section>

      <section className="works" id="work">
        <div className="shell works-head"><div><p className="section-label">Selected work · 2024—26</p><h2>Recent pieces</h2></div><p>One-of-one originals<br/>made slowly, by hand.</p></div>
        <div className="work-grid shell">
          {works.map((work) => <article className="work-card" key={work.n}>
            <div className={`canvas ${work.cls}`}><span className="paint-a"/><span className="paint-b"/><span className="paint-c"/><b>{work.n}</b></div>
            <div className="work-meta"><h3>{work.title}</h3><p>{work.type} · 2026</p></div>
          </article>)}
        </div>
        <div className="shell all-work"><a href="#contact">Request the full portfolio <span>↗</span></a></div>
      </section>

      <section className="about shell" id="about">
        <div className="portrait"><span>Ns</span><small>In the studio<br/>New York · 2026</small></div>
        <div className="about-copy"><p className="section-label">Behind the work</p><h2>Made by hand.<br/><i>Led by instinct.</i></h2><p>Ns ARTS is an independent studio exploring the space between spontaneity and structure. Each piece begins with a feeling—not a fixed plan—and grows through color, texture, and play.</p><p>The result is work with an honest, human pulse: imperfect, expressive, and entirely its own.</p><div className="signature">Ns</div></div>
      </section>

      <section className="process">
        <div className="shell"><p className="section-label light">How it works</p><div className="steps">
          <article><b>01</b><h3>Discover</h3><p>Browse available work or share the feeling, palette, and space you have in mind.</p></article>
          <article><b>02</b><h3>Connect</h3><p>We’ll talk details, dimensions, timeline, and what would make the piece unmistakably yours.</p></article>
          <article><b>03</b><h3>Collect</h3><p>Your artwork is carefully finished, packed, and sent home—ready to live with.</p></article>
        </div></div>
      </section>

      <footer id="contact">
        <div className="shell footer-main"><p className="eyebrow"><span/> Commissions & available work</p><h2>Let’s make space<br/>for something <i>beautiful.</i></h2><a className="email" href="mailto:hello@nsarts.studio">hello@nsarts.studio <span>↗</span></a></div>
        <div className="shell footer-bottom"><div className="brand"><span>Ns</span> ARTS</div><p>Original art, thoughtfully made.</p><div><a href="#top">Instagram</a><a href="#top">Pinterest</a><a href="#top">Back to top ↑</a></div><small>© 2026 Ns ARTS</small></div>
      </footer>
    </main>
  );
}
