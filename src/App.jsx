
import React, { useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Headset,
  LockKeyhole,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Zap,
  Menu,
  X
} from "lucide-react";

import {
  BUSINESS_NAME,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER
} from "./config";

function whatsappUrl() {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${923418227782}?text=${message}`;
}

function WhatsAppButton({ className = "" }) {
  return (
    <a className={`whatsapp-button ${className}`} href={whatsappUrl()}
      target="_blank" rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp">
      <MessageCircle size={21} />
      Chat on WhatsApp
      <ArrowRight size={18} />
    </a>
  );
}

const features = [
  { icon: Rocket, title: "Fast & Reliable", text: "A simple, smooth way to get in touch." },
  { icon: ShieldCheck, title: "Privacy Matters", text: "Start a conversation directly on WhatsApp." },
  { icon: Headset, title: "Friendly Support", text: "We're ready to answer your questions." },
  { icon: BarChart3, title: "Here to Help", text: "Let's find the right solution together." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const invalidNumber = !/^\d{8,15}$/.test(WHATSAPP_NUMBER.replace(/\D/g, ""));

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* <header className="site-header">
        <a className="brand" href="#home" aria-label={`${BUSINESS_NAME} home`} onClick={closeMenu}>
          <span className="brand-mark">B</span>
          <span>{BUSINESS_NAME}</span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Why us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <WhatsAppButton className="header-cta" />
      </header> */}

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="trust-pill"><ShieldCheck size={18} /> Friendly, direct support</div>
          <p className="eyebrow">LET'S START A CONVERSATION</p>
          <h1>Good things start with a <span>hello.</span></h1>
          <p className="hero-description">
            Have a question or want to know more? Get in touch with us directly.
            We're just one WhatsApp message away.
          </p>
          <WhatsAppButton className="hero-cta" />
          {/* <div className="hero-notes">
            <span><LockKeyhole size={17} /> Direct contact</span>
            <span><BadgeCheck size={17} /> Easy communication</span>
            <span><Zap size={17} /> Quick response</span>
          </div> */}
        </div>

        <div className="visual-wrap" aria-label="WhatsApp contact illustration">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="chat-card">
            <div className="chat-top">
              <div className="avatar">B</div>
              <div><strong>{BUSINESS_NAME}</strong><small>Usually replies soon</small></div>
              <span className="online-dot"></span>
            </div>
            <div className="chat-body">
              <div className="chat-date">TODAY</div>
              <div className="bubble">Hello! 👋 Thanks for visiting our website.</div>
              <div className="bubble bubble-right">I'd like to know more!</div>
              <div className="bubble">Of course! Send us a message and we'll be happy to help. <span>✓✓</span></div>
            </div>
            <div className="chat-input"><span>Type a message...</span><MessageCircle size={19} /></div>
          </div>
          <div className="floating-whatsapp"><MessageCircle size={34} /></div>
          <div className="decor decor-a"></div>
          <div className="decor decor-b"></div>
        </div>
      </section>

      {/* <section className="features-section" id="services">
        <div className="section-heading">
          <span className="section-tag">WHY CONNECT WITH US?</span>
          <h2>Your questions. <span>Our attention.</span></h2>
          <p>A simple and convenient way to reach us whenever you need.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon size={27} /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section> */}

      {/* <section className="about-section" id="about">
        <div>
          <span className="section-tag">HERE FOR YOU</span>
          <h2>Let's make it <span>easy.</span></h2>
          <p>Skip the complicated forms. Tell us what you need and we'll take it from there.</p>
        </div>
        <WhatsAppButton />
      </section> */}

      {/* <footer id="contact">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">B</span>{BUSINESS_NAME}</a>
        <p>Have something in mind? We'd love to hear from you.</p>
        <WhatsAppButton className="footer-cta" />
        <small>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</small>
      </footer> */}

      {invalidNumber && (
        <div className="setup-warning" role="alert">
          Setup required: update the WhatsApp number in <code>src/config.js</code> before publishing.
        </div>
      )}
    </main>
  );
}