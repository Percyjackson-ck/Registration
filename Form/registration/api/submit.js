export default function handler(req, res) {
    if (req.method === "POST") {
        const { fname, lname, email, dob, gender, bio } = req.body;

        // Send response
        res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Submitted Information</title>
                <link rel="stylesheet" href="/styles.css">
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
    } else {
        res.status(404).send("Not Found");
    }
}
