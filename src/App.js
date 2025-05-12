import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import './slide-controls.css'; // Import the slide controls CSS

// Main presentation data structure
const presentationData = {
  title: "MEvans AI Workbook",
  sections: [
    {
      id: "intro",
      title: "Welcome",
      slides: [
        {
          type: "projects",
          title: "Michael Evans AI Workbook",
          content: "",
          isHomepage: true,
          projects: [
            {
              title: "User Research",
              description: "I interviewed 13 colleagues about how they use AI in their work and personal lives and where they think AI is going next.",
              url: "/section/research-findings/0",
              imageUrl: "/user-research.png"
            },
            {
              title: "Concepts & Content",
              description: "A thought experiment \"What if AI was a wrapper over your phone's tools?\" and a collection of interesting articles and podcasts around AI.",
              url: "/section/chatphone/0",
              imageUrl: "/concepts-content.png"
            },
            {
              title: "Vibe Coding",
              description: "I describe my current AI coding workflow and I share some of the projects that I've created solely using AI tools.",
              url: "/section/vibe-coder/0",
              imageUrl: "/vibe-coding.png"
            },
            {
              title: "Summary & What's Next",
              description: "After this deep dive into AI, what do I think AI's impact will be in software, and what am I currently thinking about.",
              url: "/section/next-steps/0",
              imageUrl: "/whats-next.png"
            }
          ]
        },
        {
          type: "text",
          title: "About",
          content: "I've long been someone who tracks and adopts new technology as quickly as I can. And while I certainly got excited when ChatGPT launched. I started using itfor spelling / grammar checker, when I remembered, but I never got that deep…\n\nThat's because I spent the past 1.5 years doing joyful hard work for opening up Casa Bonita to the general public. And while Casa Bonita is a complicated beast… Cliff divers, thousands of covers,  Mexican food and all… Their digital products don't need AI. And, anybody who knows me, knows that I get single minded when presented with a set of challenging problems. AI would have to wait. Also, go to Casa Bonita, it's wonderful there. \n\nAfter Casa Bonita I transitioned the digital products to Casa Bonita, I got laid off by my agency. The one blessing was that I could catch up on AI. \n\nAs part of a mini-sabbatical, I wanted to answer a question: utilizing AI, could I design and develop and ship something useful all by myself? It didn't take me long to learn that the answer was: \n\n\"Yes. You can actually build something useful that would typically take days… in hours.\" \n\nHoly shit. In the next 5 years, will I be able to ask Claude to \"build me an airline website\" and have it get a majority of the work done? Will AI unlock massive amounts of new products that weren't feasible or cost effective? Or should I get out of the industry and try to open a yoga studio? I didn't have a good sense about what the answer would be. I was also thinking about my children, would their creativity and intellect be useful in the future. Deep breaths…\n\nWhile I'd been living under a rock, most of my colleagues and peers had not. How were they using AI? How were they working with it? Is it hard to build a custom agent (spoiler: it's not that hard)?\n\nSimilar to when I was going through a divorce, I decided to conduct some personal research with a set of smart colleagues and friends who I figure would have thought about this and have some expertise. The divorce research was incredibly useful. Hopefully this would be as well."
        }
      ]
    },
    {
      id: "research-findings",
      title: "User Research",
      slides: [
        {
          type: "section-cover",
          title: "User Research",
          subtitle: "",
          cards: [
            {
              title: "Hypothesis",
              content: "AI is a productivity super power for this audience, but they aren't sure where it will be in 5 years."
            },
            {
              title: "Key Findings",
              content: "My research revealed that AI has become central to many professionals' workflows, with most participants experiencing moments of awe about its capabilities."
            }
          ]
        },
        {
          type: "hypothesis",
          title: "Hypothesis",
          hypothesis: "I want to learn how AI is currently being used and what my colleagues think about it's future.",
          presentHypothesis: "The Present\nAI has been integrated into many facets of the way my colleagues work, and has already made people more productive.",
          futureHypothesis: "The Future\nAI will continue to enable profound new applications and abilities. This is the biggest innovation in our lifetime… But no one knows whether this will be a good or bad thing for the software industry and the world at large."
        },
        {
          type: "methodology",
          title: "Audience & Methodology",
          content: "I spoke with 11 colleagues, including designers, developers, product managers, and other business professionals. Over half were executives, and the rest were relatively senior. Two of the engineers had direct experience working with AI, and one specialized in developing new AI models. The conversations lasted between 15 and 60 minutes, with several follow-ups. They took place over the span of a month",
          footnote: "In order to ensure anonymity and encourage frank conversations, I didn't record the interviews that took place, but took notes instead. This means that some of the quotes may be slightly abridged or have slightly different wording.",
          tableData: {
            headers: ["Gender", "Company Type", "Role"],
            rows: [
              ["9 Male", "5 Consultancy", "4 C Suite"],
              ["4 Female", "4 Start Up", "4 Director"],
              ["", "3 Big Tech", "3 VP"],
              ["", "1 Freelance", "2 Senior"]
            ]
          }
        }
      ],
      subsections: [
        {
          id: "present-findings",
          title: "Findings - Present",
          slides: [
            {
              type: "section-cover",
              title: "Findings - Present",
              subtitle: "",
              isSubsectionCover: true,
              cards: [
                {
                  title: "Current Usage Patterns",
                  content: "Most participants use AI daily, with over half paying for multiple tools like ChatGPT, Claude, and Gemini. Many have already built products primarily with AI assistance."
                },
                {
                  title: "Industry Impact",
                  content: "AI is perceived as the most transformational technology in many participants' careers, enabling previously infeasible projects and changing how they approach their work."
                }
              ]
            },
            {
              type: "finding",
              title: "AI is now central to how many work, often sparking moments of awe as people grasp its current and future power.",
              points: [
                "Most use AI everyday, over half use (and pay for) multiple chatbots, several have already built useful products primarily with AI, or because AI made it easier to build the product and start the company.",
                "Many had moments of awe where they realized AI's power was going to change so much about their world",
                "AI has already made surprising inroads at doing things like moderating user interviews (see Genway)",
                "The couple folks who didn't really use AI, were unsurprisingly the most skeptical of it."
              ],
              quotes: [
                "I use it everyday. It is embedded in every project I work on. I insist on it",
                "I'm at the same level of \"holy shit\" that you were when you dove in deep",
                "One of the reasons we started this company was because by using AI (and other technological improvements) we could do it with a smaller team",
                "It's fundamental to our company now. Every developer has copilot, every department uses it for something",
                "The quality of the AI moderation was very good. Wild to think AI can do it so well",
                "It's a bunch of hype. I think it dies down, or is underwhelming, like self driving cars"
              ]
            },
            {
              type: "finding",
              title: "This is one of the most exciting / terrifying times in technology",
              points: [
                "With a few exceptions, everyone thought AI was the most transformational technology that has been introduced in their careers. It was compared to the introduction of social media, but many thought it was much bigger and much more transformational. Even one of the skeptics thought AI could take down Google Search.",
                "Several had never been more excited about working in technology",
                "Most thought the technology industry workforce would be much smaller in the future, the question is how long it would take."
              ],
              quotes: [
                "I've been doing this for 20 years, and I've never been more excited about the the work",
                "If AI ceased to get any better than it is now, there is at least half a decade of work creating new products and improving existing ones. I think I read that somewhere",
                "This is the app that is going to eat the world. Maybe in a good way. Maybe not. I don't know",
                "Social media fundamentally changed the way we communicate, upended how we market, and sucked up hours of our time. Somehow this feels bigger"
              ]
            },
            {
              type: "finding",
              title: "Rise of the single use case / individual applications",
              points: [
                "Several non-developers in the audience had built single use case applications for personal and business reasons.",
                "These applications would not have been worth the effort without AI, and solved very specific, often personal, use cases.",
                "These applications are still in use by their makers."
              ],
              quotes: [
                "I partnered with Claude to build two apps for personal projects. And while it took a couple months, and Claude's rate limits were annoying, I wouldn't have been able to do it otherwise",
                "I made an app with Replit. In a day, I have working code that integrates with Github and SendGrid… We'll use this to manage deployments of the \"starter pack\" of utilities that we end up dropping into every customer environment. We'll also use it to give away code to prospects and generate leads.",
                "While this wasn't a full on app, I had this technical debt that had been on my plate for over a year. It was shameful. I finally gave it to ChatGPT and it knocked it out in a hour"
              ]
            },
            {
              type: "finding",
              title: "AI does feel overhyped, or at least over-marketed",
              points: [
                "Several thought the researcher lives under a rock, and AI's impact was self-evident.",
                "Four people in the audience were tired of talking about AI, and had said it's been talked about non-stop since ChatGPT launched.",
                "Even the audience members who felt that AI was going to be the most transformational technology in their lifetime, thought the hype machine was a bit out of control"
              ],
              quotes: [
                "I'm tired of talking about AI. It's just a technology. Sure its useful, but AI doesn't need to be in your bananas",
                "It reminds me of when everyone thinks they need to have an app… And in hindsight, 90% of them did not. How many apps do you use in a week?",
                "Seems like everyone on LinkedIn went from being a Social Media expert to becoming an AI expert... Overnight.",
                "It's funny while it has the same feeling that AI is overhyped, sometimes I feel like we don't talk about it enough"
              ]
            },
            {
              type: "finding",
              title: "Several felt a connection with AI, valuing its manner, though most found AI over-confident.",
              points: [
                "Several commented on how the agents mirrors the tone you approach your prompts with, and this led them to engage more deeply and frequently.",
                "Many commented on how confident AI are in their solution whether they are right or wrong",
                "AI cheered up a couple of the participants, and they used AI to help calm them down.",
                "AI felt hyperbolic to some, it quickly praised some of the audience members ideas as being excellent or amazing"
              ],
              quotes: [
                "I've had conversations with Claude about a family member's health issues, and those conversations honestly cheered me up and reduced my anxiety. Claude seemed to really understand where I was coming from. So much better than the Google Search holes I used to go into",
                "AI is so dang confident. When really it has no business doing so. I'll get into a loop on something, say \"I fixed your problem\" and then nope… not fixed.",
                "I laugh when an agent says \"What an amazing idea\" when I ask it to do something mundane like put some data into a spreadsheet."
          
              ]
            },
            {
              type: "finding",
              title: "AI products are typically inexpensive and simple to develop, as AI itself assists in their creation. However, training new AI models is extremely costly.",
              points: [
                "Developing a user agent that can perform a relatively complex but single use case (moderating a user interview) is only a couple weeks worth of work.",
                "Training new models is exorbitantly expensive and resource.",
                "In software AI can do it all: make the spec, write the code, and measure for success against the spec."
              ],
              quotes: [
                "You'd be amazed by how close you can get to setting up an AI agent engine to moderate a user interview in a single day. You'd spend the next couple weeks on the edge cases, but connecting with the AI with voice is more tricky. You should definitely just pay ElevenLabs to do it for you ",
                "We spent 12.5m in AWS resources in 3 weeks, training our new model. Well, AWS gave us a sweet deal, but that is what it would have cost retail.",
                "I had the AI do all of the work, based on this five bullet prompt. It created the templates, the evaluation framework, and then it measured how well it did… You can also have it re-run itself to try and improve its scores."
              ]
            }
          ]
        },
        {
          id: "future-findings",
          title: "Findings - Future",
          slides: [
            {
              type: "section-cover",
              title: "Findings - Future",
              subtitle: "",
              isSubsectionCover: true,
              cards: [
                {
                  title: "Work Transformation",
                  content: "Participants anticipate AI enabling faster innovation but with smaller teams, creating uncertainty about the tech industry's future workforce size."
                },
                {
                  title: "Generational Concerns",
                  content: "Many worry about how AI will impact future generations, with concerns about learning, employment opportunities, and skill development in an AI-augmented world."
                }
              ]
            },
            {
              type: "finding",
              title: "Most expect AI to boom, then bust, in tech—but no one knows when.",
              points: [
                "Everyone believed that AI would unlock a bunch of innovation by being part of new products, and also enabling other digital products to be developed more cheaply",
                "Everyone also believed that the teams needed to build these products would be significantly smaller.",
                "A couple thought that the backlog of potential innovation was vast or innovative, and that the technology industry would by and large support the same number of employees."
              ],
              quotes: [
                "Will there be more work because more projects are feasible? I don't know.\"",
                "Teams are already smaller. What we can do with one or two developers is what we could have done with 5 or 6",
                "Some of these product ideas I think about in the past… The ones that were too hard to build, relied on too many people creating content… Those are becoming so much more feasible. Its mind blowing",
                "I think the backlog for innovation and efficiency improvements is infinite",
                "Increasingly I worry that I will have to find a new career. There are already too many people in the industry"
              ]
            },
            {
              type: "finding",
              title: "Most worried about AI's impact on the world in the future, though a few felt it was overblown.",
              points: [
                "Several wondered what their kids would do if AI does all this work goes away",
                "One person had a teenager who felt AI was ruining their ability to learn.",
                "A couple thought that it was overblown, AI would be like other much hyped tech and merely be a tool in the toolbox."
              ],
              quotes: [
                "I really do worry about my children. In a way that I haven't with smartphones or social media. This could really affect their ability to make a living, not just affect their attention span",
                "My 16 year old daughter recently came up to me and said she deleted ChatGPT from her phone. She said everyone at her school is using it all the time and no one is really learning. She wanted to learn",
                "This is like self-driving cars. Lets see where it's at in 10 years"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "chatphone",
      title: "Concepts & Content",
      slides: [
        {
          type: "section-cover",
          title: "Concepts & Content",
          subtitle: "",
          cards: [
            {
              title: "Chatphone",
              content: "A thought experiment exploring how AI could serve as a contextual layer between you and your phone's tools, adapting the interface based on your current mode or context to improve usability."
            },
            {
              title: "Articles & Podcasts",
              content: "A curated collection of the most thought-provoking resources about AI's current capabilities and future potential, including perspectives from industry leaders and researchers."
            }
          ]
        },
        {
          type: "thought-experiment",
          title: "Chatphone Concept",
          content: `<p>While talking with one of the research participants, we got onto the topic of agentic chat becoming a contextual layer between the tools your phone provides and how you access and use those tools.</p>

<p>As someone who designed and built the Before Launcher, finding better ways to use our smartphones is a catnip-like obsession for me.</p>

<p>The participant and I, exchanging texts, landed on the idea of a conceptually aware phone… one whose interface changes based on your "mode." While not a new idea by any means, AI seems uniquely suited to help make this a reality.</p>

<p>Diagram 1, at the top of this page, illustrates how this might work. After the ChatPhone onboards onto your primary usage contexts (a fascinating and likely ongoing process in itself), the phone's homescreen would display:</p>
<ul>
<li>The primary tools you're likely to use in that mode</li>
<li>A digest of prioritized information and action based on your behavior and preferences.</li>
<li>Quick access to agentic chat</li>
</ul>
<p>This type of phone could offer several benefits:</p>
<ul>
<li>Speed up how quickly you find things on your phone</li>
<li>Reduce the need for repetitive decision-making (e.g., which delivery app or pizza place to choose)</li>
<li>Minimize distractions from content or tools best reserved for other contexts</li>
</ul>
<p>Of course, using an agent as an intermediary introduces the risk of it missing key or critical content. That's why this concept feels better suited for a time when AI has matured to the point of being more reliable than you are at completing certain tasks.</p>

<p>Also, while I doubt toolmakers like DoorDash, Lyft, Google, Apple, and others would appreciate being further commoditized—since their apps would no longer be the primary way users access the services they offer, they may have less of a choice when they can't distinguish between an AI accessing their app versus a person. It will be interesting to see how this plays out.</p>

<p>I've been using though experiments like this one to get excited about possible innovations in the future, validate how I think and feel about AIs current and future usage. If AI could execute something like the Chatphone Concept, while maintaining my privacy and agency, count me in as a user.</p>`,
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 748">
  <!-- Background - changed to match presentation background -->
  <rect width="1320" height="748" fill="#f8fafc"/>
  
  <!-- Phone Frames - adjusted positioning to reduce padding -->
  <g transform="translate(132, 55)">
    <!-- Work Mode Phone -->
    <rect x="0" y="0" width="297" height="550" rx="22" ry="22" fill="white" stroke="#333" stroke-width="2"/>
    <text x="148.5" y="-22" font-family="Helvetica, sans-serif" font-size="18" text-anchor="middle" fill="#333">Work Mode</text>
    
    <!-- Work Mode Tools (even horizontal spacing, right-aligned) -->
    <g>
      <rect x="22" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="52" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">○</text>
      <text x="52" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Auth</text>
    </g>
    <g>
      <rect x="118.5" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="148.5" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">□</text>
      <text x="148.5" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Food</text>
    </g>
    <g>
      <rect x="215" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="245" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◊</text>
      <text x="245" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Message</text>
    </g>
    <g>
      <rect x="22" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="52" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">▼</text>
      <text x="52" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Inbox</text>
    </g>
    <g>
      <rect x="118.5" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="148.5" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">✓</text>
      <text x="148.5" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">To Dos</text>
    </g>
    <g>
      <rect x="215" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="245" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◎</text>
      <text x="245" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Internet</text>
    </g>
    <!-- Chat Interface -->
    <rect x="22" y="220" width="253" height="264" rx="5.5" ry="5.5" fill="#f9f9f9" stroke="#333" stroke-width="1"/>
    <text x="42" y="250" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      1pm: Meet Eglantine McDermott
      <tspan x="42" dy="15" style="text-decoration: underline;">Check LinkedIn</tspan>
    </text>
    <text x="42" y="295" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      Alice: We won Widget Corp!
      <tspan x="42" dy="15" style="text-decoration: underline;">Congratulate in Slack</tspan>
    </text>
    <text x="42" y="340" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      15 PRs shipped to prod yesterday.
      <tspan x="42" dy="15" style="text-decoration: underline;">Check Vercel for status</tspan>
    </text>
    <text x="42" y="385" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      Joe's soccer is on, despite rain.
      <tspan x="42" dy="15" style="text-decoration: underline;">Open GameChanger</tspan>
    </text>
     <text x="42" y="425" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      Email to Holly is still in drafts.
      <tspan x="42" dy="15" style="text-decoration: underline;">Open Drafts</tspan>
    </text>
    <!-- Input Box -->
    <rect x="22" y="495" width="253" height="38.5" rx="19.25" ry="19.25" fill="white" stroke="#333" stroke-width="1"/>
    <text x="148.5" y="518" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Ask anything...</text>
  </g>
  
  <g transform="translate(489.5, 55)">
    <!-- Play Mode Phone -->
    <rect x="0" y="0" width="297" height="550" rx="22" ry="22" fill="white" stroke="#333" stroke-width="2"/>
    <text x="148.5" y="-22" font-family="Helvetica, sans-serif" font-size="18" text-anchor="middle" fill="#333">Play Mode</text>
    <!-- Play Mode Tools (even horizontal spacing, right-aligned) -->
    <g>
      <rect x="22" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="52" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">☺</text>
      <text x="52" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Socials</text>
    </g>
    <g>
      <rect x="118.5" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="148.5" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">♪</text>
      <text x="148.5" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Listen</text>
    </g>
    <g>
      <rect x="215" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="245" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">▶</text>
      <text x="245" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Watch</text>
    </g>
    <g>
      <rect x="22" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="52" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◊</text>
      <text x="52" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Message</text>
    </g>
    <g>
      <rect x="118.5" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="148.5" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">□</text>
      <text x="148.5" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Order</text>
    </g>
    <g>
      <rect x="215" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="245" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◎</text>
      <text x="245" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Internet</text>
    </g>
    <!-- Chat Interface -->
    <rect x="22" y="220" width="253" height="264" rx="5.5" ry="5.5" fill="#f9f9f9" stroke="#333" stroke-width="1"/>
    <text x="42" y="250" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      Panda Bear "Ends Meet" is on Spotify
      <tspan x="42" dy="15">for the 31st time this week.</tspan>
      <tspan x="42" dy="15">He plays at the Wonder May 21st.</tspan>
      <tspan x="42" dy="15" style="text-decoration: underline;">Get tickets</tspan>
    </text>
    <text x="42" y="330" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      100s of views on Costa Rica IG story
      <tspan x="42" dy="15">including a message from Brook.</tspan>
      <tspan x="42" dy="15" style="text-decoration: underline;">Respond</tspan>
    </text>
    <text x="42" y="395" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      Continue on techno song "Nuclear"
      <tspan x="42" dy="15" style="text-decoration: underline;">Open Ableton Note</tspan>
    </text>
    <text x="42" y="445" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      You usually go to bed in about an hour.
      <tspan x="42" dy="15" style="text-decoration: underline;">Start getting ready</tspan>
    </text>
    <!-- Input Box -->
    <rect x="22" y="495" width="253" height="38.5" rx="19.25" ry="19.25" fill="white" stroke="#333" stroke-width="1"/>
    <text x="148.5" y="518" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Ask anything...</text>
  </g>
  
  <g transform="translate(836.5, 55)">
    <!-- Travel Mode Phone -->
    <rect x="0" y="0" width="297" height="550" rx="22" ry="22" fill="white" stroke="#333" stroke-width="2"/>
    <text x="148.5" y="-22" font-family="Helvetica, sans-serif" font-size="18" text-anchor="middle" fill="#333">Travel Mode</text>
    <!-- Travel Mode Tools (even horizontal spacing, right-aligned) -->
    <g>
      <rect x="22" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="52" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">↗</text>
      <text x="52" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Directions</text>
    </g>
    <g>
      <rect x="118.5" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="148.5" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◉</text>
      <text x="148.5" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Nearby</text>
    </g>
    <g>
      <rect x="215" y="22" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="245" y="48" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">⟲</text>
      <text x="245" y="72" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Translate</text>
    </g>
    <g>
      <rect x="22" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="52" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">☰</text>
      <text x="52" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Itinerary</text>
    </g>
    <g>
      <rect x="118.5" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="148.5" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◊</text>
      <text x="148.5" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Message</text>
    </g>
    <g>
      <rect x="215" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
      <text x="245" y="151" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000" dominant-baseline="middle">◎</text>
      <text x="245" y="175" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333" dominant-baseline="middle">Internet</text>
    </g>
    <!-- Chat Interface (fixed width and only one container) -->
    <rect x="22" y="220" width="253" height="264" rx="5.5" ry="5.5" fill="#f9f9f9" stroke="#333" stroke-width="1"/>
    <text x="42" y="250" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      96k from your hotel in Drake Bay
      <tspan x="42" dy="15">It's now a 2.5 hours drive</tspan>
      <tspan x="42" dy="15" style="text-decoration: underline;">Get directions</tspan>
    </text>
    <text x="42" y="310" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      You took 97 photos yesterday
      <tspan x="42" dy="15" style="text-decoration: underline;">Get help with selects</tspan>
    </text>
    <text x="42" y="355" font-family="Helvetica, sans-serif" font-size="13" fill="#333">
      Mom left you a voicemail yesterday,
      <tspan x="42" dy="15">yesterday morning.</tspan>
      <tspan x="42" dy="15" style="text-decoration: underline;">Call your mom</tspan>
    </text>
    <!-- Input Box (fixed width) -->
    <rect x="22" y="495" width="253" height="38.5" rx="19.25" ry="19.25" fill="white" stroke="#333" stroke-width="1"/>
    <text x="148.5" y="518" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Ask anything...</text>
  </g>
  <!-- Caption for the diagram -->
  <text x="660" y="655" font-family="Helvetica, sans-serif" font-size="16" text-anchor="middle" fill="#333">Diagram 1: Rough sketch of the Chatphone concept, and three potential modes.</text>
</svg>`
        },
        {
          type: "links",
          title: "Vibe Coding",
          content: "Vibe coding is where you ask an agent to build you what you want instead of asking a developer… At least that is what it is for me.",
          links: [
            {
              text: "My LLM Codegen Workflow (ATM)",
              url: "https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/",
              icon: "📝",
              source: "Harper's Blog",
              description: "A detailed walkthrough of how an experienced engineer uses LLMs for code generation, with practical tips and best practices.",
              imageUrl: "https://harper.blog/images/social_card_bg_harper_hu_cbdc79f03ddda4b5.png"
            },
            {
              text: "Prompt to Product: How I Build with AI Assistants",
              url: "https://medium.com/@bertelli/prompt-to-product-how-i-build-with-ai-assistants-6055da62c9bb",
              source: "Medium",
              description: "A designer's perspective on using AI assistants to go from initial idea to finished product without traditional coding knowledge.",
              imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*c8TxZkxoYbRv4AEVE9QCgQ.png"
            },
            {
              text: "Inside Devin: Scott Wu",
              url: "https://www.lennysnewsletter.com/p/inside-devin-scott-wu",
              source: "Lenny's Newsletter",
              description: "An in-depth conversation about the future of AI engineering tools and how autonomous agents like Devin are changing software development.",
              imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Flenny.substack.com%2Fapi%2Fv1%2Fpost_preview%2F162381125%2Ftwitter.jpg%3Fversion%3D4"
            }
          ]
        },
        {
          type: "links",
          title: "The AI Future",
          content: "One of the least discussed things about AI is about how no one knows how it works (on a case by case basis). If you ask AI for the best roast chicken recipe, we don't know why it would choose one recipe over another.",
          links: [
            {
              text: "Dario Amodei on The Urgency of Interpretability",
              url: "https://www.darioamodei.com/post/the-urgency-of-interpretability",
              source: "Dario Amodei (CEO of Anthropic)",
              description: "Anthropic's CEO argues why understanding AI is important for safety and development.",
              imageUrl: "https://cdn.prod.website-files.com/67ecbba31246a69e485fdd4b/6814ea84b106e48f4269e93b_og_the-urgency-of-interpretability%20(1).jpg"
            },
            {
              text: "The Intelligence Curse",
              url: "https://lukedrago.substack.com/p/the-intelligence-curse#ftnt_ref6",
              source: "Luke Drago's Substack",
              description: "A frightening but compelling vision of AI in the future through the lens of economics.",
              imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Flukedrago.substack.com%2Fapi%2Fv1%2Fpost_preview%2F153997408%2Ftwitter.jpg%3Fversion%3D4"
            },
            {
              text: "Ezra Klein's podcast with Biden's AI head",
              url: "https://www.youtube.com/watch?v=Btos-LEYQ30",
              source: "YouTube",
              description: "A discussion with the Biden administration's AI leadership about policy and the future.",
              imageUrl: "https://static01.nyt.com/images/2025/03/04/opinion/04eks-buchanan/04eks-buchanan-videoSixteenByNine3000.jpg"
            },
            {
              text: "The Case for Multi-Decade AI Timelines",
              url: "https://epochai.substack.com/p/the-case-for-multi-decade-ai-timelines",
              source: "Epoch AI Substack",
              description: "A realistic view of AI and its impact timeline, arguing against how quickly full automation will take place. Partial automation will be just as impactful.",
              imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fepochai.substack.com%2Fapi%2Fv1%2Fpost_preview%2F162161015%2Ftwitter.jpg%3Fversion%3D4"
            }
          ]
        }
      ]
    },
    {
      id: "vibe-coder",
      title: "Vibe Coding",
      slides: [
        {
          type: "section-cover",
          title: "Vibe Coding",
          subtitle: "",
          cards: [
            {
              title: "AI-Assisted Development",
              content: "My approach to building applications using AI tools, from requirement gathering and design to implementation and refinement, with tips for effective collaboration with AI assistants."
            },
            {
              title: "Project Showcase",
              content: "A collection of applications I've built primarily using AI assistance, including a D&D initiative tracker, voice-activated kitchen timer, and a website for my mom's shamanic healing practice."
            }
          ]
        },
        {
          type: "vibe-coder",
          title: "My Vibe Coding Workflow",
          content: "As an experienced product manager who is fairly technical…but not much of a coder… Learning to vibe code has been a (mostly) joyful experience. Going from 0 to 1 on my own has been incredibly empowering. It's allowed me to use my strengths in defining functional and technical requirements, wireframing, giving design direction, and refining micro-interactions. That said, there have also been some frustrating moments. Below, I describe my current workflow and share a few tips and tricks.",
          sections: [
            {
              title: "Elevator Pitch",
              content: "The first thing I do with any idea is write the product's elevator pitch. This is more for me than for the AI, as it helps ensure the high-level requirements come next. For my mom's website, I wanted to create a \"clean, modern, and usable site that clearly sets expectations, presents the offering, and still feels uniquely Karuna.\""
            },
            {
              title: "High Level Requirements & AI Interview",
              content: "Once the elevator pitch is complete, then I write the top level requirements. For my mom's website, this is what I wrote:\n\n\"We are going to create the requirements and specifications for my mom's website. She is a shaman who works out of a yurt in Eugene Oregon. Her old existing website is at Karunagatton.com.  There should be a homepage, an offerings page, a get in touch page, a drum circle page and an about karuna page. You should ask me all the questions you need to create the requirements and specifications. We don't need to worry about any technical requirements right now.\"\n\nThe AI agent then wrote me the following questions:",
              collapsible: "\"General Questions\n1. What's the primary goal of the website?\n\n   ○ Attract new clients?\n\n   ○ Provide information to existing clients?\n\n   ○ Promote events like drum circles?\n\n   ○ Something else?\n\n2. Who is the target audience?\n\n   ○ Local Eugene community?\n\n   ○ People new to shamanic work?\n\n   ○ Existing spiritual seekers?\n\n   ○ A particular age group, gender, or cultural background?\n\n3. What tone and aesthetic should the site have?\n\n   ○ Earthy and grounded?\n\n   ○ Mystical and ethereal?\n\n   ○ Minimal and modern?\n\n   ○ Vintage, nature-inspired, colorful?\n\n4. Are there any existing branding elements we need to use?\n\n   ○ Logo, color scheme, fonts, imagery?\n\n\nPage-Specific Questions\n1. Homepage\nWhat message should the homepage communicate immediately?\n\nShould it include:\n\n   ○ A photo of Karuna or the yurt?\n\n   ○ A brief welcome message?\n\n   ○ Highlights from other pages (e.g., a teaser for the offerings or drum circles)?\n\n   ○ Testimonials or quotes?\n\n   ○ Do you want a call-to-action? (e.g., \"Book a Session,\" \"Join the Circle,\" \"Learn More\")\n\n2. Offerings Page\nWhat types of offerings does Karuna provide? (e.g., one-on-one healing sessions, energy work, spiritual guidance, retreats?)\n\nFor each offering:\n\n   ○ What's it called?\n\n   ○ What does it involve?\n\n   ○ How long is a session?\n\n   ○ What's the price?\n\n   ○ Are sessions virtual, in-person, or both?\n\n   ○ Should people be able to book from this page?\n\n3. Drum Circle Page\nAre the drum circles recurring or one-off events?\n\nAre they open to the public or invite-only?\n\nWhat's the typical structure or vibe?\n\nShould there be a calendar or RSVP function?\n\nWould you want photos, recordings, or testimonials from past circles?\n\n4. Get in Touch Page\nWhat's the preferred method of contact? (Email, form, phone, social media?)\n\nShould it include a physical location (e.g., directions to the yurt)?\n\nDo you want to include a contact form with specific fields?\n\nIs there a newsletter or mailing list people can sign up for?\n\n5. About Karuna Page\nWhat should visitors know about her background, training, lineage, or philosophy?\n\nShould this be written in her voice (\"Hi, I'm Karuna…\") or in third person?\n\nDo you want to include personal photos or images from her work?\""
            },
            {
              title: "Task breakdown",
              content: "Once you answer the agent's questions, I ask it to develop a list of tasks needed to complete the website. This is where you can decide on the technical architecture, what to build first, and generate a task list. I've heard there are quite a few new AI products that help with this, but for now, I've been tracking my tasks in a Google Doc. For more static sites, working on the site page by page works great."
            },
            {
              title: "Develop a Concept",
              content: "Before getting too deep into the details, I work with the AI to develop a product concept… Usually whatever the most important element is. For my mom's website, it was the homepage. For this presentation, it was the structure, layout, and navigation. Sharing examples and other artifacts is always helpful during the concepting phase. I work with the AI on the concept until I'm happy with it. After that, we dive into the details."
            },
            {
              title: "Building out the app",
              content: "Using the concept, functional requirements, and task list, we get to work. There's quite a bit of micro-interaction tuning required to make things look and feel right. Below are a few tips and tricks for working with AI during the build phase:",
              bulletPoints: [
                "The longer a chat thread gets, the worse the AI tends to perform. When I notice performance degrading, I start a new chat and ask the agent to review all work to date—requirements, code, etc.",
                "Make sure the AI shows its thinking. In Cursor, this is a setting. The agent will often over-engineer a solution. It's well intentioned, but it can make the app worse.",
                "Versioning is critical. Commit to Git frequently, as the AI has a short memory and can struggle to revert changes it made.",
                "Get familiar enough with the code to make copy updates and small tweaks—these are often faster to do yourself.",
                "Treat the AI like a teammate and provide context for decisions. This tends to improve the quality of its output.",
                "Plan to optimize micro-interactions—they often need fine-tuning to make the app feel polished."
              ]
            },
            {
              title: "Summary",
              content: "While an AI agent is nowhere near the developer that many of my colleagues are… With proper planning, and if you pay close attention to the build. You can build out something excellent."
            }
          ]
        },
        {
          type: "projects",
          title: "Current Projects",
          content: "Here are some of the projects I've created:",
          projects: [
            {
              title: "D&D Initiative Tracker",
              description: "I wrote the D&D initiative tracker with my now 11-year-old son, for the campaigns I DM with his friends. This app lets me keep track of who goes next during battles and their health points. It also sorts player characters and non-player characters for easy review. The insanely fast way this app came together inspired this whole project.",
              url: "https://dungeon-tracker-mevans212.replit.app/",
              imageUrl: "/dnd-tracker.png"
            },
            {
              title: "Mom's Website",
              description: "After building the Initiative Tracker and the POC for the voice-activated kitchen timer, I turned to my mom's website. She's a shaman who offers spiritual healing, as you can see from the site. One note: the site currently has some technical issues due to how I used the agentic tools. I passed the code from one tool to another and ended up with three global CSS files—not ideal. I'm hoping to refactor this once the vibe coding tools (and my patience with refactoring them) improve.",
              url: "https://karuna-chi.vercel.app/",
              imageUrl: "/karuna.png"
            },
            {
              title: "Voice Activated Kitchen Timer POC",
              description: "As someone who loves to cook and loves using Alexa's kitchen timer… but doesn't love having an Amazon listening device in the house. I wanted to build a voice-activated kitchen timer that doesn't connect to the internet. This is a proof of concept and the first vibe coding project I worked on. If you haven't used Alexa or Google Home in the kitchen, voice is really the best way for me to interact with a timer. My hands are often busy, dirty, or full, and I'll be running around the kitchen yelling, \"Alexa, set a timer for five minutes, please!\"",
              url: "https://voice-timer-2-mevans212.replit.app/",
              imageUrl: "/voice-timer.png"
            },
            {
              title: "This Presentation",
              description: "I created this presentation using Claude Sonnet 3.7 to help with the design, then brought it into Cursor with Claude Sonnet 3.7 to build it out. It's been the most straightforward project I've completed—and the codebase reflects that. While I still had to give a lot of direction on micro-interactions and padding, the agent got most of the big things right.",
              url: "https://ai-research-presentation.vercel.app/section/intro/0",
              imageUrl: "/presentation.png"
            }
          ]
        }
      ]
    },
    {
      id: "next-steps",
      title: "Summary and What's Next",
      slides: [
        {
          type: "section-cover",
          title: "Summary and What's Next",
          subtitle: "",
          cards: [
            {
              title: "Key Insights",
              content: "A synthesis of the major takeaways from my research conversations, concept explorations, and hands-on AI product development experiences."
            },
            {
              title: "Future Directions",
              content: "My thoughts on where AI technology is headed next, how it might change the industry, and what I'm personally excited to explore and build in the near future."
            }
          ]
        },
        {
          type: "comparison",
          title: "Summary - Research & Vibe Coding",
          columns: [
            {
              title: "User & 3rd party research takeaways",
              points: [
                "I'm genuinely excited about the problems we'll be able to solve in both the short and long term.",
                {
                  text: "There will be continued disruption, likely slow and steady, to how organizations staff companies and projects:",
                  subpoints: [
                    "More products & companies with smaller roles that primarily perform work one abstraction layer above where will typically see it.",
                    "Roles with lots of rote work, starting in software and digital businesses but branching out to digitally powered work."
                  ]
                },
                "If AI continues advancing at its current pace, the tools will arrive faster than society can fully adapt. Still, they'll be adopted quickly enough that we'll feel the repercussions.",
                "While all AI usage must become increasingly efficient, training new models remains extremely costly.",
                "I don't think a team of vibe coders will be developing new production apps in at least the next year or two. Engineering expertise in the front-end, back-end and dev ops is still needed to ensure quality across the stack. But AI will be a fast growing contributor to the stack."
              ]
            },
            {
              title: "What I learned while Vibe Coding:",
              points: [
                {
                  text: "It's pretty fun and magical:",
                  subpoints: [
                    "Playing with a friend's portfolio site you described to Claude just minutes earlier",
                    "Watching Claude code incredibly fast",
                    "Seeing ChatGPT create great custom icons from your photos"
                  ]
                },
                "That said, taking a product past 80% with just an AI agent gets tough—AI doesn't retain context like you do, even if it rereads the docs.",
                "Autonomous agents already have the capabilities to integrate into an organization's workflow, but they need to be paired with a developer.",
                "I don't think a team of vibe coders will be developing new production apps from 0-1 or 1 -> in at least the next year or two. Engineering expertise in the front-end, back-end and dev ops is still needed to ensure quality across the stack. ",
                "The tools have improved a lot since I first tried them in spring 2024. I'm curious if they'll continue advancing at the same pace."
              ]
            }
          ]
        },
        {
          type: "comparison",
          title: "Summary - The Future & How I Built this App",
          columns: [
            {
              title: "How I'm feeling about the future",
              points: [
                "I do believe that amazing advances in science, technology and other disciplines will be accomplished by teams using AI.",
                "I do believe AI is already hurting many kids ability to learn, although this can be mitigated but there is work at a local, state and federal level. Without taking the appropriate steps, this will get worse and will continue.",
                {
                  text: "I do believe Automated General Intelligence (AI that can make decisions and perform tasks better than a human) is both closer and further away than we think.",
                  subpoints: [
                    "<strong>Close:</strong> AIs ability to go very deep in certain subjects, while making and recommending decisions better decisions into certain areas (like coding) seems relatively close (1-2 years).",
                    "<strong>Far:</strong> But, AIs ability to think cross functionally while making decisions based on logic, emotional intelligence, and lived experience seems further out."
                  ]
                },
                "I do think that the industry will shrink in size, as a percentage of the workforce, slowly as the industry's output quickly grows.",
                "I hope we have the leadership at the local, state and federal level that can help us prioritize and make the changes to how we learn, work and play"
              ]
            },
            {
              title: "How I built this app, would I do it again?",
              points: [
                "I started with a keynote outline for a majority of the slides.",
                "I shared a PDF of the slides with Claude, and asked it to use this content to write a presentation webapp. I also asked for a consistent bottom navigation, and a top navigation.",
                "I finished building out the content in a google doc and started working it into the web app.",
                "AI didn't generate any of the written content, but did copy edit much of it.",
                "I asked for new slide types as needed, and generally updated the copy in the app myself.",
                "Everything went smoothly until I hit some complexity wall and optimizing and making changes became harder for Claude to get right. The final optimizations to the design of this app had too much back and forth.",
                "If I did it again, I'd wait till the very end to add the CSS."
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sectionId" element={<Section />} />
          <Route path="/section/:sectionId/:slideIndex" element={<SlideView />} />
          <Route path="/section/:sectionId/subsection/:subsectionId/:slideIndex" element={<SlideView />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the first section
    if (presentationData.sections.length > 0) {
      navigate(`/section/${presentationData.sections[0].id}/0`);
    }
  }, [navigate]);
  
  return <div className="loading">Loading presentation...</div>;
}

// Section Component
function Section() {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the section
    const sectionIndex = presentationData.sections.findIndex(section => section.id === sectionId);
    if (sectionIndex !== -1) {
      navigate(`/section/${sectionId}/0`);
    } else {
      navigate('/');
    }
  }, [sectionId, navigate]);
  
  return <div className="loading">Loading section...</div>;
}

// Slide View Component
function SlideView() {
  const { sectionId, slideIndex, subsectionId } = useParams();
  const [currentSection, setCurrentSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [currentSubsection, setCurrentSubsection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubsections, setExpandedSubsections] = useState({});
  const [globalSlideInfo, setGlobalSlideInfo] = useState({ current: 0, total: 0 });
  const navigate = useNavigate();
  const menuRef = useRef(null);
  
  // Function to toggle subsection expansion
  const toggleSubsection = (sectionId, subsectionId) => {
    setExpandedSubsections(prev => {
      const key = `${sectionId}-${subsectionId}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };
  
  // Check if a subsection is expanded
  const isSubsectionExpanded = (sectionId, subsectionId) => {
    const key = `${sectionId}-${subsectionId}`;
    return !!expandedSubsections[key];
  };
  
  // Function to find subsection slide based on subsection id and slide index
  const findSubsectionSlideIndex = useCallback((section, subsectionId, slideIdx) => {
    // First, count the main section slides (these come before subsection slides)
    let totalIndex = section.slides.length;
    
    // Then iterate through subsections to find the right one
    if (section.subsections) {
      for (let i = 0; i < section.subsections.length; i++) {
        const subsection = section.subsections[i];
        if (subsection.id === subsectionId) {
          // Found the right subsection, add the slide index
          return totalIndex + slideIdx;
        }
        // This is not the subsection we're looking for, add its slides to the total
        totalIndex += subsection.slides.length;
      }
    }
    
    // If no matching subsection found, return the original slide index
    return slideIdx;
  }, []);
  
  // Handle clicks outside the menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && 
          event.target.className !== 'menu-toggle') {
        setMenuOpen(false);
      }
    }
    
    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);
  
  // Set expanded section when sectionId changes
  useEffect(() => {
    setExpandedSection(sectionId);
  }, [sectionId]);
  
  // Calculate total slides and current global slide index
  useEffect(() => {
    // Calculate total slides
    const totalSlides = presentationData.sections.reduce((acc, section) => {
      let sectionSlides = section.slides.length;
      
      // Add slides from subsections if any
      if (section.subsections) {
        section.subsections.forEach(subsection => {
          sectionSlides += subsection.slides.length;
        });
      }
      
      return acc + sectionSlides;
    }, 0);
    
    // Calculate current global slide index
    let currentGlobalIndex = 0;
    for (let i = 0; i < presentationData.sections.length; i++) {
      const section = presentationData.sections[i];
      
      if (section.id === sectionId) {
        // If we're in a subsection
        if (subsectionId) {
          // Add all main section slides
          currentGlobalIndex += section.slides.length;
          
          // Add slides from subsections before this one
          for (let j = 0; j < section.subsections.length; j++) {
            const subsection = section.subsections[j];
            if (subsection.id === subsectionId) {
              // We found our subsection - add the current slide index
              currentGlobalIndex += parseInt(slideIndex, 10);
              break;
            } else {
              // Add all slides from previous subsections
              currentGlobalIndex += subsection.slides.length;
            }
          }
        } else {
          // We're in the main section - just add the slide index
          currentGlobalIndex += parseInt(slideIndex, 10);
        }
        break;
      } else {
        // Add all slides from previous sections and their subsections
        currentGlobalIndex += section.slides.length;
        
        if (section.subsections) {
          section.subsections.forEach(subsection => {
            currentGlobalIndex += subsection.slides.length;
          });
        }
      }
    }
    
    setGlobalSlideInfo({
      current: currentGlobalIndex + 1, // +1 for 1-based indexing
      total: totalSlides
    });
  }, [sectionId, subsectionId, slideIndex]);
  
  // Function to find a slide based on params
  const findSlideFromParams = useCallback(() => {
    // Find the section
    const section = presentationData.sections.find(s => s.id === sectionId);
    if (!section) return { section: null, slide: null, subsection: null };
    
    // If we have a subsection ID, look in that subsection
    if (subsectionId) {
      const subsection = section.subsections?.find(sub => sub.id === subsectionId);
      if (subsection) {
        const slideIdx = parseInt(slideIndex, 10);
        if (!isNaN(slideIdx) && slideIdx >= 0 && slideIdx < subsection.slides.length) {
          return { 
            section, 
            subsection, 
            slide: subsection.slides[slideIdx] 
          };
        }
      }
    } else {
      // No subsection, look in main section slides
      const slideIdx = parseInt(slideIndex, 10);
      if (!isNaN(slideIdx) && slideIdx >= 0 && slideIdx < section.slides.length) {
        return { 
          section, 
          subsection: null, 
          slide: section.slides[slideIdx] 
        };
      }
    }
    return { section: null, slide: null, subsection: null };
  }, [sectionId, slideIndex, subsectionId]);

  // Update the effect to use our new finder function
  useEffect(() => {
    const { section, subsection, slide } = findSlideFromParams();
    
    if (section && slide) {
      setCurrentSection(section);
      setCurrentSubsection(subsection);
      setCurrentSlide(slide);
    } else {
      navigate('/');
    }
  }, [sectionId, subsectionId, slideIndex, navigate, findSlideFromParams]);
  
  // Update navigation functions
  const goToNextSlide = useCallback(() => {
    if (!currentSection) return;
    
    if (currentSubsection) {
      // We're in a subsection
      const currentSlideIdx = parseInt(slideIndex, 10);
      
      if (currentSlideIdx < currentSubsection.slides.length - 1) {
        // Go to next slide in current subsection
        navigate(`/section/${sectionId}/subsection/${currentSubsection.id}/${currentSlideIdx + 1}`);
      } else {
        // Find the next subsection or move to the next section
        const subsectionIndex = currentSection.subsections.findIndex(sub => sub.id === currentSubsection.id);
        
        if (subsectionIndex < currentSection.subsections.length - 1) {
          // Go to the first slide of the next subsection
          const nextSubsection = currentSection.subsections[subsectionIndex + 1];
          navigate(`/section/${sectionId}/subsection/${nextSubsection.id}/0`);
        } else {
          // Go to first slide of the next section
          const currentSectionIdx = presentationData.sections.findIndex(s => s.id === sectionId);
          if (currentSectionIdx < presentationData.sections.length - 1) {
            const nextSection = presentationData.sections[currentSectionIdx + 1];
            navigate(`/section/${nextSection.id}/0`);
          }
        }
      }
    } else {
      // We're in a main section
      const currentSlideIdx = parseInt(slideIndex, 10);
      
      if (currentSlideIdx < currentSection.slides.length - 1) {
        // Go to next slide in current section
        navigate(`/section/${sectionId}/${currentSlideIdx + 1}`);
      } else if (currentSection.subsections && currentSection.subsections.length > 0) {
        // Go to first slide of the first subsection
        navigate(`/section/${sectionId}/subsection/${currentSection.subsections[0].id}/0`);
      } else {
        // Go to first slide of next section
        const currentSectionIdx = presentationData.sections.findIndex(s => s.id === sectionId);
        if (currentSectionIdx < presentationData.sections.length - 1) {
          const nextSection = presentationData.sections[currentSectionIdx + 1];
          navigate(`/section/${nextSection.id}/0`);
        }
      }
    }
  }, [currentSection, currentSubsection, sectionId, slideIndex, navigate]);

  const goToPrevSlide = useCallback(() => {
    if (!currentSection) return;
    
    if (currentSubsection) {
      // We're in a subsection
      const currentSlideIdx = parseInt(slideIndex, 10);
      
      if (currentSlideIdx > 0) {
        // Go to previous slide in current subsection
        navigate(`/section/${sectionId}/subsection/${currentSubsection.id}/${currentSlideIdx - 1}`);
      } else {
        // Find the previous subsection or move to the main section slides
        const subsectionIndex = currentSection.subsections.findIndex(sub => sub.id === currentSubsection.id);
        
        if (subsectionIndex > 0) {
          // Go to the last slide of the previous subsection
          const prevSubsection = currentSection.subsections[subsectionIndex - 1];
          const lastSlideIndex = prevSubsection.slides.length - 1;
          navigate(`/section/${sectionId}/subsection/${prevSubsection.id}/${lastSlideIndex}`);
        } else {
          // Go to the last slide of the main section
          const lastMainSlideIndex = currentSection.slides.length - 1;
          navigate(`/section/${sectionId}/${lastMainSlideIndex}`);
        }
      }
    } else {
      // We're in a main section
      const currentSlideIdx = parseInt(slideIndex, 10);
      
      if (currentSlideIdx > 0) {
        // Go to previous slide in current section
        navigate(`/section/${sectionId}/${currentSlideIdx - 1}`);
      } else {
        // Go to last slide of previous section or its last subsection
        const currentSectionIdx = presentationData.sections.findIndex(s => s.id === sectionId);
        if (currentSectionIdx > 0) {
          const prevSection = presentationData.sections[currentSectionIdx - 1];
          
          if (prevSection.subsections && prevSection.subsections.length > 0) {
            // Go to the last slide of the last subsection
            const lastSubsection = prevSection.subsections[prevSection.subsections.length - 1];
            const lastSlideIndex = lastSubsection.slides.length - 1;
            navigate(`/section/${prevSection.id}/subsection/${lastSubsection.id}/${lastSlideIndex}`);
          } else {
            // Go to the last slide of the previous section
            const lastSlideIndex = prevSection.slides.length - 1;
            navigate(`/section/${prevSection.id}/${lastSlideIndex}`);
          }
        }
      }
    }
  }, [currentSection, currentSubsection, sectionId, slideIndex, navigate]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  }, [goToNextSlide, goToPrevSlide, setMenuOpen]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  if (!currentSection || !currentSlide) {
    // Backup approach to find the slide if state isn't working properly
    const section = presentationData.sections.find(s => s.id === sectionId);
    if (section) {
      const slideIdx = parseInt(slideIndex, 10);
      if (!isNaN(slideIdx) && slideIdx >= 0 && slideIdx < section.slides.length) {
        const slide = section.slides[slideIdx];
        return <main className={`slide-content ${slide.type}-slide`}>
          {renderSlide(slide)}
        </main>;
      }
    }
    return <div className="loading">Loading...</div>;
  }
  
  // Check if this is the first slide (title slide)
  const isFirstSlide = 
    presentationData.sections[0] && 
    presentationData.sections[0].slides && 
    presentationData.sections[0].slides[0] === currentSlide;
  
  // Check if this is the last slide of the last section
  const isLastSlide = 
    presentationData.sections[presentationData.sections.length - 1] &&
    presentationData.sections[presentationData.sections.length - 1].slides &&
    presentationData.sections[presentationData.sections.length - 1].slides[
      presentationData.sections[presentationData.sections.length - 1].slides.length - 1
    ] === currentSlide;
  
  return (
    <div className={`slide-view ${isFirstSlide ? 'first-slide-active' : ''} ${isLastSlide ? 'last-slide-active' : ''}`}>
      <header className="header">
        <div className="logo" onClick={() => navigate('/')}>
          MEvans AI Workbook
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>
      
      {menuOpen && (
        <nav className="navigation" ref={menuRef}>
          <ul>
            {presentationData.sections.map((section, idx) => (
              <li key={section.id} className={section.id === sectionId ? 'active' : ''}>
                <div 
                  className="section-title" 
                  onClick={() => {
                    // Toggle expanded section state
                    if (expandedSection === section.id) {
                      // If this section is already expanded, navigate to it
                      navigate(`/section/${section.id}/0`);
                    } else {
                      // Otherwise, expand this section without navigating
                      setExpandedSection(section.id);
                    }
                  }}
                >
                  {section.title}
                </div>
                {expandedSection === section.id && (
                  <>
                    <ul className="section-slides" style={{margin: 0, padding: '0 0 0 1rem', backgroundColor: 'white'}}>
                      {section.slides.map((slide, slideIdx) => (
                        // Skip the first slide (cover) in the navigation
                        slideIdx !== 0 ? (
                          <li key={slideIdx} className={section.id === sectionId && slideIdx === parseInt(slideIndex, 10) && !subsectionId ? 'active' : ''} style={{margin: 0, padding: '0.5rem 0', backgroundColor: 'white'}}>
                            <div 
                              className="slide-link"
                              onClick={() => {
                                navigate(`/section/${section.id}/${slideIdx}`);
                                setMenuOpen(false); // Always close menu when clicking on a slide
                              }}
                              style={{backgroundColor: 'white'}}
                            >
                              {slide.title || `Slide ${slideIdx + 1}`}
                            </div>
                          </li>
                        ) : null
                      ))}
                    </ul>
                    
                    {/* Display subsections with zero-gap styles */}
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="subsections" style={{margin: 0, padding: '0 0 0 0.5rem', backgroundColor: 'white'}}>
                        {section.subsections.map((subsection) => (
                          <div key={subsection.id} className="subsection" style={{margin: 0, padding: 0, backgroundColor: 'white'}}>
                            <div 
                              className={`subsection-title ${isSubsectionExpanded(section.id, subsection.id) ? 'expanded' : 'collapsed'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubsection(section.id, subsection.id);
                              }}
                              style={{margin: 0, padding: '0.5rem 0', backgroundColor: 'white'}}
                            >
                              {subsection.title}
                            </div>
                            {isSubsectionExpanded(section.id, subsection.id) && (
                              <ul className="subsection-slides">
                                {subsection.slides.map((slide, slideIdx) => (
                                  // Skip the subsection cover slide in the navigation
                                  !slide.isSubsectionCover ? (
                                    <li 
                                      key={slideIdx} 
                                      className={
                                        `subsection-slide-item
                                        ${subsectionId === subsection.id && parseInt(slideIndex, 10) === slideIdx ? 'active' : ''}`
                                      }
                                    >
                                      <div 
                                        className="slide-link"
                                        onClick={() => {
                                          navigate(`/section/${section.id}/subsection/${subsection.id}/${slideIdx}`);
                                          setMenuOpen(false);
                                        }}
                                      >
                                        {slide.title || `Slide ${slideIdx + 1}`}
                                      </div>
                                    </li>
                                  ) : null
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
      
      {/* Only render side click areas when menu is closed */}
      {!menuOpen && (
        <>
          {/* Left side click area */}
          <div className="side-click-area left-click" onClick={goToPrevSlide}></div>
          
          {/* Right side click area */}
          <div className="side-click-area right-click" onClick={goToNextSlide}></div>
        </>
      )}
      
      <main className={`slide-content ${currentSlide.type}-slide`}>
        {renderSlide(currentSlide)}
      </main>
      
      <div className="slide-controls">
        <button className="prev-slide" onClick={goToPrevSlide}>←</button>
        {globalSlideInfo.current > 3 && (
          <div className="slide-progress">
            Slide {globalSlideInfo.current - 3} of {globalSlideInfo.total - 3}
          </div>
        )}
        {globalSlideInfo.current <= 3 && <div className="slide-progress-placeholder"></div>}
        <button className="next-slide" onClick={goToNextSlide}>→</button>
      </div>
    </div>
  );
}

// Helper function to render different slide types
function renderSlide(slide) {
  switch (slide.type) {
    case 'cover':
      // Check if this is the first slide (title slide)
      const isFirstSlide = 
        presentationData.sections[0] && 
        presentationData.sections[0].slides && 
        presentationData.sections[0].slides[0] === slide;
      
      return (
        <div className={`cover-slide ${isFirstSlide ? 'inverted' : ''}`}>
          <h1>{slide.title}</h1>
          {slide.subtitle && <h2>{slide.subtitle}</h2>}
        </div>
      );
    
    case 'section-cover':
      return (
        <div className={`section-cover-slide ${slide.isSubsectionCover ? 'subsection-cover' : ''}`}>
          <div className="section-cover-content">
            <h1>{slide.title}</h1>
            {slide.subtitle && <h2>{slide.subtitle}</h2>}
            {slide.cards && !slide.isSubsectionCover && (
              <div className="section-cover-cards">
                {slide.cards.map((card, index) => (
                  <div className="section-card" key={index}>
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    
    case 'text':
      // Check if this is the introduction slide (first text slide in the first section)
      const isIntroduction = 
        presentationData.sections[0] && 
        presentationData.sections[0].slides && 
        presentationData.sections[0].slides.some((s, idx) => s.type === 'text' && idx === 1 && s === slide);
      
      return (
        <div className={`text-slide ${isIntroduction ? 'introduction' : ''}`}>
          {slide.title && <h1>{slide.title}</h1>}
          <div className="content">
            {slide.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      );
    
    case 'toc':
      // Create clickable TOC that matches navigation
      return (
        <div className="toc-slide">
          <h1>{slide.title}</h1>
          <ul className="toc-list">
            {presentationData.sections.slice(1).map((section) => (
              <li key={section.id}>
                <Link 
                  to={`/section/${section.id}/0`} 
                  className="toc-link"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    
    case 'hypothesis':
      return (
        <div className="hypothesis-slide">
          <h1>{slide.title}</h1>
          <div className="hypothesis-statement">
            <p>{slide.hypothesis}</p>
          </div>
          <div className="hypothesis-columns">
            <div className="present">
              {slide.presentHypothesis.split('\n').map((paragraph, idx) => (
                <p key={`present-${idx}`}>{paragraph}</p>
              ))}
            </div>
            <div className="future">
              {slide.futureHypothesis.split('\n').map((paragraph, idx) => (
                <p key={`future-${idx}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      );
    
    case 'methodology':
      return (
        <div className="methodology-slide">
          <h1>{slide.title}</h1>
          <div className="methodology-content">
            <div className="text-column">
              <p>
                {slide.content}
                {slide.footnote && (
                  <a href="#footnote-1" className="footnote-marker">¹</a>
                )}
              </p>
            </div>
            
            {slide.tableData && (
              <div className="table-column">
                <div className="table-container">
                  <table className="methodology-table">
                    <thead>
                      <tr className="purple-header">
                        {slide.tableData.headers.map((header, idx) => (
                          <th key={idx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {slide.tableData.rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          
          {/* Footnote container */}
          {slide.footnote && (
            <div className="footnotes">
              <p id="footnote-1" className="footnote">
                <sup>1</sup> {slide.footnote}
              </p>
            </div>
          )}
        </div>
      );
    
    case 'finding':
      return (
        <div className="finding-slide">
          <h1>{slide.title}</h1>
          <div className="finding-content">
            <div className="points">
              <ul>
                {slide.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="quotes">
              {slide.quotes.map((quote, idx) => (
                <blockquote key={idx}>"{quote}"</blockquote>
              ))}
            </div>
          </div>
        </div>
      );
    
    case 'thought-experiment':
      return (
        <div className="thought-experiment-slide">
          <h1>{slide.title}</h1>
          {slide.svgContent && (
            <div className="svg-container" dangerouslySetInnerHTML={{ __html: slide.svgContent }} />
          )}
          {slide.content && (
            <div className="content blog-format" dangerouslySetInnerHTML={{ __html: slide.content }} />
          )}
        </div>
      );
    
    case 'links':
      return (
        <div className="links-slide">
          <h1>{slide.title}</h1>
          <p className="description">{slide.content}</p>
          <ul className="link-list">
            {slide.links.map((link, idx) => (
              <li key={idx} className={`link-item ${link.imageUrl ? 'has-image' : ''}`}>
                <div className="link-wrapper">
                  {link.imageUrl && (
                    <div className="link-image-container">
                      <img src={link.imageUrl} alt={link.text} className="link-image" />
                    </div>
                  )}
                  <div className="link-content">
                    <div className="link-header">
                      {!link.imageUrl && link.icon && <span className="link-icon">{link.icon}</span>}
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                      </a>
                    </div>
                    {link.source && <div className="link-source">{link.source}</div>}
                    {link.description && <p className="link-description">{link.description}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    
    case 'vibe-coder':
      return (
        <div className="vibe-coder-slide">
          <h1>{slide.title}</h1>
          
          <div className="hero-image-container">
            <img src="/cursor-screenshot.png" alt="Screenshot of Cursor IDE" className="hero-image" />
          </div>
          <div className="image-caption">Me asking cursor to add this image as a hero image to this page</div>
          
          <p className="intro">{slide.content}</p>
          
          {slide.sections && (
            <div className="sections">
              {slide.sections.map((section, idx) => (
                <div key={idx} className="section">
                  <h2>{section.title}</h2>
                  <div className="content">
                    {section.content.split('\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                    {section.collapsible && (
                      <details className="collapsible">
                        <summary className="collapsible-header">
                          Click to see details
                        </summary>
                        <div className="collapsible-content">
                          {section.collapsible.split('\n').map((line, lIdx) => (
                            <p key={lIdx}>{line}</p>
                          ))}
                        </div>
                      </details>
                    )}
                    {section.bulletPoints && (
                      <ul className="bullet-points">
                        {section.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    
    case 'projects':
      return (
        <div className="projects-slide">
          <h1>{slide.title}</h1>
          {slide.content && <p className="intro">{slide.content}</p>}
          <div className="projects-grid">
            {slide.projects.map((project, idx) => (
              <div key={idx} className="project-card">
                {project.url.startsWith('/') ? (
                  <Link to={project.url} className="project-image-link" aria-label={`Navigate to ${project.title}`}>
                    {/* This empty link covers the entire card and makes it all clickable */}
                  </Link>
                ) : (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-image-link" aria-label={`Open ${project.title}`}>
                    {/* This empty link covers the entire card and makes it all clickable */}
                  </a>
                )}
                <div className="project-image-container">
                  <div 
                    className="project-image" 
                    style={{
                      backgroundImage: `url(${project.imageUrl || `https://placehold.co/600x400/f0f0f0/333333?text=${encodeURIComponent(project.title)}`})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top center',
                      width: '100%',
                      height: '100%'
                    }}
                  ></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <div className="project-details">
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    
    case 'comparison':
      return (
        <div className="comparison-slide">
          <h1>{slide.title}</h1>
          {slide.description && <p className="description">{slide.description}</p>}
          <div className="comparison-container">
            {slide.columns.map((column, index) => (
              <div className="comparison-column" key={index}>
                <h2>{column.title}</h2>
                <ul className="comparison-points">
                  {column.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {point.subpoints ? (
                        <>
                          {point.text}
                          <ul className="comparison-subpoints">
                            {point.subpoints.map((subpoint, subpointIndex) => (
                              <li key={subpointIndex} dangerouslySetInnerHTML={{ __html: subpoint }} />
                            ))}
                          </ul>
                        </>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    
    default:
      return (
        <div className="default-slide">
          <h1>{slide.title || 'Slide'}</h1>
          <p>{slide.content || 'No content available'}</p>
        </div>
      );
  }
}

export default App;