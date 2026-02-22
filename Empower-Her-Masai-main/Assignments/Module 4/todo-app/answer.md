## Database Fundamentals – Conceptual Understanding
# 1. Why db.json is not suitable for real projects
- While db.json (often used with json-server) is excellent for prototyping and local development, it fails in production environments due to the following limitations:

- Concurrency Issues: A JSON file does not support multiple simultaneous "writes." If two users try to update data at the exact same time, the file can become corrupted, or one user's changes will be overwritten.

- Performance: To read or write even a single piece of data, the entire file must be loaded into memory, parsed, and then rewritten to the disk. As the data grows, this process becomes incredibly slow.

- Scalability: It lacks indexing. Searching through a million records in a JSON file requires a "linear scan," which is inefficient compared to the optimized search trees used by professional databases.

- Reliability: Files can easily be corrupted during a system crash or power failure because they lack "ACID" compliance (Atomicity, Consistency, Isolation, Durability), which ensures transactions are processed safely.

# 2. Ideal Characteristics of a Database System
Beyond simply storing data, a professional Database Management System (DBMS) provides:

- Performance: The ability to retrieve and manipulate data quickly using Indexing and Query Optimization, even with millions of records.

- Concurrency: The ability for hundreds or thousands of users to read and write to the database at the same time without data conflicts.

- Data Integrity: Enforcing rules (constraints) to ensure data stays accurate. For example, preventing a "Todo" from being created without a title.

- Reliability & Fault Tolerance: Ensuring that once data is saved, it is safe. This includes automatic backups and the ability to recover data if the hardware fails.

- Scalability: The capacity to handle growth, either by upgrading the current server (Vertical Scaling) or by spreading the data across multiple servers (Horizontal Scaling).


## 3. Types of Databases and Use Cases
Databases are generally categorized into two main types based on how they store and relate data:

# Relational Databases (SQL)
These store data in predefined tables with rows and columns. They use Structured Query Language (SQL) and emphasize strict data consistency.

Examples: PostgreSQL, MySQL, Microsoft SQL Server.

Real-World Use Cases: * Banking Systems: Where transactions must be 100% accurate and consistent.

Inventory Management: Where complex relationships between products, suppliers, and orders are required.

# Non-Relational Databases (NoSQL)
These are more flexible and can store data as documents, graphs, or key-value pairs. They are designed to handle unstructured data and massive scale.

Examples: MongoDB (Document), Redis (Key-Value), Neo4j (Graph).

Real-World Use Cases:

Social Media Feeds: Where data types are diverse (posts, images, likes) and the volume of data grows rapidly.

Real-time Analytics: Where speed is more important than strict table structures, such as tracking user behavior on a website.