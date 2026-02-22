# Database Relationships in E-Commerce Applications

## 1. Definition of Database Relationship
A **database relationship** defines how two or more tables in a relational database are connected to each other. Relationships are created using **primary keys (PK)** and **foreign keys (FK)** to maintain **data integrity**, reduce **redundancy**, and ensure consistent data retrieval.

In an e-commerce system, relationships connect entities like **Customers, Orders, Products, Payments, and Categories**.

---

## 2. Types of Database Relationships
There are **three main types** of relationships in databases:
1. One-to-One (1:1)
2. One-to-Many (1:M)
3. Many-to-Many (M:M)

---

## 3. One-to-One (1:1) Relationship

### Explanation
In a **one-to-one relationship**, one record in Table A is related to only one record in Table B.

### E-Commerce Example
- **Customer ↔ Customer_Profile**
Each customer has exactly one profile.

### Tables
**Customers**
- customer_id (PK)
- name
- email

**Customer_Profile**
- profile_id (PK)
- customer_id (FK)
- address
- phone

### Diagram
Customers (1) -------- (1) Customer_Profile


### Use Case
Stores personal details separately for security and normalization.

---

## 4. One-to-Many (1:M) Relationship

### Explanation
In a **one-to-many relationship**, one record in Table A can relate to multiple records in Table B.

### E-Commerce Example
- **Customer → Orders**
One customer can place many orders.

### Tables
**Customers**
- customer_id (PK)

**Orders**
- order_id (PK)
- customer_id (FK)
- order_date
- total_amount

### Diagram
Customers (1) -------- (M) Orders


### Use Case
Tracks multiple purchases made by the same customer.

---

## 5. Many-to-Many (M:M) Relationship

### Explanation
In a **many-to-many relationship**, multiple records in Table A relate to multiple records in Table B.  
This requires a **junction table**.

### E-Commerce Example
- **Orders ↔ Products**
One order can contain many products, and one product can appear in many orders.

### Tables
**Orders**
- order_id (PK)

**Products**
- product_id (PK)

**Order_Items (Junction Table)**
- order_id (FK)
- product_id (FK)
- quantity
- price

### Diagram
Orders (M) ---- Order_Items ---- (M) Products

### Use Case
Stores cart and order item details.

---

## 6. Relationship Summary Table
| Relationship Type | Example in E-Commerce | Description |
|------------------|----------------------|-------------|
| One-to-One | Customer → Profile | One customer has one profile |
| One-to-Many | Customer → Orders | One customer places many orders |
| Many-to-Many | Orders ↔ Products | Many orders contain many products |

---

## 7. Importance of Database Relationships in E-Commerce
- Ensures **data consistency**
- Prevents **duplicate data**
- Improves **query performance**
- Supports **scalable system design**
- Maintains **referential integrity**

---

## 8. Sample ER Diagram (E-Commerce)
Customer (1) ----- (M) Order (M) ----- (M) Product
   |
   |
  (1)
Payment


---

## 9. Conclusion
Database relationships are the backbone of an e-commerce system. They ensure structured data storage, efficient retrieval, and proper linking of entities such as customers, orders, and products. Properly designed relationships help build scalable, secure, and reliable online shopping platforms.

---

## 10. References
- Database System Concepts – Silberschatz, Korth, Sudarshan
- MySQL Documentation
- Oracle Database Documentation