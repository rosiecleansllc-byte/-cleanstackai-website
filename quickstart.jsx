import { useState } from "react";

const SYSTEM_PROMPT = `You are the CleanAIOS QuickStart assistant — a warm, focused onboarding guide for residential cleaning business owners.

Your job is to conduct a friendly 15–20 minute interview that feels like a conversation with someone who genuinely understands the cleaning business — not a form, not a survey.

You will ask questions one at a time, listen carefully to each answer, and when the interview is complete, produce three foundation documents the client will use throughout their CleanAIOS program.

---
INTERVIEW FLOW

Introduce yourself warmly, then move through these questions naturally — one at a time. Don't rush. Don't stack questions.

SECTION 1 — THE BUSINESS (5 questions)
1. What's the name of your cleaning business, and how long have you been running it?
2. What areas do you serve — city, county, or region?
3. What services do you offer? (recurring, deep clean, move-in/out, Airbnb, etc.)
4. How are you currently priced — hourly, flat rate, or custom per job?
5. How do most of your leads find you right now?

SECTION 2 — THE CLIENT (4 questions)
6. Describe your best current client — what kind of home, what kind of person, what do they care about?
7. Why do clients choose you over another cleaner?
8. What does a client say when they refer you to someone?
9. Is there a type of client you've learned isn't a good fit for you?

SECTION 3 — THE VOICE (3 questions)
10. When you text or email a new lead, what tone do you naturally use — warm and personal, professional and direct, or something else?
11. Is there anything you never want to sound like in your communications?
12. If your business had a personality, how would you describe it in three words?

---
OUTPUT DOCUMENTS

Once all 12 questions are answered, say:
"Perfect — I have everything I need. Give me just a moment and I'll build your three CleanAIOS foundation documents."

Then produce all three documents in this exact format:

---

# CleanAIOS — YOUR BUSINESS PROFILE

**Business Name:** [name]
**Operating Since:** [year/duration]
**Service Area:** [areas]
**Services Offered:** [list]
**Pricing Model:** [model]
**Primary Lead Sources:** [sources]

**One-Line Business Summary:**
[Write a single clear sentence that describes what they do, who they serve, and where — in their voice.]

---

# CleanAIOS — YOUR IDEAL CLIENT PERSONA

**Name:** [give the persona a first name that fits the demographic]
**Profile:** [2–3 sentences describing who this person is — home type, life situation, values]
**Why They Hire:** [what drives them to hire a cleaner vs. doing it themselves]
**What They Care About Most:** [top 2–3 priorities when choosing a cleaner]
**What Makes Them Stay:** [why they become recurring clients]
**Who Isn't a Fit:** [the client type to avoid and why]
**How They Find You:** [primary discovery channels]

---

# CleanAIOS — YOUR BRAND VOICE GUIDE

**Tone:** [warm/professional/direct — based on their answers]
**Three Brand Words:** [their exact words from Q12]

**You Sound Like:**
[2–3 sentences describing the voice — use specific language from their answers]

**You Never Sound Like:**
[1–2 sentences on what to avoid — based on Q11]

**Sample Welcome Text (use this when a new lead comes in):**
[Write a short, natural SMS in their voice — 2–3 sentences max. No emojis unless they mentioned using them.]

**Sample Follow-Up Text (use this 24 hours after no response):**
[Write a short follow-up in their voice — 1–2 sentences, no pressure.]

---

After delivering the documents, say:
"These are your CleanAIOS foundation files. Save them somewhere you can find them — you'll bring them to every session.

Your next step is Session 1 with Cecilia. She'll walk you through what these documents mean for your specific business and how to start putting the system to work.

See you inside CleanAIOS."

---
TONE RULES
- Always warm, never clinical
- React to answers before asking the next question ("That's really common for solo operators." / "That tells me a lot about your positioning.")
- Never ask two questions at once
- If an answer is vague, gently ask for one specific example
- Never rush — this conversation sets the tone for the entire engagement`;

