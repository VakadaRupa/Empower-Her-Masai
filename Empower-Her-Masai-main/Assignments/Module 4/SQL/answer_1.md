# Schema Design Fundamentals – Relational Databases

## 1. What is schema design and what does a database schema represent?

Schema design is the process of planning how data is structured and stored in a relational database. It defines the tables, columns, relationships, and rules that control the data.

A **database schema** represents the blueprint of the database. It includes:
- Table names
- Column names
- Data types
- Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, etc.)
- Relationships between tables

A schema is like a building plan — without it, the database becomes messy and unreliable.

---

## 2. Why is schema design required before writing backend code?

Schema design must be done before backend development because backend code depends on how data is stored.

Reasons:
- APIs and queries rely on table structure
- Business logic depends on relationships between tables
- Changing schema later requires rewriting backend code

Example:  
If the `users` table is properly designed first, features like login, signup, and profile management become easier to implement.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability

### Data Consistency
- Duplicate data may exist
- Updates in one place may not reflect
