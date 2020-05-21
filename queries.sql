-- Database Queries: Using query builder knex.js

-- BASIC STRUCTURES:

    -- GET * FROM ___ {gets all of the inout values}

    -- SELECT <selection> FROM <table name>;

        -- SELECT <selection1>, <selection2> FROM <table name>

        -- SELECT * FROM Customers
        -- WHERE CustomerId=3;

        -- SELECT * FROM employees 
        -- WHERE salary >= 50000

        -- SELECT City, CustomerName, ContactName
        -- FROM Customers
        -- WHERE City = 'Berlin' / WHERE City = 'Berlin' AND Country = 'Germany' / WHERE City = 'Berlin' OR Country = 'Germany'

        -- SELECT name, salary, department
        -- FROM employees
        -- ORDER BY 3, 2 DESC;

        -- SELECT * FROM employees
        -- WHERE salary > 50000
        -- ORDER by last_name;

        -- SELECT * PROM products
        -- LIMIT 10

        -- SELECT * FROM products
        -- ORDER BY price desc
        -- LIMIT 5

    -- INSERT INTO <table name> (<selection>) 
    -- VALUES (<values>)

    -- UPDATE <table name> SET <field> = <value> WHERE <condition>;

    -- DELETE FROM <table name> WHERE <condition>;

-------------------------------------------------------------

-- Find all customers with postal code 1010

-- Find the phone number for the supplier with the id 11

-- List first 10 orders placed, sorted descending by the order date

-- Find all customers that live in London, Madrid, or Brazil

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

-- Update Bilbo Baggins record so that the postal code changes to "11122"

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
