INSERT INTO departments (name) VALUES ("sales"), ("marketing"), ("services");
INSERT INTO roles (title, department_id, salary) VALUES 
("salesperson", 1, 50000), 
("saleslead", 1, 60000), 
("marketer", 2, 60000);

INSERT INTO employees (first_name, last_name, manager, role_id) VALUES 
("Adam", "Frenza", "Bob", 1), 
("Preston", "tait", "Bob", 2), 
("Rachelle", "Pearson", "Sarah", 3);