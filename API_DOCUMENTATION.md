Certainly! Here's the full `API_DOCUMENTATION.md` file:

```markdown
# API Documentation

## Project Name

Instructor API

## Base URL

`https://localhost:8080/api`

## Authentication Endpoints

### Login

**Endpoint:** `/auth/login`

**Request Method:** `POST`

**Request Body:**

```json
{
    "username": "your_username",
    "password": "your_password"
}
```

**Response Body:**

```json
{
    "token": "your_auth_token"
}
```

### Register

**Endpoint:** `/auth/register`

**Request Method:** `POST`

**Request Body:**

```json
{
    "username": "your_username",
    "email": "your_email",
    "password": "your_password"
}
```

**Response Body:**

```json
{
    "message": "User registered successfully."
}
```

## Instructor CRUD Endpoints

### Create Instructor

**Endpoint:** `/instructors`

**Request Method:** `POST`

**Request Body:**

```json
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "yearsOfExperience": 5,
    "specialization": "Java"
}
```

**Response Body:**

```json
{
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "yearsOfExperience": 5,
    "specialization": "Java"
}
```

### Read Instructor

**Endpoint:** `/instructors/:id`

**Request Method:** `GET`

**Response Body:**

```json
{
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "yearsOfExperience": 5,
    "specialization": "Java"
}
```

### Update Instructor

**Endpoint:** `/instructors/:id`

**Request Method:** `PUT`

**Request Body:**

```json
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "yearsOfExperience": 10,
    "specialization": "Python"
}
```

**Response Body:**

```json
{
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "yearsOfExperience": 10,
    "specialization": "Python"
}
```

### Delete Instructor

**Endpoint:** `/instructors/:id`

**Request Method:** `DELETE`

**Response Body:**

```json
{
    "message": "Instructor deleted successfully."
}
```

## Reporting Endpoint

**Endpoint:** `/reports`

**Request Method:** `POST`

**Request Body:**

```json
{
    "start_date": "2022-01-01",
    "end_date": "2022-01-31",
    "status": "active",
    "specialization": "Java"
}
```

**Response Body:**

```json
{
    "total_students": 10,
    "active_students": 5,
    "inactive_students": 5
}
```

## Search Endpoint

**Endpoint:** `/instructors/search`

**Request Method:** `GET`

**Query Parameters:**

- `q`: search query string

**Response Body:**

```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phone": "1234567890",
        "yearsOfExperience": 5,
        "specialization": "Java"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.
