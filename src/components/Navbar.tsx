// "use client";


// // // import { useEffect, useState } from "react";
// // // import Link from "next/link";

// // // const SERVICES_SUBMENU = [
// // //   { index: "I",   label: "Kitchen Renovation",    desc: "Luxury custom kitchens with premium finishes.",               href: "#services" },
// // //   { index: "II",  label: "Bathroom Remodeling",   desc: "Spa-inspired bathrooms with modern detailing.",              href: "#services" },
// // //   { index: "III", label: "Flooring",              desc: "Hardwood, tile, vinyl, and luxury flooring solutions.",       href: "#services" },
// // //   { index: "IV",  label: "Painting",              desc: "Interior and exterior painting with designer palettes.",      href: "/colour-studio" },
// // //   { index: "V",   label: "Basement Finishing",    desc: "Transform unfinished basements into elegant living spaces.", href: "#services" },
// // //   { index: "VI",  label: "Commercial Renovation", desc: "Modern commercial and office renovation services.",          href: "#services" },
// // // ];

// // // const NAV_LINKS = [
// // //   { label: "Services", href: "#services",    hasSubmenu: true  },
// // //   { label: "Projects", href: "#projects",   hasSubmenu: false },
// // //   { label: "Process",  href: "#process",    hasSubmenu: false },
// // //   { label: "Stories",  href: "/stories",      hasSubmenu: false },
// // // ];

// // // export default function Navbar() {
// // //   const [scrolled,      setScrolled]      = useState(false);
// // //   const [menuOpen,      setMenuOpen]      = useState(false);
// // //   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
// // //   const [hoveredItem,   setHoveredItem]   = useState<string | null>(null);

// // //   /* scroll effect */
// // //   useEffect(() => {
// // //     const onScroll = () => setScrolled(window.scrollY > 80);
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);

// // //   /* lock body scroll when menu open */
// // //   useEffect(() => {
// // //     document.body.style.overflow = menuOpen ? "hidden" : "";
// // //     return () => { document.body.style.overflow = ""; };
// // //   }, [menuOpen]);

// // //   /* escape key */
// // //   useEffect(() => {
// // //     const onKey = (e: KeyboardEvent) => {
// // //       if (e.key !== "Escape") return;
// // //       if (activeSubmenu) setActiveSubmenu(null);
// // //       else setMenuOpen(false);
// // //     };
// // //     document.addEventListener("keydown", onKey);
// // //     return () => document.removeEventListener("keydown", onKey);
// // //   }, [activeSubmenu]);

// // //   const handleNavClick = (link: (typeof NAV_LINKS)[0]) => {
// // //     if (link.hasSubmenu) setActiveSubmenu(link.label);
// // //     else { setMenuOpen(false); setActiveSubmenu(null); }
// // //   };

// // //   const closeAll = () => { setMenuOpen(false); setActiveSubmenu(null); };

