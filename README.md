# Tria Contact List

A single-page React (JavaScript) web application implementing a contact list with search, add, and delete functionality.

🔗 **Live Demo**: [https://tria-elqlhvs7g-krishnkantsahu444s-projects.vercel.app/](https://tria-elqlhvs7g-krishnkantsahu444s-projects.vercel.app/)

## Features

- **View contact list**: Displays all contacts in a clean, organized list with modern gradient UI
- **Search by name**: Live filtering as you type in the search bar
- **Add new contact**: Simple form to add contacts with validation
  - Name: Required field
  - Phone: Required, exactly 10 digits, numeric only
  - Email: Required field with email format validation
- **Delete contact**: Remove contacts with a single click
- **API Integration**: Fetches initial contacts from JSONPlaceholder API
- **Persistent storage**: Contacts are saved to localStorage and survive page reloads
- **Loading states**: Spinner displays while fetching data
- **Responsive design**: Works seamlessly on desktop and mobile devices

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
- **API Integration**: On first load, contacts are fetched from the JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`), providing real external data
- **localStorage persistence**: Contacts are cached in the browser's localStorage after fetching and after every update. This provides persistence without requiring a backend database
- **Fallback handling**: If API fails or localStorage is empty, the app provides sample contacts to ensure the application remains functional

### UI/UX
- **Modern gradient design**: Beautiful purple-to-pink gradient background with glassmorphism effects
- **Symmetric layout**: Equal-width columns for contact list and add form (1fr 1fr grid)
- **Real-time search**: Search filters update immediately as you type (no debouncing needed for small to medium-sized contact lists)
- **Smooth interactions**: 
  - Hover effects on contacts and buttons
  - Smooth transitions and animations
  - Form clears immediately after successful submission
- **Empty state handling**: Shows "🔍 No contacts found" when the search returns no results
- **Loading state**: Displays spinner while fetching contacts from API

### Form Validation
- **Name validation**: Required field, shows error if empty
- **Phone validation**: 
  - Required field, exactly 10 digits
  - Auto-filters non-numeric characters
  - Real-time validation with error messages
  - Maximum length enforced
- **Email validation**: Required field with HTML5 email format validation
- **User feedback**: Clear error messages displayed when validation fails

### Error Handling
- **API failures**: Falls back to sample data if the API request fails
- **localStorage failures**: Silently falls back to in-memory state if localStorage is unavailable (e.g., in private browsing mode or quota exceeded)
- **Network issues**: Graceful degradation with loading states and fallback data

### Testing
- **Unit tests** for individual components (ContactList, AddContact)
- **Integration test** for App component (search flow)
- Tests verify core functionality without extensive mocking

### Libraries Chosen
- **Vite**: Modern, fast build tool with excellent developer experience and optimized production builds
- **Vitest**: Fast, Vite-native test runner with a Jest-compatible API
- **React Testing Library**: Best practice for testing React components by simulating user interactions rather than testing implementation details

## Notable Implementation Decisions

### Why JSONPlaceholder API?
- Provides realistic external data without setting up a backend
- Demonstrates ability to integrate with RESTful APIs
- Free, reliable, and no authentication required

### Why localStorage + API?
- Best of both worlds: external data source + client-side persistence
- Faster subsequent loads (data cached locally)
- Works offline after first load
- Mimics a real-world caching strategy

### Phone Validation Approach
- Chose 10-digit requirement as it's standard for many regions
- Real-time character filtering provides immediate feedback
- Pattern attribute provides browser-level validation as backup

## AI Usage

AI tools (GitHub Copilot) were used to:
- Assist with boilerplate code generation
- Suggest modern CSS patterns and animations
- Help with React best practices and hooks usage
- Generate test cases structure

All code was reviewed, understood, and modified to fit the project requirements and personal coding standards. Design decisions, architecture, and implementation details were made independently.

## Future Enhancements

- Add edit contact functionality
- Add pagination or virtualization for large contact lists
- Add contact categorization (favorites, groups)
- Add contact avatars or profile pictures
- Add export/import functionality (CSV, vCard)
- Add dark mode toggle
- Add sorting options (by name, date added, etc.)
