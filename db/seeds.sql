INSERT INTO departments (name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Software Engineer', 120000, 1),
    ('Salesperson', 80000, 2),
    ('Accountant', 125000, 3),
    ('Lawyer', 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Mike', 'Chan', 1, null),
    ('Ashley', 'Rodriguez', 2, null),
    ('Kevin', 'Tupik', 3, 1),
    ('Tom', 'Allen', 4, null);