// // //   /* ─── shared button style so hamburger is always visible ─── */
// // //   const hamburgerStyle: React.CSSProperties = {
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     gap: "5px",
// // //     padding: "0.5rem",
// // //     background: "none",
// // //     border: "none",
// // //     cursor: "pointer",
// // //     zIndex: 210,
// // //     // always visible — hide on desktop via inline media via CSS class below
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @media (min-width: 768px) {
// // //           .nav-desktop { display: flex !important; }
// // //           .nav-hamburger { display: none !important; }
// // //         }
// // //         @media (max-width: 767px) {
// // //           .nav-desktop { display: none !important; }
// // //           .nav-hamburger { display: flex !important; }
// // //         }
// // //       `}</style>

// // //       {/* ── Top bar ── */}
// // //       <nav style={{
// // //         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
// // //         display: "flex", alignItems: "center", justifyContent: "space-between",
// // //         padding: scrolled ? "1rem 5vw" : "1.75rem 5vw",
// // //         background: scrolled ? "rgba(10,9,8,0.92)" : "transparent",
// // //         backdropFilter: scrolled ? "blur(20px)" : "none",
// // //         borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
// // //         transition: "padding 0.4s ease, background 0.4s ease",
// // //       }}>
// // //         {/* Logo */}
// // //         <Link href="/" style={{
// // //           fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
// // //           fontSize: "1.5rem", fontWeight: 300,
// // //           color: "var(--color-ivory, #e8dcc8)",
// // //           letterSpacing: "0.02em", textDecoration: "none",
// // //         }}>
// // //           R&M Company<span style={{ color: "#c9a96e" }}>.</span>
// // //         </Link>

// // //         {/* Desktop links */}
// // //         <div className="nav-desktop" style={{ gap: "2.5rem", alignItems: "center" }}>
// // //           {NAV_LINKS.map((link) => (
// // //             <a key={link.label}
// // //               href={link.hasSubmenu ? undefined : link.href}
// // //               style={{
// // //                 fontFamily: "var(--font-sans, Inter, sans-serif)",
// // //                 fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase",
// // //                 color: "var(--color-mist, rgba(255,255,255,0.55))",
// // //                 transition: "color 0.25s ease", cursor: "pointer", textDecoration: "none",
// // //               }}
// // //               onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
// // //               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-mist, rgba(255,255,255,0.55))")}
// // //             >
// // //               {link.label}
// // //             </a>
// // //           ))}
// // //           <a href="/consultation" style={{
// // //             padding: "0.75rem 1.75rem",
// // //             border: "1px solid rgba(201,169,110,0.45)",
// // //             fontFamily: "var(--font-sans, Inter, sans-serif)",
// // //             fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase",
// // //             color: "#c9a96e", textDecoration: "none",
// // //             transition: "background 0.25s ease",
// // //           }}
// // //             onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,169,110,0.08)")}
// // //             onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
// // //           >
// // //             Book Consultation
// // //           </Link>
// // //         </div>

// // //         {/* Hamburger — always rendered, hidden by CSS on desktop */}
// // //         <button
// // //           className="nav-hamburger"
// // //           onClick={() => { setMenuOpen((v) => !v); setActiveSubmenu(null); }}
// // //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// // //           style={hamburgerStyle}
// // //         >
// // //           {[0, 1, 2].map((i) => (
// // //             <span key={i} style={{
// // //               display: "block", width: "22px", height: "1px",
// // //               background: "var(--color-ivory, #e8dcc8)",
// // //               transition: "transform 0.35s ease, opacity 0.35s ease",
// // //               transform: menuOpen
// // //                 ? i === 0 ? "rotate(45deg) translateY(6px)"
// // //                 : i === 2 ? "rotate(-45deg) translateY(-6px)"
// // //                 : "none"
// // //                 : "none",
// // //               opacity: menuOpen && i === 1 ? 0 : 1,
// // //             }} />
// // //           ))}
// // //         </button>
// // //       </nav>

// // //       {/* ── Fullscreen overlay ── */}
// // //       {menuOpen && (
// // //         <div style={{
// // //           position: "fixed", inset: 0, zIndex: 190,
// // //           background: "rgba(10,9,8,0.97)", overflow: "hidden",
// // //         }}>

// // //           {/* LAYER 1 — main links */}
// // //           <div style={{
// // //             position: "absolute", inset: 0,
// // //             display: "flex", flexDirection: "column",
// // //             alignItems: "center", justifyContent: "center", gap: "2rem",
// // //             transition: "opacity 0.35s ease, transform 0.35s ease",
// // //             opacity: activeSubmenu ? 0 : 1,
// // //             transform: activeSubmenu ? "translateX(-40px)" : "translateX(0)",
// // //             pointerEvents: activeSubmenu ? "none" : "auto",
// // //           }}>
// // //             {NAV_LINKS.map((link) => (
// // //               <button key={link.label} onClick={() => handleNavClick(link)} style={{
// // //                 fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
// // //                 fontSize: "clamp(2rem, 8vw, 3.5rem)", fontWeight: 300,
// // //                 color: "var(--color-ivory, #e8dcc8)",
// // //                 background: "none", border: "none", cursor: "pointer",
// // //                 transition: "color 0.25s ease",
// // //                 display: "flex", alignItems: "center", gap: "0.75rem", padding: 0,
// // //               }}
// // //                 onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d5b0")}
// // //                 onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ivory, #e8dcc8)")}
// // //               >
// // //                 {link.label}
// // //                 {link.hasSubmenu && (
// // //                   <span style={{ fontSize: "clamp(1rem,3vw,1.5rem)", color: "rgba(201,169,110,0.5)" }}>›</span>
// // //                 )}
// // //               </button>
// // //             ))}
// // //             <Link href="/consultation" onClick={closeAll} style={{
// // //               marginTop: "1rem", padding: "0.9rem 2.5rem",
// // //               background: "#c9a96e", color: "#0a0908",
// // //               fontFamily: "var(--font-sans, Inter, sans-serif)",
// // //               fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
// // //               textDecoration: "none",
// // //             }}>
// // //               Book Consultation
// // //             </Link>
// // //           </div>

// // //           {/* LAYER 2 — services submenu */}
// // //           <div style={{
// // //             position: "absolute", inset: 0,
// // //             display: "flex", flexDirection: "column", justifyContent: "center",
// // //             padding: "5vh 8vw", overflowY: "auto",
// // //             transition: "opacity 0.4s ease, transform 0.4s ease",
// // //             opacity: activeSubmenu === "Services" ? 1 : 0,
// // //             transform: activeSubmenu === "Services" ? "translateX(0)" : "translateX(60px)",
// // //             pointerEvents: activeSubmenu === "Services" ? "auto" : "none",
// // //           }}>
// // //             {/* Back */}
// // //             <button onClick={() => setActiveSubmenu(null)} style={{
// // //               display: "flex", alignItems: "center", gap: "0.6rem",
// // //               background: "none", border: "none", cursor: "pointer",
// // //               color: "rgba(201,169,110,0.5)",
// // //               fontFamily: "var(--font-display, Georgia, serif)",
// // //               fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase",
// // //               marginBottom: "3.5rem", padding: 0, transition: "color 0.25s ease",
// // //             }}
// // //               onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
// // //               onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.5)")}
// // //             >
// // //               <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
// // //                 <line x1="16" y1="4" x2="1" y2="4" stroke="#c9a96e" strokeWidth="0.8"/>
// // //                 <path d="M5 1L1 4L5 7" stroke="#c9a96e" strokeWidth="0.8" fill="none"/>
// // //               </svg>
// // //               Back
// // //             </button>

// // //             {/* Header */}
// // //             <div style={{ marginBottom: "3rem" }}>
// // //               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
// // //                 <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c9a96e", boxShadow: "0 0 8px rgba(201,169,110,0.6)" }} />
// // //                 <p style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)" }}>
// // //                   Our Services
// // //                 </p>
// // //               </div>
// // //               <h2 style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, color: "var(--color-ivory, #e8dcc8)", lineHeight: 1.15 }}>
// // //                 Luxury Renovation<br /><em style={{ color: "rgba(232,213,176,0.8)" }}>& Craftsmanship</em>
// // //               </h2>
// // //               <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right,rgba(201,169,110,0.6),transparent)", marginTop: "1.5rem" }} />
// // //             </div>

// // //             {/* Service items */}
// // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))" }}>
// // //               {SERVICES_SUBMENU.map((item, i) => (
// // //                 <a key={item.label}
// // //                   href={item.href}
// // //                   onClick={closeAll}
// // //                   onMouseEnter={() => setHoveredItem(item.label)}
// // //                   onMouseLeave={() => setHoveredItem(null)}
// // //                   style={{
// // //                     display: "flex", alignItems: "flex-start", gap: "1.5rem",
// // //                     padding: "1.75rem 0",
// // //                     paddingRight: i % 2 === 0 ? "2.5rem" : "0",
// // //                     paddingLeft: i % 2 !== 0 ? "2.5rem" : "0",
// // //                     borderBottom: "1px solid rgba(201,169,110,0.07)",
// // //                     borderRight: i % 2 === 0 ? "1px solid rgba(201,169,110,0.07)" : "none",
// // //                     textDecoration: "none", transition: "padding 0.3s ease",
// // //                   }}
// // //                 >
// // //                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0, paddingTop: "3px" }}>
// // //                     <div style={{ width: "1px", height: hoveredItem === item.label ? "20px" : "12px", background: "linear-gradient(to bottom,rgba(201,169,110,0.8),rgba(201,169,110,0.2))", transition: "height 0.3s ease" }} />
// // //                     <span style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.75rem", letterSpacing: "0.1em", color: hoveredItem === item.label ? "rgba(201,169,110,0.9)" : "rgba(201,169,110,0.35)", transition: "color 0.3s ease", fontStyle: "italic" }}>
// // //                       {item.index}
// // //                     </span>
// // //                   </div>
// // //                   <div>
// // //                     <p style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "1.3rem", fontWeight: 300, color: hoveredItem === item.label ? "#e8d5b0" : "rgba(232,220,200,0.85)", marginBottom: "0.5rem", transition: "color 0.3s ease" }}>
// // //                       {item.label}
// // //                     </p>
// // //                     <p style={{ fontSize: "0.88rem", color: hoveredItem === item.label ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.28)", lineHeight: 1.7, letterSpacing: "0.025em", transition: "color 0.3s ease" }}>
// // //                       {item.desc}
// // //                     </p>
// // //                   </div>
// // //                 </a>
// // //               ))}
// // //             </div>

// // //             {/* Footer CTA */}
// // //             <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
// // //               <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(201,169,110,0.5)" }} />
// // //               <Link href="/consultation" onClick={closeAll} style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.85rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)", textDecoration: "none", transition: "color 0.25s ease" }}
// // //                 onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
// // //                 onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.7)")}
// // //               >
// // //                 Request a Free Estimate
// // //               </a>
// // //               <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to right,rgba(201,169,110,0.3),transparent)" }} />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Link from "next/link";

// // // Static data — defined outside component so it's never recreated on render
// // const SERVICES_SUBMENU = [
// //   { index: "I",   label: "Kitchen Renovation",    desc: "Luxury custom kitchens with premium finishes.",               href: "#services" },
// //   { index: "II",  label: "Bathroom Remodeling",   desc: "Spa-inspired bathrooms with modern detailing.",              href: "#services" },
// //   { index: "III", label: "Flooring",              desc: "Hardwood, tile, vinyl, and luxury flooring solutions.",       href: "#services" },
// //   { index: "IV",  label: "Painting",              desc: "Interior and exterior painting with designer palettes.",      href: "/colour-studio" },
// //   { index: "V",   label: "Basement Finishing",    desc: "Transform unfinished basements into elegant living spaces.", href: "#services" },
// //   { index: "VI",  label: "Commercial Renovation", desc: "Modern commercial and office renovation services.",          href: "#services" },
// // ] as const;

// // const NAV_LINKS = [
// //   { label: "Services", href: "#services",     hasSubmenu: true  },
// //   { label: "Projects", href: "/projects",     hasSubmenu: false },
// //   { label: "Contact",  href: "/contact",      hasSubmenu: false },
// //   { label: "Stories",  href: "/stories",      hasSubmenu: false },
// // ] as const;

// // export default function Navbar() {
// //   const [scrolled,      setScrolled]      = useState(false);
// //   const [menuOpen,      setMenuOpen]      = useState(false);
// //   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
// //   // useRef for hovered item avoids triggering full re-render on hover
// //   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

// //   // Scroll listener — passive for no jank
// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 80);
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   // Lock body scroll when menu open
// //   useEffect(() => {
// //     document.body.style.overflow = menuOpen ? "hidden" : "";
// //     return () => { document.body.style.overflow = ""; };
// //   }, [menuOpen]);

// //   // Escape key — scoped to activeSubmenu to avoid stale closure
// //   useEffect(() => {
// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key !== "Escape") return;
// //       if (activeSubmenu) setActiveSubmenu(null);
// //       else setMenuOpen(false);
// //     };
// //     document.addEventListener("keydown", onKey);
// //     return () => document.removeEventListener("keydown", onKey);
// //   }, [activeSubmenu]);

// //   const closeAll = () => { setMenuOpen(false); setActiveSubmenu(null); };

// //   const handleNavClick = (label: string, hasSubmenu: boolean, href: string) => {
// //     if (hasSubmenu) { setActiveSubmenu(label); return; }
// //     closeAll();
// //   };

// //   return (
// //     <>
// //       {/* Scoped CSS — no Tailwind dependency for critical nav behaviour */}
// //       <style>{`
// //         .nav-desktop  { display: none; }
// //         .nav-burger   { display: flex; }
// //         @media (min-width: 768px) {
// //           .nav-desktop { display: flex; }
// //           .nav-burger  { display: none; }
// //         }
// //         .svc-item:hover .svc-line  { height: 20px; }
// //         .svc-item:hover .svc-num   { color: rgba(201,169,110,0.9); }
// //         .svc-item:hover .svc-title { color: #e8d5b0; }
// //         .svc-item:hover .svc-desc  { color: rgba(255,255,255,0.45); }
// //         .nav-link:hover { color: #c9a96e !important; }
// //         .cta-link:hover { background: rgba(201,169,110,0.08) !important; }
// //       `}</style>

// //       {/* ── Fixed top bar ── */}
// //       <nav style={{
// //         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
// //         display: "flex", alignItems: "center", justifyContent: "space-between",
// //         padding: scrolled ? "1rem 5vw" : "1.75rem 5vw",
// //         background: scrolled ? "rgba(10,9,8,0.92)" : "transparent",
// //         backdropFilter: scrolled ? "blur(20px)" : "none",
// //         borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
// //         transition: "padding 0.4s ease, background 0.4s ease",
// //       }}>
// //         <Link href="/" style={{
// //           fontFamily: "var(--font-display, Georgia, serif)",
// //           fontSize: "1.5rem", fontWeight: 300,
// //           color: "var(--color-ivory, #e8dcc8)",
// //           letterSpacing: "0.02em", textDecoration: "none",
// //         }}>
// //           R&M Company<span style={{ color: "#c9a96e" }}>.</span>
// //         </Link>

// //         {/* Desktop nav */}
// //         <div className="nav-desktop" style={{ gap: "2.5rem", alignItems: "center" }}>
// //           {NAV_LINKS.map((link) => (
// //             <a key={link.label}
// //               href={link.hasSubmenu ? undefined : link.href}
// //               className="nav-link"
// //               style={{
// //                 fontFamily: "var(--font-sans, Inter, sans-serif)",
// //                 fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase",
// //                 color: "var(--color-mist, rgba(255,255,255,0.55))",
// //                 transition: "color 0.25s ease", cursor: "pointer", textDecoration: "none",
// //               }}
// //             >
// //               {link.label}
// //             </a>
// //           ))}
// //           <Link href="/consultation" className="cta-link" style={{
// //             padding: "0.75rem 1.75rem",
// //             border: "1px solid rgba(201,169,110,0.45)",
// //             fontFamily: "var(--font-sans, Inter, sans-serif)",
// //             fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase",
// //             color: "#c9a96e", textDecoration: "none", transition: "background 0.25s ease",
// //           }}>
// //             Book Consultation
// //           </Link>
// //         </div>

// //         {/* Hamburger */}
// //         <button
// //           className="nav-burger"
// //           onClick={() => { setMenuOpen((v) => !v); setActiveSubmenu(null); }}
// //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// //           style={{
// //             flexDirection: "column", gap: "5px",
// //             padding: "0.5rem", background: "none", border: "none",
// //             cursor: "pointer", zIndex: 210,
// //           }}
// //         >
// //           {[0, 1, 2].map((i) => (
// //             <span key={i} style={{
// //               display: "block", width: "22px", height: "1px",
// //               background: "var(--color-ivory, #e8dcc8)",
// //               transition: "transform 0.3s ease, opacity 0.3s ease",
// //               transform: menuOpen
// //                 ? i === 0 ? "rotate(45deg) translateY(6px)"
// //                 : i === 2 ? "rotate(-45deg) translateY(-6px)" : "none"
// //                 : "none",
// //               opacity: menuOpen && i === 1 ? 0 : 1,
// //             }} />
// //           ))}
// //         </button>
// //       </nav>

// //       {/* ── Fullscreen overlay — only mounted when open ── */}
// //       {menuOpen && (
// //         <div style={{
// //           position: "fixed", inset: 0, zIndex: 190,
// //           background: "rgba(10,9,8,0.97)", overflow: "hidden",
// //         }}>
// //           {/* LAYER 1 — main links */}
// //           <div style={{
// //             position: "absolute", inset: 0,
// //             display: "flex", flexDirection: "column",
// //             alignItems: "center", justifyContent: "center", gap: "2rem",
// //             transition: "opacity 0.3s ease, transform 0.3s ease",
// //             opacity: activeSubmenu ? 0 : 1,
// //             transform: activeSubmenu ? "translateX(-30px)" : "translateX(0)",
// //             pointerEvents: activeSubmenu ? "none" : "auto",
// //           }}>
// //             {NAV_LINKS.map((link) => (
// //               <button key={link.label}
// //                 onClick={() => handleNavClick(link.label, link.hasSubmenu, link.href)}
// //                 style={{
// //                   fontFamily: "var(--font-display, Georgia, serif)",
// //                   fontSize: "clamp(2rem, 8vw, 3.5rem)", fontWeight: 300,
// //                   color: "var(--color-ivory, #e8dcc8)",
// //                   background: "none", border: "none", cursor: "pointer",
// //                   display: "flex", alignItems: "center", gap: "0.75rem", padding: 0,
// //                   transition: "color 0.2s ease",
// //                 }}
// //                 onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d5b0")}
// //                 onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ivory, #e8dcc8)")}
// //               >
// //                 {link.label}
// //                 {link.hasSubmenu && (
// //                   <span style={{ fontSize: "clamp(1rem,3vw,1.5rem)", color: "rgba(201,169,110,0.5)" }}>›</span>
// //                 )}
// //               </button>
// //             ))}
// //             <Link href="/consultation" onClick={closeAll} style={{
// //               marginTop: "1rem", padding: "0.9rem 2.5rem",
// //               background: "#c9a96e", color: "#0a0908",
// //               fontFamily: "var(--font-sans, Inter, sans-serif)",
// //               fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
// //               textDecoration: "none",
// //             }}>
// //               Book Consultation
// //             </Link>
// //           </div>

// //           {/* LAYER 2 — services submenu */}
// //           <div style={{
// //             position: "absolute", inset: 0,
// //             display: "flex", flexDirection: "column", justifyContent: "center",
// //             padding: "5vh 8vw", overflowY: "auto",
// //             transition: "opacity 0.35s ease, transform 0.35s ease",
// //             opacity: activeSubmenu === "Services" ? 1 : 0,
// //             transform: activeSubmenu === "Services" ? "translateX(0)" : "translateX(50px)",
// //             pointerEvents: activeSubmenu === "Services" ? "auto" : "none",
// //           }}>
// //             {/* Back */}
// //             <button onClick={() => setActiveSubmenu(null)} style={{
// //               display: "flex", alignItems: "center", gap: "0.6rem",
// //               background: "none", border: "none", cursor: "pointer",
// //               color: "rgba(201,169,110,0.5)",
// //               fontFamily: "var(--font-display, Georgia, serif)",
// //               fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase",
// //               marginBottom: "3.5rem", padding: 0, transition: "color 0.25s ease",
// //             }}
// //               onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
// //               onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.5)")}
// //             >
// //               <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
// //                 <line x1="16" y1="4" x2="1" y2="4" stroke="#c9a96e" strokeWidth="0.8"/>
// //                 <path d="M5 1L1 4L5 7" stroke="#c9a96e" strokeWidth="0.8" fill="none"/>
// //               </svg>
// //               Back
// //             </button>

// //             {/* Header */}
// //             <div style={{ marginBottom: "3rem" }}>
// //               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
// //                 <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c9a96e", boxShadow: "0 0 8px rgba(201,169,110,0.6)", flexShrink: 0 }} />
// //                 <p style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)" }}>
// //                   Our Services
// //                 </p>
// //               </div>
// //               <h2 style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, color: "var(--color-ivory, #e8dcc8)", lineHeight: 1.15 }}>
// //                 Luxury Renovation<br /><em style={{ color: "rgba(232,213,176,0.8)" }}>& Craftsmanship</em>
// //               </h2>
// //               <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right,rgba(201,169,110,0.6),transparent)", marginTop: "1.5rem" }} />
// //             </div>

// //             {/* Service items — hover handled via CSS class, not state */}
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))" }}>
// //               {SERVICES_SUBMENU.map((item, i) => (
// //                 <a key={item.label}
// //                   href={item.href}
// //                   onClick={closeAll}
// //                   className="svc-item"
// //                   style={{
// //                     display: "flex", alignItems: "flex-start", gap: "1.5rem",
// //                     padding: "1.75rem 0",
// //                     paddingRight: i % 2 === 0 ? "2.5rem" : "0",
// //                     paddingLeft: i % 2 !== 0 ? "2.5rem" : "0",
// //                     borderBottom: "1px solid rgba(201,169,110,0.07)",
// //                     borderRight: i % 2 === 0 ? "1px solid rgba(201,169,110,0.07)" : "none",
// //                     textDecoration: "none",
// //                   }}
// //                 >
// //                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0, paddingTop: "3px" }}>
// //                     <div className="svc-line" style={{ width: "1px", height: "12px", background: "linear-gradient(to bottom,rgba(201,169,110,0.8),rgba(201,169,110,0.2))", transition: "height 0.3s ease" }} />
// //                     <span className="svc-num" style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(201,169,110,0.35)", transition: "color 0.3s ease", fontStyle: "italic" }}>
// //                       {item.index}
// //                     </span>
// //                   </div>
// //                   <div>
// //                     <p className="svc-title" style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "1.3rem", fontWeight: 300, color: "rgba(232,220,200,0.85)", marginBottom: "0.5rem", transition: "color 0.3s ease" }}>
// //                       {item.label}
// //                     </p>
// //                     <p className="svc-desc" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7, letterSpacing: "0.025em", transition: "color 0.3s ease" }}>
// //                       {item.desc}
// //                     </p>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>

