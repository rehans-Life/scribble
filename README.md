# Scribble - A Collaborative Drawing & Guessing Game

Scribble is a web-based multiplayer game inspired by Skribbl.io. Players take turns drawing words while others try to guess what it is based on the live sketch. It's a fun and social game perfect for parties, remote hangouts, or a casual competition with friends and family.

<img src="https://firebasestorage.googleapis.com/v0/b/tesla-clone-a0f5d.appspot.com/o/readMe%2FScreenshot%202024-03-25%20090133.png?alt=media&token=95db4529-c320-4f6b-ad46-0df26aa0f042" />

**Features:**
- **Real-time drawing and guessing:** Players take turns drawing a chosen word while others race to guess it correctly.
- **Multiple rounds and points:** Keep the competition going with multiple rounds and a point system to determine the winner.
- **Customizable game settings:** Choose the number of rounds, time limit per round, and even pick the number of hints.
- **Web-based and mobile-friendly:** Play anywhere, anytime on any device with a web browser.

**How to Play:**

1. Create or join a game room.
2. Each round, a player is chosen as the artist and a secret word is revealed to them.
3. The artist uses the drawing tools to depict the word within the time limit.
4. Other players guess the word based on the evolving sketch.
5. The players to guess correctly wins points for that round.

**Technical details:**

- Frontend:
  - NextJS
  - React
  - Jotai & Redux (State Management)
  - React Hook Form (State Management)
  - TailwindCSS (Styling)
  - KonvaJS (Drawing Board)

- Backend:
  - NodeJS
  - Express
  - Socket.io (Real Time Communication)
  - MongoDB (Database)

- DevOps:
  - Docker
  - Google Cloud
  - Github Actions

## Getting Started:
To get a local copy up of the project and running follow these simple steps.

### Installation
  1. Clone the repo
  ```
    git clone https://github.com/rehans-Life/scribble.git
  ```

  2. Installing Packages
  ```
    npm install
  ```

#### Add Environment Variables
Enter your API Keys in the `.env` files

  1. Enter your API Keys in `/client/.env.local`.
     ```
       NEXT_PUBLIC_SOCKET_URL= // your socket server hostname
       NODE_ENV=development
     ```

  2. Enter your API Keys in `/server/.env`.
     ```
      PORT=4000
      DB_PASSWORD= // your mongodb user password
      DB_URI: // your mongodb uri
      FRONTEND_URI: // your frontend uri
     ```
#### Start Client and Socket Server

  1. `./client`
   ```
      npm run dev
   ```

  2. `./server`
   ```
     npm run start:dev
   ```
**Let the games begin!**
