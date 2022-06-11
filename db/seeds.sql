INSERT INTO departments (name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary)
VALUES
    ('Software Engineer', 120000),
    ('Salesperson', 80000),
    ('Accountant', 125000),
    ('Lawyer', 190000);

INSERT INTO employees (first_name, last_name, manager_id)
VALUES
    ('Mike', 'Chan', 1),
    ('Ashley', 'Rodriguez', 'null'),
    ('Kevin', 'Tupik', 'null'),
    ('Tom', 'Allen', 'null');