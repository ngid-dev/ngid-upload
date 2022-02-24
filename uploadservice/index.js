const express = require("express");
const multer = require("multer");
const cors = require('cors');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'upload');
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const app = express();

app.use(cors({ origin: '*'}))

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Ok!!!");
});

app.post("/api/v1/upload", upload.single("files"), (req, res) => {
  console.log(req.file);
  console.log(req.files);
  return res.status(200).send({ fileUrl: `http://locahost:3000/api/v1/upload/${req.file.filename}`});
});

app.get('/api/v1/upload/:fileName', (req, res) => {
    console.log(req.params.fileName);
    return res.status(200).send({ message: 'Ok'});
})

app.listen(3000, () => console.log("Server is up"));
