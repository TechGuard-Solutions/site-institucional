CREATE DATABASE techguard;

USE techguard;

CREATE TABLE empresa (
	idEmpresa INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nomeEmpresa VARCHAR(45),
	cep CHAR(9),
	cnpj CHAR(18),
	emailCorporativo VARCHAR(45),
	telEmpresa CHAR(9),
	ativo BOOLEAN
);

CREATE TABLE tipoUsuario (
	idTipoUsuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR(45)
);

CREATE TABLE usuario (
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

CREATE TABLE chamados (
  id VARCHAR(6) PRIMARY KEY,
  nomeUsuario varchar(50),
  emailUsuario varchar(100),
  descricao TEXT NOT NULL,
  prioridade VARCHAR(50) NOT NULL,
  fk_usuario INT NOT NULL,
  statusChamado VARCHAR(15),
  tema VARCHAR(255) NOT NULL,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
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

CREATE TABLE perguntaIA (
	idPerguntaIA INT AUTO_INCREMENT PRIMARY KEY,
    prompt VARCHAR(255) NOT NULL
);

CREATE TABLE respostaIA (
    idRespostaIA INT AUTO_INCREMENT PRIMARY KEY,
    fkPerguntaIA INT NOT NULL,  -- Referência à tabela perguntaIA
    resultado TEXT,            -- Tipo TEXT para textos longos
    FOREIGN KEY (fkPerguntaIA) REFERENCES perguntaIA(idPerguntaIA)
);

INSERT INTO tipoUsuario (tipo) VALUES
	('Padrao'),
	('Admin');

INSERT INTO empresa (nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa, ativo) VALUES
	('TechGuard Solutions', '01414-001', "40.028.922/0001-00", 'techguardsolutions.suporte@gmail.com', "4002-8922", true);

INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES
	('Admin', '2FD15005E2D51CB1BE7B2C1A75A91AF79C10350B184271A4F9CC9800B93BAFC9', '464.646.422-33', 'admin@techguard.com', '(11)94002-8922', 1, 2);
