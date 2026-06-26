import React, { useState, useCallback, useRef } from "react";
import { useIntl } from "../context/IntlContext";
import { useNavigation } from "../context/NavigationContext";

interface FolderItem {
    id: string;
    labelKey: string;
    sublabelKey?: string;
    action: "navigate" | "scroll" | "expand";
    target?: string;
    icon:
        | "folder-blue"
        | "folder-purple"
        | "folder-teal"
        | "folder-orange"
        | "folder-pink";
}

const FOLDERS: FolderItem[] = [
    {
        id: "about",
        labelKey: "home.desktop.folder.about",
        icon: "folder-blue",
        action: "navigate",
        target: "about",
    },
    {
        id: "projects",
        labelKey: "home.desktop.folder.projects",
        icon: "folder-teal",
        action: "navigate",
        target: "projects",
    },
    {
        id: "techstack",
        labelKey: "home.desktop.folder.techstack",
        icon: "folder-purple",
        action: "expand",
        target: "techstack",
    },
    {
        id: "contact",
        labelKey: "home.desktop.folder.contact",
        icon: "folder-orange",
        action: "expand",
        target: "contact",
    },
];

// macOS Big Sur-style folder SVG — tab on top, body below, highlight gradient
const FolderSVG = ({ color }: { color: string }) => {
    const id = `fg-${color.replace("#", "")}`;
    const lightColor = lightenHex(color, 40);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 64"
            aria-hidden="true"
            className="folder-svg"
        >
            <defs>
                <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={lightColor} />
                    <stop offset="100%" stopColor={color} />
                </linearGradient>
                <linearGradient
                    id={`${id}-highlight`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
            </defs>

            {/* Tab */}
            <path
                d="M4,18 L4,10 Q4,7 7,7 L30,7 Q33,7 35,10 L38,14 Q40,18 43,18 Z"
                fill={`url(#${id}-body)`}
                opacity="0.85"
            />

            {/* Body */}
            <rect
                x="2"
                y="18"
                width="76"
                height="44"
                rx="5"
                ry="5"
                fill={`url(#${id}-body)`}
            />

            {/* Highlight sheen on body */}
            <rect
                x="2"
                y="18"
                width="76"
                height="22"
                rx="5"
                ry="5"
                fill={`url(#${id}-highlight)`}
                opacity="0.5"
            />

            {/* Subtle inner shadow at top of body */}
            <rect
                x="2"
                y="18"
                width="76"
                height="3"
                rx="0"
                ry="0"
                fill="rgba(0,0,0,0.12)"
            />
        </svg>
    );
};

// Utility: lighten a hex color by a given amount
function lightenHex(hex: string, amount: number): string {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0xff) + amount);
    const b = Math.min(255, (num & 0xff) + amount);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

const FOLDER_COLORS: Record<FolderItem["icon"], string> = {
    "folder-blue": "#4a90d9",
    "folder-teal": "#34a899",
    "folder-purple": "#8b6abf",
    "folder-orange": "#d97a3a",
    "folder-pink": "#c4547d",
};

interface TechModalProps {
    onClose: () => void;
    t: (key: string) => string | string[];
    locale: string;
}

