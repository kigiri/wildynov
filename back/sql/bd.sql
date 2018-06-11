
DROP DATABASE IF EXISTS projectynov;
CREATE DATABASE projectynov;
CREATE USER IF NOT EXISTS 'server'@'localhost';

GRANT ALL PRIVILEGES ON projectynov.* To 'server'@'localhost' IDENTIFIED BY 'mysql';

 

USE projectynov;

CREATE TABLE profile(
        id         Int  Auto_increment  NOT NULL,
        name       Varchar (255),
        first_name Varchar (255) ,
        year       Date,
        campus     Varchar (255),
        password   Varchar (255),
        email      Varchar (255) UNIQUE,
        skill      Integer,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
)ENGINE=InnoDB;


CREATE TABLE project(
        id_profile           Int NOT NULL ,
        id                   Int NOT NULL ,
        title                Varchar (255) NOT NULL ,
        deadline_project     Datetime NOT NULL ,
        deadline_application Datetime NOT NULL ,
        description          Varchar (255) NOT NULL ,
        state                Bool NOT NULL ,
        created_at           Datetime NOT NULL ,
        updated              Datetime NOT NULL ,
        name                 Varchar (255) NOT NULL ,
        first_name           Varchar (255) NOT NULL ,
        year                 Date NOT NULL ,
        campus               Varchar (255) NOT NULL ,
        password             Varchar (255) NOT NULL ,
        email                Varchar (255) NOT NULL ,
        skill                Integer NOT NULL ,
        created_at_profile   Datetime NOT NULL ,
        updated_at           Datetime NOT NULL
	,CONSTRAINT project_PK PRIMARY KEY (id_profile,id)
	,CONSTRAINT project_profile_FK FOREIGN KEY (id_profile) REFERENCES profile(id)
)ENGINE=InnoDB;



