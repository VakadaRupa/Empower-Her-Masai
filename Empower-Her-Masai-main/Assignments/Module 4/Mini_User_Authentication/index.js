require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * ============================
 * SIGNUP API
 * ============================
 * POST /signup
 */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // Validate input
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into Supabase
    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword,
      },
    ]);

    // Handle errors
    if (error) {
      // Duplicate email error (Postgres unique constraint)
      if (error.code === "23505") {
        return res.status(400).json({ message: "Email already exists" });
      }
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * ============================
 * USER PROFILE API
 * ============================
 * GET /myprofile?name=<name>
 */
app.get("/myprofile", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Name query parameter is required" });
    }

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (error || !data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
