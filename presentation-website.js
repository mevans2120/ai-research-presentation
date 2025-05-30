// File: src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';

// Main presentation data structure
const presentationData = {
  title: "AI Research Findings",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      slides: [
        {
          type: "cover",
          title: "AI",
          subtitle: "Michael's Workspace"
        },
        {
          type: "text",
          title: "Introduction",
          content: "I've long been someone who tracks and adopts new technology as quickly as I can. And while I certainly got excited when ChatGPT launched, I started using it as a spelling / grammar checker, when I remembered to use it, but I never got that deep or tested it... That's because I spent the past year and a half doing joyful but hard work for a restaurant / theme park: Casa Bonita. After the hard work for Casa Bonita was completed, and I got laid off by the agency I was working for… I knew I had catch up to do. As part of a mini-sabbatical, I wanted to answer a question: utilizing AI, could I design and develop and ship something useful all by myself? It didn't take me long to learn that the answer was: \"Yes. You can actually build something useful that would typically take days… in hours.\""
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
            "Me, the vibe coder and what I've build",
            "Big open questions"
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
          subtitle: "Michael's Workspace"
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
          content: "I spoke with 11 colleagues. The conversations ranged from 15 to 60 minutes, with follow-ups in several cases. They were a mix of designers, developers, product managers, and other business folks. Over half were executives at their companies, and the rest were relatively senior. These conversations took place over the span of a month (these folks are hard to schedule), and it took me a couple of weeks to write these findings down.",
          additionalContent: "I didn't record the interviews, but I took notes during and after each conversation. As a result, the snippets often approximate quotes but aren't word for word."
        }
      ]
    },
    {
      id: "present-findings",
      title: "Findings - Present",
      slides: [
        {
          type: "section-cover",
          title: "AI Research",
          subtitle: "Findings - Present"
        },
        {
          type: "finding",
          title: "AI is deeply embedded into the way most work, and has enabled new capabilities. AI's capabilities often left folks with a moment of awe when they realized its existing and likely future power.",
          points: [
            "Most use AI everyday, over half use (and pay for) multiple chatbots, several have already built useful products primarily with AI, or because AI made it easier to build the product and start the company.",
            "Many had moments of awe where they realized AI's power was going to change so much about their world",
            "The couple folks who didn't really use AI, were unsurprisingly the most skeptical of it."
          ],
          quotes: [
            "I use it everyday. It is embedded in every project I work on. I insist on it",
            "I'm at the same level of \"holy shit\" that you were when you dove in deep",
            "It's fundamental to our company now. Every developer has copilot, every department uses it for something",
            "I pay for Claude, ChatGPT and Gemini… It's ridiculous, but they all have there strengths. But it feels important to keep track",
            "It's kind of a bunch of hype. I think it dies down, or is underwhelming, like self driving cars"
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
            "Even the audience members who felt that AI was going to be the most transformative technology in their lifetime, thought the hype machine was a bit out of control"
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
          title: "Several people felt that AI's personality and tone were important and spoke to it as if it were a person, though many also found it far too confident.",
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
          title: "AI Research",
          subtitle: "Findings - Future (5 - 10 years out)"
        },
        {
          type: "finding",
          title: "Most think AI will be a boon and then a bust for folks who work in tech… but no one knows when the bust will come.",
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
          title: "Most were concerned about the world their children, or their friends' and family's children, will grow up in, though a few felt those worries were overblown.",
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
          title: "AI Research",
          subtitle: "Chatphone"
        },
        {
          type: "thought-experiment",
          title: "Chatphone Thought Experiment",
          content: "In a Buddhist monastery, everyone learns to use breath as a tool to stop mental dispersion and to build up concentration power."
        }
      ]
    },
    {
      id: "interesting-reads",
      title: "Interesting Reads",
      slides: [
        {
          type: "section-cover",
          title: "AI Research",
          subtitle: "Interesting Reads"
        },
        {
          type: "links",
          title: "Vibe Coding",
          content: "Vibe coding is where you ask an agent to build you what you want instead of asking a developer… At least that is what it is for me.",
          links: [
            {
              text: "An excellent how to Vibe Code workflow from an engineer",
              url: "https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/"
            },
            {
              text: "An excellent how to vibe code from a designer",
              url: "https://medium.com/@bertelli/prompt-to-product-how-i-build-with-aiassistants-6055da62c9bb"
            },
            {
              text: "Some notes on working with AI on a development project",
              url: "https://www.linkedin.com/pulse/teaching-claude-better-engineer-jonpolikowski-bjrxc/?trackingId=r9Oh%2B8dDhxQtElPtr6SVmg%3D%3D"
            },
            {
              text: "Lenny's podcast with the CEO of Cognition (who make Devin the autonomous AI Engineer)",
              url: "https://www.youtube.com/watch?v=gI0ZNhA0rvE&list=PL2fLjt2dG0N6unOOF3nHWYGcJJIQR1NKm"
            }
          ]
        },
        {
          type: "links",
          title: "The AI Future",
          content: "Interesting thought pieces about the AI Future",
          links: [
            {
              text: "Dario Modei CEO of Anthropic argues why understanding AI is important",
              url: "https://www.darioamodei.com/post/the-urgency-ofinterpretability"
            },
            {
              text: "A frightening but compelling vision of the AI in the future through the lens of economics",
              url: "https://lukedrago.substack.com/p/the-intelligencecurse#ftnt_ref6"
            },
            {
              text: "Ezra Klein's podcast on AI with Biden's AI head",
              url: "https://www.youtube.com/watch?v=Btos-LEYQ30"
            },
            {
              text: "A realistic view of AI and its impact timeline",
              url: "https://epochai.substack.com/p/thecase-for-multi-decade-ai-timelines"
            }
          ]
        }
      ]
    },
    {
      id: "vibe-coder",
      title: "Vibe Coder",
      slides: [
        {
          type: "section-cover",
          title: "AI Research",
          subtitle: "Me, the vibe coder and what I've built"
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
        },
        {
          type: "text",
          title: "Working together",
          content: "One goal\nEveryone aligned to the same purpose\nSmall, senior, hybrid teams\nReady to seriously engage, no mid-project rotation\nNo handoffs\nConstant iterations, not throwing designs over a wall\nPrototypes, not presentations\nClose integration and sharing of in-progress work"
        }
      ]
    },
    {
      id: "next-steps",
      title: "Next Steps",
      slides: [
        {
          type: "section-cover",
          title: "AI Research",
          subtitle: "What I'm thinking about next"
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
  const navigate = useNavigate();
  
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
  
  const goToNextSlide = () => {
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
  };
  
  const goToPrevSlide = () => {
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
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, slideIndex]);
  
  if (!currentSection || !currentSlide) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="slide-view">
      <header className="header">
        <div className="logo" onClick={() => navigate('/')}>
          AI Research
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>
      
      {menuOpen && (
        <nav className="navigation">
          <ul>
            {presentationData.sections.map((section, idx) => (
              <li key={section.id} className={section.id === sectionId ? 'active' : ''}>
                <div className="section-title" onClick={() => navigate(`/section/${section.id}/0`)}>
                  {section.title}
                </div>
                {section.id === sectionId && (
                  <ul className="section-slides">
                    {section.slides.map((slide, slideIdx) => (
                      <li key={slideIdx} className={slideIdx === parseInt(slideIndex, 10) ? 'active' : ''}>
                        <Link to={`/section/${section.id}/${slideIdx}`}>
                          {slide.title || `Slide ${slideIdx + 1}`}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
      
      <main className={`slide-content ${currentSlide.type}`}>
        {renderSlide(currentSlide)}
      </main>
      
      <div className="slide-controls">
        <button className="prev-slide" onClick={goToPrevSlide}>←</button>
        <div className="slide-progress">
          Slide {parseInt(slideIndex, 10) + 1} of {currentSection.slides.length}
        </div>
        <button className="next-slide" onClick={goToNextSlide}>→</button>
      </div>
    </div>
  );
}

// Helper function to render different slide types
function renderSlide(slide) {
  switch (slide.type) {
    case 'cover':
      return (
        <div className="cover-slide">
          <h1>{slide.title}</h1>
          <h2>{slide.subtitle}</h2>
        </div>
      );
    
    case 'section-cover':
      return (
        <div className="section-cover-slide">
          <h1>{slide.title}</h1>
          <h2>{slide.subtitle}</h2>
        </div>
      );
    
    case 'text':
      return (
        <div className="text-slide">
          <h1>{slide.title}</h1>
          <div className="content">
            {slide.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      );
    
    case 'toc':
      return (
        <div className="toc-slide">
          <h1>{slide.title}</h1>
          <ul className="toc-list">
            {slide.items.map((item, idx) => (
              <li key={idx}>{item}</li>
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
          <div className="content">
            <p>{slide.content}</p>
            <p className="additional-content">{slide.additionalContent}</p>
          </div>
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
          <div className="quote-box">
            <p>{slide.content}</p>
          </div>
        </div>
      );
    
    case 'links':
      return (
        <div className="links-slide">
          <h1>{slide.title}</h1>
          <p className="description">{slide.content}</p>
          <ul className="link-list">
            {slide.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
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