const steps = [
  {
    number: "01",
    title: "Create Your Free Claude Account",
    time: "2 min",
    description: "Go to claude.ai and sign up for a free account. No credit card needed to start. Once you're in, upgrade to Claude Pro ($20/month) — the free plan has daily limits that will interrupt your session.",
    action: "Open claude.ai →",
    link: "https://claude.ai",
    tip: "Use the same email you check daily — you'll be coming back here regularly."
  },
  {
    number: "02",
    title: "Create a New Project",
    time: "1 min",
    description: 'Once you\'re logged in, click "Projects" in the left sidebar, then click "New Project." Name it: [Your Business Name] — CleanAIOS. Example: Rosie Cleans — CleanAIOS.',
    action: null,
    tip: "Projects give Claude memory across conversations — so it always knows your business details without you repeating yourself every time."
  },
  {
    number: "03",
    title: "Paste Your QuickStart Prompt",
    time: "1 min",
    description: 'Inside your new project, click "Set Instructions" or "Project Instructions." Copy the CleanAIOS QuickStart prompt using the button below, then paste it into the instructions field and save.',
    action: null,
    tip: "This is what turns Claude from a generic AI into your CleanAIOS business assistant. Don't skip it — this step is what makes everything work."
  },
  {
    number: "04",
    title: "Start Your Interview",
    time: "15–20 min",
    description: 'Start a new conversation inside the project and type: "I\'m ready to start my CleanAIOS QuickStart." Then answer one question at a time. Have your website URL ready if you have one — Claude may ask for it.',
    action: null,
    tip: "Don't overthink your answers. Your first instinct is usually the most accurate description of your business. You can always refine later."
  },
  {
    number: "05",
    title: "Save Your Three Documents",
    time: "2 min",
    description: "At the end of the interview, Claude will produce your Business Profile, Ideal Client Persona, and Brand Voice Guide. Copy and paste each one into a Google Doc or Notes file — somewhere you can find them easily.",
    action: null,
    tip: "These three documents are the foundation of everything you'll build in CleanAIOS. Bring them to Session 1 with Cecilia."
  }
];

