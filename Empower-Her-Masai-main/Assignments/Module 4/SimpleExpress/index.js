const express = require('express');
const os = require('os');
const dns = require('dns');
const { readFileContent } = require('./read');

const app = express();
const PORT = 3000;

// 1. Basic Test Route
app.get('/test', (req, res) => {
    res.send("Test route is working!");
});

// 2. Read File Route
app.get('/readfile', (req, res) => {
    const content = readFileContent('./Data.txt');
    res.send(content);
});

// 3. System Details Route (with Bonus CPU count)
app.get('/systemdetails', (req, res) => {
    const details = {
        platform: os.platform(),
        totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        cpuModel: os.cpus()[0].model,
        cpuCores: os.cpus().length // Bonus task
    };
    res.json(details);
});

// 4. DNS Get IP Route (with Bonus IPv4 & IPv6)
app.get('/getip', (req, res) => {
    const hostname = 'masaischool.com';
    
    dns.lookup(hostname, { all: true }, (err, addresses) => {
        if (err) {
            return res.status(500).json({ error: "DNS Lookup failed" });
        }
        res.json({
            hostname: hostname,
            addresses: addresses // Returns array of both IPv4 and IPv6
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});