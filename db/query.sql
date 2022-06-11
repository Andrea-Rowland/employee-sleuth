SELECT *
FROM departments
LEFT JOIN roles
ON departments.id = roles.department_id 
LEFT JOIN employees
ON roles.id = employees.role_id
WHERE roles.department_id = 2;


