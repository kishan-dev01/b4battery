import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset & Normalize */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* Add transition for all themed elements */
    transition: background-color 0.3s ease,
              border-color 0.3s ease,
              color 0.3s ease,
              box-shadow 0.3s ease;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }


  body {
    font-family: var(--font-family-primary);
    line-height: 1.6;
    background-color: var(--color-bg);
    color: var(--color-text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color var(--transition-medium), color var(--transition-medium);
  }

  /* Design System Variables */
  :root {
    /* Light Theme Colors */
--color-primary: #00C851;
--color-primary-light: #2DD473;
--color-primary-dark: #00A142;
--color-primary-rgb: 0, 200, 81;

--color-secondary: #1B5E20;
--color-secondary-light: #4CAF50;
--color-secondary-dark: #0D4F13;

--color-accent: #FFD600;
--color-accent-light: #FFED4A;
--color-accent-dark: #E6C200;

--color-success: #4CAF50;
--color-warning: #FF9800;
--color-error: #F44336;
--color-info: #2196F3;

/* Light Theme UI Colors */
--color-bg: #f8fffe;
--color-bg-secondary: #ffffff;
--color-surface: #ffffff;
--color-surface-secondary: #f1f8f4;

--color-border: #c8e6c9;
--color-border-light: #e8f5e8;

--color-text: #1a1a1a;
--color-text-secondary: #2e7d32;
--color-text-muted: #666666;

--color-overlay: rgba(0, 0, 0, 0.5);
--color-overlay-light: rgba(0, 0, 0, 0.2);

/* Additional Battery-specific Colors */
--color-energy: #00E676;
--color-energy-light: #69F0AE;
--color-energy-dark: #00C853;

--color-power: #76FF03;
--color-power-light: #B2FF59;
--color-power-dark: #64DD17;


    /* Typography */
    --font-family-primary: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-family-secondary: 'Inter', sans-serif;
    --font-family-mono: 'JetBrains Mono', monospace;

    /* Font Sizes */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;

    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-medium: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);

    /* Z-index */
    --z-negative: -1;
    --z-elevated: 1;
    --z-sticky: 100;
    --z-drawer: 200;
    --z-overlay: 300;
    --z-modal: 400;
    --z-popover: 500;
    --z-tooltip: 600;
  }

  /* Dark Theme */
   /* Dark Theme */
  /* Dark Theme */
[data-theme="dark"] {
  --color-primary: #4CAF50;
  --color-primary-light: #66BB6A;
  --color-primary-dark: #388E3C;
  --color-primary-rgb: 76, 175, 80;
  
  --color-secondary: #81C784;
  --color-secondary-light: #A5D6A7;
  --color-secondary-dark: #66BB6A;
  
  --color-accent: #FFEB3B;
  --color-accent-light: #FFF176;
  --color-accent-dark: #F57F17;
  
  --color-success: #4CAF50;
  --color-warning: #FF9800;
  --color-error: #F44336;
  --color-info: #2196F3;
  
  /* Dark Theme UI Colors */
  --color-bg: #0D1117;
  --color-bg-secondary: #161B22;
  --color-surface: #1C2128;
  --color-surface-secondary: #21262D;
  
  --color-border: #30363D;
  --color-border-light: #373E47;
  
  --color-text: #F0F6FC;
  --color-text-secondary: #C9D1D9;
  --color-text-muted: #8B949E;
  
  --color-overlay: rgba(0, 0, 0, 0.7);
  --color-overlay-light: rgba(0, 0, 0, 0.5);
  
  /* Additional Battery-specific Dark Colors */
  --color-energy: #66BB6A;
  --color-energy-light: #81C784;
  --color-energy-dark: #4CAF50;
  
  --color-power: #9CCC65;
  --color-power-light: #AED581;
  --color-power-dark: #8BC34A;
  
  /* Enhanced Shadows for Dark Theme */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.5);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.6), 0 2px 4px -2px rgb(0 0 0 / 0.6);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(0 0 0 / 0.6);
  
  /* Glow Effects for Energy Theme */
  --glow-primary: 0 0 20px rgba(76, 175, 80, 0.3);
  --glow-accent: 0 0 15px rgba(255, 235, 59, 0.2);
  --glow-energy: 0 0 10px rgba(102, 187, 106, 0.4);
}


  /* Typography Styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-primary);
    font-weight: 700;
    line-height: 1.2;
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
  }

  h1 { font-size: var(--text-5xl); }
  h2 { font-size: var(--text-4xl); }
  h3 { font-size: var(--text-3xl); }
  h4 { font-size: var(--text-2xl); }
  h5 { font-size: var(--text-xl); }
  h6 { font-size: var(--text-lg); }

  p {
    font-size: var(--text-base);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
    position: relative;

    &:hover {
      color: var(--color-primary-dark);
    }

    &.underline-effect {
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: var(--color-primary);
        transition: width var(--transition-medium);
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  /* Button Styles */
  button {
    font-family: var(--font-family-primary);
    font-weight: 500;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    background-color: var(--color-primary);
    color: white;

    &:hover {
      background-color: var(--color-primary-dark);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  /* Form Elements */
  input, textarea, select {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background-color: var(--color-surface);
    color: var(--color-text);
    font-family: var(--font-family-primary);
    transition: all var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px var(--color-primary-light);
    }

    &::placeholder {
      color: var(--color-text-muted);
    }
  }

  /* Utility Classes */
  .container {
    width: min(90%, 1200px);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid {
    display: grid;
    gap: var(--spacing-md);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .fade-in {
    animation: fadeIn var(--transition-medium) ease-in;
  }

  .slide-up {
    animation: slideUp var(--transition-medium) ease-out;
  }

   /* Disable blue tap highlight effect on mobile */
   a, button {
    -webkit-tap-highlight-color: transparent;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-text-muted);
    border-radius: var(--radius-full);
    
    &:hover {
      background: var(--color-text-secondary);
    }
  }

  /* Selection */
  ::selection {
    background-color: var(--color-primary);
    color: white;
  }

  /* Media Queries */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    .container {
      width: 95%;
    }
  }
`;

export default GlobalStyles;
