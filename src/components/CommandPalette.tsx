import React, { useState, useEffect } from 'react';
import { Search, Terminal, ArrowRight, X, Sparkles, FolderGit2, Cpu, Wrench, Send } from 'lucide-react';
import { projects } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (elementId: string) => {
    onClose();
    const elem = document.getElementById(elementId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navActions = [
    { label: 'Work & Case Studies', id: 'work', icon: FolderGit2, type: 'Section' },
    { label: 'Interactive Lab Experiments', id: 'lab', icon: Sparkles, type: 'Section' },
    { label: 'What I Build (Interest Map)', id: 'my-world', icon: Cpu, type: 'Section' },
    { label: 'Technology Constellation', id: 'tech-stack', icon: Wrench, type: 'Section' },
    { label: 'Development Process (7 Stages)', id: 'process', icon: Terminal, type: 'Section' },
    { label: 'Currently Building Status', id: 'status', icon: Terminal, type: 'Section' },
    { label: 'Personal Philosophy & About', id: 'about', icon: Terminal, type: 'Section' },
    { label: 'Start a Conversation', id: 'contact', icon: Send, type: 'Section' },
  ];

  const filteredNav = navActions.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            autoFocus
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="ml-2 hidden sm:inline-flex items-center text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-500">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {/* Projects Group */}
          {filteredProjects.length > 0 && (
            <div className="mb-3">
              <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Projects & Case Studies
              </div>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p.id);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-brand-600 font-semibold">{p.number}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-600">
                        {p.title}
                      </div>
                      <div className="text-xs text-slate-500">{p.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-slate-400 group-hover:text-brand-600 font-mono">
                    Case Study <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Navigation Group */}
          {filteredNav.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Workspace Navigation
              </div>
              {filteredNav.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 group-hover:text-slate-900">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-slate-600">
                      Jump →
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {filteredProjects.length === 0 && filteredNav.length === 0 && (
            <div className="p-8 text-center text-sm text-slate-400">
              No matching commands or projects found for "{query}".
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Navigate using search or keyboard</span>
          <span className="font-mono">Quick Access Terminal</span>
        </div>
      </div>
    </div>
  );
};
