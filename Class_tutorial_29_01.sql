CREATE DATABASE assignment11;


CREATE TABLE employee (
  emp_id INT PRIMARY KEY,
  f_name VARCHAR(50),
  l_name VARCHAR(50),
  salary BIGINT,
  dept_id INT NOT NULL
  );
ALTER TABLE employee MODIFY COLUMN salary BIGINT;



INSERT INTO employee (emp_id, f_name, l_name, salary, dept_id) VALUES
(10000, 'Smith', 'Anderson', 62600, 101),
(10001, 'John', 'deer', 52175, 102),
(10002, 'Everet', 'Brad', 71000, 103),
(10003, 'Jack', 'Howard', 42000, 104),
(10004, 'Sparrow', 'Jack', 33875, 105);
INSERT INTO employee (emp_id, f_name, l_name, salary, dept_id) VALUES (10005, 'Jackson', 'Joe', 45350, 106);



INSERT INTO employee VALUES (1002, 'Brad', 'Pitt', 20000, 101 );

ALTER TABLE employee
ADD COLUMN HRA INT ;
ALTER TABLE employee
ADD COLUMN Basic_pay INT;

UPDATE employee
SET Basic_pay = salary * 0.45
WHERE emp_id > 0; 


UPDATE employee SET HRA = Basic_pay * 0.25 WHERE emp_id > 0; ;

SELECT 
    
    AVG (salary) 
FROM employee;

ALTER TABLE employee
DROP COLUMN emp_id;

SELECT DISTINCT salary FROM employee;

SELECT COUNT(DISTINCT salary) 
FROM employee;

SELECT * FROM employee;



