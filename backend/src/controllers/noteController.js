exports.createNote = async (req, res) => {
  try {
    const { title, content, isPinned } = req.body;
    const note = new Note({
      title,
      content,
      isPinned
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};