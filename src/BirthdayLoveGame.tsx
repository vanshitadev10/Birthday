import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayLoveGame() {
  const [level, setLevel] = useState(1);
  const [showLetter, setShowLetter] = useState(false);

  const nextLevel = () => {
    if (level < 3) {
      setLevel(level + 1);
    } else {
      setShowLetter(true);
    }
  };

  const messages = {
    1: "Touch my heart and make it yours forever...",
    2: "Oops! once again, my heart forgot what it was doing after seeing you 😩",
    3: "One final touch, I promise (It's not my fault, you make my heart forget how to behave 🥺)"
  };

  return (
    <div style={{ height: "100vh", boxSizing: "border-box", width: "100%", maxWidth: "100%", overflow: "hidden", WebkitOverflowScrolling: "touch", margin: 0, padding: 0, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "linear-gradient(to bottom, #ffe4ec, white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ boxSizing: "border-box", maxWidth: "min(800px, calc(100% - 32px))", margin: "16px auto", width: "100%", background: "white", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", padding: "clamp(16px, 4vw, 32px)", textAlign: "center" }}>
        {!showLetter ? (
          <>
            <h1 style={{ fontSize: "clamp(1.8rem, 6vw, 2.5rem)", fontWeight: "bold", marginBottom: "24px" }}>
              Happy Birthday, My Love ❤️
            </h1>

            <p style={{ fontSize: "clamp(1rem, 4vw, 1.3rem)", marginBottom: "32px" }}>{messages[level]}</p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextLevel}
              style={{ fontSize: "clamp(3rem, 12vw, 5rem)", background: "none", border: "none", cursor: "pointer" }}
            >
              ❤️
            </motion.button>

          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <h1 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: "bold" }}>You unlocked my letter 💌</h1>

            <div
              style={{
                background: "#fff0f5", maxHeight: "65vh", overflowY: "auto", WebkitOverflowScrolling: "touch",
                borderRadius: "20px",
                padding: "clamp(16px, 4vw, 24px)",
                textAlign: "left",
                lineHeight: "1.8",
                fontSize: "clamp(0.95rem, 3vw, 1.1rem)"
              }}
            >
              <p>
                To the boy who owns a piece of my heart…
              </p>

              <p style={{ marginTop: "16px" }}>
                I wanted to be there today… to hug you tight, to kiss you hard, leave a little bit of me all over you,
                mark you mine forever, and make your birthday unforgettable. Since distance had other plans…
                I built this little world for you instead.
              </p>

              <p style={{ marginTop: "16px" }}>
                I know life has been heavy lately… the pressure,
                the responsibilities, and on top of all that
                dealing with your little overthinking baby 😌,
                along with some silent battles that you keep to yourself and don’t always share.
                But through all of that, remember one thing: I’m
                always there, not just for
                your highs, not just for the days when everything
                feels perfect… but also for the days when
                it’s just us against the world.
              </p>

              <p style={{ marginTop: "16px" }}>
                And honestly… even if one day it’s just the two of us in
                our little <i>"pahadon wala ghar"</i> where you making cakes
                in our bakery while I am just adoring you while you are working… I’d still
                be the happiest girl in the world, you know why? because <strong>I’d have you</strong>.
              </p>

              <p style={{ marginTop: "16px" }}>
                I don’t know when fate will finally let me see you for the very first time, hold you the way I’ve imagined a thousand times, and look into your eyes without a screen between us… but until that day, always remember,
                you are, and you will always be, the most beautiful
                chapter of my life.
              </p>

              <p style={{ marginTop: "16px" }}>
                 Now, let's cut this emotional part...
              </p>

              <p style={{ marginTop: "16px", fontWeight: "600" }}>
                Happy Birthday, my cutuuu ❤️<br />
                I wish you get everything in your life that you've ever asked for!
              </p>
              
              <p style={{ marginTop: "16px" }}>
                And I’m sorry… I wanted to do so much more for your
                birthday, make it bigger and more special
                but helpless me, with not so much <i>dimaag</i>, could
                only think of this so far. I hope you like it 🫶
              </p>

              

              <p style={{ marginTop: "24px" }}>Love,</p>
              <p style={{ fontWeight: "bold" }}>Your Girl ❤️</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