// //             {/* Footer CTA */}
// //             <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
// //               <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(201,169,110,0.5)" }} />
// //               <Link href="/consultation" onClick={closeAll} style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.85rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)", textDecoration: "none", transition: "color 0.25s ease" }}
// //                 onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
// //                 onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.7)")}
// //               >
// //                 Request a Free Estimate
// //               </a>
// //               <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to right,rgba(201,169,110,0.3),transparent)" }} />
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// // Static data — defined outside component so it's never recreated on render
// const SERVICES_SUBMENU = [
//   { index: "I",   label: "Kitchen Renovation",    desc: "Luxury custom kitchens with premium finishes.",               href: "#services" },
//   { index: "II",  label: "Bathroom Remodeling",   desc: "Spa-inspired bathrooms with modern detailing.",              href: "#services" },
//   { index: "III", label: "Flooring",              desc: "Hardwood, tile, vinyl, and luxury flooring solutions.",       href: "#services" },
//   { index: "IV",  label: "Painting",              desc: "Interior and exterior painting with designer palettes.",      href: "/colour-studio" },
//   { index: "V",   label: "Basement Finishing",    desc: "Transform unfinished basements into elegant living spaces.", href: "#services" },
//   { index: "VI",  label: "Commercial Renovation", desc: "Modern commercial and office renovation services.",          href: "#services" },
// ] as const;

