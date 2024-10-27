Rule Engine Application
-------------------------
This Rule Engine application is a simple 3-tier system designed to determine user eligibility based on attributes like age, department, income, and spend. It uses an Abstract Syntax Tree (AST) to represent conditional rules, allowing dynamic rule creation, combination, and evaluation. The app includes a frontend (React), backend (Node.js and Express), and a database (MongoDB).


Table of Contents
-----------------
Features
Project Structure
Setup and Installation
Usage
Endpoints
Technologies Used
Testing and Development
Future Improvements

Features
-------------
Rule Creation: Create conditional rules based on user attributes.
Rule Evaluation: Evaluate users against these rules to determine eligibility.
AST Representation: Store rules as an Abstract Syntax Tree for efficient processing.
Dynamic Rule Updates: Modify existing rules and combine multiple rules into complex structures.

Project Structure
------------------
├── backend
│   ├── config            # Configuration files for database
│   ├── controllers       # Business logic for rules and evaluation
│   ├── models            # Mongoose schemas for rules and users
│   ├── routes            # API routes for rule creation, evaluation, and more
│   ├── utils             # Helper functions and AST utilities
│   ├── .env              # Environment variables (e.g., MONGODB_URI, PORT)
│   └── app.js          # Entry point for the Express server
└── frontend
    ├── public            # Public assets
    ├── src
    │   ├── components    # React components for UI (e.g., RuleForm, RuleList)
    │   ├── services      # API services to interact with backend
    │   ├── App.js        # Main App component
    │   └── index.js      # Entry point for React
└── README.md             # Project documentation

Setup and Installation
------------------------
Prerequisites

Node.js (v14 or higher)
MongoDB (Local or hosted)
NPM (v6 or higher)

Backend Installation
--------------------
Navigate to the backend folder:

npm init -y
npm install express mongoose axios body-parser dotenv

Run the server:
----------------

node app.js

Frontend Installation
-----------------------

Initialize React project (if not already done):

npx create-react-app frontend

npm install axios

npm start

Usage
----------
Create a Rule:

Use the frontend to add a new rule (e.g., age > 30 AND department = 'Sales').


Combine Rules:

Combine multiple rules for complex logic.

Evaluate a Rule:

Use the frontend to input user data for evaluation and see eligibility based on defined rules.


Endpoints
----------------
Backend API
POST /api/rules/create

Create a rule from a string expression.
Body: { ruleString: "<your rule here>" }

POST /api/rules/evaluate

Evaluate a rule with user data.
Body: { ruleId: "<ruleId>", data: { "age": 35, "department": 
"Sales", "salary": 60000 } }

GET /api/rules

Fetch all rules stored in the system.

Technologies Used
--------------------
Frontend: React, Axios
Backend: Node.js, Express, Mongoose, dotenv, body-parser
Database: MongoDB

Testing and Development
---------------------
Backend Testing:

Use Postman or curl to test endpoints on http://localhost:5000.
Example: Create a rule with POST /api/rules/create.

Frontend Testing:

Use the frontend at http://localhost:3000 to interact with the rule engine.
Ensure data validation and correct rendering of results.

Debugging:

Backend: Logs are printed on the server console for each request.
Frontend: Use browser developer tools for debugging.

Future Improvements
-------------------------
Advanced AST Manipulation: Allow user-defined functions for custom conditions.
Rule Versioning: Add the ability to keep versions of rules.
Complex Rule Analysis: Enhance rule analysis for large datasets.
Security: Add authentication and role-based access.

