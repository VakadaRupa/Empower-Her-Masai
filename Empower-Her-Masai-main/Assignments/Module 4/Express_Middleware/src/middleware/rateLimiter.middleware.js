const requestLog = {};

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowMs = 60000; // 1 minute window

    if (!requestLog[ip]) {
        requestLog[ip] = [];
    }

    // Keep only requests made within the last minute
    requestLog[ip] = requestLog[ip].filter(time => now - time < windowMs);

    if (requestLog[ip].length >= 15) {
        return res.status(429).json({ 
            error: "Too many requests, please try again later" 
        });
    }

    requestLog[ip].push(now);
    next();
};

module.exports = rateLimiter;