# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.33)
# Database: harpers
# Generation Time: 2017-02-09 14:30:38 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table harp_answer
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_answer`;

CREATE TABLE `harp_answer` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 id',
  `question_id` int(11) NOT NULL COMMENT '问题 id',
  `markdown_content` text NOT NULL COMMENT '答案内容 markdown',
  `content` text NOT NULL COMMENT '答案内容 html',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '答案状态',
  `agree_count` int(11) NOT NULL DEFAULT '0' COMMENT '同意数',
  `against_count` int(11) NOT NULL DEFAULT '0' COMMENT '反对数',
  `comment_count` int(11) NOT NULL DEFAULT '0' COMMENT '评论数',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `create_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '创建 IP',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `update_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '更新 IP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_collect
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_collect`;

CREATE TABLE `harp_collect` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '收藏用户',
  `question_id` int(11) NOT NULL COMMENT '收藏问题',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_comment`;

CREATE TABLE `harp_comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '评论 id',
  `user_id` int(11) NOT NULL COMMENT '评论作者 id',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '父评论 id',
  `question_id` int(11) NOT NULL COMMENT '评论对应问题 id',
  `answer_id` int(11) DEFAULT NULL COMMENT '评论对应答案 id',
  `markdown_content` text NOT NULL COMMENT '评论内容 markdown',
  `content` text NOT NULL COMMENT '评论内容 html',
  `agree_count` int(11) NOT NULL COMMENT '赞数',
  `against_count` int(11) NOT NULL COMMENT '踩数',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `create_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '创建 IP',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `update_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '更新 IP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_follow
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_follow`;

CREATE TABLE `harp_follow` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '关注者 id',
  `follow_id` int(11) NOT NULL COMMENT '被关注 id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_operation_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_operation_log`;

CREATE TABLE `harp_operation_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '操作 id',
  `user_id` int(11) NOT NULL COMMENT '操作用户',
  `question_id` int(11) NOT NULL COMMENT '问题 id',
  `answer_id` int(11) DEFAULT NULL COMMENT '答案 id',
  `op_name` int(11) NOT NULL COMMENT '操作名称',
  `op_value` int(11) NOT NULL COMMENT '操作值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_options
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_options`;

CREATE TABLE `harp_options` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `hkey` int(11) NOT NULL COMMENT '配置名称',
  `hvalue` int(11) NOT NULL COMMENT '配置值',
  `hdesc` int(11) DEFAULT NULL COMMENT '配置描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_question
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_question`;

CREATE TABLE `harp_question` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '问题 id',
  `user_id` int(11) NOT NULL COMMENT '用户 id',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '问题标题',
  `markdown_content` text NOT NULL COMMENT '问题内容 markdown',
  `content` text NOT NULL COMMENT '问题内容 html',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '问题状态',
  `agree_count` int(11) NOT NULL DEFAULT '0' COMMENT '同意数',
  `against_count` int(11) NOT NULL DEFAULT '0' COMMENT '反对数',
  `comment_count` int(11) NOT NULL DEFAULT '0' COMMENT '评论数',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `create_ip` varchar(255) DEFAULT '' COMMENT '创建 IP',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `update_ip` varchar(255) DEFAULT '' COMMENT '更新 IP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_question_answer_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_question_answer_log`;

CREATE TABLE `harp_question_answer_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '版本记录 id',
  `user_id` int(11) NOT NULL COMMENT '当前版本创建用户 id',
  `question_id` int(11) NOT NULL COMMENT '版本记录对应问题 id',
  `answer_id` int(11) DEFAULT NULL COMMENT '版本记录答案 id',
  `content` text NOT NULL COMMENT '当前版本相关 JSON 内容',
  `create_time` datetime NOT NULL COMMENT '当前版本创建时间',
  `create_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '当前版本创建 IP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_question_tag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_question_tag`;

CREATE TABLE `harp_question_tag` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL COMMENT '问题 id',
  `tag_id` int(11) NOT NULL COMMENT '标签 id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_report
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_report`;

CREATE TABLE `harp_report` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '举报 id',
  `user_id` int(11) NOT NULL COMMENT '举报用户',
  `question_id` int(11) DEFAULT NULL COMMENT '举报问题 id',
  `answer_id` int(11) DEFAULT NULL COMMENT '举报答案 id',
  `comment_id` int(11) DEFAULT NULL COMMENT '举报评论 id',
  `reason` text COMMENT '举报原因',
  `result` int(11) NOT NULL COMMENT '处理结果',
  `operator_id` int(11) NOT NULL COMMENT '处理人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_tag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_tag`;

CREATE TABLE `harp_tag` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '标签 id',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '标签名称',
  `pathname` varchar(255) NOT NULL DEFAULT '' COMMENT '标签 url',
  `description` text NOT NULL COMMENT '标签描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table harp_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `harp_user`;

CREATE TABLE `harp_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(255) DEFAULT NULL COMMENT '用户名称',
  `nickname` varchar(255) DEFAULT NULL COMMENT '用户昵称',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `type` int(11) DEFAULT '0' COMMENT '用户类型',
  `email` varchar(255) DEFAULT NULL COMMENT '用户邮箱',
  `status` int(11) DEFAULT '0' COMMENT '用户状态',
  `github` varchar(255) NOT NULL DEFAULT '' COMMENT '用户 Github 账号',
  `follow_count` int(11) DEFAULT '0' COMMENT '用户关注数',
  `follower_count` int(11) DEFAULT '0' COMMENT '用户粉丝数',
  `question_count` int(11) DEFAULT '0' COMMENT '用户问题数',
  `answer_count` int(11) DEFAULT '0' COMMENT '用户答案数',
  `create_ip` varchar(255) DEFAULT NULL COMMENT '创建 IP',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `last_login_ip` varchar(255) DEFAULT NULL COMMENT '登录 IP',
  `last_login_time` datetime DEFAULT NULL COMMENT '登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
