CREATE DATABASE techguard;

USE techguard;

CREATE TABLE plano (
	idPlano INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nomePlano VARCHAR(45)
);

CREATE TABLE contato (
	idContato INT PRIMARY KEY AUTO_INCREMENT,
	nomeContato VARCHAR(45),
	emailContato VARCHAR(45),
	mensagem VARCHAR(300)
);

CREATE TABLE empresa (
	idEmpresa INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nomeEmpresa VARCHAR(45),
	cep CHAR(9),
	cnpj CHAR(18),
	emailCorporativo VARCHAR(45),
	telEmpresa CHAR(8),
	fkPlano INT,
	CONSTRAINT fkPlano FOREIGN KEY (fkPlano) REFERENCES plano (idPlano)
);

CREATE TABLE tipoUsuario (
	idTipoUsuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR(45)
);

CREATE TABLE baseDeDados (
	idBase INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nomeBase VARCHAR(250),
	arquivoBase LONGBLOB,
	dataEnvio DATETIME,
	ativo BOOLEAN,
	fkEmpresa INT NOT NULL,
	CONSTRAINT fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE usuario (
	idUsuario INT NOT NULL AUTO_INCREMENT,
	nomeUsuario VARCHAR(45),
	senhaUsuario VARCHAR(45),
	cpf CHAR(11),
	emailUsuario VARCHAR(45),
	telUsuario CHAR(11),
	fkEmpresa INT NOT NULL,
	CONSTRAINT pkUsuarioEmpresa PRIMARY KEY (idUsuario, fkEmpresa),
	CONSTRAINT fkUsuarioEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
	fkTipoUsuario INT NOT NULL,
	CONSTRAINT fkTipoUsuario FOREIGN KEY (fkTipoUsuario) REFERENCES tipoUsuario (idTipoUsuario)
);

INSERT INTO plano (nomePlano) VALUES
	("tech"),
	("guard");

INSERT INTO tipoUsuario (tipo) VALUES
	('Padrao'),
	('Admin');

INSERT INTO empresa (nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa, fkPlano) VALUES
	('TechGuard Solutions', '01414-001', "40.028.922/0001-00", 'techguardsolutions.suporte@gmail.com', "40028922", 2);

INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES
	('Gustavo Gil', '123456', '46464642233', 'gustavo.gil@techguard.com', '11940672967', 1, 2);

	SELECT * FROM usuario;
	SELECT * FROM empresa;
	SELECT * FROM plano;
	SELECT * FROM tipousuario;
	SELECT * FROM basededados;
	SELECT * FROM contato;
