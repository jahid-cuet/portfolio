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
      <svg viewBox="0 0 1000 300" className="w-[180%] min-w-[1200px] max-w-[2500px] h-auto translate-y-32 sm:translate-y-40 md:translate-y-48 lg:translate-y-56">
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
    <div className="absolute left-[-20px] md:left-[10px] lg:left-[40px] xl:left-[80px] top-[15%] md:top-[25%] hidden sm:block pointer-events-none opacity-80 z-0">
      <svg width="200" height="240" viewBox="0 0 200 240">
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
    <div className="absolute right-[-20px] md:right-[10px] lg:right-[40px] xl:right-[80px] top-[15%] md:top-[25%] hidden sm:block pointer-events-none opacity-90 z-0">
      <svg width="220" height="240" viewBox="0 0 220 240">
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

      {/* Left Side: Neural Network */}
      <SideNeuralNetwork />

      {/* Right Side: Data Flow */}
      <SideDataFlow />

      {/* ── FOREGROUND CONTENT (Beautifully proportioned & centered, moved up) ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 flex flex-col items-center text-center justify-start min-h-full -mt-20 sm:-mt-28 md:-mt-32 lg:-mt-40">

        {/* Content Wrapper */}
        <div className="relative space-y-4 sm:space-y-5 flex flex-col items-center z-10">

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

          {/* Name heading (Appropriately sized) */}
          <h1 className="leading-tight flex flex-col items-center space-y-1">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Hi, I&apos;m
            </span>
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight block"
              style={{
                color: "#34d399",
                textShadow: "0 0 50px rgba(52,211,153,0.3)",
              }}
            >
              {personal.name}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto font-medium opacity-90 pt-1">
            Bridging biomedical science, artificial intelligence and software engineering to
            build intelligent, real-world solutions that improve healthcare and human lives.
          </p>

          {/* CTAs */}

        </div>
      </div>
    </section>
  );
}
