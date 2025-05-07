import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';

// Main presentation data structure
const presentationData = {
  title: "MEvans AI Workbook",
  sections: [
    {
      id: "intro",
      title: "Welcome",
      slides: [
        {
          type: "cover",
          title: "MEvans AI Workbook",
          subtitle: ""
        },
        {
          type: "text",
          title: "About",
          content: "I've long been someone who tracks and adopts new technology as quickly as I can. And while I certainly got excited when ChatGPT launched. I started using itfor spelling / grammar checker, when I remembered, but I never got that deep…\n\nThat's because I spent the past 1.5 years doing joyful hard work for opening up Casa Bonita to the general public. And while Casa Bonita is a complicated beast… Cliff divers, thousands of covers,  Mexican food and all… Their digital products don't need AI. And, anybody who knows me, knows that I get single minded when presented with a set of challenging problems. AI would have to wait. Also, go to Casa Bonita, it's wonderful there. \n\nAfter Casa Bonita I transitioned the digital products to Casa Bonita, I got laid off by my agency. The one blessing was that I could catch up on AI. \n\nAs part of a mini-sabbatical, I wanted to answer a question: utilizing AI, could I design and develop and ship something useful all by myself? It didn't take me long to learn that the answer was: \n\n\"Yes. You can actually build something useful that would typically take days… in hours.\" \n\nHoly shit. In the next 5 years, will I be able to ask Claude to \"build me an airline website\" and have it get a majority of the work done? Will AI unlock massive amounts of new products that weren't feasible or cost effective? Or should I get out of the industry and try to open a yoga studio? I didn't have a good sense about what the answer would be. I was also thinking about my children, would their creativity and intellect be useful in the future. Deep breaths…\n\nWhile I'd been living under a rock, most of my colleagues and peers had not. How were they using AI? How were they working with it? Is it hard to build a custom agent (spoiler: it's not that hard)?\n\nSimilar to when I was going through a divorce, I decided to conduct some personal research with a set of smart colleagues and friends who I figure would have thought about this and have some expertise. The divorce research was incredibly useful. Hopefully this would be as well."
        },
        {
          type: "toc",
          title: "Table of Contents",
          items: [
            "Research Findings",
            "Hypothesis, Audience & Methodology",
            "Findings: The Present",
            "Findings: The Future",
            "Summary",
            "The chatphone",
            "A collection of reading on the subject",
            "Vibe Coding",
            "On My Mind"
          ]
        }
      ]
    },
    {
      id: "research-findings",
      title: "Research Findings",
      slides: [
        {
          type: "section-cover",
          title: "Research Findings",
          subtitle: ""
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
          content: "I spoke with 13 colleagues. The conversations ranged from 15 to 60 minutes, with follow-ups in several cases. They were a mix of designers, developers, product managers, and other business folks. Over half were executives at their companies, and the rest were relatively senior. These conversations took place over the span of a month (these folks are hard to schedule), and it took me a couple of weeks to write these findings down.",
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
      ]
    },
    {
      id: "present-findings",
      title: "Findings - Present",
      slides: [
        {
          type: "section-cover",
          title: "Findings - Present",
          subtitle: ""
        },
        {
          type: "finding",
          title: "AI is now central to how many work, often sparking moments of awe as people grasp its current and future power.",
          points: [
            "Most use AI everyday, over half use (and pay for) multiple chatbots, several have already built useful products primarily with AI, or because AI made it easier to build the product and start the company.",
            "Many had moments of awe where they realized AI's power was going to change so much about their world",
            "The couple folks who didn't really use AI, were unsurprisingly the most skeptical of it."
          ],
          quotes: [
            "I use it everyday. It is embedded in every project I work on. I insist on it",
            "I'm at the same level of \"holy shit\" that you were when you dove in deep",
            "It's fundamental to our company now. Every developer has copilot, every department uses it for something",
            "I pay for Claude, ChatGPT and Gemini… It's ridiculous, but they all have their strengths. But it feels important to keep track",
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
          title: "Several treated AI like a person, valuing its tone—though many found it overly confident.",
          points: [
            "Several commented on how the agents mirrors the tone you approach your prompts with, and this led them to engage more deeply and frequently.",
            "Many commented on how confident AI are in their solution whether they are right or wrong",
            "AI cheered up a couple of the participants, and they used AI to help calm them down.",
            "AI felt hyperbolic to some, it quickly praised some of the audience members ideas as being excellent or amazing"
          ],
          quotes: [
            "I've had conversations with Claude about a family member's health issues, and those conversations honestly cheered me up and reduced my anxiety. Claude seemed to really understand where I was coming from. So much better than the Google Search holes I used to go into",
            "AI is so dang confident. When really it has no business doing so. I'll get into a loop on something, say \"I fixed your problem\" and then nope… not fixed.",
            "I laugh when an agent says \"What an amazing idea\" when I ask it to do something mundane like put some data into a spreadsheet.",
            "It's funny while it has the same feeling that AI is overhyped, sometimes I feel like we don't talk about it enough"
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
          subtitle: ""
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
          title: "Most worried about AI's impact on the world kids today will grow up in, though a few felt it was overblown.",
          points: [
            "Several wondered what their kids would do if AI does all this work goes away",
            "One person had a teenager who felt AI was ruining their ability to learn.",
            "A couple thought that it was overblown, AI would be like other much hyped tech and merely be a tool in the toolbox."
          ],
          quotes: [
            "I really do worry about my children. In a way that I haven't with smartphones or social media. This could really affect their ability to make a living, not just affect their attention span",
            "My 16 year old daughter recently came up to me and said she deleted ChatGPT from her phone. She said everyone at her school is using it all the time and no one is really learning. She wanted to learn",
            "This is like self-driving cars. Lets see where it's at in 20 years"
          ]
        }
      ]
    },
    {
      id: "chatphone",
      title: "Chatphone",
      slides: [
        {
          type: "section-cover",
          title: "Chatphone",
          subtitle: ""
        },
        {
          type: "thought-experiment",
          title: "Chatphone Thought Experiment",
          content: "",
          svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680">
  <!-- Background - changed to match presentation background -->
  <rect width="1200" height="680" fill="#f8fafc"/>
  
  <!-- Phone Frames - adjusted positioning to reduce padding -->
  <g transform="translate(120, 50)">
    <!-- Work Mode Phone -->
    <rect x="0" y="0" width="250" height="500" rx="20" ry="20" fill="white" stroke="#333" stroke-width="2"/>
    <text x="125" y="-20" font-family="Helvetica, sans-serif" font-size="18" text-anchor="middle" fill="#333">Work Mode</text>
    
    <!-- Work Mode Tools -->
    <rect x="20" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="50" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Auth</text>
    <text x="50" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">○</text>
    
    <rect x="95" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Food</text>
    <text x="125" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">□</text>
    
    <rect x="170" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="200" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Message</text>
    <text x="200" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◊</text>
    
    <rect x="20" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="50" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Inbox</text>
    <text x="50" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">▼</text>
    
    <rect x="95" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">To Dos</text>
    <text x="125" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">✓</text>
    
    <rect x="170" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="200" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Internet</text>
    <text x="200" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◎</text>
    
    <!-- Chat Interface -->
    <rect x="20" y="200" width="210" height="240" rx="5" ry="5" fill="#f9f9f9" stroke="#333" stroke-width="1"/>
    <text x="125" y="320" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Messages appear here</text>
    
    <!-- Input Box -->
    <rect x="20" y="450" width="210" height="35" rx="17.5" ry="17.5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="473" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Ask me anything...</text>
  </g>
  
  <g transform="translate(445, 50)">
    <!-- Play Mode Phone -->
    <rect x="0" y="0" width="250" height="500" rx="20" ry="20" fill="white" stroke="#333" stroke-width="2"/>
    <text x="125" y="-20" font-family="Helvetica, sans-serif" font-size="18" text-anchor="middle" fill="#333">Play Mode</text>
    
    <!-- Play Mode Tools -->
    <rect x="20" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="50" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Socials</text>
    <text x="50" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">☺</text>
    
    <rect x="95" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Listen</text>
    <text x="125" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">♪</text>
    
    <rect x="170" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="200" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Watch</text>
    <text x="200" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">▶</text>
    
    <rect x="20" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="50" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Message</text>
    <text x="50" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◊</text>
    
    <rect x="95" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Order</text>
    <text x="125" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">□</text>
    
    <rect x="170" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="200" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Internet</text>
    <text x="200" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◎</text>
    
    <!-- Chat Interface -->
    <rect x="20" y="200" width="210" height="240" rx="5" ry="5" fill="#f9f9f9" stroke="#333" stroke-width="1"/>
    <text x="125" y="320" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Messages appear here</text>
    
    <!-- Input Box -->
    <rect x="20" y="450" width="210" height="35" rx="17.5" ry="17.5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="473" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Ask me anything...</text>
  </g>
  
  <g transform="translate(770, 50)">
    <!-- Travel Mode Phone -->
    <rect x="0" y="0" width="250" height="500" rx="20" ry="20" fill="white" stroke="#333" stroke-width="2"/>
    <text x="125" y="-20" font-family="Helvetica, sans-serif" font-size="18" text-anchor="middle" fill="#333">Travel Mode</text>
    
    <!-- Travel Mode Tools -->
    <rect x="20" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="50" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Directions</text>
    <text x="50" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">↗</text>
    
    <rect x="95" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Nearby</text>
    <text x="125" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◉</text>
    
    <rect x="170" y="50" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="200" y="95" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Translate</text>
    <text x="200" y="75" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">⟲</text>
    
    <rect x="20" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="50" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Itinerary</text>
    <text x="50" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">☰</text>
    
    <rect x="95" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Message</text>
    <text x="125" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◊</text>
    
    <rect x="170" y="125" width="60" height="60" rx="5" ry="5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="200" y="170" font-family="Helvetica, sans-serif" font-size="12" text-anchor="middle" fill="#333">Internet</text>
    <text x="200" y="150" font-family="Helvetica, sans-serif" font-size="24" text-anchor="middle" fill="#000">◎</text>
    
    <!-- Chat Interface -->
    <rect x="20" y="200" width="210" height="240" rx="5" ry="5" fill="#f9f9f9" stroke="#333" stroke-width="1"/>
    <text x="125" y="320" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Messages appear here</text>
    
    <!-- Input Box -->
    <rect x="20" y="450" width="210" height="35" rx="17.5" ry="17.5" fill="white" stroke="#333" stroke-width="1"/>
    <text x="125" y="473" font-family="Helvetica, sans-serif" font-size="14" text-anchor="middle" fill="#888">Ask me anything...</text>
  </g>
</svg>`
        }
      ]
    },
    {
      id: "interesting-reads",
      title: "Interesting Reads",
      slides: [
        {
          type: "section-cover",
          title: "Interesting Reads",
          subtitle: ""
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
          subtitle: ""
        },
        {
          type: "vibe-coder",
          title: "Me, The vibe coder",
          content: "As I've been digging deeper into my \"learning how to vibe code\" side project, I wanted to share a few learnings and a quick look at my current setup. Some of this comes from advice I've picked up from others, some is just from trial and error. I'm a fairly technical non-coder, who has deep software design & dev experience. So this is what worked for me. Thanks to everyone who helped along the way!",
          keyLearnings: [
            {
              icon: "🛠️",
              title: "You can build real stuff now",
              description: "Designing and shipping, great-feeling bespoke sites and apps is totally feasible with AI — even in its current \"worst it'll ever be\" form."
            },
            {
              icon: "📝",
              title: "Document first",
              description: "Upfront planning helps a lot. Write down your goals and strategy, create a PRD, sketch some wireframes, define your tech architecture, write a branding brief. More clarity upfront = better results."
            },
            {
              icon: "⚙️",
              title: "Make AI part of the upfront",
              description: "Let AI wear multiple hats. Use it to help you write your docs. Ask it what questions it needs answered to help. Treat it like a fast collaborator, who needs explicit direction."
            },
            {
              icon: "🔧",
              title: "AI is better at creation than optimization",
              description: "Make sure you have something you like before you start optimizing... The later-stage tweaking has been the hardest part for me."
            },
            {
              icon: "🏗️",
              title: "Be firm about architecture",
              description: "AI will try to cut corners. Push it to find root causes, explain tradeoffs, and outline potential risks before it runs wild with implementation."
            },
            {
              icon: "✅",
              title: "Make it ask for approval",
              description: "Agents move fast and assume a lot. Before they act, prompt them to check in."
            }
          ],
          workflow: [
            {
              icon: "💻",
              title: "Cursor > Replit (for me)",
              description: "Cursor gives me more visibility and flexibility. Replit is great but feels more abstracted. Cursor also helped me learn faster."
            },
            {
              icon: "🔄",
              title: "Iterate on your workflow",
              description: "I've been able to refine my process from project to project. I jot down improvements as I go."
            },
            {
              icon: "📞",
              title: "Phone a friend",
              description: "I've gotten stuck a few times. A quick DM to a proper engineer has saved me hours."
            }
          ]
        }
      ]
    },
    {
      id: "next-steps",
      title: "On My Mind",
      slides: [
        {
          type: "section-cover",
          title: "On My Mind",
          subtitle: ""
        },
        {
          type: "thought-experiment",
          title: "Chatphone Thought Experiment",
          content: "In a Buddhist monastery, everyone learns to use breath as a tool to stop mental dispersion and to build up concentration power."
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
  const { sectionId, slideIndex } = useParams();
  const [currentSection, setCurrentSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [globalSlideInfo, setGlobalSlideInfo] = useState({ current: 0, total: 0 });
  const navigate = useNavigate();
  const menuRef = useRef(null);
  
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
    const totalSlides = presentationData.sections.reduce(
      (acc, section) => acc + section.slides.length, 0
    );
    
    // Calculate current global slide index
    let currentGlobalIndex = 0;
    for (let i = 0; i < presentationData.sections.length; i++) {
      const section = presentationData.sections[i];
      if (section.id === sectionId) {
        currentGlobalIndex += parseInt(slideIndex, 10);
        break;
      } else {
        currentGlobalIndex += section.slides.length;
      }
    }
    
    setGlobalSlideInfo({
      current: currentGlobalIndex + 1, // +1 for 1-based indexing
      total: totalSlides
    });
  }, [sectionId, slideIndex]);
  
  useEffect(() => {
    // Find the section and slide
    const section = presentationData.sections.find(s => s.id === sectionId);
    if (section) {
      setCurrentSection(section);
      const slideIdx = parseInt(slideIndex, 10);
      if (!isNaN(slideIdx) && slideIdx >= 0 && slideIdx < section.slides.length) {
        setCurrentSlide(section.slides[slideIdx]);
      } else {
        navigate(`/section/${sectionId}/0`);
      }
    } else {
      navigate('/');
    }
  }, [sectionId, slideIndex, navigate]);
  
  const goToNextSlide = useCallback(() => {
    const currentSlideIdx = parseInt(slideIndex, 10);
    if (currentSection && currentSlideIdx < currentSection.slides.length - 1) {
      // Go to next slide in current section
      navigate(`/section/${sectionId}/${currentSlideIdx + 1}`);
    } else {
      // Go to first slide of next section
      const currentSectionIdx = presentationData.sections.findIndex(s => s.id === sectionId);
      if (currentSectionIdx < presentationData.sections.length - 1) {
        const nextSection = presentationData.sections[currentSectionIdx + 1];
        navigate(`/section/${nextSection.id}/0`);
      }
    }
  }, [currentSection, sectionId, slideIndex, navigate]);
  
  const goToPrevSlide = useCallback(() => {
    const currentSlideIdx = parseInt(slideIndex, 10);
    if (currentSlideIdx > 0) {
      // Go to previous slide in current section
      navigate(`/section/${sectionId}/${currentSlideIdx - 1}`);
    } else {
      // Go to last slide of previous section
      const currentSectionIdx = presentationData.sections.findIndex(s => s.id === sectionId);
      if (currentSectionIdx > 0) {
        const prevSection = presentationData.sections[currentSectionIdx - 1];
        navigate(`/section/${prevSection.id}/${prevSection.slides.length - 1}`);
      }
    }
  }, [sectionId, slideIndex, navigate]);
  
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
                  <ul className="section-slides">
                    {section.slides.map((slide, slideIdx) => (
                      // Skip the first slide (cover) in the navigation
                      slideIdx !== 0 ? (
                        <li key={slideIdx} className={section.id === sectionId && slideIdx === parseInt(slideIndex, 10) ? 'active' : ''}>
                          <div 
                            className="slide-link"
                            onClick={() => {
                              navigate(`/section/${section.id}/${slideIdx}`);
                              setMenuOpen(false); // Always close menu when clicking on a slide
                            }}
                          >
                            {slide.title || `Slide ${slideIdx + 1}`}
                          </div>
                        </li>
                      ) : null
                    ))}
                  </ul>
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
        <div className="section-cover-slide">
          <div className="section-cover-content">
            <h1>{slide.title}</h1>
            {slide.subtitle && <h2>{slide.subtitle}</h2>}
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
          {slide.content ? (
            <div className="quote-box">
              <p>{slide.content}</p>
            </div>
          ) : slide.svgContent ? (
            <div className="svg-container" dangerouslySetInnerHTML={{ __html: slide.svgContent }} />
          ) : null}
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
          <p className="intro">{slide.content}</p>
          
          <h2>Key Learnings</h2>
          <div className="learnings">
            {slide.keyLearnings.map((learning, idx) => (
              <div key={idx} className="learning-item">
                <span className="icon">{learning.icon}</span>
                <h3>{learning.title}</h3>
                <p>{learning.description}</p>
              </div>
            ))}
          </div>
          
          <h2>Workflow Stuff</h2>
          <div className="workflow">
            {slide.workflow.map((item, idx) => (
              <div key={idx} className="workflow-item">
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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