const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadResume = async (req, res) => {
  try {
    upload.single("resume")(req, res, (err) => {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(500).json({ error: "File upload failed" });
      }
      const { filename, path } = req.file;

      res.json({ success: true, message: "Resume uploaded successfully" });
    });
  } catch (err) {
    console.error("Error in uploadResume:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.fetchResume = (req, res) => {
  const resumePath = path.join(__dirname, "../uploads", "Himanshu Patil.pdf"); // Adjust the file name as needed
  res.download(resumePath);
};
