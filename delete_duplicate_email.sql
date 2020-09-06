/*

https://leetcode.com/problems/delete-duplicate-emails/

Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Note:

Your output is the whole Person table after executing your sql. Use delete statement.

 */





/*

The query below deletes anything that is not the minimum id of a duplicate from the email column

*/

DELETE FROM Person
WHERE id NOT IN
    (
    SELECT MIN(id)
    FROM Person
    GROUP BY email
    )

/*

Leetcode only allows MySQL, not SQLite, so I had to tweak the code above to what it is below. Inside the parentheses inner query, MySQL doesn't allow the same table reference that the outer SELECT query has (in this case, Person table). However, it does allow a SELECT * provided you use an alias (in the case below, PersonTable)

DELETE FROM Person
WHERE id NOT IN
    (
    SELECT MIN(id)
    FROM (SELECT * FROM Person) AS PersonTable
    GROUP BY email
    )
*/