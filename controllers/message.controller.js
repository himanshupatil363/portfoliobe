const Message = require("../models/Message");

exports.sendMessage = (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });

  newMessage
    .save()
    .then(() => {
      res.json({ success: true, message: "Message sent successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.viewMessages = (req, res) => {
  Message.find()
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};
