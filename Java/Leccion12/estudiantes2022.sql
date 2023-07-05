--Comezamos  con CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)
--Listar los estudiantes (read)
SELECT*FROM estudiantes2022;
--Insertar estudiante
INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES ("Juan", "Perez", "2614545456", "juan@gmail.com");
--Update (modificar)
UPDATE estudiantes2022 SET nombre="Juan Carlos", apellido="García" WHERE idestudiante2022= 1;
