const handleContactForm = (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Log the submission (in production, send email or save to database)
  console.log(`Contact Form Submission:`, { name, email, message, timestamp: new Date() });

  // Here you can add database storage or email sending logic
  res.status(200).json({ 
    success: true,
    message: 'Form submitted successfully! We will get back to you soon.' 
  });
};

module.exports = { handleContactForm };
