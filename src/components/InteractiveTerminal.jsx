import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check, Sparkles, Code2, CornerDownLeft } from 'lucide-react';
import { personalInfo, internship, funFacts } from '../data/content';

const COMMANDS = {
  whoami: {
    name: 'whoami',
    description: 'Print bio and background',
    output: {
      name: personalInfo.name,
      role: 'Backend Software Engineering & Generative AI',
      college: personalInfo.college,
      status: 'Open for Summer 2026 Internships & AI Collaborations',
      location: personalInfo.location,
      contact: personalInfo.email,
    },
  },
  skills: {
    name: 'cat skills.json',
    description: 'View technical stack & proficiencies',
    output: {
      languages: ['Python (90%)', 'Java (85%)', 'C (80%)', 'JavaScript'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Mongoose'],
      database: ['MongoDB', 'MySQL', 'SQLite'],
      ai_ml: ['Generative AI', 'Prompt Engineering', 'LLM Integration'],
      tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Canva'],
    },
  },
  internship: {
    name: 'internship.sh',
    description: 'View industry experience details',
    output: {
      company: internship.company,
      role: internship.role,
      duration: internship.duration,
      summary: internship.description,
      key_contributions: internship.highlights,
    },
  },
  academic: {
    name: 'academic.json',
    description: 'View education & CGPA breakdown',
    output: {
      degree: personalInfo.degree,
      institution: personalInfo.college,
      cgpa: '8.15 (till 4th semester)',
      hsc_12th: '83.5% (SVM Hr.Sec)',
      sslc_10th: '83.4% (VBMMS)',
      key_certifications: [
        'AICTE EduSkills Gen AI Virtual Internship (2026)',
        'NPTEL IoT Elite+Silver - 79% (2025)',
        'Infosys Springboard Gen AI for All (2025)',
      ],
    },
  },
  philosophy: {
    name: 'ai-philosophy',
    description: 'View engineering mindset & principles',
    output: {
      core_values: [
        'Clean, modular code over complex spaghetti hacks',
        'Scalable RESTful API design with proper JWT security',
        'Leveraging Gen AI to automate real-world workflows',
        'Continuous learning & rapid adaptation to modern tech',
      ],
      insights: funFacts,
    },
  },
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    {
      command: 'whoami',
      output: COMMANDS.whoami.output,
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdKey) => {
    const cleanCmd = cmdKey.trim().toLowerCase();
    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          command: 'help',
          output: {
            available_commands: [
              'whoami - Print developer bio',
              'skills - View technical stack',
              'internship - Industry experience breakdown',
              'academic - Educational achievements & scores',
              'philosophy - Engineering values & insights',
              'clear - Clear terminal screen',
            ],
          },
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setInputVal('');
      return;
    }

    // Match command key or matching alias
    let matched = null;
    if (COMMANDS[cleanCmd]) {
      matched = COMMANDS[cleanCmd];
    } else {
      matched = Object.values(COMMANDS).find(
        (c) => c.name.toLowerCase() === cleanCmd || c.name.toLowerCase().includes(cleanCmd)
      );
    }

    if (matched) {
      setHistory((prev) => [
        ...prev,
        {
          command: matched.name,
          output: matched.output,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cleanCmd,
          output: {
            error: `Command not recognized: '${cleanCmd}'. Type or click 'help' for available commands.`,
          },
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }

    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  const copyTerminalContent = () => {
    const text = history
      .map((item) => `$ ${item.command}\n${JSON.stringify(item.output, null, 2)}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full text-left my-6">
      <div className="rounded-2xl border border-[#2D2D2D] bg-[#121316] text-[#E1E4EA] shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1C1D22] border-b border-[#2D2D2D]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            <span className="ml-2 text-xs font-mono text-[#8C92A4] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#B8893D]" />
              dharshini@dev-box:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTerminalContent}
              className="px-2.5 py-1 rounded-md bg-[#2B2C33] hover:bg-[#383A44] text-xs text-[#C5C8D4] transition flex items-center gap-1.5"
              title="Copy terminal session"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={() => setHistory([])}
              className="p-1 rounded-md bg-[#2B2C33] hover:bg-[#383A44] text-xs text-[#C5C8D4] transition"
              title="Clear terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Action Button Bar */}
        <div className="flex flex-wrap items-center gap-2 px-4 py-2.5 bg-[#17181D] border-b border-[#292A32] text-xs font-mono">
          <span className="text-[#8C92A4] mr-1 flex items-center gap-1">
            <Code2 className="w-3 h-3 text-[#B8893D]" /> Quick Commands:
          </span>
          {Object.keys(COMMANDS).map((key) => (
            <button
              key={key}
              onClick={() => executeCommand(key)}
              className="px-2.5 py-1 rounded-md bg-[#23252C] hover:bg-[#B8893D]/20 hover:text-[#E2B76D] text-[#A6ABB9] border border-[#31343F] hover:border-[#B8893D]/40 transition duration-200 flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5 text-[#B8893D]" />
              {key}
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="px-2.5 py-1 rounded-md bg-[#23252C] hover:bg-red-500/20 text-[#A6ABB9] hover:text-red-300 border border-[#31343F] transition"
          >
            clear
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-xs sm:text-sm space-y-4 max-h-[460px] overflow-y-auto custom-scrollbar">
          <div className="text-[#8C92A4] text-xs pb-2 border-b border-[#23252C]">
            Interactive Developer CLI v2.4 — Type or click quick commands above.
          </div>

          <AnimatePresence initial={false}>
            {history.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                {/* Command Input Prompt */}
                <div className="flex items-center justify-between text-[#E89E3D]">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="text-emerald-400">dharshini@dev</span>
                    <span className="text-[#8C92A4]">:</span>
                    <span className="text-blue-400">~/portfolio</span>
                    <span className="text-white">$</span>
                    <span className="text-amber-200">{item.command}</span>
                  </div>
                  <span className="text-[10px] text-[#636877]">{item.time}</span>
                </div>

                {/* Command Result JSON / Formatted Code */}
                <div className="p-3.5 rounded-xl bg-[#17181D] border border-[#282932] text-[#C0C5D0] overflow-x-auto">
                  <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap">
                    {JSON.stringify(item.output, null, 2)}
                  </pre>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Live Input Form */}
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'whoami', 'skills', 'internship', 'academic', 'philosophy' or 'help'..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-amber-200 placeholder-[#585E6E]"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-[#B8893D] hover:bg-[#C89849] text-black font-semibold text-xs transition flex items-center gap-1"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
