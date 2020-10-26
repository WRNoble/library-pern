CREATE DATABASE pernlibrary;

CREATE TABLE library(
    library_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    genre VARCHAR(255),
    published INT,
    description VARCHAR(500) 
);