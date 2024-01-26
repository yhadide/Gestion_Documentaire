# Project Title : SGD (système de gestion des documents)

## Overview

This project is an ongoing initiative developed during an internship, utilizing Spring Boot for the backend and AngularJS for the frontend as well as MySQL for database management. The application focuses on efficient user and document management, offering features such as user registration, document handling, workflow tracking, audit logging, and metadata management.

## Language Note

This project is primarily developed in French, as it aligns with the language of study. Code comments, documentation, and user interfaces are predominantly in French. I appreciate your understanding, and feel free to reach out if you have any questions or require clarification in English or another language.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)

## Installation

Before you begin, ensure you have the following installed:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) - Version 8 or later.
- [Node.js](https://nodejs.org/) - Latest LTS version recommended.
- [Angular CLI](https://angular.io/cli) - Install globally using `npm install -g @angular/cli`.
- [WampServer](https://www.wampserver.com/) or [XAMPP](https://www.apachefriends.org/) - Both include Apache, MySQL, and PHP.

### Backend (Spring Boot)

1. Clone the repository:

    ```bash
    git clone https://github.com/yhadide/Gestion_Documentaire
    ```

2. Navigate to the backend directory:

    ```bash
    cd Gestion_Documentaire\GestionDocuments_Backend
    ```

3. Open `src/main/resources/application.properties` and configure your MySQL database settings:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/sgd
    spring.datasource.username=your_database_username
    spring.datasource.password=your_database_password
    ```

4. Build and run the Spring Boot application:

    ```bash
    ./mvnw spring-boot:run
    ```

    The backend will run on `http://localhost:8080`.

### Frontend (AngularJS)

1. Navigate to the frontend directory:

    ```bash
    cd Gestion_Documentaire\GestionsDocuments_Frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. API endpoints are automatically configured in the project 

4. Build and run the AngularJS application:

    ```bash
    ng serve
    ```

    The frontend will run on `http://localhost:4200`.

### Database Initialization

1. Start WampServer or XAMPP and ensure the MySQL service is running.

2. Create a database in MySQL for your application.

3. Run the Springboot Application, the database will be generated automatically

4. Verify that the tables are created in your MySQL database.

Now, your Spring Boot + AngularJS application should be up and running with the MySQL database configured. Adjust any configuration files or details as needed for your specific project requirements.
## Usage

### User Management

#### User Registration by Administrator

To gain access to the platform, users should contact the administrator and provide necessary information. The administrator will then create user accounts by following these steps:

1. User provides required information (name, email, role).
2. Administrator creates a user account associated with the provided email.
3. Administrator informs the user about the successful account creation, providing credentials.

#### User Login

Once users have their credentials, they can log in by:

1. Entering their email and the initial password provided by the administrator.
2. Upon successful login, users access their accounts with restricted privileges based on assigned roles.

This approach ensures user accounts are managed by the administrator, promoting better control over user access and permissions.

### Document Management

#### Adding New Documents

Users can upload files and add associated information such as content, date, recipient, sender, and document type. The document is saved in the database for future tracking.

#### Viewing and Modifying Documents

Users can view and modify previously added documents. Authorized users can make changes to existing documents, updating content or tracking information.

#### Searching for Documents

The application allows users to search for documents based on document type, optimizing access to necessary files and improving overall file management.

#### Deleting Documents

Authorized users can delete documents when necessary.

#### Workflow Tracking

The application provides detailed tracking of workflows associated with each document, offering a real-time view of the current status, responsible parties, and pending actions.

#### Manual Entries in Audit Journal

Each user is responsible for manually entering activities and actions in the audit journal. This record keeps track of actions performed on documents and within the system.

#### Metadata Management

Users can add metadata to documents, such as author, creation date, and associated keywords. This feature enhances document organization and search capabilities based on specific criteria.
