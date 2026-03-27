import { useState } from 'react'
import { data } from './data'
import './index.css'

const TABS = ['Info', 'Skills', 'Projects', 'Stacks', 'Tools'] as const
type Tab = typeof TABS[number]

function Info() {
  const { name, title, location, email, github, linkedin, summary } = data.info
  return (
    <div className="panel">
      <p className="section-title">// about me</p>
      <div className="info-header">
        <div>
          <div className="info-name">{name}</div>
          <div className="info-title">{title}</div>
          <div className="info-location">📍 {location}</div>
        </div>
        <div className="info-links">
          <a href={`mailto:${email}`}>✉ {email}</a>
          <a href={`https://${github}`} target="_blank" rel="noreferrer">🐙 {github}</a>
          <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">💼 {linkedin}</a>
        </div>
      </div>
      <p className="info-summary">{summary}</p>
    </div>
  )
}

function Skills() {
  return (
    <div className="panel">
      <p className="section-title">// skills</p>
      {data.skills.map(s => (
        <div className="skill-row" key={s.name}>
          <span className="skill-name">{s.name}</span>
          <div className="skill-bar-bg">
            <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
          </div>
          <span className="skill-pct">{s.level}%</span>
        </div>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <div className="panel">
      <p className="section-title">// projects</p>
      {data.projects.map(p => (
        <div className="project-card" key={p.name}>
          <div className="project-top">
            <span className="project-name">▸ {p.name}</span>
            <a className="project-url" href={`https://${p.url}`} target="_blank" rel="noreferrer">{p.url}</a>
          </div>
          <p className="project-desc">{p.desc}</p>
          <div className="project-tags">
            {p.tech.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

function Stacks() {
  return (
    <div className="panel">
      <p className="section-title">// stacks</p>
      <div className="stacks-grid">
        {data.stacks.map(s => (
          <div className="stack-group" key={s.label}>
            <div className="stack-label">{s.label}</div>
            {s.items.map(item => (
              <div className="stack-item" key={item}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Tools() {
  return (
    <div className="panel">
      <p className="section-title">// tools</p>
      <div className="tools-grid">
        {data.tools.map(t => (
          <span className="tool-chip" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState<Tab>('Info')

  return (
    <div className="app">
      <div className="prompt">
        <span className="prompt-user">alex@portfolio</span>
        <span>:</span>
        <span className="prompt-path">~/portfolio</span>
        <span className="prompt-arrow">$</span>
        <span>./run --section {active.toLowerCase()}</span>
      </div>

      <div className="tabs">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            className={`tab${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            [{i + 1}] {tab}
          </button>
        ))}
      </div>

      {active === 'Info'     && <Info />}
      {active === 'Skills'   && <Skills />}
      {active === 'Projects' && <Projects />}
      {active === 'Stacks'   && <Stacks />}
      {active === 'Tools'    && <Tools />}
    </div>
  )
}
