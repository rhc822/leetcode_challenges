-- SQLite
CREATE TABLE Person (
 id INTEGER PRIMARY KEY,
 email TEXT NOT NULL
);

INSERT INTO Person (id, color) VALUES (1, 'john@example.com')

SELECT * FROM Person