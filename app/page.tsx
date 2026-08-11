"use client";

import { useState } from "react";

type Product = { id: string; title: string; image: string; detail: string; price?: number; code: string };

const titles = [
  "Crimson Memory", "Stillness I", "Stillness II", "Inner Landscape", "Soft Geometry",
  "The Quiet Between", "Earthbound", "A Place to Begin", "Held Light", "Passing Through",
  "Nocturne", "Tender Form", "After Rain", "Unspoken", "Field Notes", "Blue Hour",
  "Ritual I", "Ritual II", "Drift", "Open Ground", "First Light", "Parallel Lines",
  "The Long Way Home", "Ember Study", "Quiet Current", "Untitled Form I", "Untitled Form II",
  "A Small Infinity", "Borrowed Sky", "Solitude", "Morning Study", "Between Seasons",
  "New Moon", "The Weight of Color", "Garden After Dark", "Soft Collision", "Red Thread",
  "Oil Study", "Pencil Study", "Thread Study", "Living Color",
];

const originals: Product[] = titles.map((title, i) => ({
  id: `original-${i + 1}`,
  title,
  image: i === 39 ? "/products/thread-portrait.webp" : `/products/art-${String(i + 1).padStart(2, "0")}.webp`,
  detail: i % 5 === 0 ? "Featured original" : "One-of-one original",
  code: `NSA-${String(i + 1).padStart(3, "0")}`,
}));

const commissioned: Product[] = [
  { id: "oil-painting", title: "Classical Dancer", image: "/products/art-38.webp", detail: "Oil painting", price: 14999, code: "NSC-001" },
  { id: "blood-art", title: "Red Hair Portrait", image: "/products/art-01.webp", detail: "Blood art", price: 3999, code: "NSC-002" },
  { id: "pencil-art", title: "Monochrome Portrait", image: "/products/art-39.webp", detail: "Pencil art", price: 2999, code: "NSC-003" },
  { id: "thread-art", title: "Thread Portrait", image: "/products/thread-portrait.webp", detail: "Thread art", price: 7999, code: "NSC-004" },
];

const books: Product[] = [
  { id: "minion-book", title: "Minion Art Book", image: "/products/book-minion.webp", detail: "A6 spiral art book", price: 69, code: "NSB-001" },
  { id: "captain-book", title: "Captain America Art Book", image: "/products/book-captain-america.webp", detail: "A4 spiral art book", price: 199, code: "NSB-002" },
  { id: "batman-book", title: "Batman Art Book", image: "/products/book-batman.webp", detail: "A3 spiral art book", price: 299, code: "NSB-003" },
];

const money = (price?: number) => price ? `₹${price.toLocaleString("en-IN")}` : "Price on request";
const whatsapp = (message: string) => `https://wa.me/919492297916?text=${encodeURIComponent(message)}`;

function ProductCard({ product, active, onFavourite, onView }: { product: Product; active: boolean; onFavourite: () => void; onView: () => void }) {
  const quoteUrl = whatsapp(`Hello Ns ARTS, I would like a quote for ${product.title} (${product.code}).`);
  return <article className="product-card">
    <div className="product-image">
      <button className="view-trigger" onClick={onView} aria-label={`View ${product.title}`}><img src={product.image} alt={`${product.title} by Ns ARTS`} loading="lazy"/></button>
      <span className="product-number">{product.code}</span>
      <button className={`heart ${active ? "active" : ""}`} onClick={onFavourite} aria-label={`${active ? "Remove" : "Add"} ${product.title} ${active ? "from" : "to"} favourites`} aria-pressed={active}>{active ? "♥" : "♡"}</button>
      <div className="card-hover"><button onClick={onView}>View artwork <span>↗</span></button></div>
    </div>
    <div className="product-info"><button className="product-title" onClick={onView}><h3>{product.title}</h3><p>{product.detail}</p><strong>{money(product.price)}</strong></button><a href={quoteUrl} target="_blank" rel="noreferrer" aria-label={`Request a quote for ${product.title} on WhatsApp`}>↗</a></div>
  </article>;
}

