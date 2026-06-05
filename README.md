# 🚀 Prime API

Simple and fast API for retrieving celebrity quotes.

---

## 📌 Description

**Prime API** provides inspirational celebrity quotes, either randomly or filtered.

Built for motivation apps, dashboards, landing pages, and frontend projects that need dynamic content.

---

## ⚙️ Technologies

- Node.js
- Express
- TypeScript
- REST API

---

## 📡 Base URL
https://makenedev-primeapi.vercel.app

---

## 🔥 Endpoints

### 📍 GET `/quote/week`

Returns the featured quote of the week.

**Response**

```json
{
  "week": "2026-W23",
  "quote": {
    "category": "Performance",
    "text": "Energy flows where attention goes.",
    "author": "Tony Robbins"
  }
}
```

## 🚀 Run Locally
```
git clone https://github.com/makeneto/prime-api.git
cd prime-api
npm install
npm run dev
```
