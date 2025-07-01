# 🎓 Student Profile API

A simple Node.js + Express backend API to manage student profiles with image uploads (JPEG only).  
Uses MongoDB for storage and Multer for handling files. Tested via Postman.

---

## 🚀 Features

- ➕ Add new student with image
- 📄 Get all students / by ID
- ✏️ Update student info
- ❌ Delete student and their profile image

---

## 🛠 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- Multer (for file upload)
- dotenv
- fs (file system module)

---

## 📁 Folder Structure

`project-root/ ├── index.js ├── models/ │ └── userModels.js ├── router/ │ └── userRouter.js ├── uploads/ ├── .env └── .gitignore`

---

## ⚙️ Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-username/student-profile-api.git

# 2. Move into project folder
cd student-profile-api

# 3. Install dependencies
npm install

# 4. Setup environment variables in .env
PORT=5000
MONGO_URI=your_mongodb_connection_string

# 5. Start server
npm start

```

🧑‍💻 Author
Made with ❤️ by Sagar
Feel free to fork, use, and improve!