export default function Home() {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [artistOpen, setArtistOpen] = useState(false);
  const toggleFavourite = (id: string) => setFavourites((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  const renderProducts = (items: Product[]) => <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} active={favourites.includes(product.id)} onFavourite={() => toggleFavourite(product.id)} onView={() => setSelected(product)}/>)}</div>;

  return <main>
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="Ns ARTS home"><span>Ns</span> ARTS</a>
      <nav aria-label="Main navigation"><a href="#commissions">Art styles</a><a href="#books">Books</a><a href="#collection">Originals</a><a href="#studio">Studio</a></nav>
      <div className="nav-actions"><a className="saved" href="#collection" aria-label={`${favourites.length} favourite products`}><span>♡</span> {favourites.length}</a><a className="button button-dark" href={whatsapp("Hello Ns ARTS, I would like to request a quote.")} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a></div>
    </header>

    <section className="hero shell" id="top"><div className="hero-copy"><p className="kicker">Original art · Thoughtfully made</p><h1>Art with a<br/><i>human pulse.</i></h1><p className="hero-intro">Discover original works shaped by intuition, craft, and curiosity—made to bring soul into the spaces you live and work in.</p><div className="hero-actions"><a className="button button-dark" href="#commissions">Explore art styles <span>↓</span></a><button className="text-link artist-trigger" onClick={() => setArtistOpen(true)}>Meet the artist <span>↗</span></button></div></div><div className="hero-gallery"><figure className="hero-main"><img src="/products/art-37.webp" alt="Featured original artwork by Ns ARTS"/><figcaption><span>Featured work</span><b>Soft Collision, 2026</b></figcaption></figure><figure className="hero-small"><img src="/products/book-batman.webp" alt="Batman art book"/><figcaption>New art books · 2026</figcaption></figure></div></section>
    <section className="trust-bar"><div className="shell"><span>✦ One-of-one originals</span><span>✦ Artist-made</span><span>✦ Custom portraits</span><span>✦ Art books</span></div></section>

    <section className="collection feature-collection" id="commissions"><div className="shell"><div className="section-head"><div><p className="kicker">Signature techniques</p><h2>Our ARTS</h2></div><div className="collection-note"><span>Made from your photograph</span><p>Choose a distinctive art style for a personal portrait or meaningful gift.</p></div></div>{renderProducts(commissioned)}</div></section>

    <section className="collection shell books-collection" id="books"><div className="section-head"><div><p className="kicker">Books collection</p><h2>Art books</h2></div><div className="collection-note"><span>Three collectible formats</span><p>Illustrated spiral books in A6, A4, and A3 sizes.</p></div></div>{renderProducts(books)}</section>

    <section className="collection shell" id="collection"><div className="section-head"><div><p className="kicker">Original collection</p><h2>Available works</h2></div><div className="collection-note"><span>41 original pieces</span><p>Click any work to see it larger, view its details, save it, or request availability.</p></div></div>{renderProducts(originals)}</section>

    <section className="studio" id="studio"><div className="shell studio-inner"><div className="studio-image"><img src="/products/art-24.webp" alt="Original work from the Ns ARTS studio"/><span>Made slowly,<br/>kept forever.</span></div><div className="studio-copy"><p className="kicker">Inside Ns ARTS</p><h2>Where instinct<br/>meets intention.</h2><p>Every Ns ARTS piece begins by hand and finds its own rhythm through color, material, and time. The collection celebrates the marks that make art feel alive—texture, movement, and beautiful imperfection.</p><p>Looking for a particular style, scale, or mood? We welcome commissions for portraits, homes, and thoughtful gifts.</p><a className="text-link" href="#contact">Start a conversation <span>↗</span></a></div></div></section>
    <section className="quote-banner" id="contact"><div className="shell"><p className="kicker">Contact us</p><h2>Found something<br/>that <i>speaks to you?</i></h2><p>Tell us which piece you love. We’ll share availability, dimensions, ordering, and delivery details personally.</p><a className="contact-number" href="tel:+919492297916">+91 94922 97916</a><div className="contact-actions"><button className="button artist-button" onClick={() => setArtistOpen(true)}>Meet the artist <span>↗</span></button><a className="button button-light" href={whatsapp("Hello Ns ARTS, I would like to request a quote.")} target="_blank" rel="noreferrer">Request on WhatsApp <span>↗</span></a></div></div></section>
    <footer><div className="shell footer-top"><div className="brand"><span>Ns</span> ARTS</div><p><a href="tel:+919492297916">Contact us · +91 94922 97916</a></p><div><button className="footer-artist" onClick={() => setArtistOpen(true)}>Meet the Artist</button><a href="https://www.instagram.com/ns_art_gallery._?igsh=MWxlZm1hcXZya29jbg==" target="_blank" rel="noreferrer">Instagram</a><a href={whatsapp("Hello Ns ARTS, I would like to request a quote.")} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="shell footer-bottom"><small>© 2026 Ns ARTS. All works reserved.</small><a href="https://www.instagram.com/ns_art_gallery._?igsh=MWxlZm1hcXZya29jbg==" target="_blank" rel="noreferrer">@ns_art_gallery._ ↗</a><a href="#top">Back to top ↑</a></div></footer>

    {selected && <div className="product-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}><div className="modal-panel" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close product view">×</button><div className="modal-image"><img src={selected.image} alt={selected.title}/></div><div className="modal-copy"><p className="kicker">{selected.code}</p><h2>{selected.title}</h2><p className="modal-detail">{selected.detail}</p><strong>{money(selected.price)}</strong><p>Made by Ns ARTS. Contact us for availability, custom requests, and delivery details.</p><button className={`modal-favourite ${favourites.includes(selected.id) ? "active" : ""}`} onClick={() => toggleFavourite(selected.id)}>{favourites.includes(selected.id) ? "♥ Saved to favourites" : "♡ Add to favourites"}</button><a className="button button-dark" href={whatsapp(`Hello Ns ARTS, I would like a quote for ${selected.title} (${selected.code}).`)} target="_blank" rel="noreferrer">Request on WhatsApp <span>↗</span></a></div></div></div>}
    {artistOpen && <div className="artist-modal" role="dialog" aria-modal="true" aria-label="Meet the artist Venkat" onClick={() => setArtistOpen(false)}><div className="artist-card" onClick={(event) => event.stopPropagation()}><button className="artist-close" onClick={() => setArtistOpen(false)} aria-label="Close artist profile">×</button><p className="kicker">Hello, it’s me</p><h2>VENKAT</h2><p className="artist-role">Oil Artist</p><p className="artist-lead">I transform emotions into timeless artworks, blending realism, creativity, and imagination through every stroke and detail.</p><p>Each creation tells a story—crafted with passion, precision, and soul.</p><a className="button button-light" href={whatsapp("Hello Venkat, I would like to know more about your artwork.")} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></div></div>}
  </main>;
}