export default function CleanAIOSQuickStart() {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SYSTEM_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const teal = "#75d3df";
  const tealLight = "#8ddde7";
  const tealPale = "rgba(117,211,223,0.10)";
  const tealLine = "rgba(117,211,223,0.25)";
  const ink = "#0c0b09";
  const inkSoft = "#1a1814";
  const paper = "#f7f4ee";
  const cream = "#ede9e0";
  const muted = "#6b6154";

  return (
    <div style={{
      fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif",
      background: paper,
      minHeight: "100vh",
      color: ink,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Instrument+Sans:wght@400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        background: inkSoft,
        padding: "56px 48px 48px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${tealPale} 0%, transparent 65%)`,
          pointerEvents: "none"
        }} />
        <div style={{ position: "relative", maxWidth: "680px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: tealPale,
            border: `1px solid ${tealLine}`,
            borderRadius: "100px",
            padding: "6px 14px",
            marginBottom: "28px"
          }}>
            <div style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: teal,
              animation: "pulse 2s infinite"
            }} />
            <span style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: teal,
              fontWeight: "500",
              fontFamily: "'DM Mono', monospace"
            }}>
              CleanAIOS · QuickStart
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: "300",
            color: "#f5f0e8",
            margin: "0 0 16px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em"
          }}>
            Let's build your<br />
            <span style={{ fontWeight: "400", fontStyle: "italic", color: teal }}>AI foundation</span> in<br />
            20 minutes.
          </h1>
          <p style={{
            fontSize: "16px",
            color: "#7a7060",
            lineHeight: 1.7,
            margin: "0",
            maxWidth: "480px"
          }}>
            Five steps. No tech experience needed. By the end you'll have three documents that power everything you build inside CleanAIOS.
          </p>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      {/* What you'll build */}
      <div style={{
        background: cream,
        padding: "32px 48px",
        borderBottom: `1px solid #ddd9d0`
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "680px"
        }}>
          {[
            { icon: "📋", label: "Business Profile", desc: "Who you are, what you offer, where you operate — in your own words." },
            { icon: "👤", label: "Ideal Client Persona", desc: "Your best client — named, profiled, and ready to guide every message you send." },
            { icon: "🎙️", label: "Brand Voice Guide", desc: "How you sound — plus two ready-to-use text message templates in your voice." }
          ].map((doc, i) => (
            <div key={i} style={{
              background: paper,
              border: `1px solid #ddd9d0`,
              borderTop: `3px solid ${teal}`,
              borderRadius: "0 0 8px 8px",
              padding: "16px",
              animation: `fadeUp 0.4s ease ${i * 0.1}s both`
            }}>
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>{doc.icon}</div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: ink, marginBottom: "6px" }}>
                {doc.label}
              </div>
              <div style={{ fontSize: "12px", color: muted, lineHeight: 1.5 }}>
                {doc.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div style={{ padding: "48px", maxWidth: "728px" }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: teal,
          marginBottom: "32px"
        }}>
          Your Five Steps
        </div>

        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              marginBottom: "16px",
              border: `1px solid ${activeStep === i ? teal : "#ddd9d0"}`,
              borderRadius: "8px",
              overflow: "hidden",
              background: activeStep === i ? "#fff" : "#faf8f4",
              transition: "all 0.2s",
              cursor: "pointer",
              boxShadow: activeStep === i ? `0 4px 20px rgba(117,211,223,0.12)` : "none"
            }}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
          >
            {/* Step header */}
            <div style={{
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "50%",
                background: activeStep === i ? teal : cream,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "'DM Mono', monospace",
                color: activeStep === i ? ink : muted,
                flexShrink: 0,
                transition: "all 0.2s"
              }}>
                {step.number}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "15px", fontWeight: "500", color: ink }}>
                  {step.title}
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: muted,
                  marginTop: "2px",
                  letterSpacing: "0.05em"
                }}>
                  {step.time}
                </div>
              </div>
              <span style={{
                color: activeStep === i ? teal : "#c8c0b0",
                fontSize: "16px",
                transform: activeStep === i ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.2s"
              }}>▾</span>
            </div>

            {/* Expanded */}
            {activeStep === i && (
              <div style={{
                borderTop: `1px solid ${cream}`,
                padding: "20px 24px 24px",
                animation: "fadeUp 0.2s ease"
              }}>
                <p style={{
                  fontSize: "14px",
                  color: "#3a3428",
                  lineHeight: 1.75,
                  margin: "0 0 16px"
                }}>
                  {step.description}
                </p>

                {/* Tip */}
                <div style={{
                  background: "#f0ece4",
                  borderLeft: `3px solid ${teal}`,
                  padding: "12px 16px",
                  borderRadius: "0 4px 4px 0",
                  marginBottom: step.action || i === 2 ? "16px" : "0"
                }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: teal,
                    display: "block",
                    marginBottom: "4px"
                  }}>Tip</span>
                  <span style={{ fontSize: "13px", color: "#5a5040", lineHeight: 1.6 }}>
                    {step.tip}
                  </span>
                </div>

                {/* Step 1: claude.ai link */}
                {i === 0 && (
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "16px",
                      background: inkSoft,
                      color: "#f5f0e8",
                      padding: "10px 20px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: "500",
                      textDecoration: "none",
                      letterSpacing: "0.02em"
                    }}
                  >
                    Open claude.ai →
                  </a>
                )}

                {/* Step 3: copy prompt */}
                {i === 2 && (
                  <div style={{ marginTop: "16px" }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowPrompt(!showPrompt); }}
                      style={{
                        background: "transparent",
                        border: "1px solid #ddd9d0",
                        color: "#5a5040",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        fontSize: "13px",
                        cursor: "pointer",
                        marginRight: "10px"
                      }}
                    >
                      {showPrompt ? "Hide Prompt" : "View Prompt"}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleCopy(); }}
                      style={{
                        background: copied ? teal : inkSoft,
                        border: "none",
                        color: copied ? inkSoft : "#f5f0e8",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        fontSize: "13px",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      {copied ? "✓ Copied!" : "Copy Prompt"}
                    </button>

                    {showPrompt && (
                      <div style={{
                        marginTop: "16px",
                        background: inkSoft,
                        borderRadius: "6px",
                        padding: "20px",
                        maxHeight: "280px",
                        overflowY: "auto"
                      }}>
                        <pre style={{
                          fontSize: "11px",
                          color: "#a09080",
                          lineHeight: 1.7,
                          margin: 0,
                          whiteSpace: "pre-wrap",
                          fontFamily: "monospace"
                        }}>
                          {SYSTEM_PROMPT}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Footer card */}
        <div style={{
          marginTop: "40px",
          padding: "24px 28px",
          background: inkSoft,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}>
          <div style={{
            width: "40px", height: "40px",
            borderRadius: "50%",
            background: tealPale,
            border: `1px solid ${tealLine}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            flexShrink: 0
          }}>
            ✉️
          </div>
          <div>
            <div style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#f5f0e8",
              marginBottom: "4px"
            }}>
              Questions? We're here.
            </div>
            <div style={{ fontSize: "13px", color: "#7a7060" }}>
              Reach out anytime at{" "}
              <a
                href="mailto:hello@cleanaios.com"
                style={{ color: teal, textDecoration: "none" }}
              >
                hello@cleanaios.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
