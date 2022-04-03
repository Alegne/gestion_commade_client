-- Listage de la structure de la base pour gestion_commande
CREATE DATABASE IF NOT EXISTS `gestion_commande` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `gestion_commande`;

-- Listage de la structure de la table gestion_commande. client
CREATE TABLE IF NOT EXISTS `Client` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `adresse` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `cin` varchar(12) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `create_at` date DEFAULT NULL,
  `update_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`cin`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;