// const NAV_LINKS = [
//   { label: "Services", href: "/services",     hasSubmenu: false },
//   { label: "Projects", href: "/projects",     hasSubmenu: false },
//   { label: "Contact",  href: "/contact",      hasSubmenu: false },
//   { label: "Stories",  href: "/stories",      hasSubmenu: false },
// ] as const;

// export default function Navbar() {
//   const [scrolled,      setScrolled]      = useState(false);
//   const [menuOpen,      setMenuOpen]      = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
//   // useRef for hovered item avoids triggering full re-render on hover
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   // Scroll listener — passive for no jank
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Lock body scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [menuOpen]);

//   // Escape key — scoped to activeSubmenu to avoid stale closure
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key !== "Escape") return;
//       if (activeSubmenu) setActiveSubmenu(null);
//       else setMenuOpen(false);
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [activeSubmenu]);

//   const closeAll = () => { setMenuOpen(false); setActiveSubmenu(null); };

//   const handleNavClick = (label: string, hasSubmenu: boolean, href: string) => {
//     if (hasSubmenu) { setActiveSubmenu(label); return; }
//     closeAll();
//   };

//   return (
//     <>
//       {/* Scoped CSS — no Tailwind dependency for critical nav behaviour */}
//       <style>{`
//         .nav-desktop  { display: none; }
//         .nav-burger   { display: flex; }
//         @media (min-width: 768px) {
//           .nav-desktop { display: flex; }
//           .nav-burger  { display: none; }
//         }
//         .svc-item:hover .svc-line  { height: 20px; }
//         .svc-item:hover .svc-num   { color: rgba(201,169,110,0.9); }
//         .svc-item:hover .svc-title { color: #e8d5b0; }
//         .svc-item:hover .svc-desc  { color: rgba(255,255,255,0.45); }
//         .nav-link:hover { color: #c9a96e !important; }
//         .cta-link:hover { background: rgba(201,169,110,0.08) !important; }
//       `}</style>

