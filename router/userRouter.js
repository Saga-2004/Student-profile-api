import express from "express";
import User from "../models/userModels.js";
import multer, { diskStorage } from "multer";
import fs from "fs";
import path from "path";
let router = express.Router();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    let fileType = "image/jpeg";
    if (file.mimetype == fileType) {
      return cb(null, true);
    } else {
      return cb(new Error("Only JPEG Images are allowed"), false);
    }
  },
});

router.get("/", async (req, res) => {
  try {
    let students = await User.find();
    if (students) {
      res.json(students);
    } else {
      res.status(400).json({ message: "No students are there" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let student = await User.findById(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(400).json({ message: "No such type of student is there" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let student = await User.findByIdAndUpdate(req.params.id, req.body);

    if (student) {
      res.json(student);
    } else {
      res.status(400).json({ message: "No update done yet" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", upload.single("profile_pic"), async (req, res) => {
  try {
    // Add filename to req.body before saving
    req.body.profile_pic = req.file?.filename;

    let student = await User.create(req.body);
    if (student) {
      res.json(student);
    } else {
      res.status(400).json({ message: "No Posting Done" });
    }
  } catch (error) {
    if (req.file) {
      fs.unlink(path.join("./uploads", req.body.profile_pic), (err) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          console.log("Duplicate File Deleted");
        }
      });
    }

    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let student = await User.findById(req.params.id);
    if (student.profile_pic) {
      fs.unlink(path.join("./uploads", student.profile_pic), (err) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          console.log("File Deleted");
        }
      });
    }

    if (student) {
      await User.findByIdAndDelete(req.params.id);
      res.json(await User.find());
    } else {
      res.status(400).json({ message: "No Posting Done" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { router };
