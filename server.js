const express = require("express");

const app = express();

const PORT = 3000;

// rell Express where thes website files are
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Andrea's Journal is running at http://localhost:${PORT}`);
});