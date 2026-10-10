# Interview Practice Tracker

A simple, responsive dashboard to organize technical interview preparation, track question-solving progress, and stay consistent with practice.

## Features

- **Dashboard overview** — view total questions, completed questions, DSA progress, and technical/machine-coding counts.
- **Progress tracking** — see your overall completion percentage at a glance.
- **Question management** — add, edit, and delete practice questions.
- **Categories** — organize questions by DSA, Git, Technical, and Machine Coding.
- **Difficulty levels** — label questions as Easy, Medium, or Hard.
- **Status tracking** — manage questions as Pending, In Progress, or Completed.
- **Search and filters** — find questions by title and filter by category, difficulty, or status.
- **Local persistence** — questions and user state are saved in browser local storage, so they remain available after a refresh in the same browser.
- **Login screen and protected routes** — navigate the tracker through its app routes.

## Tech Stack

- **React 19** — component-based UI
- **Vite** — development server and build tool
- **Tailwind CSS 4** — styling
- **React Router 7** — client-side routing
- **React Hook Form** — form handling
- **Lucide React** — icons
- **Browser Local Storage** — local persistence

## Getting Started

### Prerequisites

- Node.js (a current LTS version is recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashmeer-raza/Cohort-Project.git
   ```

2. Move into the project directory:

   ```bash
   cd "Cohort-Project/Interview Practice Tracker"
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal (Vite usually uses `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## How to Use

1. Open the tracker and sign in through the app's login screen.
2. Add a question and select its category, difficulty, and current status.
3. Update a question as you make progress.
4. Use search and filters to focus on a specific topic or difficulty.
5. Check the dashboard to review your progress.

## Project Structure

```text
Interview Practice Tracker/
├── public/
├── src/
│   ├── components/       # Shared UI and route components
│   ├── context/          # Authentication-related context
│   ├── features/
│   │   └── tracker/      # Tracker dashboard and question components
│   ├── hooks/            # Reusable hooks, including local storage
│   ├── layout/           # Main application layout
│   ├── pages/            # Dashboard, problem bank, analytics, and auth pages
│   ├── routes/           # Application route configuration
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Data and Privacy

The tracker stores its practice questions and user state in the browser's local storage. This is a client-side project; data is not automatically synced between browsers or devices. Clearing the browser's site data may remove locally saved information.

## Future Improvements

- Cloud database and cross-device synchronization
- More detailed topic-wise analytics
- Export and import practice questions
- Study goals and reminders

## Author

**Ashmeer Raza**

- GitHub: [ashmeer-raza](https://github.com/ashmeer-raza)

---

If you find this project useful, feel free to star the repository or suggest improvements.
