# Getting Started with Cities

Cities is a simple web app that allows users to:
- Learn quick facts about a bunch of cities
- View citites on the map

<img width="1512" alt="Screenshot 2025-02-20 at 04 49 57" src="https://github.com/user-attachments/assets/e0787837-2675-4ff9-93d4-c13c250b9edc" />

## Dev setup

### Docker

- Clone the repo.
- In the project directory, run `docker-compose up --build`
- The app will be available for local use at `localhost:3000`

### Manual installation

**Backend**

- Navigate to the API folder `cd api`
- Run `pnpm i` to install the necessary packages
- Run `pnpm start`, the server will start listening on port `4000`

**Frontend**

- Navigate to the Frontend folder `cd frontend`
- Run `pnpm i` to install the necessary packages
- Run `pnpm start`, the server will start listening on port `3000`
- The app will be ready for usage at `localhost:3000`

## Project structure

### Highlight

- A Frontend folder
- A Backend folder (api)
- A docker compose file on the main project directory

### Frontend structure

It is a plain react SPA built on top of `typescript` with `tailwind` and `postcss` setup for styling.
Static files are kept under the `public` folder. While the main app logic is kept under the `src` folder.

The main app logic is structured as follows:
- Entry point `App.tsx`
- Type definition file `types.d.ts`
- UI Components folder
- Hooks folder for the business logic

### Backend structure

It is a plain node.js application with a single `GET` endpoint `api/cities` to retrieve cities data.

## Potential improvements

- .env setup for different environments
- API expantion to include more endpoints for the rest of the CRUD operations
- Database and seeding
- Adding more pages for editing and adding cities
- CI pipeline 
