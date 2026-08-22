import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarDays, ChevronRight, Heart, MapPin, Search, Share2, UserRound } from 'lucide-react';
import './styles.css';

const events = [
  {
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=85',
    label: 'SELLING FAST', date: 'FRI, OCT 24 · 8:00 PM', title: "Symphony of the Night: Mahler's 5th", description: 'A profound exploration of Mahler’s masterpiece, conducted by maestro...', venue: 'Walt Disney Concert Hall', price: 'From $120'
  },
  {
    image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?auto=format&fit=crop&w=900&q=85',
    label: 'OPENING NIGHT', date: 'SAT, OCT 25 · 6:30 PM', title: 'Visions & Void: Contemporary Masters', description: 'An exclusive first look at the new collection defining the next decade of minimalist...', venue: 'Gagosian Gallery', price: 'Free Entry'
  },
  {
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85',
    label: '', date: 'THU, OCT 30 · 7:00 PM', title: 'Omakase & Opera: A Sensory Journey', description: 'A 12-course tasting menu paired with intimate vocal performances in a private...', venue: 'The Vault Room', price: 'From $350'
  }
];

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Berlin', 'Los Angeles', 'Milan', 'Amsterdam'];

function ImageCard({ event }) {
  return <article className="event-card">
    <div className="card-image"><img src={event.image} alt="" />{event.label && <span className="image-label">{event.label}</span>}<button className="heart" aria-label="Save event"><Heart size={14} /></button></div>
    <div className="card-body"><div className="event-date"><CalendarDays size={11} /> {event.date}</div><h3>{event.title}</h3><p>{event.description}</p><div className="card-meta"><span>{event.venue}</span><strong>{event.price}</strong></div></div>
  </article>;
}

function App() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [notice, setNotice] = useState('');
  const submitSearch = (event) => { event.preventDefault(); setNotice(query ? `Showing results for “${query}”` : 'Explore all curated events'); };

  return <div className="app">
    <header className="hero">
      <nav className="nav wrap"><a className="brand" href="#top" aria-label="SPOTevent home"><img src="/spotevent-logo-white.jpeg" alt="SPOTevent" /></a><div className="nav-links"><a className="active" href="#events">Events</a><a href="#destinations">Top Destinations</a><a href="#cities">Cities</a><a href="#categories">Categories</a><a href="#how">How it Works</a></div><div className="nav-actions"><button className="host" onClick={() => setNotice('Host an Event selected')}>Host an Event</button><button className="profile" aria-label="Profile"><UserRound size={13} /></button></div></nav>
      <div className="hero-content wrap"><p className="eyebrow">DISCOVER</p><h1>Curated Cultural Experiences Await</h1><form className="searchbar" onSubmit={submitSearch}><Search size={15} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events, artists, or venues..." aria-label="Search events" /><span className="location"><MapPin size={14} /> Current Location</span><button>Find</button></form><div className="chips" id="categories">{['Music', 'Culture', 'Sports', 'Conference', 'Food & Drink'].map((chip) => <button key={chip} onClick={() => setQuery(chip)}>{chip}</button>)}</div>{notice && <div className="notice">{notice}</div>}</div>
    </header>

    <main>
      <section className="trending wrap" id="events"><div className="section-heading"><div><p className="kicker">Trending Now</p><p>The most sought-after tickets this week, hand-picked by our editorial team.</p></div><div className="round-controls"><button aria-label="Previous"><ChevronRight size={13} className="flip" /></button><button aria-label="Next"><ChevronRight size={13} /></button></div></div><div className="event-grid">{events.map((event) => <ImageCard key={event.title} event={event} />)}</div></section>
      <section className="curated wrap" id="destinations"><div className="section-heading curated-heading"><div><p className="kicker">Curated for You</p><p>Personalized recommendations based on your cultural palate.</p></div><div className="filters">{['All Events', 'This Weekend', 'Private Access'].map((filter) => <button className={activeFilter === filter ? 'selected' : ''} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="feature-grid"><article className="feature-card"><img src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85" alt="Sculptural gallery installation" /><div className="feature-copy"><p className="kicker">♧ &nbsp; FEATURED EXHIBITION</p><h2>Architecture of the Void</h2><p>An immersive exploration of negative space in modernist architecture, featuring never-before-seen blueprints and scale models.</p><div className="place"><MapPin size={14} /> Tate Modern<br />&nbsp;&nbsp;&nbsp;&nbsp;Bankside, London</div><button className="primary" onClick={() => setNotice('Tickets reserved for Architecture of the Void')}>Secure Tickets</button></div></article><article className="master-card"><div className="master-image"><img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85" alt="Cocktail being poured" /></div><div className="master-copy"><div className="split"><p className="kicker">MASTER CLASS</p><span>Nov 2</span></div><h2>Mixology & Mix-Media</h2><p>Learn the art of crafting narrative-driven cocktails.</p><div className="price-arrow"><strong>$85.00</strong><button aria-label="View master class"><ArrowRight size={14} /></button></div></div></article></div><button className="catalog" onClick={() => setNotice('Complete catalog opened')}>View Complete Catalog</button></section>
      <section className="cities wrap" id="cities"><p className="kicker">Explore by Locale</p><p>Discover curated moments in the world's most vibrant cultural capitals.</p><div className="city-grid">{cities.map((city) => <a href={`#${city.toLowerCase().replace(' ', '-')}`} key={city}>Events in {city}<ArrowRight size={12} /></a>)}</div></section>
    </main>
    <footer id="how"><a className="footer-logo" href="#top" aria-label="SPOTevent home"><img src="/spotevent-logo.jpeg" alt="SPOTevent" /></a><div><p className="footer-title">EXPLORE</p><a href="#events">All Events</a><a href="#">Private Sales</a><a href="#">Artist Studio</a></div><div><p className="footer-title">SUPPORT</p><a href="#">Help Center</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div><div className="footer-end"><div><Share2 size={14} /> <span>◉</span></div><small>© 2024 SPOTevent. All rights reserved.</small></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
