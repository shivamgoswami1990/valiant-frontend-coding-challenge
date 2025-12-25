TODO: Quick scratch breakdown of your to-dos, how you broke up the different tasks and any QA / tests you did.


# Basic project scaffolding
- Setup basic styling, markup, page layout for the app
- Create a basic component file for the Calculator component
- Setup environment files for API URL's

# Component
- Create a UI layout for the calculator form using Tailwind styling
- Create types for the API response return
- Create a basic form validation utility
- Refactor the PMT function to use a composable with types
- Integrate API endpoints to get initial form data

# Loading state, error state management
- Create a UI loading component which shows while API data is loading
- Create a UI error component which shows if API returns an error
- Create a retry function, UI feature in case initial data doesn't load from the API

# Finish form UI
- Dynamic form validation with feedback messages
- Display, style the repayment amount as per the spec provided

# Unit tests, Cypress tests
- Write unit tests for the provided PMT composable
- Write unit tests for the form validation utility

