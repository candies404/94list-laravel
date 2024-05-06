/*
 Navicat Premium Data Transfer

 Source Server         : 94list2
 Source Server Type    : SQLite
 Source Server Version : 3035005 (3.35.5)
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3035005 (3.35.5)
 File Encoding         : 65001

 Date: 07/05/2024 00:05:37
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS "accounts";
CREATE TABLE "accounts" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "baidu_name" text NOT NULL,
  "netdisk_name" text NOT NULL,
  "cookie" text NOT NULL,
  "vip_type" text NOT NULL,
  "switch" integer NOT NULL,
  "reason" text,
  "svip_end_at" text NOT NULL,
  "last_use_at" text NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  "deleted_at" text
);

-- ----------------------------
-- Table structure for groups
-- ----------------------------
DROP TABLE IF EXISTS "groups";
CREATE TABLE "groups" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" text NOT NULL COLLATE BINARY,
  "count" integer NOT NULL DEFAULT 0,
  "size" integer NOT NULL DEFAULT 0,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  "deleted_at" text
);

-- ----------------------------
-- Table structure for inv_codes
-- ----------------------------
DROP TABLE IF EXISTS "inv_codes";
CREATE TABLE "inv_codes" (
  "id" integer NOT NULL,
  "name" text NOT NULL,
  "use_count" integer NOT NULL,
  "can_count" integer NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  "deleted_at" text,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Table structure for ips
-- ----------------------------
DROP TABLE IF EXISTS "ips";
CREATE TABLE "ips" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "ip" text NOT NULL,
  "mode" integer NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL
);

-- ----------------------------
-- Table structure for records
-- ----------------------------
DROP TABLE IF EXISTS "records";
CREATE TABLE "records" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "ip" text NOT NULL,
  "fs_id" text NOT NULL,
  "filename" text NOT NULL,
  "size" integer NOT NULL,
  "url" text NOT NULL,
  "ua" text NOT NULL,
  "user_id" integer NOT NULL,
  "account_id" integer NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL
);

-- ----------------------------
-- Table structure for sqlite_sequence
-- ----------------------------
DROP TABLE IF EXISTS "sqlite_sequence";
CREATE TABLE "sqlite_sequence" (
  "name",
  "seq"
);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
  "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  "group_id" integer NOT NULL DEFAULT 0,
  "inv_code_id" integer NOT NULL,
  "username" text NOT NULL COLLATE BINARY,
  "password" text NOT NULL,
  "role" text NOT NULL DEFAULT user,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  "deleted_at" text
);


PRAGMA foreign_keys = true;
