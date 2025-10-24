# Tria Contact List

A single-page React (JavaScript) web application implementing a contact list with search and add functionality.

## Features

- **View contact list**: Displays all contacts in a clean, organized list
- **Search by name**: Live filtering as you type in the search bar
- **Add new contact**: Simple form to add contacts with name, phone, and email
- **Persistent storage**: Contacts are saved to localStorage and survive page reloads

## Tech Stack

- **React 18** (JavaScript)
- **Vite** for fast development and optimized builds
- **Vitest + React Testing Library** for testing
- **GitHub Actions** for continuous integration

## How to Run Locally

### Prerequisites

- Node.js 18+ and npm installed on your system

### Setup Instructions

1. **Clone or download this repository**

2. **Install dependencies:**

```powershell
npm install
```

3. **Start the development server:**

```powershell
npm run dev
```

4. **Open your browser** and visit the URL shown in the terminal (usually `http://localhost:5173`)

That's it! The app should now be running on your local machine.

### Additional Commands

**Build for production:**

```powershell
npm run build
```

**Preview production build:**

```powershell
npm run preview
```

**Run tests:**

```powershell
npm test
```

## Project Structure

```
Tria/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI workflow
├── src/
│   ├── components/
│   │   ├── AddContact.jsx   # Form to add new contacts
│   │   ├── ContactItem.jsx  # Individual contact display
│   │   ├── ContactList.jsx  # List container
│   │   └── __tests__/       # Component tests
│   ├── __tests__/
│   │   └── App.test.jsx     # App integration tests
│   ├── App.jsx              # Main app component (with search & state)
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vitest.config.js         # Vitest configuration
└── README.md                # This file
```

## Design Choices & Assumptions

### Data Management
- **localStorage persistence**: Contacts are saved to the browser's localStorage after every update. This provides persistence without requiring a backend API, effectively mimicking data fetching from an API as specified in the requirements.
- **Initial seed data**: If no contacts exist in localStorage, the app starts with 3 sample contacts for demonstration purposes.

### UI/UX
- **Clean, minimal design**: Used a modern color palette with blue accent colors and clean spacing for better user experience
- **Real-time search**: Search filters update immediately as you type (no debouncing needed for small to medium-sized contact lists)
- **Smooth form interactions**: The add form clears immediately after submission for a smooth user flow
- **Empty state handling**: Shows "No contacts found" when the search returns no results

### Error Handling
- **localStorage failures**: Silently falls back to in-memory state if localStorage is unavailable (e.g., in private browsing mode or quota exceeded)
- **Form validation**: Minimal validation where name is required; phone and email fields are optional

### Testing
- **Unit tests** for individual components (ContactList, AddContact)
- **Integration test** for App component (search flow)
- Tests verify core functionality without extensive mocking

### Libraries Chosen
- **Vite**: Modern, fast build tool with excellent developer experience and optimized production builds
- **Vitest**: Fast, Vite-native test runner with a Jest-compatible API
- **React Testing Library**: Best practice for testing React components by simulating user interactions rather than testing implementation details

## Future Enhancements

- Add edit and delete contact functionality
- Add form validation (email format, phone number format)
- Add pagination or virtualization for large contact lists
- Add backend API integration (REST or GraphQL)
- Add contact categorization (favorites, groups)
- Add contact avatars or profile pictures
- Add export/import functionality (CSV, vCard)
