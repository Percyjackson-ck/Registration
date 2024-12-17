const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, HTML)
//app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission
app.post("/submit", (req, res) => {
    const { fname, lname, email, dob, gender, bio } = req.body;

    // Respond with the submitted information
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Submitted Information</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <h1>Submitted Information</h1>
                <p><strong>First Name:</strong> ${fname}</p>
                <p><strong>Last Name:</strong> ${lname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Bio:</strong> ${bio}</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
