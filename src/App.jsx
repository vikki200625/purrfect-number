import { useState } from 'react';

// Your 25 cute, worship-y messages
const messages = [
  "Can I have your number? 💛",
  "I promise to text you something sweet.",
  "Pretty please? 🥺",
  "You make everything brighter—can I say hi properly?",
  "Even one digit would make my day.",
  "You deserve the softest good‑morning texts.",
  "I’d love to plan something cute with you.",
  "Your name deserves a special place in my contacts.",
  "I’ll bring snacks and good vibes—deal?",
  "I think we’d make a great story—can we start it?",
  "I’m patient, but your number would be lovely.",
  "I’ll keep it gentle, kind, and honest—always.",
  "You’re the kind of person I want to show up for.",
  "No spam—just thoughtful messages that make you smile.",
  "One number, infinite possibilities. ✨",
  "Give me a chance to treat you how you deserve.",
  "I’ll be your favorite notification. 🔔",
  "Let me earn the right to text you good news first.",
  "I’ll plan the sweetest date at your pace.",
  "You’re worth the wait, but I’m hoping for a yes.",
  "I’ll treasure it and use it with care.",
  "I want to learn your favorite things and remember them.",
  "I’ll make your phone a kinder place.",
  "Say yes, and I’ll make sure you feel adored.",
  "Please? I’m genuinely asking—one number, and I’ll make it worth it. 💖"
];

// MORE GIRLY DECORATIONS: Hearts, bows, stars, sparkles
function FloatingDecorations(){
  // 20 decorations (more than before!)
  const decorations = Array.from({length:20});
  // Girly emojis to mix in
  const emojis = ["💖", "💕", "🎀", "🌟", "✨"];

  return (
    <div className="floating-decorations" aria-hidden="true">
      {decorations.map((_,i)=>(
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDelay: `${i * 0.4}s`, // Staggered start
            color: i % 2 === 0 ? "#ff8ab2" : "#60d3c8", // Pink/teal alternation
            fontSize: `${18 + Math.random() * 14}px`, // Random size
            opacity: 0.3 + Math.random() * 0.3, // Random soft opacity
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </span>
      ))}
    </div>
  );
}

export default function App(){
  const [stage, setStage] = useState(0);
  const [isThankYou, setIsThankYou] = useState(false);

  // "No" button LOOPS infinitely
  const handleNo = () => {
    if (stage === messages.length - 1) {
      setStage(0);
    } else {
      setStage(s => s + 1);
    }
  };

  const handleYes = () => setIsThankYou(true);

  const restart = () => { setStage(0); setIsThankYou(false); };

  const messageKey = `message-${stage}`;

  return (
    <div className="wrapper">
      <FloatingDecorations /> {/* More girly decorations! */}

      <div className="card fade-in">
        {isThankYou ? (
          <>
            <h1 className="title">
              🎀 Yay! Thank you 💖
            </h1>
            <p className="message" style={{fontWeight:600}}>
              I can’t wait to text you something sweet. I’ll keep it kind, cute, and genuine.
            </p>
            <div className="buttons">
              <button className="btn btn-yes" onClick={restart}>Start Over</button>
            </div>
          </>
        ) : (
          <>
            <h1 className="title">
              Can I Have Your Number????
            </h1>
            <p className="message" key={messageKey}>
              {messages[stage]}
            </p>

            <div className="buttons">
              <button className="btn btn-yes" onClick={handleYes}>Yes 💕</button>
              <button className="btn btn-no" onClick={handleNo}>
                No…
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}