import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef } from "react";
const DRIVE = "https://lh3.googleusercontent.com/d/";
const galleryImages = [{
  id: "1Dt9jENYvpyxl5Rtq0cpJIIA4fLgm-0Up",
  label: "DSC0370"
}, {
  id: "1dBprACxHNzxmAfmXYMEbgjG0uEBMU3hM",
  label: "DSC1093"
}, {
  id: "1FKbXBT9cwFQ1MY62Ov_5pl25ZJciyGkO",
  label: "DSC1142"
}, {
  id: "1LpJb7mHFE6WPYmWB78IrvvarhOUy78o9",
  label: "DSC1466"
}, {
  id: "1BrcCE97Wy6yDsN7JYHCrnBUdNIBczS36",
  label: "DSC1551"
}, {
  id: "1JXbD3KDcaELPShnb29zKftMdiGyWLHw5",
  label: "DSC1552"
}, {
  id: "1FPkIiCHC5p0jkQXIC19t6Rei-9PZN_AO",
  label: "DSC1558"
}, {
  id: "1F0OwJgqPydJT4gvWzQyHTWU5BuMDxGha",
  label: "DSC1579"
}, {
  id: "1gdqaNLScnTI2Bs064mOsV5-sMLJjLsXb",
  label: "DSC2385"
}, {
  id: "1_l72UuDKfZ-Klyudsusm3AV81Otb7gA_",
  label: "DSC2391"
}, {
  id: "1N6MVcImx5VSX3HdGsGvIP-AZG__mzKss",
  label: "DSC2422"
}, {
  id: "1SQWVOkTbBEl3YAHuVu1YAt3wXqyMES-i",
  label: "DSC2452"
}, {
  id: "1u6KcAuc0f2fJpxNhP-ogM-sLWdK57VRq",
  label: "DSC2453"
}, {
  id: "1NHxq2g4L8R87vZHyi0IAeah4c91sGMW7",
  label: "DSC2629"
}, {
  id: "1rKOD6Cwx9wqruMWGh0tmNNgVf21KY0wb",
  label: "DSC2664"
}, {
  id: "1oSJZpwL5zjM61eIx4CbZ8Vb-pCKbehMD",
  label: "DSC2666"
}, {
  id: "1gKh8jaELf3RNoO3XTUdK26KeCXAeXlnK",
  label: "DSC2801"
}, {
  id: "1lglz3DAew5ZDSybkkUahDb8r4KLj719W",
  label: "DSC2810"
}, {
  id: "1hPRrDXCwY9AoN9uC2DFD1VLGL4mNa1H3",
  label: "DSC2830"
}, {
  id: "1wjwHjZ5Jlki8Zmy0MLlLRFn34rQK1nge",
  label: "DSC2833"
}, {
  id: "1wa5KTrY377r9tH-n7OgnMeZFhOWxckat",
  label: "DSC2836"
}, {
  id: "13-zKdyeQJ9k12Y5NVvy3NNjqx7wyMC0v",
  label: "DSC2837"
}, {
  id: "1QmymHcVBLrQLNhUaUeWk6PiY1fY8f1F7",
  label: "DSC2860"
}, {
  id: "1OFx_q3W74-gK9AAYbrBKdQjAbB0rrDIQ",
  label: "DSC2873"
}, {
  id: "1Zp3Cn9L4afRi3uYJuIRnaizONA-iJ_zl",
  label: "DSC8430"
}, {
  id: "1PQ-bcFOiouLHP_qh8YNO9hmES1gNatcA",
  label: "DSC8497"
}];
const stripImages = [{
  id: "1Dt9jENYvpyxl5Rtq0cpJIIA4fLgm-0Up",
  label: "Study 01"
}, {
  id: "1LpJb7mHFE6WPYmWB78IrvvarhOUy78o9",
  label: "Study 02"
}, {
  id: "1N6MVcImx5VSX3HdGsGvIP-AZG__mzKss",
  label: "Study 03"
}, {
  id: "1rKOD6Cwx9wqruMWGh0tmNNgVf21KY0wb",
  label: "Study 04"
}, {
  id: "1gKh8jaELf3RNoO3XTUdK26KeCXAeXlnK",
  label: "Study 05"
}, {
  id: "1wa5KTrY377r9tH-n7OgnMeZFhOWxckat",
  label: "Study 06"
}, {
  id: "1QmymHcVBLrQLNhUaUeWk6PiY1fY8f1F7",
  label: "Study 07"
}, {
  id: "1OFx_q3W74-gK9AAYbrBKdQjAbB0rrDIQ",
  label: "Study 08"
}];
function driveUrl(id, width = 1200) {
  return `${DRIVE}${id}=w${width}`;
}
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          observer.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
function OnionskinHome() {
  useRevealOnScroll();
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const openLightbox = useCallback((i) => {
    setLbIndex(i);
    setLbOpen(true);
  }, []);
  const closeLightbox = useCallback(() => setLbOpen(false), []);
  const prevImage = useCallback(() => {
    setLbIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);
  const nextImage = useCallback(() => {
    setLbIndex((i) => (i + 1) % galleryImages.length);
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (!lbOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lbOpen, closeLightbox, prevImage, nextImage]);
  const stripRef = useRef(null);
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    const onDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onUp = () => {
      isDown = false;
    };
    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .hero-eyebrow { opacity: 0; animation: fadeUp 1s 0.3s ease forwards; }
        .hero-title { opacity: 0; animation: fadeUp 1s 0.5s ease forwards; }
        .hero-footer { opacity: 0; animation: fadeUp 1s 0.9s ease forwards; }
        .scroll-line { animation: scrollDrop 1.8s ease-in-out infinite; }
        .masonry-item:nth-child(3n+1) { margin-top: 40px; }
        .masonry-item:nth-child(5n+2) { margin-top: -20px; }
        .strip-scroll { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .strip-scroll::-webkit-scrollbar { display: none; }
        .lb-backdrop { animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      ` }),
    /* @__PURE__ */ jsxs("nav", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "28px 48px"
    }, children: [
      /* @__PURE__ */ jsx("a", { href: "#", style: {
        fontFamily: "'Syne Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--paper)",
        textDecoration: "none"
      }, children: "Onionskin Studios" }),
      /* @__PURE__ */ jsx("ul", { style: {
        display: "flex",
        gap: 36,
        listStyle: "none",
        margin: 0,
        padding: 0
      }, children: ["Work", "About", "Contact"].map((label) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${label.toLowerCase()}`, style: {
        fontFamily: "'Syne Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--paper)",
        textDecoration: "none",
        opacity: 0.5,
        transition: "opacity 0.3s"
      }, onMouseEnter: (e) => {
        e.target.style.opacity = "1";
      }, onMouseLeave: (e) => {
        e.target.style.opacity = "0.5";
      }, children: label }) }, label)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { style: {
      minHeight: "100svh",
      display: "grid",
      gridTemplateRows: "1fr auto",
      padding: "0 48px 56px",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        position: "absolute",
        inset: 0,
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ jsx("img", { src: driveUrl("1BrcCE97Wy6yDsN7JYHCrnBUdNIBczS36", 2e3), alt: "", style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.28,
          transform: "scale(1.04)",
          filter: "grayscale(0.3)"
        } }),
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(8,8,7,0.15) 0%, rgba(8,8,7,0.1) 40%, rgba(8,8,7,0.82) 100%)"
        } })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 24
      }, children: [
        /* @__PURE__ */ jsx("p", { className: "hero-eyebrow", style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--warm)",
          marginBottom: 20
        }, children: "Visual Practice — Yenagoa, Bayelsa State" }),
        /* @__PURE__ */ jsxs("h1", { className: "hero-title", style: {
          fontSize: "clamp(64px, 10vw, 130px)",
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: "-0.02em",
          color: "var(--paper)"
        }, children: [
          "Onion",
          /* @__PURE__ */ jsx("em", { style: {
            fontStyle: "italic",
            color: "var(--warm)"
          }, children: "skin" }),
          /* @__PURE__ */ jsx("br", {}),
          "Studios"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-footer", style: {
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontSize: 15,
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--paper)",
          opacity: 0.5,
          maxWidth: 320,
          lineHeight: 1.5
        }, children: "Stills and motion that live in the quiet moments between things." }),
        /* @__PURE__ */ jsxs("div", { style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--paper)",
          opacity: 0.35,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "scroll-line", style: {
            width: 1,
            height: 48,
            background: "var(--paper)",
            opacity: 0.3
          } }),
          /* @__PURE__ */ jsx("span", { children: "scroll" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "reveal", style: {
      padding: "120px 48px 100px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "end",
      borderTop: "1px solid rgba(237,233,225,0.08)"
    }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--warm)",
          opacity: 0.8,
          marginBottom: 10
        }, children: "001 — Practice" }),
        /* @__PURE__ */ jsxs("h2", { style: {
          fontSize: "clamp(36px, 4vw, 58px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "var(--paper)"
        }, children: [
          "Work that notices",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: {
            fontStyle: "italic",
            color: "var(--warm)"
          }, children: "what most people" }),
          /* @__PURE__ */ jsx("br", {}),
          "walk past"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { style: {
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 1.8,
        color: "var(--paper)",
        opacity: 0.55
      }, children: "Onionskinstudios is a one-person creative practice built around a simple premise: the most interesting things in any frame are always at the edges of attention. Cinematography, photography, direction, and post — handled with precision, delivered with feeling." }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { style: {
      padding: "0 48px 140px"
    }, id: "work", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal", style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 52,
        paddingBottom: 20,
        borderBottom: "1px solid rgba(237,233,225,0.08)"
      }, children: [
        /* @__PURE__ */ jsx("h2", { style: {
          fontSize: "clamp(28px, 3vw, 42px)",
          fontWeight: 300,
          color: "var(--paper)"
        }, children: "Selected Work" }),
        /* @__PURE__ */ jsxs("span", { style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "var(--paper)",
          opacity: 0.3
        }, children: [
          String(galleryImages.length).padStart(3, "0"),
          " images"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        columns: 3,
        columnGap: 16
      }, children: galleryImages.map((img, i) => /* @__PURE__ */ jsx(MasonryItem, { src: driveUrl(img.id, 800), label: img.label, onClick: () => openLightbox(i) }, img.id + i)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "reveal", style: {
      paddingBottom: 140
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      position: "relative",
      height: "80svh",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsx("img", { src: driveUrl("1RgESq-Plx1HcoK_pkw1q5P6Xu-4_N5I9", 2400), alt: "Featured", loading: "lazy", style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        filter: "grayscale(0.1)",
        transition: "transform 1.2s ease"
      }, onMouseEnter: (e) => {
        e.target.style.transform = "scale(1.03)";
      }, onMouseLeave: (e) => {
        e.target.style.transform = "scale(1)";
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(8,8,7,0.4) 0%, transparent 60%, rgba(8,8,7,0.3) 100%)"
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "absolute",
        bottom: 0,
        right: 0,
        padding: 48,
        zIndex: 2,
        textAlign: "right"
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--warm)",
          marginBottom: 10
        }, children: "Featured" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontSize: 22,
          fontStyle: "italic",
          fontWeight: 300,
          color: "var(--paper)",
          opacity: 0.85
        }, children: "Light as material." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "reveal", style: {
      padding: "0 48px 140px"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 32
      }, children: [
        /* @__PURE__ */ jsx("h3", { style: {
          fontSize: "clamp(24px, 2.5vw, 36px)",
          fontWeight: 300,
          color: "var(--paper)"
        }, children: "Quick Studies" }),
        /* @__PURE__ */ jsx("span", { style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "var(--paper)",
          opacity: 0.3
        }, children: "← drag →" })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: stripRef, className: "strip-scroll", style: {
        display: "flex",
        gap: 12,
        overflowX: "auto",
        paddingBottom: 4,
        cursor: "grab"
      }, children: stripImages.map((img, i) => /* @__PURE__ */ jsx(StripItem, { src: driveUrl(img.id, 600) }, img.id + i)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "reveal", id: "about", style: {
      padding: "120px 48px 140px",
      borderTop: "1px solid rgba(237,233,225,0.08)",
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 80,
      alignItems: "start"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        position: "sticky",
        top: 120
      }, children: [
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: "'Syne Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--warm)",
          opacity: 0.8,
          marginBottom: 10
        }, children: "002 — About" }),
        /* @__PURE__ */ jsxs("h2", { style: {
          fontSize: "clamp(36px, 4vw, 60px)",
          fontWeight: 300,
          lineHeight: 1.05,
          color: "var(--paper)"
        }, children: [
          "The",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: {
            fontStyle: "italic",
            color: "var(--warm)"
          }, children: "practice" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        [`Onionskinstudios began as a way to slow down and look more carefully. The name
            references the paper-thin membrane of an onion skin — translucent, layered, overlooked.
            That's the territory: what's barely visible, what's usually skipped.`, `The work spans portraiture, street, macro, and narrative short-form — all shot with
            a photographer's stillness and an editor's sense of time.`, `Based in Yenagoa, Bayelsa State. Available for commissions, collaborations, and conversations.`].map((text, i) => /* @__PURE__ */ jsx("p", { style: {
          fontSize: 18,
          fontWeight: 300,
          lineHeight: 1.85,
          color: "var(--paper)",
          opacity: 0.65,
          marginBottom: 28
        }, children: text }, i)),
        /* @__PURE__ */ jsx("div", { style: {
          marginTop: 60,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2
        }, children: [{
          name: "Cinematography",
          desc: "Narrative · Commercial"
        }, {
          name: "Photography",
          desc: "Editorial · Portrait"
        }, {
          name: "Direction",
          desc: "Short Film · Content"
        }, {
          name: "Post Production",
          desc: "Edit · Color · VFX"
        }].map((s) => /* @__PURE__ */ jsxs("div", { style: {
          padding: "24px 0",
          borderTop: "1px solid rgba(237,233,225,0.1)"
        }, children: [
          /* @__PURE__ */ jsx("p", { style: {
            fontSize: 13,
            fontWeight: 400,
            color: "var(--paper)",
            opacity: 0.85,
            marginBottom: 6
          }, children: s.name }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: "'Syne Mono', monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--warm)",
            opacity: 0.7
          }, children: s.desc })
        ] }, s.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "reveal", id: "contact", style: {
      padding: "100px 48px 60px",
      borderTop: "1px solid rgba(237,233,225,0.08)"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap"
    }, children: [
      /* @__PURE__ */ jsxs("h2", { style: {
        fontSize: "clamp(40px, 6vw, 90px)",
        fontWeight: 300,
        lineHeight: 1,
        color: "var(--paper)",
        maxWidth: 700
      }, children: [
        "Let's make",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: {
          fontStyle: "italic",
          color: "var(--warm)"
        }, children: "something" }),
        /* @__PURE__ */ jsx("br", {}),
        "worth keeping."
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "flex-end"
      }, children: [{
        label: "Email",
        href: "mailto:jacobyenesom01@gmail.com"
      }, {
        label: "TikTok",
        href: "https://www.tiktok.com/@madninja6"
      }, {
        label: "Instagram",
        href: "https://www.instagram.com/onionskinstudios01"
      }].map((link) => /* @__PURE__ */ jsx(ContactLink, { label: link.label, href: link.href }, link.label)) })
    ] }) }),
    /* @__PURE__ */ jsxs("footer", { style: {
      padding: "36px 48px",
      borderTop: "1px solid rgba(237,233,225,0.06)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }, children: [
      /* @__PURE__ */ jsx("span", { style: {
        fontFamily: "'Syne Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--paper)",
        opacity: 0.25
      }, children: "Onionskinstudios © 2026" }),
      /* @__PURE__ */ jsx("span", { style: {
        fontFamily: "'Syne Mono', monospace",
        fontSize: 9,
        letterSpacing: "0.15em",
        color: "var(--paper)",
        opacity: 0.18
      }, children: "Bayelsa, Nigeria — All rights reserved" })
    ] }),
    lbOpen && /* @__PURE__ */ jsxs("div", { className: "lb-backdrop", onClick: closeLightbox, style: {
      position: "fixed",
      inset: 0,
      zIndex: 1e3,
      background: "rgba(8,8,7,0.97)",
      cursor: "crosshair",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: [
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        closeLightbox();
      }, style: {
        position: "absolute",
        top: 28,
        right: 36,
        fontFamily: "'Syne Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--paper)",
        opacity: 0.45,
        cursor: "crosshair",
        background: "none",
        border: "none",
        transition: "opacity 0.3s"
      }, onMouseEnter: (e) => {
        e.target.style.opacity = "1";
      }, onMouseLeave: (e) => {
        e.target.style.opacity = "0.45";
      }, children: "Close ✕" }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        prevImage();
      }, style: {
        position: "absolute",
        left: 12,
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "'Syne Mono', monospace",
        fontSize: 22,
        color: "var(--paper)",
        opacity: 0.25,
        cursor: "crosshair",
        background: "none",
        border: "none",
        transition: "opacity 0.3s",
        padding: 20
      }, onMouseEnter: (e) => {
        e.target.style.opacity = "0.9";
      }, onMouseLeave: (e) => {
        e.target.style.opacity = "0.25";
      }, children: "‹" }),
      /* @__PURE__ */ jsx("img", { src: driveUrl(galleryImages[lbIndex].id, 1600), alt: galleryImages[lbIndex].label, onClick: (e) => e.stopPropagation(), style: {
        maxWidth: "92vw",
        maxHeight: "92svh",
        objectFit: "contain"
      } }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        nextImage();
      }, style: {
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "'Syne Mono', monospace",
        fontSize: 22,
        color: "var(--paper)",
        opacity: 0.25,
        cursor: "crosshair",
        background: "none",
        border: "none",
        transition: "opacity 0.3s",
        padding: 20
      }, onMouseEnter: (e) => {
        e.target.style.opacity = "0.9";
      }, onMouseLeave: (e) => {
        e.target.style.opacity = "0.25";
      }, children: "›" })
    ] })
  ] });
}
function MasonryItem({
  src,
  label,
  onClick
}) {
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "masonry-item", onClick, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: {
    breakInside: "avoid",
    marginBottom: 16,
    position: "relative",
    overflow: "hidden",
    cursor: "crosshair"
  }, children: [
    /* @__PURE__ */ jsx("img", { src, alt: label, loading: "lazy", style: {
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "cover",
      filter: hovered ? "grayscale(0) contrast(1.08)" : "grayscale(0.15) contrast(1.05)",
      transform: hovered ? "scale(1.04)" : "scale(1)",
      transition: "transform 0.9s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease"
    } }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "40px 16px 16px",
      background: "linear-gradient(transparent, rgba(8,8,7,0.72))",
      opacity: hovered ? 1 : 0,
      transition: "opacity 0.4s ease",
      fontFamily: "'Syne Mono', monospace",
      fontSize: 9,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--paper)"
    }, children: label })
  ] });
}
function StripItem({
  src
}) {
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ jsx("div", { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: {
    flex: "0 0 auto",
    width: "clamp(220px, 28vw, 380px)",
    height: 260,
    overflow: "hidden",
    position: "relative",
    cursor: "crosshair"
  }, children: /* @__PURE__ */ jsx("img", { src, alt: "", loading: "lazy", style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: hovered ? "grayscale(0) contrast(1.08)" : "grayscale(0.2) contrast(1.04)",
    transform: hovered ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.5s"
  } }) });
}
function ContactLink({
  label,
  href
}) {
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ jsxs("a", { href, target: href.startsWith("mailto") ? void 0 : "_blank", rel: "noopener noreferrer", onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: {
    fontFamily: "'Syne Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--paper)",
    textDecoration: "none",
    opacity: hovered ? 1 : 0.4,
    transition: "opacity 0.3s",
    display: "flex",
    alignItems: "center",
    gap: 12
  }, children: [
    label,
    /* @__PURE__ */ jsx("span", { style: {
      opacity: hovered ? 1 : 0,
      transform: hovered ? "translateX(0)" : "translateX(-6px)",
      transition: "opacity 0.3s, transform 0.3s"
    }, children: "↗" })
  ] });
}
export {
  OnionskinHome as component
};
