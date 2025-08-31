import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
export default function RCDLandingPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  //const [activeTab, setActiveTab] = useState("vector");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const compute = () => setIsMobile(window.innerWidth < 768);

    compute();

    window.addEventListener("resize", compute);

    return () => {
      window.removeEventListener("resize", compute);
    };
  }, []);
  const responsive = <T,>(desktop: T, mobile: T) =>
    isMobile ? mobile : desktop;
  const stack = (colsDesktop = "1fr 1fr", colsMobile = "1fr") =>
    ({
      display: "grid",
      gridTemplateColumns: responsive(colsDesktop, colsMobile),
      gap: responsive("4rem", "1.5rem"),
      alignItems: "center",
    } as React.CSSProperties);
   

  const padY = responsive("6rem", "4rem");
  const padX = responsive("2rem", "1rem");
  const styles: { [key: string]: React.CSSProperties } = {
    // Global Styles
    container: {
      minHeight: "100vh",
      //background: 'linear-gradient(180deg, #0a0514 0%, #1a0b2e 50%, #0a0514 100%)',
      //color: '#ffffff',
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden",
      background: "#fafbfc",
    },

    // Background Effects
    bgGlow: {
      // position: "fixed",
      // width: "100%",
      // height: "100%",
      // top: 0,
      // left: 0,
      // pointerEvents: "none",
      // zIndex: 0,
    },

    glowOrb: {
      // position: "absolute",
      // borderRadius: "50%",
      // filter: "blur(100px)",
      // opacity: 0.4,
    },

    // Navigation
    nav: {
      position: "fixed",
      top: 0,
      width: "100%",
      background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(139, 92, 246, 0.1)" : "none",
      transition: "all 0.3s ease",
      zIndex: 1000,
      padding: "1.25rem 0",
    },

    navContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: `0 ${padX}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logo: {
      fontSize: responsive("1.75rem", "1.5rem"),
      fontWeight: "800",
      background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    hamburger: {
      display: responsive("none", "flex"),
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 9999,
      border: "1px solid rgba(139,92,246,.3)",
      cursor: "pointer",
      background: "white",
    },
    mobileMenu: {
      position: "fixed",
      top: 64,
      right: 16,
      left: 16,
      background: "white",
      border: "1px solid rgba(139,92,246,.2)",
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      display: mobileMenuOpen ? "block" : "none",
      zIndex: 1001,
    },
    navLinks: {
      //display: isMobile ? "hidden" : "flex",
      gap: "2.5rem",
      alignItems: "center",
      display: responsive("flex", "none"),
    },

    navLink: {
      color: "#8b5cf6",
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: "500",
      transition: "color 0.3s",
      cursor: "pointer",
    },

    // Buttons
    btnPrimary: {
      background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
      color: "white",
      padding: "0.75rem 2rem",
      borderRadius: "9999px",
      border: "none",
      fontWeight: "600",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "inline-block",
      width: responsive("auto", "100%"),
      marginBottom: responsive("0", "1.5rem"),
    },

    btnSecondary: {
      background: "transparent",
      color: "#8b5cf6",
      padding: "0.75rem 2rem",
      borderRadius: "9999px",
      border: "2px solid rgba(139, 92, 246, 0.5)",
      fontWeight: "600",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "inline-block",
      width: responsive("auto", "100%"),
    },

    // Typography
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      fontWeight: "800",
      lineHeight: "1.1",
      marginBottom: "1.5rem",
      letterSpacing: "-0.02em",

      backgroundImage: "linear-gradient(to right, #6e3ef4, #409aff)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },

    gradientText: {
      background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    viralText: {
      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    // Sections
    section: {
      position: "relative",
      zIndex: 1,
      padding: `${padY} ${padX}`,
      maxWidth: "1280px",
      margin: "0 auto",
    },

    // Cards
    card: {
      background: "rgba(139, 92, 246, 0.05)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(139, 92, 246, 0.2)",
      borderRadius: "1.5rem",
      padding: "2rem",
      transition: "all 0.3s ease",
    },

    cardHover: {
      transform: "translateY(-4px)",
      borderColor: "rgba(139, 92, 246, 0.4)",
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
    },

    // Vector Map
    vectorMap: {
      height: "450px",
      background:
        "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
      border: "1px solid rgba(139, 92, 246, 0.2)",
      borderRadius: "1.5rem",
      position: "relative",
      overflow: "hidden",
    },

    vectorGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: "30px 30px",
    },

    dot: {
      position: "absolute",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.bgGlow}>
        {/* <div
          style={{
            ...styles.glowOrb,
            width: "600px",
            height: "600px",
            top: "-10%",
            left: "-10%",
            //background: "#8b5cf6",
          }}
        />
        <div
          style={{
            ...styles.glowOrb,
            width: "800px",
            height: "800px",
            bottom: "-20%",
            right: "-15%",
            background: "#06b6d4",
          }}
        />
        <div
          style={{
            ...styles.glowOrb,
            width: "500px",
            height: "500px",
            top: "40%",
            left: "50%",
            background: "#10b981",
          }}
        /> */}
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={{ fontSize: "1.5rem" }}>🔄</span>
            <span className="mr-4">RCD</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#problem" style={styles.navLink}>
              Problem
            </a>
            <a href="#solution" style={styles.navLink}>
              Solution
            </a>
            <a href="#how" style={styles.navLink}>
              How It Works
            </a>
            <a href="#features" style={styles.navLink}>
              Features
            </a>
            <a href="#pricing" style={styles.navLink}>
              Pricing
            </a>
            <button style={styles.btnPrimary}>Activate Viral Growth</button>
          </div>
          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            style={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} color="#8b5cf6" />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="2" rx="1" fill="#8b5cf6" />
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#8b5cf6"
                />
                <rect
                  x="3"
                  y="16"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#8b5cf6"
                />
              </svg>
            )}
          </button>
        </div>
        <div style={styles.mobileMenu}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { href: "#problem", label: "Problem" },
              { href: "#solution", label: "Solution" },
              { href: "#how", label: "How It Works" },
              { href: "#features", label: "Features" },
              { href: "#pricing", label: "Pricing" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ ...styles.navLink, padding: "8px 4px" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              style={styles.btnPrimary}
              onClick={() => setMobileMenuOpen(false)}
            >
              Activate Viral Growth
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{ ...styles.section, paddingTop: responsive("10rem", "7rem") }}
      >
        <div
          style={stack("1fr 1fr", "1fr")}
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "1fr 1fr",
          //   gap: "4rem",
          //   alignItems: "center",
          // }}
        >
          <div>
            <h1 style={styles.heroTitle}>
              Every Customer Gets Their{" "}
              <span style={styles.gradientText}>Perfect Discount.</span>
              <br />
              <span style={styles.viralText}>
                And Their Friends Get It Too.
              </span>
            </h1>

            <p
              style={{
                fontSize: responsive("1.25rem", "1.05rem"),
                color: "#616161",
                marginBottom: "2rem",
                lineHeight: "1.7",
              }}
            >
              A mathematical system that positions each customer on a "loyalty
              map" based on spending and frequency, creating personalized 0-20%
              discounts that customers can share with their entire network.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: responsive("column", "column"),
                gap: "1rem",
                marginBottom: "2rem",
                color: "#616161",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  color: "#616161",
                }}
              >
                <span style={{ color: "#10b981", fontSize: "1.25rem" }}>✓</span>
                <span>Vector-based positioning for precise discounts</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span style={{ color: "#10b981", fontSize: "1.25rem" }}>✓</span>
                <span>50/50 point sharing between referrals</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span style={{ color: "#10b981", fontSize: "1.25rem" }}>✓</span>
                <span>2.92x viral coefficient for exponential growth</span>
              </div>
            </div>

            <div
              style={{
                display: responsive("row", "column"),
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <button style={styles.btnPrimary}>See Your Loyalty Map</button>
              <button style={styles.btnSecondary}>Calculate ROI</button>
            </div>

            <div
              style={{
                display: "flex",
                gap: responsive("1.5rem", "1rem"),
                fontSize: "0.9rem",
                color: "#64748b",
              }}
            >
              <span>🎯 0-20% personalized</span>
              <span>🔄 4.3 avg referrals</span>
              <span>📈 287% viral growth</span>
            </div>
          </div>

          {/* Vector Map Visualization */}
          <div style={styles.vectorMap}>
            <div style={styles.vectorGrid} />

            {/* Axes */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "rgba(139, 92, 246, 0.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: "2px",
                background: "rgba(139, 92, 246, 0.3)",
              }}
            />

            {/* Customer Dots */}
            <div
              style={{
                ...styles.dot,
                bottom: "30%",
                left: "35%",
                width: "12px",
                height: "12px",
                background: "#8b5cf6",
                boxShadow: "0 0 30px #8b5cf6",
              }}
            />
            <div
              style={{
                ...styles.dot,
                bottom: "60%",
                left: "70%",
                width: "16px",
                height: "16px",
                background: "#06b6d4",
                boxShadow: "0 0 30px #06b6d4",
              }}
            />
            <div
              style={{
                ...styles.dot,
                bottom: "75%",
                left: "80%",
                width: "20px",
                height: "20px",
                background: "#10b981",
                boxShadow: "0 0 40px #10b981",
              }}
            />
            <div
              style={{
                ...styles.dot,
                bottom: "45%",
                left: "55%",
                width: "14px",
                height: "14px",
                background: "#f59e0b",
                boxShadow: "0 0 30px #f59e0b",
              }}
            />
            <div
              style={{
                ...styles.dot,
                bottom: "80%",
                left: "90%",
                width: "18px",
                height: "18px",
                background: "#ec4899",
                boxShadow: "0 0 35px #ec4899",
              }}
            />
            <div
              style={{
                ...styles.dot,
                bottom: "20%",
                left: "45%",
                width: "10px",
                height: "10px",
                background: "#8b5cf6",
                boxShadow: "0 0 25px #8b5cf6",
              }}
            />

            {/* Labels */}
            <span
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                fontSize: "0.875rem",
                color: "#64748b",
              }}
            >
              Spending →
            </span>
            <span
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                fontSize: "0.875rem",
                color: "#64748b",
              }}
            >
              Frequency ↑
            </span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
          padding: responsive("3rem 2rem", "2rem 1rem"),
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: responsive("repeat(4,1fr)", "repeat(2,1fr)"),
            //gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: responsive("2.5rem", "1.8rem"),
                fontWeight: "800",
                ...styles.gradientText,
              }}
            >
              2.92x
            </div>
            <div style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
              Viral Coefficient
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: responsive("2.5rem", "1.8rem"),
                fontWeight: "800",
                ...styles.gradientText,
              }}
            >
              $0
            </div>
            <div style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
              CAC After Month 3
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: responsive("2.5rem", "1.8rem"),
                fontWeight: "800",
                ...styles.gradientText,
              }}
            >
              23%
            </div>
            <div style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
              Retention Increase
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: responsive("2.5rem", "1.8rem"),
                fontWeight: "800",
                ...styles.gradientText,
              }}
            >
              847%
            </div>
            <div style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
              Combined ROI
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" style={styles.section}>
        <h2
          style={{
            fontSize: responsive("3rem", "2rem"),
            textAlign: "center",
            marginBottom: "1rem",
            ...styles.gradientText,
          }}
        >
          Two Problems. One Mathematical Solution.
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: responsive("1.25rem", "1.05rem"),
            color: "#94a3b8",
            marginBottom: "3rem",
            maxWidth: "800px",
            margin: "0 auto 3rem",
          }}
        >
          Your loyalty program fails at retention AND acquisition
        </p>

        <div style={stack("1fr 1fr", "1fr")}>
          <div
            style={{
              ...styles.card,
              borderColor: "rgba(239, 68, 68, 0.3)",
              background: "rgba(239, 68, 68, 0.05)",
            }}
          >
            <h3
              style={{
                fontSize: responsive("1.5rem", "1.25rem"),
                marginBottom: "1.5rem",
                color: "#ef4444",
              }}
            >
              ❌ Broken Loyalty
            </h3>
            <p style={{ marginBottom: "1rem", color: "#616161" }}>
              Sarah spends $5,000 yearly. Mike spends $5,100. Mike gets "Gold"
              while Sarah stays "Silver" – for $100 difference.
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#ef4444" }}>⚠️</span>
                <span style={{ color: "#616161" }}>
                  Fixed tiers frustrate customers
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#ef4444" }}>⚠️</span>
                <span style={{ color: "#616161" }}>
                  Points expire, feel cheated
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#ef4444" }}>⚠️</span>
                <span style={{ color: "#616161" }}>
                  No way to share benefits
                </span>
              </li>
            </ul>
          </div>

          <div
            style={{
              ...styles.card,
              borderColor: "rgba(239, 68, 68, 0.3)",
              background: "rgba(239, 68, 68, 0.05)",
            }}
          >
            <h3
              style={{
                fontSize: responsive("1.5rem", "1.25rem"),
                marginBottom: "1.5rem",
                color: "#ef4444",
              }}
            >
              ❌ Expensive Growth
            </h3>
            <p style={{ marginBottom: "1rem", color: "#616161" }}>
              You're paying $30+ per customer while happy customers would gladly
              refer friends – if there was something in it for both.
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#ef4444" }}>⚠️</span>
                <span style={{ color: "#616161" }}>
                  Facebook CAC up 89% YoY
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#ef4444" }}>⚠️</span>
                <span style={{ color: "#616161" }}>No referral incentive</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#ef4444" }}>⚠️</span>
                <span style={{ color: "#616161" }}>
                  Paying for free customers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        style={{ ...styles.section, background: "rgba(139, 92, 246, 0.02)" }}
      >
        <h2
          style={{
            fontSize: responsive("3rem", "2rem"),
            textAlign: "center",
            marginBottom: "3rem",
            ...styles.gradientText,
          }}
        >
          GPS Coordinates for Loyalty + Viral Sharing
        </h2>

        <div style={stack("1fr 1fr", "1fr")}>
          <div style={styles.card}>
            <div
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              📍
            </div>
            <h3
              style={{
                fontSize: responsive("1.75rem", "1.35rem"),
                textAlign: "center",
                marginBottom: "1rem",
                ...styles.gradientText,
              }}
            >
              Vector Positioning
            </h3>
            <p
              style={{
                marginBottom: "1.5rem",
                color: "#616161",
                textAlign: "center",
              }}
            >
              Every customer on a 2D loyalty map
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                color: "#616161",
              }}
            >
              <li>• X-axis: Spending (2x weight)</li>
              <li>• Y-axis: Purchase frequency</li>
              <li>• Distance: Loyalty strength</li>
              <li>• Discount: 0-20% precisely</li>
            </ul>
          </div>

          <div style={styles.card}>
            <div
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              🚀
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                textAlign: "center",
                marginBottom: "1rem",
                ...styles.viralText,
              }}
            >
              Viral Mechanics
            </h3>
            <p
              style={{
                marginBottom: "1.5rem",
                color: "#616161",
                textAlign: "center",
              }}
            >
              Share discounts, grow together
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                color: "#616161",
              }}
            >
              <li>• Friends inherit your discount</li>
              <li>• 50/50 point sharing</li>
              <li>• Permanent partnerships</li>
              <li>• Infinite network depth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" style={styles.section}>
        <h2
          style={{
            fontSize: responsive("3rem", "2rem"),
            textAlign: "center",
            marginBottom: "3rem",
            ...styles.gradientText,
          }}
        >
          Vector Positioning Meets Viral Growth
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: responsive("2rem", "1rem"),
          }}
        >
          {[
            {
              num: "1",
              icon: "📍",
              title: "Track & Position",
              desc: "Every purchase updates vector position. Spending moves East (2x), frequency North.",
            },
            {
              num: "2",
              icon: "🎯",
              title: "Personalize Precisely",
              desc: "Distance determines exact discount: 3.7%, 8.2%, 15.9%. No arbitrary tiers.",
            },
            {
              num: "3",
              icon: "🔄",
              title: "Share Your Status",
              desc: "Customers share unique code. Friends START at their discount level.",
            },
            {
              num: "4",
              icon: "📈",
              title: "Compound Together",
              desc: "Friend purchases? Both vectors strengthen. 50% to them, 50% to referrer.",
            },
            {
              num: "5",
              icon: "⏰",
              title: "365-Day Window",
              desc: "Rolling window keeps it current. Stay engaged or drift back.",
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: responsive("2rem", "1rem"),
                alignItems: "center",
                flexDirection: responsive("row", "row"),
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  ...styles.card,
                  flex: 1,
                  display: "flex",
                  gap: responsive("1.5rem", "1rem"),
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: responsive("2rem", "1.5rem") }}>
                  {step.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: responsive("1.25rem", "1.1rem"),
                      marginBottom: "0.5rem",
                      color: "#616161",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "#94a3b8" }}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        style={{ ...styles.section, background: "rgba(139, 92, 246, 0.02)" }}
      >
        <h2
          style={{
            fontSize: responsive("3rem", "2rem"),
            textAlign: "center",
            marginBottom: "3rem",
            ...styles.gradientText,
          }}
        >
          Every Feature for Growth and Retention
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: responsive("repeat(3, 1fr)", "1fr"),
            gap: responsive("1.5rem", "1rem"),
          }}
        >
          {[
            {
              icon: "📊",
              title: "Dual-Axis Tracking",
              desc: "Spending and frequency separately. $1,000 once ≠ $1,000 over 50 visits.",
            },
            {
              icon: "🎯",
              title: "Precise Positioning",
              desc: "No tiers to miss. Every purchase moves you forward, even 0.1%.",
            },
            {
              icon: "📈",
              title: "Exponential Curve",
              desc: "Discounts grow slowly, then accelerate for true loyalty.",
            },
            {
              icon: "🔄",
              title: "Instant Inheritance",
              desc: "New customers start at referrer's discount. No earning period.",
            },
            {
              icon: "🤝",
              title: "50/50 Partnership",
              desc: "Every purchase benefits both buyer and referrer permanently.",
            },
            {
              icon: "🌳",
              title: "Infinite Depth",
              desc: "No limits. Benefit from referrals' referrals' referrals.",
            },
          ].map((feature, i) => (
            <div key={i} style={styles.card}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: responsive("1.25rem", "1.15rem"),
                  marginBottom: "0.75rem",
                  color: "#616161",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={styles.section}>
        <h2
          style={{
            fontSize: responsive("3rem", "2rem"),
            textAlign: "center",
            marginBottom: "3rem",
            ...styles.gradientText,
          }}
        >
          Investment That Pays Through Growth
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: responsive("repeat(3, 1fr)", "repeat(1,1fr)"),
            gap: "2rem",
          }}
        >
          {[
            {
              name: "Beta Users",
              price: "$1800",
              desc: "Test the Waters",
              features: [
                "Up to 1,000 customers",
                "Basic vector positioning",
                "Simple referral system",
                "Email notifications",
              ],
              featured: false,
            },
            {
              name: "Early Adopters",
              price: "$2100",
              desc: "Full Power",
              features: [
                "Up to 10,000 customers",
                "Advanced algorithm",
                "Full 50/50 sharing",
                "Network visualization",
                "API access",
                "Priority support",
              ],
              featured: true,
            },
            {
              name: "Post Launch",
              price: "$3100",
              desc: "Unlimited Scale",
              features: [
                "Unlimited customers",
                "Custom weights",
                "Custom sharing ratios",
                "Dedicated success manager",
                "White-label",
              ],
              featured: false,
            },
          ].map((plan, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                transform: plan.featured ? "scale(1.05)" : "none",
                borderColor: plan.featured
                  ? "rgba(139, 92, 246, 0.5)"
                  : "rgba(139, 92, 246, 0.2)",
                textAlign: "center",
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                    color: "white",
                    padding: "0.25rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <h3
                style={{
                  fontSize: responsive("1.5rem", "1.3rem"),
                  marginBottom: "0.5rem",
                  ...styles.gradientText,
                }}
              >
                {plan.name.toLocaleUpperCase()}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                }}
              >
                {plan.desc}
              </p>
              <div
                style={{
                  fontSize: responsive("3rem", "2.2rem"),
                  fontWeight: "800",
                  marginBottom: "1.5rem",
                  ...styles.gradientText,
                }}
              >
                {plan.price}
                <span style={{ fontSize: "1rem", color: "#64748b" }}>/mo</span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  marginBottom: responsive("1.5rem", "1rem"),
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.95rem",
                      color: "#64748b",
                    }}
                  >
                    <span style={{ color: "#10b981" }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                style={plan.featured ? styles.btnPrimary : styles.btnSecondary}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: responsive("3rem", "2rem"),
            padding: "2rem",
            ...styles.card,
            background: "rgba(16, 185, 129, 0.1)",
            borderColor: "rgba(16, 185, 129, 0.3)",
          }}
        >
          <h3
            style={{
              fontSize: responsive("1.5rem", "1.25rem"),
              marginBottom: "1rem",
              color: "#10b981",
            }}
          >
            🎯 Dual Guarantee
          </h3>
          <p
            style={{
              fontSize: responsive("1.125rem", "1rem"),
              color: "#616161",
            }}
          >
            110% Retention ROI + 3x Growth in 12 months or full refund
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, maxWidth: "900px" }}>
        <h2
          style={{
            fontSize: responsive("3rem", "2rem"),
            textAlign: "center",
            marginBottom: "3rem",
            ...styles.gradientText,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: responsive("1rem", ".75rem"),
          }}
        >
          {[
            {
              q: "How does vector positioning work?",
              a: "Every customer exists at a point on a 2D map. Spending moves them horizontally (2x weight), frequency vertically. Distance from origin determines discount (0-20%).",
            },
            {
              q: "How does the 50/50 viral split work?",
              a: "When someone you referred makes a $100 purchase, they get full credit (100 points) for their position, and you get 50 points added to yours. Both vectors strengthen.",
            },
            {
              q: "Can this create runaway discounts?",
              a: "No. The exponential curve approaches but never exceeds your set maximum (e.g., 20%). Customers earning max discounts have proven their value.",
            },
          ].map((faq, i) => (
            <div key={i} style={styles.card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#64748b",
                }}
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
              >
                <h3 style={{ fontSize: responsive("1.125rem", "1rem") }}>
                  {faq.q}
                </h3>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#8b5cf6",
                    transform: activeFAQ === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  +
                </span>
              </div>
              {activeFAQ === i && (
                <p
                  style={{
                    marginTop: "1rem",
                    color: "#94a3b8",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(139, 92, 246, 0.1)",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <div
          style={{
            ...styles.card,
            textAlign: "center",
            padding: responsive("4rem", "2rem"),
            background:
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
        >
          <h2
            style={{
              fontSize: responsive("3rem", "2rem"),
              marginBottom: "1rem",
              ...styles.gradientText,
            }}
          >
            Stop Choosing Between Retention and Growth.
          </h2>
          <p
            style={{
              fontSize: responsive("1.35rem", "1.15rem"),
              marginBottom: "1rem",
              color: "#616161",
            }}
          >
            Mathematics Gives You Both.
          </p>
          <p
            style={{
              fontSize: responsive("1.125rem", "1rem"),
              color: "#94a3b8",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Every customer gets their perfect discount while building your
            business through referrals. The first system where retention creates
            acquisition.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: responsive("row", "column"),
              justifyContent: "center",
            }}
          >
            <button style={styles.btnPrimary}>
              Activate Complete System Now
            </button>
            <button style={styles.btnSecondary}>See Interactive Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
}
