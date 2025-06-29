import React, { useState, useRef, useEffect } from 'react';
import '../styles/AIChatbot.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Robert's AI assistant. I can tell you about his current role as a Software Engineer at AIG, his experience with GenAI and AWS, his progression from intern to full-time engineer, and his technical expertise. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Complete Resume Information for Robert J. Guzman
  const robertResumeContext = `
You are Robert J. Guzman's personal AI assistant. Answer questions about Robert based on his complete and current resume below. Be conversational, professional, and helpful.

=== ROBERT J. GUZMAN - SOFTWARE ENGINEER ===

CONTACT INFORMATION:
- Email: robert.guzman3@lc.cuny.edu
- LinkedIn: linkedin.com/in/robertjguzman
- GitHub: github.com/Robjguzman/Robertguzmanny
- Location: Bronx, New York

EDUCATION:
• Bachelor of Science in Computer Science (Cum Laude) | GPA: 3.5/4.0
  Lehman College, CUNY - Bronx, New York (December 2023)
  - Graduated Cum Laude with 3.5 GPA
  - Strong academic performance in computer science

SKILLS & TECHNOLOGIES:

Programming Languages: Python, Java, JavaScript/TypeScript, C++, HTML/CSS

Frameworks & Libraries: React, Angular, Node.js, Express.js, Flask, Ionic, Bootstrap, Spring Boot

Build & Dev Tools: Gradle, Maven, Git (GitHub, Bitbucket), Jira, Confluence, Postman

Cloud & Infrastructure: AWS (Bedrock, Lambda, EC2, S3, RDS, DynamoDB, SQS)

Databases & Analytics: PostgreSQL, Oracle SQL, MySQL, Firebase, Power BI

Coursework: Data Structures, Database Systems, Computer Organization, Mobile Development, Operating Systems, Full-Stack Development, Networks

CURRENT WORK EXPERIENCE:

American International Group (AIG) | Technology Analyst Program (July 2024 - Present)

Software Engineer, Information Security Office | April 2025 – Present (Jersey City, NJ)
• Automated manual security assessments across 50+ reviews with BlinkOps security-as-code in Spring Boot and Gradle microservices under SLAs, slashing vulnerabilities 30% and manual testing 4%
• Reengineered Java Spring Boot and Gradle microservices, rewrote PostgreSQL queries to onboard SSA compliance fields for 1,000+ audits-mitigating schema drift, boosting data accuracy 12% and throughput 32%
• Streamlined the Angular and TypeScript UI—reactive forms and lazy loading; reduced load time by 10%, form-completion time by 5%, and errors by 15% for 500+ compliance analysts

Software Engineer, GenAI | July 2024 – April 2025
• Drove a serverless GenAI migration workflow using API Gateway, Lambda, SQS, DynamoDB and a Bedrock-hosted Claude LLM with exponential backoff to translate 20K+ IBM UDB queries cutting cycle time 13%, slashing manual effort by 5%
• Rearchitected Underwriter Assist's Angular, TypeScript UI and Python, AWS Bedrock microservices via Palantir Foundry with underwriting analysts, ensuring <500ms responses, supporting 500+ analyses, and accelerating premium-setting by 7%
• Pioneered Bedrock LLM–based Code Explainability workflow with dynamic context resolver to auto-generate line-by-line docs for 250+ Python/JS/TS files, enabling platform/security teams to onboard 18% faster

PREVIOUS EXPERIENCE:

TD Securities (TD Bank) | Software Engineer Intern (June 2023 - August 2023) - Manhattan, NY
• Architected and implemented an innovative Oracle SQL database schema to streamline trading server requests, resulting in a 17% reduction in data storage and retrieval time
• Engineered a high-performance Java web service with Spring Boot and Maven, improving data processing efficiency by 22% and optimizing trading operations for greater reliability and speed
• Developed an automation script using Python, leading to a 10% increase in testing efficiency through different trading scenarios, enabling validation of data interactions between the Spring web service and the Oracle database

Project Destined – Cushman & Wakefield | Project Manager (September 2022 - December 2022) - New York, NY
• Oversaw a cross-functional team of 10+ interns from New York State during a 12-week program, fostering collaborative coding efforts and skill augmentation
• Crafted an investment memo using advanced software techniques, presenting it to leading firms like Brookfield, JLL, Tishman Speyer, and others, yielding a 20% increase in investor engagement and a successful presentation to 50+ stakeholders
• Mentored and led intern analysis of a multifamily asset acquisition, improving investment decision accuracy by 15% through data modeling and problem-solving

Columbia University Med Center | Software Developer Intern (June 2021 - September 2021) - Manhattan, NY
• Devised different solutions with the development team to identify and resolve over 50 bugs in JavaScript programs, resulting in improved functionality and a seamless user experience for the company's web applications
• Participated actively in daily stand-ups and meetings, providing valuable suggestions that led to an 8% increase in product efficiency and overall improvement while keeping the updates using Jira Software
• Leveraged React, Node.js, Express.js, and SQL expertise to elevate web applications at Columbia University Med Center. Expertly crafted efficient front-end interfaces and scalable server functions, optimizing system efficiency and user experience

Google | Software Engineer Development and Mentorship Program (November 2020 - May 2021) - New York, NY
• Designed and developed a portfolio of 10 Python-based coding projects, including data-driven apps and algorithmic problems. These projects distinctly attest to the aptitude for transforming abstract ideas into tangible, high-impact code solutions
• Optimized data structures, resulting in a 20% memory utilization improvement, and engineered software systems to seamlessly accommodate an 11% growth in user data
• Coordinated cross-functional troubleshooting, fostering collaboration with QA, PMS, and UX teams, yielding 13% reduction in issue resolution time

PROJECTS:

Learn Android Mobile App | Java, Android SDK, XML, Firebase Realtime Database (September 2022 - December 2022)
• Enhanced application performance by optimizing code and refining data management strategies, leading to a smoother user experience and reduced crash rates
• Leveraged Java programming language to implement key features and functionalities within the Android app, improving navigation speed by 15% and reducing user errors by up to 25%
• Implemented intuitive UI/UX enhancements using XML layouts and Android SDK, increasing user engagement and session duration by 20%

Attendance Tracking System | Ionic, Firebase, HTML, CSS, TypeScript (January 2022 - May 2022)
• Constructed responsive front-end and optimized back-end components for a web-based system using HTML, CSS and TypeScript resulting in a 10% reduction in average page load time and a 22% improvement in game frame rate
• Performed regular testing and debugging to ensure the web app's performance and reliability met user expectations, leading to increased user satisfaction
• Integrated real-time attendance monitoring using Firebase Realtime Database listeners, enabling instant updates and improving system accuracy by 18%

PERSONAL BACKGROUND:
- Born in Dominican Republic, immigrated to New York at young age
- Bilingual: Fluent in English and Spanish
- Passionate about baseball - lifelong player and fan
- Technology enthusiast since childhood
- Strong work ethic and resilience shaped by cultural background
- Dedicated to creating innovative solutions through code

Answer any questions about Robert's background, experience, skills, education, or career aspirations. Be conversational and provide specific details from this resume when relevant. Robert is currently working at AIG as a Software Engineer in the Information Security Office and has extensive experience with GenAI, AWS, Spring Boot, Angular, and enterprise-level software development.
`;

  // AI API Integration - Multiple options
  const callAI = async (userMessage) => {
    try {
      // Option 1: OpenAI ChatGPT (requires API key)
      // Uncomment and add your API key
      /*
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_OPENAI_API_KEY_HERE`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: robertContext },
            { role: "user", content: userMessage }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });
      
      if (openaiResponse.ok) {
        const data = await openaiResponse.json();
        return data.choices[0].message.content;
      }
      */

      // Google Gemini Free API - Using environment variable for security
      const geminiApiKey = process.env.REACT_APP_GEMINI_API_KEY;
      
      if (geminiApiKey) {
        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `${robertResumeContext}\n\nUser question: ${userMessage}\n\nPlease provide a helpful, professional response about Robert. Keep responses conversational and under 150 words.`
              }]
            }]
          })
        });
        
        if (geminiResponse.ok) {
          const data = await geminiResponse.json();
          return data.candidates[0].content.parts[0].text;
        } else {
          console.error('Gemini API error:', geminiResponse.status, geminiResponse.statusText);
          const errorData = await geminiResponse.text();
          console.error('Error details:', errorData);
        }
      }

      // Fallback to simple error message if Gemini fails
      return "I am having trouble connecting to my AI service right now, but I would love to help you learn about Robert! Try asking about his current role at AIG, his experience with GenAI and AWS, or his technical skills.";
      
    } catch (error) {
      console.error('AI API Error:', error);
      return "I am having trouble connecting to my AI service right now, but I would love to help you learn about Robert! Try asking about his current role at AIG, his experience with GenAI and AWS, or his technical skills.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const userQuestion = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Call AI API with user's question
      const response = await callAI(userQuestion);
      
      const botMessage = {
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage = {
        type: 'bot',
        content: "I am having trouble connecting right now, but I can still help you learn about Robert! Try asking about his education, work experience, or technical skills.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about Robert's current role at AIG",
    "What's his experience with GenAI and AWS?",
    "How did he progress from intern to full-time engineer?",
    "What are his most impressive achievements?",
    "Tell me about his technical skills and expertise",
    "What projects has he worked on?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '🤖'}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div className="chatbot-info">
              <h4>Robert&apos;s AI Assistant</h4>
              <span className="status">Online</span>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.content}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="quick-questions">
              <p>Quick questions:</p>
              {quickQuestions.map((question, index) => (
                <button 
                  key={index}
                  className="quick-question-btn"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Robert's background..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="send-button"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;