const TechStackModal = ({ onClose, t, locale }: TechModalProps) => {
    const isKo = locale === "ko";
    const allSkills = t("home.techStack.items");
    const proficientSkills = t("home.techStack.proficient.items");
    const exposureSkills = t("home.techStack.exposure.items");

    return (
        <div
            className="desktop-modal-backdrop"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={String(t("home.desktop.folder.techstack"))}
        >
            <div className="desktop-modal" onClick={(e) => e.stopPropagation()}>
                <div className="desktop-modal-titlebar">
                    <div className="macos-traffic-lights">
                        <button
                            className="traffic-light tl-close"
                            onClick={onClose}
                            aria-label="Close"
                            data-interactive
                        />
                        <span
                            className="traffic-light tl-min"
                            aria-hidden="true"
                        />
                        <span
                            className="traffic-light tl-max"
                            aria-hidden="true"
                        />
                    </div>
                    <span className="desktop-modal-title">
                        {t("home.techStack.title")}
                    </span>
                </div>
                <div className="desktop-modal-body">
                    {isKo ? (
                        <div className="tech-skills-container">
                            {Array.isArray(allSkills) &&
                                allSkills.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="tech-skill-tag"
                                        data-interactive
                                    >
                                        {tech}
                                    </span>
                                ))}
                        </div>
                    ) : (
                        <>
                            <div className="tech-stack-group">
                                <h4 className="tech-group-label">
                                    {t("home.techStack.proficient.title")}
                                </h4>
                                <div className="tech-skills-container">
                                    {Array.isArray(proficientSkills) &&
                                        proficientSkills.map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="tech-skill-tag"
                                                data-interactive
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>
                            </div>
                            <div className="tech-stack-group">
                                <h4 className="tech-group-label">
                                    {t("home.techStack.exposure.title")}
                                </h4>
                                <div className="tech-skills-container">
                                    {Array.isArray(exposureSkills) &&
                                        exposureSkills.map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="tech-skill-tag"
                                                data-interactive
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

interface ContactModalProps {
    onClose: () => void;
    t: (key: string) => string | string[];
}

const ContactModal = ({ onClose, t }: ContactModalProps) => (
    <div
        className="desktop-modal-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={String(t("home.desktop.folder.contact"))}
    >
        <div className="desktop-modal" onClick={(e) => e.stopPropagation()}>
            <div className="desktop-modal-titlebar">
                <div className="macos-traffic-lights">
                    <button
                        className="traffic-light tl-close"
                        onClick={onClose}
                        aria-label="Close"
                        data-interactive
                    />
                    <span className="traffic-light tl-min" aria-hidden="true" />
                    <span className="traffic-light tl-max" aria-hidden="true" />
                </div>
                <span className="desktop-modal-title">
                    {t("home.desktop.folder.contact")}
                </span>
            </div>
            <div className="desktop-modal-body contact-body">
                <a
                    href="https://github.com/JiEun11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row"
                    data-interactive
                >
                    <span className="contact-row-icon">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                    </span>
                    <span className="contact-row-label">GitHub</span>
                    <span className="contact-row-value">
                        github.com/JiEun11
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/jieun-kim-aa8185210/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row"
                    data-interactive
                >
                    <span className="contact-row-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                        </svg>
                    </span>
                    <span className="contact-row-label">LinkedIn</span>
                    <span className="contact-row-value">Bella (JiEun) Kim</span>
                </a>
                <a
                    href="mailto:bella.jin.jieun.kim@gmail.com"
                    className="contact-row"
                    data-interactive
                >
                    <span className="contact-row-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                        </svg>
                    </span>
                    <span className="contact-row-label">Email</span>
                    <span className="contact-row-value">
                        bella.jin.jieun.kim@gmail.com
                    </span>
                </a>
            </div>
        </div>
    </div>
);

// -- Main Component --

const HomePage = () => {
    const { t, locale } = useIntl();
    const { setPage } = useNavigation();

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [openingId, setOpeningId] = useState<string | null>(null);

    // Double-click detection via timestamp
    const lastClickRef = useRef<{ id: string; time: number } | null>(null);
    const DOUBLE_CLICK_MS = 400;

    const handleFolderClick = useCallback(
        (folder: FolderItem) => {
            const now = Date.now();
            const last = lastClickRef.current;

            if (
                last &&
                last.id === folder.id &&
                now - last.time < DOUBLE_CLICK_MS
            ) {
                // Double-click: open
                lastClickRef.current = null;
                setOpeningId(folder.id);
                setTimeout(() => {
                    setOpeningId(null);
                    if (folder.action === "navigate" && folder.target) {
                        setPage(folder.target);
                    } else if (folder.action === "expand") {
                        setOpenModal(folder.id);
                    }
                }, 300);
            } else {
                // Single-click: select
                lastClickRef.current = { id: folder.id, time: now };
                setSelectedId(folder.id);
            }
        },
        [setPage],
    );

    const handleFolderKeyDown = useCallback(
        (e: React.KeyboardEvent, folder: FolderItem) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (folder.action === "navigate" && folder.target) {
                    setPage(folder.target);
                } else if (folder.action === "expand") {
                    setOpenModal(folder.id);
                }
            }
        },
        [setPage],
    );

    const handleDesktopClick = useCallback(() => {
        setSelectedId(null);
    }, []);

    const introTitle = t("home.title");

    return (
        <div
            className="macos-desktop"
            onClick={handleDesktopClick}
            aria-label="Desktop"
        >
            {/* Wallpaper noise texture overlay */}
            <div className="desktop-wallpaper" aria-hidden="true" />

            {/* Greeting strip */}
            <div className="desktop-greeting" aria-live="polite">
                <p className={`desktop-greeting-text ${locale}`}>
                    {introTitle}
                </p>
            </div>

            {/* Folder grid */}
            <div
                className="desktop-folder-grid"
                role="list"
                aria-label="Desktop folders"
            >
                {FOLDERS.map((folder) => {
                    const isSelected = selectedId === folder.id;
                    const isOpening = openingId === folder.id;
                    const color = FOLDER_COLORS[folder.icon];

                    return (
                        <div
                            key={folder.id}
                            role="listitem"
                            className={[
                                "desktop-folder",
                                isSelected ? "selected" : "",
                                isOpening ? "opening" : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleFolderClick(folder);
                            }}
                            onKeyDown={(e) => handleFolderKeyDown(e, folder)}
                            tabIndex={0}
                            aria-label={`${String(t(folder.labelKey))} — double-click to open`}
                            data-interactive
                        >
                            <div className="folder-icon-wrap">
                                <FolderSVG color={color} />
                            </div>
                            <span className="folder-label">
                                {t(folder.labelKey)}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Modals */}
            {openModal === "techstack" && (
                <TechStackModal
                    onClose={() => setOpenModal(null)}
                    t={t}
                    locale={locale}
                />
            )}
            {openModal === "contact" && (
                <ContactModal onClose={() => setOpenModal(null)} t={t} />
            )}
        </div>
    );
};

export default HomePage;