//       {/* ── Fixed top bar ── */}
//       <nav style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//         padding: scrolled ? "1rem 5vw" : "1.75rem 5vw",
//         background: scrolled ? "rgba(10,9,8,0.92)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
//         transition: "padding 0.4s ease, background 0.4s ease",
//       }}>
//         <Link href="/" style={{
//           fontFamily: "var(--font-display, Georgia, serif)",
//           fontSize: "1.5rem", fontWeight: 300,
//           color: "var(--color-ivory, #e8dcc8)",
//           letterSpacing: "0.02em", textDecoration: "none",
//         }}>
//           R&M Company<span style={{ color: "#c9a96e" }}>.</span>
//         </Link>

//         {/* Desktop nav */}
//         <div className="nav-desktop" style={{ gap: "2.5rem", alignItems: "center" }}>
//           {NAV_LINKS.map((link) => (
//             <a key={link.label}
//               href={link.hasSubmenu ? undefined : link.href}
//               className="nav-link"
//               style={{
//                 fontFamily: "var(--font-sans, Inter, sans-serif)",
//                 fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase",
//                 color: "var(--color-mist, rgba(255,255,255,0.55))",
//                 transition: "color 0.25s ease", cursor: "pointer", textDecoration: "none",
//               }}
//             >
//               {link.label}
//             </a>
//           ))}
//           <Link href="/consultation" className="cta-link" style={{
//             padding: "0.75rem 1.75rem",
//             border: "1px solid rgba(201,169,110,0.45)",
//             fontFamily: "var(--font-sans, Inter, sans-serif)",
//             fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase",
//             color: "#c9a96e", textDecoration: "none", transition: "background 0.25s ease",
//           }}>
//             Book Consultation
//           </Link>
//         </div>

