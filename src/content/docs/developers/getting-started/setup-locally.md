---
title: Setup locally
---

## Follow these steps to run your ChaiBuilder site locally.

---

## 1. 📦 Prerequisites

Make sure you have the following installed:

- <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> (v18+ recommended)
- <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>
- pnpm _(optional but preferred)_

---

## 2. 📁 Clone the Repository

```bash
git clone https://github.com/chaibuilder/chaibuilder-nextjs.git
cd chaibuilder-nextjs
```

---

## 3. ⚙️ Install Dependencies

Using pnpm:

```bash
pnpm install
```

---

## 4. 🔐 Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

Add the following:

```bash
CHAIBUILDER_API_KEY=your_chaibuilder_api_key
CHAIBUILDER_WEBHOOK_SECRET=your_custom_webhook_secret
```

You can find your API key and manage your site <a href="https://chaibuilder.com/sites" target="_blank" rel="noopener noreferrer">here</a>.

---

## 5. ▶️ Run the Dev Server

```bash
pnpm run dev
```

---

## 6. Login to your local builder

Open <a href="http://localhost:3000/chai" target="_blank" rel="noopener noreferrer">http://localhost:3000/chai</a> in your browser and log in using ChaiBuilder credentials.

---

## ✅ You're Ready!

Your ChaiBuilder site should now be running locally. Make changes and see them live instantly. Start building!
