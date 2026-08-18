"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowRightIcon } from "./Icons";

/* ────────────────────────────────────────────────
   Unified AI + Health Background (Jos jinis!)
──────────────────────────────────────────────── */
function UnifiedAIHealthBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-30 sm:opacity-40">
      <svg viewBox="0 0 1000 300" className="w-full sm:w-[150%] md:w-[180%] min-w-[320px] sm:min-w-[900px] md:min-w-[1200px] max-w-[2500px] h-auto translate-y-20 sm:translate-y-32 md:translate-y-40 lg:translate-y-56">
        <defs>
          <filter id="superGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
            <stop offset="25%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Heartbeat ECG Line ONLY */}
        <path
          d="M 50,150 L 250,150 L 270,150 L 285,100 L 300,210 L 315,120 L 330,150 L 450,150 L 470,150 L 485,80 L 500,220 L 515,130 L 530,150 L 650,150 L 670,150 L 685,110 L 700,200 L 715,140 L 730,150 L 950,150"
          fill="none"
          stroke="url(#lineFade)"
          strokeWidth="3"
          filter="url(#superGlow)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Side Visuals (Neural Network & Transformer)
──────────────────────────────────────────────── */
function SideNeuralNetwork() {
  const nodes = [
    { x: 30, y: 50 }, { x: 30, y: 120 }, { x: 30, y: 190 },
    { x: 100, y: 30 }, { x: 100, y: 90 }, { x: 100, y: 150 }, { x: 100, y: 210 },
    { x: 170, y: 80 }, { x: 170, y: 160 }
  ];

  const connections: number[][] = [];
  for (let i = 0; i < 3; i++) for (let j = 3; j < 7; j++) connections.push([i, j]);
  for (let i = 3; i < 7; i++) for (let j = 7; j < 9; j++) connections.push([i, j]);

  return (
    <div className="hidden xl:flex absolute left-0 xl:left-8 2xl:left-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-70 z-0 items-center">
      <svg
        viewBox="0 0 200 240"
        className="w-[120px] h-[144px] lg:w-[160px] lg:h-[192px] xl:w-[200px] xl:h-[240px]"
      >
        <defs>
          <filter id="glowNN">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g stroke="#34d399" strokeWidth="1" strokeOpacity="0.4">
          {connections.map(([a, b], i) => (
            <line key={`nn-conn-${i}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}>
              <animate attributeName="stroke-opacity" values="0.1;0.8;0.1" dur={`${1.5 + (i % 3)}s`} begin={`${i * 0.1}s`} repeatCount="indefinite" />
            </line>
          ))}
        </g>
        {nodes.map((n, i) => (
          <circle key={`nn-node-${i}`} cx={n.x} cy={n.y} r="5" fill="#06b6d4" filter="url(#glowNN)">
            <animate attributeName="r" values="4;7;4" dur={`${1.5 + (i % 2)}s`} begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

function SideDataFlow() {
  const rightNodes = Array.from({ length: 22 }, (_, i) => ({ x: 180, y: 10 + i * 10 }));
  const origins = [
    { x: 50, y: 60, color: "#06b6d4", bin: "01011" },   // Cyan
    { x: 30, y: 120, color: "#ec4899", bin: "10010" },  // Pink
    { x: 50, y: 180, color: "#eab308", bin: "11001" }   // Yellow
  ];

  return (
    <div className="hidden xl:flex absolute right-0 xl:right-8 2xl:right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-80 z-0 items-center">
      <svg viewBox="0 0 220 240" className="w-[130px] h-[142px] lg:w-[175px] lg:h-[191px] xl:w-[220px] xl:h-[240px]">
        <defs>
          <filter id="glowFlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Draw curved lines */}
        <g fill="none" strokeWidth="1">
          {origins.map((origin, oIdx) => (
            rightNodes.map((target, tIdx) => {
              const dx = (target.x - origin.x) * 0.5;
              const pathD = `M ${origin.x} ${origin.y} C ${origin.x + dx} ${origin.y}, ${target.x - dx} ${target.y}, ${target.x} ${target.y}`;

              if ((oIdx === 0 && tIdx > 13) || (oIdx === 2 && tIdx < 8) || (oIdx === 1 && (tIdx < 3 || tIdx > 18))) return null;

              const isPrimary = ((oIdx + tIdx) % 3 === 0);

              return (
                <path
                  key={`flow-${oIdx}-${tIdx}`}
                  d={pathD}
                  stroke={origin.color}
                  strokeOpacity={isPrimary ? 0.6 : 0.15}
                >
                  <animate
                    attributeName="stroke-opacity"
                    values={isPrimary ? "0.2;0.8;0.2" : "0.05;0.3;0.05"}
                    dur={`${2 + (tIdx % 4)}s`}
                    begin={`${(tIdx % 3) * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </path>
              );
            })
          ))}
        </g>

        {/* Draw Right Nodes (Binary column) */}
        {rightNodes.map((n, i) => {
          const char = (i % 2 === 0) ? "1" : "0";
          const color = i % 3 === 0 ? "#06b6d4" : i % 2 === 0 ? "#ec4899" : "#eab308";
          return (
            <text
              key={`bin-${i}`}
              x={n.x}
              y={n.y + 3}
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
              fill={color}
              opacity="0.8"
              filter="url(#glowFlow)"
            >
              {char}
            </text>
          );
        })}

        {/* Draw Origin Nodes & Binary Input */}
        {origins.map((origin, i) => (
          <g key={`org-${i}`}>
            <text x={origin.x - 45} y={origin.y + 3} fontSize="11" fontFamily="monospace" fontWeight="bold" fill={origin.color} opacity="0.9">
              {origin.bin}
            </text>
            <circle cx={origin.x} cy={origin.y} r="5" fill={origin.color} filter="url(#glowFlow)">
              <animate attributeName="r" values="4;7;4" dur={`${1.5 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={origin.x} cy={origin.y} r="2" fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Download icon (inline)
──────────────────────────────────────────────── */
function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ────────────────────────────────────────────────
   Floating code text backdrop (decorative)
──────────────────────────────────────────────── */
function CodeBackdrop() {
  const codeSnippets = [
    "import torch", "model = CNN()", "loss.backward()", "optimizer.step()",
    "epoch: 42/100", "acc: 0.9812", "def forward(x):", "return self.net(x)",
    "function evaluate(data):", "predict_disease(features)",
    "const AI_HEALTH_MODEL = new Model();", "train(data, labels);",
    "MIRROR", "deploy --prod", "import tensorflow as tf", "import numpy as np",
    "df.head()", "df.describe()", "model.compile(optimizer='adam', loss='bce')",
    "<h1>Health Tech</h1>", "npm run build", "git commit -m 'feat: AI'"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex flex-wrap justify-around items-center opacity-[0.06] sm:opacity-[0.08]" aria-hidden>
      {Array.from({ length: 120 }).map((_, i) => (
        <div
          key={i}
          className={`font-mono text-xs sm:text-sm whitespace-nowrap p-4 sm:p-6 ${i % 5 === 0 ? 'text-[#8b5cf6]' : (i % 7 === 0 ? 'text-[#06b6d4]' : 'text-[#34d399]')}`}
          style={{
            transform: `translate(${(i % 3) * 15 - 15}px, ${(i % 2) * 25 - 15}px)`,
          }}
        >
          {codeSnippets[i % codeSnippets.length]}
        </div>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────
   Main Home Section
──────────────────────────────────────────────── */
export default function HomeSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #06182c 0%, #020813 100%)" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      {/* Radial glow – center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 65%)" }}
        aria-hidden
      />

      {/* Faint code backdrop */}
      <CodeBackdrop />

      {/* ── UNIFIED BACKGROUND VISUAL ── */}
      <UnifiedAIHealthBackground />

      {/* Left Side: Neural Network — only on xl+ so it never overlaps content */}
      <SideNeuralNetwork />

      {/* Right Side: Data Flow — only on xl+ so it never overlaps content */}
      <SideDataFlow />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-8 flex items-center justify-center min-h-[calc(100vh-4rem)] pb-32 sm:pb-44 md:pb-52">

        {/* Content Wrapper — vertically & horizontally centered */}
        <div className="w-full space-y-5 sm:space-y-6 flex flex-col items-center text-center">

          {/* Role badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold">
              Software Engineer
            </span>
            <span className="text-[#34d399] opacity-60">·</span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold">
              BME Graduate
            </span>
            <span className="text-[#34d399] opacity-60">·</span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#34d399] font-semibold">
              AI/ML Researcher
            </span>
          </div>

          {/* Accent line */}
          <div className="h-0.5 w-12 sm:w-16 rounded-full bg-[#34d399]" />

          {/* Name heading */}
          <h1 className="leading-tight flex flex-col items-center space-y-1">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Hi, I&apos;m
            </span>
            <span
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight block"
              style={{
                color: "#34d399",
                textShadow: "0 0 50px rgba(52,211,153,0.3)",
              }}
            >
              {personal.name}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto font-medium opacity-90">
            Bridging biomedical science, artificial intelligence and software engineering to
            build intelligent, real-world solutions that improve healthcare and human lives.
          </p>

          {/* ── Contact Icons ── */}
          <div className="flex items-center justify-center gap-5 pt-2">

            {/* Mail */}
            <a
              href="#contact"
              aria-label="Go to contact section"
              className="text-gray-400 hover:text-[#34d399] transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 hover:text-[#06b6d4] transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 hover:text-[#34d399] transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