//         {/* Hamburger */}
//         <button
//           className="nav-burger"
//           onClick={() => { setMenuOpen((v) => !v); setActiveSubmenu(null); }}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           style={{
//             flexDirection: "column", gap: "5px",
//             padding: "0.5rem", background: "none", border: "none",
//             cursor: "pointer", zIndex: 210,
//           }}
//         >
//           {[0, 1, 2].map((i) => (
//             <span key={i} style={{
//               display: "block", width: "22px", height: "1px",
//               background: "var(--color-ivory, #e8dcc8)",
//               transition: "transform 0.3s ease, opacity 0.3s ease",
//               transform: menuOpen
//                 ? i === 0 ? "rotate(45deg) translateY(6px)"
//                 : i === 2 ? "rotate(-45deg) translateY(-6px)" : "none"
//                 : "none",
//               opacity: menuOpen && i === 1 ? 0 : 1,
//             }} />
//           ))}
//         </button>
//       </nav>

//       {/* ── Fullscreen overlay — only mounted when open ── */}
//       {menuOpen && (
//         <div style={{
//           position: "fixed", inset: 0, zIndex: 190,
//           background: "rgba(10,9,8,0.97)", overflow: "hidden",
//         }}>
//           {/* LAYER 1 — main links */}
//           <div style={{
//             position: "absolute", inset: 0,
//             display: "flex", flexDirection: "column",
//             alignItems: "center", justifyContent: "center", gap: "2rem",
//             transition: "opacity 0.3s ease, transform 0.3s ease",
//             opacity: activeSubmenu ? 0 : 1,
//             transform: activeSubmenu ? "translateX(-30px)" : "translateX(0)",
//             pointerEvents: activeSubmenu ? "none" : "auto",
//           }}>
//             {NAV_LINKS.map((link) => (
//               <button key={link.label}
//                 onClick={() => handleNavClick(link.label, link.hasSubmenu, link.href)}
//                 style={{
//                   fontFamily: "var(--font-display, Georgia, serif)",
//                   fontSize: "clamp(2rem, 8vw, 3.5rem)", fontWeight: 300,
//                   color: "var(--color-ivory, #e8dcc8)",
//                   background: "none", border: "none", cursor: "pointer",
//                   display: "flex", alignItems: "center", gap: "0.75rem", padding: 0,
//                   transition: "color 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d5b0")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ivory, #e8dcc8)")}
//               >
//                 {link.label}
//                 {link.hasSubmenu && (
//                   <span style={{ fontSize: "clamp(1rem,3vw,1.5rem)", color: "rgba(201,169,110,0.5)" }}>›</span>
//                 )}
//               </button>
//             ))}
//             <Link href="/consultation" onClick={closeAll} style={{
//               marginTop: "1rem", padding: "0.9rem 2.5rem",
//               background: "#c9a96e", color: "#0a0908",
//               fontFamily: "var(--font-sans, Inter, sans-serif)",
//               fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
//               textDecoration: "none",
//             }}>
//               Book Consultation
//             </Link>
//           </div>

