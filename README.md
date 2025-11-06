# 🤖 AI Code Review System (Google Gemini API)

An **AI-powered Code Review Application** that analyzes developer code, detects issues, and provides improvements using **Google’s Gemini Generative AI API**.

This project includes:
- ⚙️ **Backend:** Node.js + Express + Google Generative AI SDK  
- 💻 **Frontend:** React (Vite) + Tailwind CSS  
- 🔐 **Environment Configuration:** `.env` for API key management  

---

## 🚀 Features

✅ Real-time AI-driven code analysis  
✅ Highlights issues & recommends improvements  
✅ Clean, dark-themed developer UI  
✅ Uses Google Gemini (1.5 Flash / Pro) for accurate reviews  
✅ Modular architecture (Controller → Service → API Layer)  

---

## 🧩 Project Structure

```
CODE-REVIEW/
├── BackEnd/
│   ├── server.js
│   ├── .env
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   └── services/
│   │       └── ai.services.js
│   └── package.json
│
└── FrontEnd/
    ├── index.html
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    └── package.json
```

---

## 🔑 Environment Setup

1. Create a `.env` file inside the `BackEnd/` folder:

   ```env
   GOOGLE_GEMINI_KEY=your_valid_gemini_api_key_here
   ```

   > Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

2. Ensure `.env` is **at the same level as `server.js`**.

---

## ⚙️ Backend Setup (Node + Express)

1. Open the `BackEnd` folder:
   ```bash
   cd CODE-REVIEW/BackEnd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the backend server:
   ```bash
   npm start
   ```
   Server runs at: **http://localhost:3000**

---

## 💻 Frontend Setup (React + Vite)

1. Open the `FrontEnd` folder:
   ```bash
   cd CODE-REVIEW/FrontEnd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Runs on: **http://localhost:5173**

---

## 🔄 How It Works

1. The user writes or pastes code into the left editor.  
2. On clicking **“Review”**, the frontend sends the code to `http://localhost:3000/api/review`.  
3. The backend calls the Gemini API with your API key and returns the analysis.  
4. The frontend displays AI-generated feedback in real-time.

---

## 🧠 Example Output

**Bad Code:**
```javascript
function sum() {
  return 1 + 1;
}
```

**AI Feedback:**
- ❌ No parameters — function lacks flexibility.  
- ❌ No documentation or validation.  
- ✅ Recommended fix:
```javascript
/**
 * Adds two numbers together
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}
```

---

## 🧰 Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Fetch API  

**Backend:**  
- Node.js  
- Express.js  
- @google/generative-ai  

**AI Model:**  
- Gemini 1.5 Flash (default)

---

## 🧾 API Endpoint

**POST /api/review**

**Request Body:**
```json
{
  "code": "function example() { return 42; }"
}
```

**Response:**
```json
{
  "result": "AI analysis text from Gemini..."
}
```

---

## 🧩 Troubleshooting

### ❌ Error: “API key not valid. Please pass a valid API key.”
- Ensure `.env` file exists and contains a **valid key** from Google AI Studio.  
- The `.env` file must be in the **same folder** as `server.js`.  
- Restart the backend after making changes.

### ❌ “CORS” Error in Frontend
- Add this to your backend before routes:
  ```js
  const cors = require("cors");
  app.use(cors());
  ```

---

## 📄 License

MIT License © 2025 [Yogesh Gupta]

---

## 👨‍💻 Author

**Yogesh Gupta**  
Final-year B.Tech CSE student  
💼 Java | Spring Boot | Machine Learning | Data Analytics  
🌐 GitHub: [@YogeshGupta](#)
📧 Email: your.email@example.com
