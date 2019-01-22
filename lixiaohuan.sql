/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : lixiaohuan

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 21/01/2019 18:43:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `articleid` int(8) NOT NULL AUTO_INCREMENT,
  `cateid` int(8) NULL DEFAULT NULL,
  `userid` int(9) NULL DEFAULT NULL,
  `a_time` datetime(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `a_content` varchar(20000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `up` int(9) NULL DEFAULT 0,
  `a_state` int(1) UNSIGNED ZEROFILL NULL DEFAULT 1,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  PRIMARY KEY (`articleid`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  INDEX `cateid`(`cateid`) USING BTREE,
  CONSTRAINT `cateid` FOREIGN KEY (`cateid`) REFERENCES `category` (`cateid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 1, 1, '2019-01-21 10:23:16.224582', '马铃薯的种植方法', '别吃那个土豆那是服务器啊', 0, 1, '');
INSERT INTO `article` VALUES (2, 2, 2, '2019-01-21 10:23:19.815874', '番茄养殖术', '我爱吃番茄', 0, 1, '');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `cateid` int(5) NOT NULL AUTO_INCREMENT,
  `catename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cateid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, '美妆');
INSERT INTO `category` VALUES (2, '秀场');
INSERT INTO `category` VALUES (3, '时尚穿搭');
INSERT INTO `category` VALUES (4, '运动');
INSERT INTO `category` VALUES (5, '风景');
INSERT INTO `category` VALUES (6, '网红食谱');
INSERT INTO `category` VALUES (7, '娱乐');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `commentid` int(10) NOT NULL AUTO_INCREMENT,
  `articleid` int(9) NULL DEFAULT NULL,
  `userid` int(9) NULL DEFAULT NULL,
  `c_time` datetime(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
  `c_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `c_state` int(1) NULL DEFAULT 1,
  PRIMARY KEY (`commentid`) USING BTREE,
  INDEX `uid`(`userid`) USING BTREE,
  INDEX `articleid`(`articleid`) USING BTREE,
  CONSTRAINT `articleid` FOREIGN KEY (`articleid`) REFERENCES `article` (`articleid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 1, 2, '2019-01-19 19:28:35.000000', '写的真好', 1);
INSERT INTO `comment` VALUES (2, 2, 1, '2019-01-21 14:14:08.000000', 'good', 1);

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice`  (
  `noticeid` int(8) NOT NULL AUTO_INCREMENT,
  `noticetitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `n_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `adress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `flag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `n_state` int(1) NULL DEFAULT 1,
  `noticeimgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  PRIMARY KEY (`noticeid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES (1, '汾河公园打滚两周半', '所有人在汾河公园的人立刻打滚', '2019/1/30 19:00:00', '汾河公园', '健身,运动', 1, '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userid` int(9) NOT NULL AUTO_INCREMENT,
  `usertel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` int(1) NULL DEFAULT 0,
  `headurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `stars` int(1) NULL DEFAULT 0,
  `autograph` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `cateids` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `fallow` varchar(6000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `fans` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `isfinished` int(1) NULL DEFAULT 0,
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '13811111111', '123456', '测试员1', 0, NULL, 3, '啦啦啦', '1,2,3，', '2,', '2,', 2);
INSERT INTO `user` VALUES (2, '13811111112', '123456', '测试员2', 1, NULL, 0, '叭叭叭', '1，', '1,', '1,', 2);

SET FOREIGN_KEY_CHECKS = 1;
