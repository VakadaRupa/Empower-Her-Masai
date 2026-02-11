# Web Development Fundamentals
## Q1. Role of Frontend (FE)
The Frontend, often called the "client-side," is everything a user sees and interacts with directly in a web browser. Its primary goal is to provide a seamless and intuitive experience.

**User Interface (UI)**: This involves the visual elements of the site, such as layouts, colors, fonts, buttons, and images. It ensures the application is aesthetically pleasing and responsive across different devices (mobile, tablet, desktop).

**User Interaction**: Frontend developers use languages like JavaScript to make pages interactive. This includes handling button clicks, form submissions, animations, and providing immediate feedback to user actions.

**Communication with Backend**: The frontend doesn't hold the actual data (like user profiles). 
It sends requests to the backend (via APIs) to "ask" for information and then displays that data to the user once it receives a response.
------------------------------------------------------------------------------------------------------------------
## Q2. Role of Backend (BE)
The Backend is the "server-side" of the application. It operates behind the scenes to power the frontend, managing the logic and data that the user never sees directly.

**Server-side Processing**: When a user performs an action (like searching for a product), the backend processes that logic, calculates results, and prepares the data to be sent back to the client.

**Database Handling**: The backend is responsible for "CRUD" operations—Creating, Reading, Updating, and Deleting data. It communicates with databases (like PostgreSQL or MongoDB) to store and retrieve persistent information.

**Security and Authentication**: It ensures that users are who they say they are. The backend manages login systems, encrypts passwords, and verifies permissions to make sure a user can only access data they are authorized to see.
------------------------------------------------------------------------------------------------------------------
## Q3. Business Logic
Business Logic is the set of custom rules that dictate how data is created, stored, and changed specifically for a particular business's needs. It is the "brain" of the application that tells the system how to behave in specific scenarios.

**Real-world Examples**:

E-commerce Discounts: A rule stating, "If a customer spends over $100 and it's their first purchase, apply a 20% discount, but exclude shipping costs."

Banking Transfers: Logic that checks if a user has a sufficient balance before allowing a transfer and ensures the money is deducted from one account and added to another simultaneously.

Booking Systems: A rule for a hotel website that prevents two people from booking the same room for the same date at the same time.

## Q4. Client–Server Model
The Client-Server model is a distributed structure that partitions tasks between providers of a resource (servers) and service requesters (clients).

**The Client**: This is the device or application triggering the request. In web development, this is usually a web browser (Chrome, Safari) or a mobile app.

**The Server**: A powerful computer or cloud instance that "serves" resources. It waits for requests, processes them, and sends back the required data.

**Communication**: They communicate via the HTTP/HTTPS protocol. The client sends a Request (e.g., "Give me the homepage"), and the server sends back a Response (e.g., "Here is the HTML/CSS for the homepage").
------------------------------------------------------------------------------------------------------------------
## Q5. Three-Tier Architecture
The 3-Tier architecture is a software design pattern where the application is organized into three distinct logical and physical tiers.

**Presentation Layer (Tier 1)**: The topmost level; it is the user interface (Frontend) that communicates with the other tiers by outputting results to the browser.

**Application / Business Layer (Tier 2)**: The middle tier where data is processed. This is where the business logic resides. It acts as a bridge between the UI and the data.

**Data Layer (Tier 3)**: This consists of the database servers where information is stored and retrieved. It keeps data independent from the application logic.

Why use it? It improves scalability (you can upgrade one tier without affecting others), security (the data layer is hidden from the user), and maintainability.

## Q6. JavaScript as a Backend Language
Originally created for browsers, JavaScript transitioned to the backend with the introduction of Node.js, allowing developers to use a single language for the entire stack.

**Performance**: Node.js uses an "Asynchronous Event-Driven" model. This makes it extremely fast for handling many concurrent connections at once, which is ideal for real-time apps like chat or streaming.

**Ecosystem:** It boasts NPM (Node Package Manager), which is the largest ecosystem of open-source libraries in the world, allowing developers to plug in pre-built tools easily.

**Popular Frameworks**: * Express.js: The standard, minimal framework for building web APIs.

**NestJS**: A progressive framework for building efficient and scalable server-side applications.