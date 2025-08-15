
# Geopolitical Analyser for Vedanta IAS Academy



The **Geopolitical Analyser** is a sophisticated, AI-powered web application designed specifically for UPSC (Union Public Service Commission) aspirants. Powered by the Google Gemini API, this tool provides instant, in-depth analysis of any geopolitical topic, helping students streamline their preparation for the civil services examination.

This project was developed for the **Vedanta IAS Academy** to provide their students with a cutting-edge study tool.

**Live Demo:** 
vedanta-geopolitical-analyser.vercel.app



---

## ✨ Key Features

*   **Dynamic Topic Search:** Enter any geopolitical topic (e.g., "India-China Relations," "BRICS Expansion") to receive a comprehensive report.
*   **AI-Generated Analysis:** The application provides a multi-faceted analysis presented in a clean, tabbed interface:
    *   **SWOT Analysis:** Strengths, Weaknesses, Opportunities, and Threats.
    *   **PEST Analysis:** Political, Economic, Social, and Technological factors.
    *   **Key Players:** A list of all significant countries, leaders, and organizations involved.
    *   **Timeline of Events:** A chronological breakdown of key milestones related to the topic.
    *   **Interview Questions:** A set of UPSC-style interview questions to test understanding and analytical skills.
*   **Downloadable Notes:** Export the crucial SWOT, PEST, and Key Players analyses as a single, well-formatted PDF document for offline study.
*   **Fully Responsive:** A seamless experience across desktops, tablets, and mobile devices.
*   **Modern UI/UX:** Clean, intuitive, and professional design built with Tailwind CSS.

---






## 🛠️ Tech Stack

*   **Frontend:**
    *   [React](https://reactjs.org/) (with Hooks)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Tailwind CSS](https://tailwindcss.com/) for styling
*   **AI & APIs:**
    *   [Google Gemini API](https://ai.google.dev/) (`@google/genai`) for content generation.
*   **PDF Generation:**
    *   [jsPDF](https://github.com/parallax/jsPDF)
    *   [html2canvas](https://html2canvas.hertzen.com/)
*   **Development Environment:**
    *   The project is set up to run in a modern web environment using ES Modules and an `importmap`.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm (or yarn)
*   A modern web browser
*   A Google Gemini API Key. 

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/geopolitical-analyser.git
    cd geopolitical-analyser
    ```

2.  **Set up environment variables:**
    This project requires an API key to communicate with the Gemini API. Create a `.env` file in the root of your project and add your key:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```
    *The application is configured to access this key via `process.env.API_KEY` in a compatible hosting environment.*

3.  **Run the application:**
    You will need a local web server to run this project. A simple way is to use `serve`:
    
    ```sh
    # Install serve globally if you haven't already
    npm install -g serve
    
    # Run the server from the project root
    serve
    ```
    The application will then be available at `http://localhost:3000` (or another port if 3000 is taken).

---

## 📁 Project Structure

The codebase is organized into logical directories to maintain clarity and separation of concerns.

```
/
├── components/          # Reusable React components (Header, Footer, Cards, etc.)
│   ├── icons/           # SVG icon components
│   └── ...
├── services/            # Modules for external API calls (e.g., geminiService.ts)
├── utils/               # Utility functions (e.g., pdfGenerator.ts)
├── index.html           # Main HTML entry point
├── index.tsx            # Main React application entry point
├── App.tsx              # Root application component
├── types.ts             # TypeScript type definitions
└── README.md            # You are here!
```

---

##  credit

*   **Designed & Developed by Pratyush Kumar**
*   **Institutional Partner:** [Vedanta IAS Academy](https://www.vedantaiasacademy.com/)

---