//           {/* LAYER 2 — services submenu */}
//           <div style={{
//             position: "absolute", inset: 0,
//             display: "flex", flexDirection: "column", justifyContent: "center",
//             padding: "5vh 8vw", overflowY: "auto",
//             transition: "opacity 0.35s ease, transform 0.35s ease",
//             opacity: activeSubmenu === "Services" ? 1 : 0,
//             transform: activeSubmenu === "Services" ? "translateX(0)" : "translateX(50px)",
//             pointerEvents: activeSubmenu === "Services" ? "auto" : "none",
//           }}>
//             {/* Back */}
//             <button onClick={() => setActiveSubmenu(null)} style={{
//               display: "flex", alignItems: "center", gap: "0.6rem",
//               background: "none", border: "none", cursor: "pointer",
//               color: "rgba(201,169,110,0.5)",
//               fontFamily: "var(--font-display, Georgia, serif)",
//               fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase",
//               marginBottom: "3.5rem", padding: 0, transition: "color 0.25s ease",
//             }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
//               onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.5)")}
//             >
//               <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
//                 <line x1="16" y1="4" x2="1" y2="4" stroke="#c9a96e" strokeWidth="0.8"/>
//                 <path d="M5 1L1 4L5 7" stroke="#c9a96e" strokeWidth="0.8" fill="none"/>
//               </svg>
//               Back
//             </button>

