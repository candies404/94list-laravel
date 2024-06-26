/*
 Navicat Premium Data Transfer

 Source Server         : 94list-public
 Source Server Type    : SQLite
 Source Server Version : 3035005 (3.35.5)
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3035005 (3.35.5)
 File Encoding         : 65001

 Date: 28/06/2024 10:24:39
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS "tokens";
CREATE TABLE "tokens" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" text NOT NULL,
  "count" integer NOT NULL,
  "size" integer NOT NULL,
  "day" integer NOT NULL,
  "expired_at" text,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL
);

PRAGMA foreign_keys = true;
