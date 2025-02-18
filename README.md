# Disruptors Den - Entrepreneur Platform & Community

Welcome to the official repository for **Disruptors Den**, an NGO dedicated to empowering entrepreneurs by providing a platform for networking, meetups, and a space to share their journey and struggles. In addition, **Disruptors Den** offers a comprehensive **Founders Course** to equip entrepreneurs with essential skills to build and scale their businesses.

## Table of Contents

- [About Disruptors Den](#about-disruptors-den)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)

---

## About Disruptors Den

**Disruptors Den** is a thriving community designed to support entrepreneurs by offering them a space to connect, learn, and grow. Our mission is to foster innovation through networking, educational programs, and mentorship, helping founders navigate their entrepreneurial journey with confidence.

---

## Features

- **Entrepreneur Meetups**: Connect with like-minded individuals, share experiences, and gain insights.
- **Community Support**: A safe space for entrepreneurs to vent, discuss challenges, and find solutions together.
- **Founders Course**: A structured program covering business fundamentals, scaling strategies, and leadership development.
- **Networking Events**: Regular events and workshops featuring industry experts and successful entrepreneurs.
- **Resource Hub**: Access to essential tools, templates, and business guides.
- **Modern UI**: Built with **shadcn/ui** and **Tailwind CSS** for a sleek and intuitive experience.

---

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **shadcn/ui**: A collection of beautifully designed, accessible, and customizable UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: For type-safe and scalable code.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zemenaytech/disruptors-den.git
   cd disruptors-den
   ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory.

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

## Folder Structure
```bash
disruptors-den/
├── public/            # Static assets (images, fonts, etc.)
├── src/
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utility functions and libraries
│   ├── pages/         # Next.js pages and API routes
│   ├── styles/        # Custom styles and Tailwind configuration
│   ├── types/         # TypeScript types and interfaces
│   └── utils/         # Helper functions and constants
├── .env.local         # Environment variables
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies and scripts
```

