# Project Overview

Welcome to the Massage Website project! This website offers various medical massage services in Hebrew. The project was built using React and incorporates several features to enhance user experience, accessibility, and functionality.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Credits](#credits)
- [Author](#author)

## Description <a name="description"></a>

This project is a Hebrew-language website dedicated to providing medical massage services. It includes various routes to navigate through the homepage, services, about us, gallery, and contact us pages. The website features several reusable components to streamline the codebase and enhance maintainability. Special functionalities include site-wide accessibility features, Google reCAPTCHA for bot prevention, form validation, and email notifications to the site owner upon form submission.

## Installation <a name="installation"></a>

To get started with the project, follow these steps:

1. Clone the repository:
    git clone https://github.com/ItamarBenAri/Massage.git
    cd massage

2. Install the following dependencies:
    - @emailjs/browser
    - @emotion/react
    - @emotion/styled
    - @mui/icons-material
    - @mui/material
    - @reduxjs/toolkit
    - @testing-library/jest-dom
    - @testing-library/react
    - @testing-library/user-event
    - @types/jest
    - @types/node
    - @types/react
    - @types/react-dom
    - @types/react-google-recaptcha
    - @types/react-redux
    - accessibility-react-widget
    - dotenv
    - notyf
    - react
    - react-dom
    - react-google-recaptcha
    - react-hook-form
    - react-redux
    - react-router-dom
    - react-scripts
    - react-tiny-fab
    - react-toastify
    - stylis
    - stylis-plugin-rtl
    - typescript
    - web-vitals

4. Create a .env file for environment variables and add necessary configurations:
    REACT_APP_EMAILJS_USER_ID=your-emailjs-user-id
    REACT_APP_EMAILJS_SERVICE_ID=your-emailjs-service-id
    REACT_APP_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
    REACT_APP_RECAPTCHA_SITE_KEY=your-recaptcha-site-key

5. Start the development server:
    npm start

## Features <a name="features"></a>
Multiple Routes:

    - /home - Homepage
    - /services - Medical massage services page
    - /about-us - About us page
    - /gallery - Massage gallery page
    - /contact-us - Contact us page

Reusable Components: Common components written once and used across multiple parts of the application.

Accessibility: Integrated accessibility features using the accessibility-react-widget library by Vladi Iokhim.

Google reCAPTCHA: Implemented to ensure user authenticity and prevent bot interactions.

Form Validation: Comprehensive validation on all forms to ensure correct data submission.

Email Notifications: Sends an email to the site owner with the user's message upon form submission using the @emailjs/browser library.

Scroll to Top: A button appears when the user scrolls down, allowing them to quickly return to the top of the page.

## Usage <a name="usage"></a>
Navigate through the website using the following routes:

- **Home Page ("/home")**: Discover the main highlights of the website.
- **Services Page ("/services")**: Explore the different medical massage services offered.
- **About Us Page ("/about-us")**: Learn more about the team and the mission behind the services.
- **Gallery Page ("/gallery")**: View a collection of images showcasing the services.
- **Contact Us Page ("/contact-us")**: Get in touch with the team via a form that ensures your message reaches the site owner securely.

## Credits <a name="credits"></a>

**React**: JavaScript library for building user interfaces.
**MUI**: Material-UI library for React components.
**accessibility-react-widget**: Accessibility features by Vladi Iokhim.
**Google reCAPTCHA**: User verification service.
**EmailJS**: Service for sending emails directly from JavaScript.
**React Router**: For managing navigation within the application.

## Author <a name="author"></a>
This project was developed by [Itamar Ben Ari](https://www.linkedin.com/in/itamar-ben-ari-69678b28b/). For all inquiries, please send an email to [etamar234@gmail.com](mailto:etamar234@gmail.com)