//             {/* Header */}
//             <div style={{ marginBottom: "3rem" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
//                 <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c9a96e", boxShadow: "0 0 8px rgba(201,169,110,0.6)", flexShrink: 0 }} />
//                 <p style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)" }}>
//                   Our Services
//                 </p>
//               </div>
//               <h2 style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, color: "var(--color-ivory, #e8dcc8)", lineHeight: 1.15 }}>
//                 Luxury Renovation<br /><em style={{ color: "rgba(232,213,176,0.8)" }}>& Craftsmanship</em>
//               </h2>
//               <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right,rgba(201,169,110,0.6),transparent)", marginTop: "1.5rem" }} />
//             </div>

//             {/* Service items — hover handled via CSS class, not state */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))" }}>
//               {SERVICES_SUBMENU.map((item, i) => (
//                 <a key={item.label}
//                   href={item.href}
//                   onClick={closeAll}
//                   className="svc-item"
//                   style={{
//                     display: "flex", alignItems: "flex-start", gap: "1.5rem",
//                     padding: "1.75rem 0",
//                     paddingRight: i % 2 === 0 ? "2.5rem" : "0",
//                     paddingLeft: i % 2 !== 0 ? "2.5rem" : "0",
//                     borderBottom: "1px solid rgba(201,169,110,0.07)",
//                     borderRight: i % 2 === 0 ? "1px solid rgba(201,169,110,0.07)" : "none",
//                     textDecoration: "none",
//                   }}
//                 >
//                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0, paddingTop: "3px" }}>
//                     <div className="svc-line" style={{ width: "1px", height: "12px", background: "linear-gradient(to bottom,rgba(201,169,110,0.8),rgba(201,169,110,0.2))", transition: "height 0.3s ease" }} />
//                     <span className="svc-num" style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(201,169,110,0.35)", transition: "color 0.3s ease", fontStyle: "italic" }}>
//                       {item.index}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="svc-title" style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "1.3rem", fontWeight: 300, color: "rgba(232,220,200,0.85)", marginBottom: "0.5rem", transition: "color 0.3s ease" }}>
//                       {item.label}
//                     </p>
//                     <p className="svc-desc" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7, letterSpacing: "0.025em", transition: "color 0.3s ease" }}>
//                       {item.desc}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Footer CTA */}
//             <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
//               <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(201,169,110,0.5)" }} />
//               <Link href="/consultation" onClick={closeAll} style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: "0.85rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,169,110,0.7)", textDecoration: "none", transition: "color 0.25s ease" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.7)")}
//               >
//                 Request a Free Estimate
//               </Link>
//               <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to right,rgba(201,169,110,0.3),transparent)" }} />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'Stories', href: '/stories' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-burger  { display: flex;  }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-burger  { display: none; }
        }
        .nav-link:hover { color: #c9a96e !important; }
      `}</style>

      {/* ── Fixed top bar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '1rem 3rem' : '1.5rem 3rem',
        background: scrolled ? 'rgba(10,9,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        transition: 'background 0.5s cubic-bezier(0.25,0.46,0.45,0.94), padding 0.4s',
      }}>

        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
          fontSize: '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          color: 'var(--color-ivory, #f5f0e8)',
          textDecoration: 'none',
        }}>
          R&amp;M Company<span style={{ color: '#c9a96e' }}>.</span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ gap: '2.5rem', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontFamily: "var(--font-sans, 'DM Sans', system-ui, sans-serif)",
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-mist, #8a8278)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="/consultation"
            style={{
              background: 'transparent',
              border: '1px solid #c9a96e',
              color: '#c9a96e',
              padding: '0.6rem 1.5rem',
              fontFamily: "var(--font-sans, 'DM Sans', system-ui, sans-serif)",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c9a96e'
              e.currentTarget.style.color = '#0a0908'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#c9a96e'
            }}
          >
            Book Consultation
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            flexDirection: 'column', gap: '5px',
            padding: '0.5rem', background: 'none', border: 'none',
            cursor: 'pointer', zIndex: 1010,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--color-ivory, #f5f0e8)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translateY(6px)'
                : i === 2 ? 'rotate(-45deg) translateY(-6px)'
                : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* ── Mobile fullscreen overlay ── */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 990,
          background: 'rgba(10,9,8,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2rem',
        }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                fontWeight: 300,
                color: 'var(--color-ivory, #f5f0e8)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5b0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ivory, #f5f0e8)')}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/consultation"
            onClick={closeMenu}
            style={{
              marginTop: '1rem',
              padding: '0.9rem 2.5rem',
              background: '#c9a96e',
              color: '#0a0908',
              fontFamily: "var(--font-sans, 'DM Sans', system-ui, sans-serif)",
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Book Consultation
          </a>
        </div>
      )}
    </>
  )
}
