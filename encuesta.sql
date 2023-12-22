create database encuesta;

use encuesta;

create table encuesta_s (
Id int auto_increment primary key,
satisfaccion double
);

drop table encuesta_s;

describe encuesta_s;

select * from encuesta_s;

select avg(satisfaccion) from encuesta_s;

Delete From encuesta_s WHERE Id = 7;

INSERT INTO encuesta_s(satisfaccion) values
(5);

