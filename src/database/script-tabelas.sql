CREATE DATABASE techguard;

USE techguard;

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
	telEmpresa CHAR(9)
);

CREATE TABLE tipoUsuario (
	idTipoUsuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR(45)
);

CREATE TABLE Usuario (
	idUsuario INT NOT NULL AUTO_INCREMENT,
	nomeUsuario VARCHAR(45),
	senhaUsuario VARCHAR(500),
	cpf CHAR(14),
	emailUsuario VARCHAR(45),
	telUsuario CHAR(14),
	fkEmpresa INT NOT NULL,
	CONSTRAINT pkUsuarioEmpresa PRIMARY KEY (idUsuario, fkEmpresa),
	CONSTRAINT fkUsuarioEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
	fkTipoUsuario INT NOT NULL,
	CONSTRAINT fkTipoUsuario FOREIGN KEY (fkTipoUsuario) REFERENCES tipoUsuario (idTipoUsuario)
);

CREATE TABLE registros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    attack_ou_disclosure VARCHAR(50) NOT NULL,
    modificados_affect VARCHAR(255) NOT NULL,
    modificados_downstream_target VARCHAR(255) NOT NULL,
    modificados_impact VARCHAR(50) NOT NULL
);
INSERT INTO tipoUsuario (tipo) VALUES
	('Padrao'),
	('Admin');

INSERT INTO empresa (nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa) VALUES
	('TechGuard Solutions', '01414-001', "40.028.922/0001-00", 'techguardsolutions.suporte@gmail.com', "4002-8922");

INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES
	('Admin', '2FD15005E2D51CB1BE7B2C1A75A91AF79C10350B184271A4F9CC9800B93BAFC9', '464.646.422-33', 'admin@techguard.com', '(11)94002-8922', 1, 2);

select * from usuario;