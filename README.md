# Ukraine in Action Web App

To run App locally:

1. Clone the repo
2. Using Node >= v.22 install dependencies: using terminal cli, from the project root run: `npm i` or `yarn`
3. Run: `yarn dev`

## Project structure, Plugin Architecture

```

src/
 ├── core/                        # Core infrastructure (DI, Router, Store)
 │    ├── initializeApp.ts        # Initializes plugins, DI, and store
 │    ├── di/                     # Dependency Injection System
 │    ├── router/                 # Centralized Router
 │    │   ├── index.ts            # AppRouter (React Router)
 │    │   ├── routes.ts           # Route definitions
 │    │   ├── ProtectedRoute.tsx  # Guard for protected routes
 │    ├── store/                  # Redux Toolkit Store
 │    │   ├── index.ts            # Redux store configuration
 │    │   ├── api.ts              # RTK Query setup
 │    │   ├── slices/             # Redux slices
 │    │   │   ├── authSlice.ts
 │    │   │   ├── userSlice.ts
 │    ├── plugins/                # Plugin management system
 │    │   ├── pluginLoader.ts     # Dynamically loads plugins
 │    │   ├── pluginRegistry.ts   # Registers and manages plugin lifecycle
 │    │   ├── types.ts            # Plugin-related TypeScript types
 │    ├── services/             # Core shared services
 │    │   ├── ApiService.ts      # Handles API calls (Axios)
 │    │   ├── AuthService.ts     # Authentication & token management
 │    │   ├── LoggerService.ts   # Logging service (console, Sentry, etc.)
 │    │   ├── NotificationService.ts # Push/email notifications
 │    │   ├── FeatureToggleService.ts # Enables/disables features dynamically
 │    │   ├── StorageService.ts  # Manages local/session storage
 │    │   ├── types.ts           # Shared service interfaces/types
 │    ├── config/                # Configuration management
 │    │   ├── index.ts           # Centralized config loader
 │    │   ├── spaces.ts          # Vertical module configuration
 │    │   ├── env/               # Environment-specific configs
 │    │   │   ├── dev.ts
 │    │   │   ├── prod.ts
 │    │   │   ├── test.ts
 |    |--- spaces/
 |    |   |---spaceLoader.ts
 ├── spaces/                      # Verticals (Plugins, Lazy Loaded)
 │    ├── rocio-space/            # Rocio Manifestashio
 │    │   ├── services/           # Local services for this plugin
 │    │   ├── store/              # Local Redux store for this plugin
 │    │   ├── components/         # UI components
 │    │   ├── api.ts              # API endpoints for this module
 │    │   ├── index.ts            # Plugin entry point
 │    ├── drones-space/           # Drone building space
 │    │   ├── services/           #
 │    │   ├── store/              #
 │    │   ├── components/         #
 │    │   ├── api.ts              #
 │    │   ├── index.ts            #
 │    ├── running-space/         # Running Space
 │    │   ├── services/           #
 │    │   ├── store/              #
 │    │   ├── components/         #
 │    │   ├── api.ts              #
 │    │   ├── index.ts            #
 ├── modules/                     # Auth, Registration, etc.
 │    ├── auth/                   # Authentication module
 │    ├── registration/           # Registration module
 ├── lib/                        # Shared utilities & components
 │    ├── constants/             # Application-wide constants
 │    ├── components/            # Shared UI components
 │    ├── assets/                # Static assets (images, fonts)
 │    ├── utils/                 # Helper functions
 │    ├── types/                 # Global TypeScript types
 ├── App.tsx                      # Renders the main app
 ├── main.tsx                     # Entry point (loads DI & Router)

```
