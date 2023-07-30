# GitHub User and Repository Explorer

This is a React application that integrates with the GitHub API, allowing users to search for up to 5 GitHub users with a username similar to the value entered in the text input. Users can click on a user to view their repositories. The app is built using React and Typescript and utilizes various libraries for forms, styling, testing, and state management.

## Features

- Search for up to 5 GitHub users with a username similar to the input value.
- Display repositories for the selected GitHub user.
- Mobile version is available for optimal user experience on different devices.

## Project Structure

The project is organized into the following main components:

- `UserSearchForm`: A form component to search for GitHub users.
- `UserList`: A component that displays a list of GitHub users and their repositories.
- `User`: A component that shows information about a single GitHub user and their repositories.
- `RepositoryList`: A component that displays a list of GitHub repositories.
- `Repository`: A component that provides details about a single GitHub repository.

## Services

- `UserClient`: A service that makes API requests to the GitHub API to retrieve data related to users and their repositories. It uses the `axios` library for HTTP requests and is configured with an authorization token to authenticate with the GitHub API.

## How to Use

1. Clone the repository from the public GitHub repository: [GitHub Repo Link](https://github.com/Didbar/github-repo-explorer).

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and go to provided url in your terminal to access the app.

5. Enter a GitHub username in the search input to find and display repositories for the selected user.

## Libraries Used

- [Chakra UI](https://chakra-ui.com/): A flexible and accessible UI component library for React.
- [React Query](https://react-query.tanstack.com/): A library for managing and caching asynchronous data.
- [Zustand](https://zustand.surge.sh/): A small and fast state management library for React.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): A testing utility for testing React components.

## Hosting

The application is hosted and publicly available at the following URL: [App URL](https://github-repositories-by-user.netlify.app/).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to explore the project and use it as an opportunity to showcase your skills. Add any additional features, improvements, or tests to demonstrate your expertise further. If you have any questions or need assistance, feel free to reach out to us.

Happy coding! 🚀
