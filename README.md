🌱 GrowTogether App 🌱
A React Native Web Application for Neurodiverse Users
Project Overview
GrowTogether is a React Native web app designed to help neurodiverse individuals with executive functioning challenges. The app combines fun, gamified features like a growing plant to encourage healthy habits, motivational quotes, and sensory break suggestions.

Features
Water Reminder: Tracks daily water intake. Reaching 8 glasses rewards users with a token that contributes to plant growth.
Habit Tracker: Logs and tracks daily tasks. Completing tasks earns tokens.
Sensory Breaks: Suggests random activities to help with focus. Completing breaks also rewards tokens.
Plant Growth Animation: A plant grows from a seed as users collect tokens, visualizing their progress.
Technologies Used
Languages:

JavaScript
JSON
CSS-in-JS (React Native Stylesheet)
Libraries & Frameworks:

React Native: Core app functionality.
React Native Web: Enables web support for React Native components.
Expo: Simplifies development and deployment.
@react-navigation/native: Navigation between screens.
AsyncStorage: Persistent storage for tokens.
Axios: API requests for motivational quotes.
Lottie for React Native: Animations (optional).
Tools:

Vercel: Hosting and deployment.
Expo CLI & EAS: App building and distribution.
VS Code: IDE for development.
Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/growtogether-app.git
cd growtogether-app
Install dependencies:

bash
Copy code
npm install
Run the app locally:

bash
Copy code
expo start --web
Build for Web Deployment:

bash
Copy code
npx expo export:web
Deploy to Vercel:

Configure Build Command: npx expo export:web
Output Directory: web-build
File Structure
/screens: Contains main app screens (IntroScreen, WaterReminder, HabitTracker, MotivationQuotes).
/components: Shared components such as buttons and inputs.
/images: Assets like plant stages.
App.js: Main app entry, handles navigation.
webpack.config.js: Configuration for Webpack.
How It Works
IntroScreen: Displays the app overview and navigation options.
WaterReminder.js: Users log water intake; 8 glasses earn a token.
HabitTracker.js: Users log tasks; each completed task earns a token.
SensoryBreak.js: Random activity suggestions; completing breaks earns tokens.
PlantGrowth.js: Displays the plant’s current growth stage based on collected tokens.
Challenges Overcome
Dependency Conflicts: Resolved multiple issues related to mismatched versions of Expo, React, and Webpack.
Deployment Issues: Successfully configured build commands and output directories for smooth deployment on Vercel.
Future Enhancements
Add more growth stages and visual elements to the plant.
Integrate user authentication and personalized task tracking.
Contributions
Contributions are welcome! Please fork the repository and submit a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License.

Feel free to update any sections as needed. This README provides a comprehensive overview of your project!
