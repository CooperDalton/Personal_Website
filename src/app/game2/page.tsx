'use client';

import React, { useMemo, useState } from 'react';
import styles from './Game2.module.css';
import { Press_Start_2P, Pixelify_Sans, Roboto_Mono } from 'next/font/google';

const pressStart2P = Press_Start_2P({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-press-start',
	display: 'swap',
});

const pixelify = Pixelify_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-pixelify',
	display: 'swap',
});

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-roboto-mono',
	display: 'swap',
});

type ThemeMode = 'neon' | 'terminal';

export default function Game2Page(): JSX.Element {
	const [theme, setTheme] = useState<ThemeMode>('neon');

	const themeClassName = useMemo(() => {
		return theme === 'neon' ? styles.themeNeon : styles.themeTerminal;
	}, [theme]);

	const toggleTheme = (): void => {
		setTheme((t) => (t === 'neon' ? 'terminal' : 'neon'));
	};

	// Fake data
	const challengeDay = 14;
	const blogPosts = [
		{ title: 'Shipping Day 14: HUD polish', date: '2025-11-07', tag: 'challenge' },
		{ title: 'Prototype: Pixel CRT overlay', date: '2025-11-06', tag: 'build log' },
		{ title: 'Notes on Game UI UX', date: '2025-11-05', tag: 'design' },
	];

	const projects = [
		{ name: 'SpriteForge', desc: 'Generate pixel sprites with prompts.', tech: ['Next.js', 'Vercel', 'tRPC'] },
		{ name: 'Quantum Notes', desc: 'Minimal notes with graph view.', tech: ['React', 'Graph DB'] },
		{ name: 'Dev Arena', desc: 'Code challenges, arcade style.', tech: ['Node', 'WebGL'] },
	];

	const books = [
		{ title: 'The War of Art', author: 'Steven Pressfield', takeaway: 'Beat Resistance daily.', tag: 'creativity' },
		{ title: 'Make', author: 'Pieter Levels', takeaway: 'Ship fast, iterate.', tag: 'business' },
		{ title: 'Steal Like an Artist', author: 'Austin Kleon', takeaway: 'Remix, learn, share.', tag: 'creativity' },
		{ title: 'Atomic Habits', author: 'James Clear', takeaway: 'Systems over goals.', tag: 'habits' },
	];

	return (
		<main
			className={[
				styles.root,
				pressStart2P.variable,
				pixelify.variable,
				robotoMono.variable,
				themeClassName,
			].join(' ')}
		>
			{/* Background layers */}
			<div className={styles.noise} aria-hidden="true" />
			<div className={styles.crt} aria-hidden="true" />
			<Particles />

			{/* HERO / HUD */}
			<section id="hero" className={[styles.section, styles.hero].join(' ')}>
				<div className={styles.heroLeft}>
					<h1 className={styles.title}>
						WIZDRO <span className={styles.dim}>//</span> PLAYER 01
					</h1>
					<p className={styles.subtitle}>indie dev • hacker • 100 days to 100k</p>

					<div className={styles.primaryActions}>
						<button className={styles.gameBtn}>START BLOG</button>
						<button className={styles.gameBtn}>VIEW PROJECTS</button>
						<button className={styles.gameBtn}>TRACK PROGRESS</button>
					</div>
				</div>
				<div className={styles.heroRight}>
					<div className={styles.panel}>
						<div className={styles.panelHeader}>[ STATUS PANEL ]</div>
						<div className={styles.panelBody}>
							<div className={styles.statusRow}>
								<span className={styles.label}>Challenge:</span>
								<span className={styles.value}>Day {challengeDay} / 100</span>
							</div>
							<div className={styles.statusRow}>
								<span className={styles.label}>Streak:</span>
								<span className={styles.value}>
									<span className={styles.pixelIcon} aria-hidden="true">❤</span> 7 days
								</span>
							</div>
							<div className={styles.statusRow}>
								<span className={styles.label}>STATUS:</span>
								<span className={[styles.value, styles.ok].join(' ')}>OPERATIONAL</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.heroTopRight}>
					<button className={[styles.gameBtn, styles.switchBtn].join(' ')} onClick={toggleTheme}>
						SWITCH THEME
					</button>
					<div style={{ height: 8 }} />
					<button className={styles.gameBtn} title="Does nothing, flavor only">
						SAVE GAME
					</button>
				</div>
			</section>

			{/* HABITS */}
			<section id="habits" className={styles.section}>
				<header className={styles.sectionHeader}>[ HABIT SYSTEM ]</header>
				<p className={styles.sectionDesc}>Public tracker so you can see if I’m actually doing the work.</p>

				<div className={styles.panel}>
					<div className={styles.panelBody}>
						<MiniChart />
						<div className={styles.habitsGrid}>
							<HabitRow name="Code 1h" filled={4} total={5} />
							<HabitRow name="Read 10 pages" filled={5} total={5} />
							<HabitRow name="Ship 1 thing" filled={3} total={5} />
						</div>
						<div className={styles.xpNote}>+34 XP gained</div>
					</div>
				</div>
			</section>

			{/* ABOUT */}
			<section id="about" className={styles.section}>
				<header className={styles.sectionHeader}>[ PLAYER BIO ]</header>
				<div className={styles.panel}>
					<div className={styles.panelBody}>
						<div className={styles.about}>
							<div className={styles.avatar} aria-label="pixel avatar" />
							<div className={styles.aboutText}>
								"I’m Cooper (Wizdro), UCSB CS, I build games + SaaS, currently doing 100 days to 100k."
							</div>
						</div>
						<div className={styles.chips}>
							<div className={styles.chip}>LVL 20</div>
							<div className={styles.chip}>CLASS: DEV</div>
							<div className={styles.chip}>SPECIAL: UNITY / NEXT.JS</div>
						</div>
					</div>
				</div>
			</section>

			{/* BLOG */}
			<section id="blog" className={[styles.section, styles.sectionAlt].join(' ')}>
				<header className={styles.sectionHeader}>[ MISSION LOG ]</header>
				<div className={styles.cards}>
					{blogPosts.map((p) => (
						<article key={p.title} className={styles.card}>
							<div className={styles.cardTitle}>{p.title}</div>
							<div className={styles.cardMeta}>
								<span>{p.date}</span>
								<span className={styles.tag}>{p.tag}</span>
							</div>
							<div className={styles.cardActions}>
								<button className={styles.gameBtn}>READ</button>
							</div>
						</article>
					))}
				</div>
				<div className={styles.sourceNote}>SOURCE: /blog</div>
			</section>

			{/* PROJECTS */}
			<section id="projects" className={styles.section}>
				<header className={styles.sectionHeader}>[ UNLOCKED PROJECTS ]</header>
				<div className={styles.flavor}>Artifacts collected during the quest to 100k.</div>
				<div className={styles.inventory}>
					{projects.map((proj) => (
						<div key={proj.name} className={styles.slot}>
							<div className={styles.slotName}>{proj.name}</div>
							<div className={styles.slotDesc}>{proj.desc}</div>
							<div className={styles.badges}>
								{proj.tech.map((t) => (
									<span key={t} className={styles.badge}>
										{t}
									</span>
								))}
							</div>
							<div>
								<button className={styles.gameBtn}>OPEN</button>
							</div>
						</div>
					))}
					<div className={[styles.slot, styles.locked].join(' ')}>
						<div className={styles.slotName}>LOCKED</div>
						<div className={styles.slotDesc}>????????</div>
					</div>
					<div className={[styles.slot, styles.locked].join(' ')}>
						<div className={styles.slotName}>LOCKED</div>
						<div className={styles.slotDesc}>????????</div>
					</div>
				</div>
			</section>

			{/* BOOKS */}
			<section id="books" className={styles.section}>
				<header className={styles.sectionHeader}>[ DATA ARCHIVE: BOOKS ]</header>
				<div className={styles.scroller}>
					<div className={styles.bookRow}>
						{books.map((b) => (
							<div key={b.title} className={styles.bookCard}>
								<div className={styles.bookTitle}>{b.title}</div>
								<div className={styles.bookAuthor}>{b.author}</div>
								<div className={styles.bookTake}>{b.takeaway}</div>
								<div className={styles.bookTag}>{b.tag}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className={styles.footer}>
				<div className={styles.footerLeft}>WIZDRO ENGINE v1.0</div>
				<div className={styles.footerRight}>FPS: 60 | PING: 12ms</div>
			</footer>
		</main>
	);
}

function Particles(): JSX.Element {
	// A small set of floating particles
	const particles = useMemo(() => {
		return new Array(24).fill(0).map((_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: Math.random() * 3 + 1,
			delay: Math.random() * 8,
			duration: 8 + Math.random() * 8,
		}));
	}, []);

	return (
		<div className={styles.particles} aria-hidden="true">
			{particles.map((p) => (
				<div
					key={p.id}
					className={styles.particle}
					style={{
						left: `${p.left}%`,
						top: `${p.top}%`,
						width: `${p.size}px`,
						height: `${p.size}px`,
						animationDelay: `${p.delay}s`,
						animationDuration: `${p.duration}s`,
					}}
				/>
			))}
		</div>
	);
}

function MiniChart(): JSX.Element {
	// Static 7-day bar chart
	const values = [3, 5, 4, 2, 4, 5, 3];
	const max = 6;
	return (
		<div className={styles.chart}>
			{values.map((v, i) => (
				<div key={i} className={styles.barWrap}>
					<div className={styles.bar} style={{ height: `${(v / max) * 100}%` }} />
				</div>
			))}
		</div>
	);
}

function HabitRow(props: { name: string; filled: number; total: number }): JSX.Element {
	const pct = Math.max(0, Math.min(100, Math.round((props.filled / props.total) * 100)));
	return (
		<div className={styles.habitRow}>
			<div className={styles.habitName}>{props.name}</div>
			<div className={styles.progress}>
				<div className={styles.progressFill} style={{ width: `${pct}%` }} />
				<div className={styles.progressNotches}>
					{new Array(props.total).fill(0).map((_, i) => (
						<span key={i} className={styles.notch} />
					))}
				</div>
			</div>
		</div>
	);
}


