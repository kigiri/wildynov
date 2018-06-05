
DROP DATABASE IF EXISTS  projectynov;

CREATE DATABASE projectynov;

USE projectynov;
CREATE TABLE profile(
        id         Int NOT NULL ,
        name       Varchar (255) NOT NULL ,
        first_name Varchar (255) NOT NULL ,
        year       ENUM ('2018', '2019') NOT NULL ,
        Campus     ENUM ('Bordeaux', 'Nantes', 'Paris', 'Aix-en-Provence', 'Lyon') NOT NULL ,
        password   Varchar (255) NOT NULL ,
        email      Varchar (255) NOT NULL ,
        skill      Varchar (255) NOT NULL ,
        created_at Datetime NOT NULL ,
        updated_at Datetime NOT NULL
	,CONSTRAINT profile_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: project
#------------------------------------------------------------

CREATE TABLE project(
        id                   Int NOT NULL ,
        title                Varchar (255) NOT NULL ,
        deadline_project     Datetime NOT NULL ,
        deadline_application Datetime NOT NULL ,
        id_profile              FOREIGN KEY ,
        description          Varchar (255) NOT NULL ,
        state                Bool NOT NULL ,
        created_at           Datetime NOT NULL ,
        uptated_at           Datetime NOT NULL,
	,CONSTRAINT project_PK PRIMARY KEY (id),
    ,CONSTRAINT  FOREIGN KEY (id_profile)  REFERENCES project(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Profile_has_project
#------------------------------------------------------------

CREATE TABLE Profile_has_project(
        id         Int NOT NULL ,
        id_profile Int NOT NULL ,
        updated_at Datetime NOT NULL ,
        created_at Datetime NOT NULL
	,CONSTRAINT Profile_has_project_PK PRIMARY KEY (id,id_profile)

	,CONSTRAINT Profile_has_project_project_FK FOREIGN KEY (id) REFERENCES project(id)
	,CONSTRAINT Profile_has_project_profile0_FK FOREIGN KEY (id_profile) REFERENCES profile(id)
	
)ENGINE=InnoDB;

