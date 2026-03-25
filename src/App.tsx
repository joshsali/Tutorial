import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Zap, 
  Layers, 
  Palette, 
  Code, 
  CheckCircle2, 
  ChevronRight,
  Terminal,
  Cpu,
  Layout,
  ExternalLink
} from 'lucide-react';

const StepCard = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
        {number}
      </div>
      <Icon className="w-6 h-6 text-slate-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const CodeBlock = ({ code, label }: { code: string, label?: string }) => (
  <div className="relative group">
    {label && (
      <div className="absolute -top-3 left-4 px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] uppercase tracking-widest rounded border border-slate-700">
        {label}
      </div>
    )}
    <pre className="bg-slate-900 text-blue-300 p-6 rounded-xl overflow-x-auto font-mono text-sm border border-slate-800 shadow-xl">
      <code>{code}</code>
    </pre>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('spacing');

  const examples = {
    spacing: {
      title: 'Spacing & Sizing',
      code: '<div className="p-8 m-4 w-64 h-32 bg-blue-500"></div>',
      preview: <div className="p-8 m-4 w-full max-w-[200px] h-24 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-xs font-bold">p-8 m-4</div>
    },
    colors: {
      title: 'Colors & States',
      code: '<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Click Me</button>',
      preview: <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200">Hover Me</button>
    },
    flex: {
      title: 'Flexbox & Layout',
      code: '<div className="flex justify-between items-center gap-4">...</div>',
      preview: (
        <div className="flex justify-between items-center gap-2 w-full bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
          <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span>Tailwind<span className="text-blue-600">Mastery</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#intro" className="hover:text-blue-600 transition-colors">Introduction</a>
            <a href="#steps" className="hover:text-blue-600 transition-colors">Steps</a>
            <a href="#examples" className="hover:text-blue-600 transition-colors">Playground</a>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <header id="intro" className="mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              Tutorial Guide
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Rapidly build modern websites <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">without leaving your HTML.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              Tailwind CSS is a utility-first CSS framework packed with classes like <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">flex</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">pt-4</code>, and <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">text-center</code> that can be composed to build any design, directly in your markup.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1">
                Start Learning
              </button>
              <button className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Documentation
              </button>
            </div>
          </motion.div>
        </header>

        {/* Why Tailwind Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <Zap className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-slate-600">No more jumping between files. Style your components as you build them.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <Palette className="w-10 h-10 text-indigo-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Customizable</h3>
            <p className="text-slate-600">A robust design system out of the box that you can extend to match your brand.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <Layout className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Responsive</h3>
            <p className="text-slate-600">Build complex responsive layouts with simple prefixes like <code className="text-emerald-600">md:</code> or <code className="text-emerald-600">lg:</code>.</p>
          </div>
        </section>

        {/* Steps Section */}
        <section id="steps" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How to get started</h2>
            <p className="text-slate-500">Three simple steps to Tailwind mastery.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="01"
              title="Install Tailwind"
              description="Add Tailwind CSS to your project via npm and generate your configuration files."
              icon={Terminal}
            />
            <StepCard 
              number="02"
              title="Configure Paths"
              description="Add the paths to all of your template files in your tailwind.config.js file."
              icon={Cpu}
            />
            <StepCard 
              number="03"
              title="Start Styling"
              description="Add Tailwind's directives to your CSS and start using utility classes in your HTML."
              icon={Code}
            />
          </div>
          
          <div className="mt-12">
            <CodeBlock 
              label="Terminal"
              code={`npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`}
            />
          </div>
        </section>

        {/* Interactive Examples */}
        <section id="examples" className="mb-32">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Utility-First Playground</h2>
                <p className="text-slate-400">See how simple classes transform your elements in real-time.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-4">
                  {Object.entries(examples).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left p-6 rounded-2xl transition-all border ${
                        activeTab === key 
                          ? 'bg-white/10 border-white/20 shadow-lg' 
                          : 'bg-transparent border-transparent hover:bg-white/5 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-bold ${activeTab === key ? 'text-white' : ''}`}>{value.title}</span>
                        {activeTab === key && <ChevronRight className="w-5 h-5 text-blue-400" />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 min-h-[300px] flex flex-col">
                  <div className="flex-1 flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full flex justify-center"
                      >
                        {examples[activeTab as keyof typeof examples].preview}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-blue-400 border border-white/5">
                    {examples[activeTab as keyof typeof examples].code}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to build something amazing?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Tailwind CSS isn't just a framework; it's a new way of thinking about design. Once you start building with utilities, you'll never want to go back to traditional CSS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
            >
              Official Docs <ExternalLink className="w-4 h-4" />
            </a>
            <button className="text-blue-600 font-bold px-8 py-4 hover:bg-blue-50 rounded-2xl transition-all">
              Join the Community
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <Zap className="w-5 h-5" />
            <span>TailwindMastery © 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
            <a href="#" className="hover:text-slate-600">Twitter</a>
            <a href="#" className="hover:text-slate-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
