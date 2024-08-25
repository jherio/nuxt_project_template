# Nuxt 3 Project Template

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Configuration](#configuration)
7. [Development](#development)
8. [Testing](#testing)
9. [Internationalization](#internationalization)
10. [State Management](#state-management)
11. [Styling](#styling)
12. [Component Development](#component-development)
13. [Deployment](#deployment)
14. [Best Practices](#best-practices)
15. [Troubleshooting](#troubleshooting)
16. [Contributing](#contributing)
17. [License](#license)

## Overview

This is a comprehensive template for building modern web applications using Nuxt 3. It integrates best practices and popular tools to provide a robust foundation for scalable, maintainable, and performant web applications.

## Features

- 🚀 [Nuxt 3](https://nuxt.com/): The Intuitive Vue Framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
- 📦 [Pinia](https://pinia.vuejs.org/): Vue.js State Management
- 🌍 [Vue I18n](https://vue-i18n.intlify.dev/): Internationalization plugin for Vue.js
- 🧪 [Vitest](https://vitest.dev/): Unit Testing Framework
- 📚 [Storybook](https://storybook.js.org/): UI component explorer
- 🔧 [TypeScript](https://www.typescriptlang.org/): JavaScript with syntax for types
- 📝 [ESLint](https://eslint.org/): Pluggable linting utility for JavaScript and JSX
- 💅 [Prettier](https://prettier.io/): Opinionated code formatter
- 🚀 [Nitro](https://nitro.unjs.io/): Universal deployment system
- 🔒 [VeeValidate](https://vee-validate.logaretm.com/v4/): Form validation for Vue.js
- 🦸 [Heroicons](https://heroicons.com/): Beautiful hand-crafted SVG icons
- 🎭 [HeadlessUI](https://headlessui.com/): Completely unstyled, fully accessible UI components

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16.x or later recommended)
- npm (v7.x or later) or yarn (v1.22.x or later)
- Git

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/nuxt3-project-template.git
   cd nuxt3-project-template
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
nuxt3-project-template/
├── .husky/                 # Husky git hooks
├── .storybook/             # Storybook configuration
├── assets/                 # Static assets (images, fonts, etc.)
│   └── css/
│       └── tailwind.css    # Tailwind CSS entry point
├── components/             # Vue components
├── layouts/                # Nuxt layouts
├── locales/                # I18n translation files
├── pages/                  # Nuxt pages
├── public/                 # Public static files
├── server/                 # Server-side code
├── stories/                # Storybook stories
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── app.vue                 # Main Vue application file
├── i18n.config.ts          # I18n configuration
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vitest.config.ts        # Vitest configuration
```

## Configuration

### Nuxt Configuration

The Nuxt configuration is located in `nuxt.config.ts`. It includes settings for CSS, PostCSS, modules, i18n, TypeScript, and more.

### TypeScript

TypeScript is configured in `tsconfig.json`. It extends the Nuxt-generated TypeScript configuration and includes additional compiler options for stricter type checking.

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.js`. It's set up to scan all Vue components, layouts, and pages for classes.

### ESLint

ESLint is configured in `.eslintrc.js`. It extends recommended configurations for Vue 3, TypeScript, and Prettier.

### Prettier

Prettier is configured in `.prettierrc`. It sets rules for semi-colons, quotes, and trailing commas.

### Storybook

Storybook is configured in `.storybook/main.ts`. It's set up to work with Vue 3 and Vite.

### Vitest

Vitest is configured in `vitest.config.ts`. It's set up to work with Vue 3 and uses jsdom for the test environment.

## Development

To start the development server, run:

```
npm run dev
```

This will start the Nuxt development server, typically at `http://localhost:3000`.

## Testing

This project uses Vitest for unit testing. To run tests:

```
npm run test
```

## Internationalization

Internationalization is set up using @nuxtjs/i18n. Translation files are located in the `locales/` directory. The default language is set to English, with French also configured.

To add a new language:

1. Add a new JSON file in the `locales/` directory (e.g., `de.json` for German).
2. Add the new locale to the `i18n` configuration in `nuxt.config.ts`.

## State Management

This project uses Pinia for state management. To create a new store:

1. Create a new file in the `stores/` directory (e.g., `useCounterStore.ts`).
2. Define your store using the `defineStore` function from Pinia.
3. Use the store in your components with the `useStore` composable.

## Styling

This project uses Tailwind CSS for styling. The main Tailwind CSS file is located at `assets/css/tailwind.css`.

To customize Tailwind:

1. Modify the `tailwind.config.js` file to add custom colors, fonts, or other theme settings.
2. Use Tailwind classes in your Vue components.

## Component Development

This project uses Storybook for component development and documentation. To start Storybook:

```
npm run storybook
```

To create a new story:

1. Create a new file in the `stories/` directory (e.g., `MyComponent.stories.ts`).
2. Write your stories following the Storybook CSF (Component Story Format).

## Deployment

This project can be deployed using various platforms that support Nuxt 3. Some options include:

- Vercel
- Netlify
- Heroku
- DigitalOcean App Platform

Follow the deployment instructions specific to your chosen platform.

## Form Validation

This project uses VeeValidate for form validation. To use VeeValidate:

1. Import the necessary components and functions from VeeValidate.
2. Define your validation rules using Yup or VeeValidate's built-in rules.
3. Use the `<Form>` and `<Field>` components from VeeValidate in your templates.

Example:

```vue
<template>
  <Form @submit="onSubmit">
    <Field name="email" :rules="emailRule" />
    <ErrorMessage name="email" />
    <button type="submit">Submit</button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const emailRule = yup.string().required().email()

const onSubmit = (values) => {
  // Handle form submission
}
</script>
```

## Best Practices

- Use TypeScript for type safety.
- Follow Vue 3 Composition API best practices.
- Write unit tests for components and functions.
- Use Storybook for component development and documentation.
- Follow the Nuxt 3 directory structure conventions.
- Use Pinia for state management.
- Implement proper error handling and logging.
- Optimize images and assets for performance.
- Follow accessibility (a11y) guidelines.
- Use VeeValidate for form validation.
- Utilize HeadlessUI components for accessible UI elements.
- Implement responsive design using Tailwind CSS utilities.

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check for any error messages in the console.
3. Verify that your Node.js version is compatible with the project requirements.
4. Clear your browser cache and restart the development server.

If problems persist, please open an issue on the project's GitHub repository.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a clear commit message.
4. Push your changes to your fork.
5. Create a pull request with a description of your changes.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
