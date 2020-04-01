/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : gocellar

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2020-04-02 10:33:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for 23-3
-- ----------------------------
DROP TABLE IF EXISTS `23-3`;
CREATE TABLE `23-3` (
  `id` int(11) NOT NULL,
  `Company_type` text,
  `Title` text,
  `Established` int(11) DEFAULT NULL,
  `Company_Name` text,
  `Winery_Address` text,
  `Winery_AddressLine1` text,
  `Winery_AddressLine2` text,
  `WineryCity` text,
  `WineryState` text,
  `WineryPostCode` text,
  `WineryCountry` text,
  `CellarDoorSalesRange` text,
  `Winery_Cellar_Door_or_Vineyard` text,
  `Cellar_Door_Hours` text,
  `Cellar_DoorAddress` text,
  `CellarDoorAddressLine1` text,
  `CellarDoorAddressLine2` text,
  `CellarDoorCity` text,
  `CellarDoorState` text,
  `CellarDoorPostcode` text,
  `CellarDoorCountry` text,
  `CellarDoorTelephone` text,
  `CellarDoorFax` text,
  `Telephone` text,
  `Fax` text,
  `Website` text,
  `Facebook` text,
  `Twitter` text,
  `GI_Subregion` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for australian wine producers
-- ----------------------------
DROP TABLE IF EXISTS `australian wine producers`;
CREATE TABLE `australian wine producers` (
  `id` varchar(255) DEFAULT NULL,
  `Company type` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Established` varchar(255) DEFAULT NULL,
  `Company Name` varchar(255) DEFAULT NULL,
  `Winery Address` varchar(255) DEFAULT NULL,
  `Winery Address Line 1` varchar(255) DEFAULT NULL,
  `Winery Address Line 2` varchar(255) DEFAULT NULL,
  `Winery City` varchar(255) DEFAULT NULL,
  `Winery State` varchar(255) DEFAULT NULL,
  `Winery Post Code` varchar(255) DEFAULT NULL,
  `Winery Country` varchar(255) DEFAULT NULL,
  `Cellar Door Sales Range` varchar(255) DEFAULT NULL,
  `Winery, Cellar Door or Vineyard` varchar(255) DEFAULT NULL,
  `Cellar Door Hours` varchar(255) DEFAULT NULL,
  `Cellar Door Address` varchar(255) DEFAULT NULL,
  `Cellar Door Address Line 1` varchar(255) DEFAULT NULL,
  `Cellar Door Address Line 2` varchar(255) DEFAULT NULL,
  `Cellar Door City` varchar(255) DEFAULT NULL,
  `Cellar Door State` varchar(255) DEFAULT NULL,
  `Cellar Door Postcode` varchar(255) DEFAULT NULL,
  `Cellar Door Country` varchar(255) DEFAULT NULL,
  `Cellar Door Telephone` varchar(255) DEFAULT NULL,
  `Cellar Door Fax` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `Fax` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `Facebook` varchar(255) DEFAULT NULL,
  `Twitter` varchar(255) DEFAULT NULL,
  `GI Subregion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for csv
-- ----------------------------
DROP TABLE IF EXISTS `csv`;
CREATE TABLE `csv` (
  `id` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Personnel 1 Title` varchar(255) DEFAULT NULL,
  `Personnel 1 First Name` varchar(255) DEFAULT NULL,
  `Personnel 1 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 1 Delete` varchar(255) DEFAULT NULL,
  `Personnel 2 Title` varchar(255) DEFAULT NULL,
  `Personnel 2 First Name` varchar(255) DEFAULT NULL,
  `Personnel 2 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 2 Delete` varchar(255) DEFAULT NULL,
  `Personnel 3 Title` varchar(255) DEFAULT NULL,
  `Personnel 3 First Name` varchar(255) DEFAULT NULL,
  `Personnel 3 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 3 Delete` varchar(255) DEFAULT NULL,
  `Personnel 4 Title` varchar(255) DEFAULT NULL,
  `Personnel 4 First Name` varchar(255) DEFAULT NULL,
  `Personnel 4 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 4 Delete` varchar(255) DEFAULT NULL,
  `Personnel 5 Title` varchar(255) DEFAULT NULL,
  `Personnel 5 First Name` varchar(255) DEFAULT NULL,
  `Personnel 5 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 5 Delete` varchar(255) DEFAULT NULL,
  `Personnel 6 Title` varchar(255) DEFAULT NULL,
  `Personnel 6 First Name` varchar(255) DEFAULT NULL,
  `Personnel 6 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 6 Delete` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_address
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_address`;
CREATE TABLE `gocellar_address` (
  `id` bigint(20) DEFAULT NULL,
  `addressAlias` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `receiver` varchar(255) DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_advertisement
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_advertisement`;
CREATE TABLE `gocellar_advertisement` (
  `id` int(11) NOT NULL,
  `create_time` date DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `maximum_population` int(11) DEFAULT NULL,
  `eventDate` date DEFAULT NULL,
  `startPeriod` date DEFAULT NULL,
  `endPeriod` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_awardcredit
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_awardcredit`;
CREATE TABLE `gocellar_awardcredit` (
  `userId` int(11) DEFAULT NULL,
  `amount` decimal(19,2) DEFAULT NULL,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_brand
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_brand`;
CREATE TABLE `gocellar_brand` (
  `id` int(11) NOT NULL,
  `description` text,
  `brandName` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_buyer
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_buyer`;
CREATE TABLE `gocellar_buyer` (
  `id` int(11) DEFAULT NULL,
  `isVIP` binary(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_category
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_category`;
CREATE TABLE `gocellar_category` (
  `id` int(11) NOT NULL,
  `create_time` date DEFAULT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_category_coupon
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_category_coupon`;
CREATE TABLE `gocellar_category_coupon` (
  `coupon_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`coupon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_category_porduct
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_category_porduct`;
CREATE TABLE `gocellar_category_porduct` (
  `category_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_chatroom
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_chatroom`;
CREATE TABLE `gocellar_chatroom` (
  `id` int(11) NOT NULL,
  `createTIme` date DEFAULT NULL,
  `creatorMsg` text,
  `receiverMsg` text,
  `creator` bigint(20) DEFAULT NULL,
  `receiver` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_city
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_city`;
CREATE TABLE `gocellar_city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_country
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_country`;
CREATE TABLE `gocellar_country` (
  `id` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_coupon
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_coupon`;
CREATE TABLE `gocellar_coupon` (
  `id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `expire_end_date` date DEFAULT NULL,
  `expire_start_date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `send_end_time` date DEFAULT NULL,
  `send_start_time` date DEFAULT NULL,
  `order_coupon_id` int(11) DEFAULT NULL,
  `sender_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_environment
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_environment`;
CREATE TABLE `gocellar_environment` (
  `id` int(11) DEFAULT NULL,
  `app_version` varchar(255) DEFAULT NULL,
  `crypto_key` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_food_pairing
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_food_pairing`;
CREATE TABLE `gocellar_food_pairing` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `food_id` int(11) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_internaluser
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_internaluser`;
CREATE TABLE `gocellar_internaluser` (
  `userId` bigint(20) DEFAULT NULL,
  `permissionId` int(11) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_order
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_order`;
CREATE TABLE `gocellar_order` (
  `id` bigint(20) DEFAULT NULL,
  `receive_time` date DEFAULT NULL,
  `confirmed_time` date DEFAULT NULL,
  `shipping_time` date DEFAULT NULL,
  `complete_time` date DEFAULT NULL,
  `invocie_title` varchar(255) DEFAULT NULL,
  `ship_no` varchar(255) DEFAULT NULL,
  `payment` decimal(19,2) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `update_time` bigint(20) DEFAULT NULL,
  `buyer_id` bigint(20) DEFAULT NULL,
  `buyer_ship_info_id` int(11) DEFAULT NULL,
  `supplier_id` bigint(20) DEFAULT NULL,
  `paymentId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_order_coupon
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_order_coupon`;
CREATE TABLE `gocellar_order_coupon` (
  `quantiy` int(11) NOT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`quantiy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_order_item
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_order_item`;
CREATE TABLE `gocellar_order_item` (
  `it` bigint(20) NOT NULL,
  `current_unit_price` decimal(19,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `total_price` decimal(19,2) DEFAULT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`it`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_order_payment
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_order_payment`;
CREATE TABLE `gocellar_order_payment` (
  `id` bigint(20) DEFAULT NULL,
  `cancel_time` date DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `payment` decimal(19,2) DEFAULT NULL,
  `payment_gateway_no` varchar(255) DEFAULT NULL,
  `payment_no` varchar(255) DEFAULT NULL,
  `payment_type` tinyint(4) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `description` text,
  `order_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_product
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_product`;
CREATE TABLE `gocellar_product` (
  `id` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `saled_quantity` int(11) DEFAULT NULL,
  `create_time` time DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `volume` int(11) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `original_price` decimal(19,2) DEFAULT NULL,
  `sale_price` decimal(20,0) DEFAULT NULL,
  `package` tinyint(4) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `update_time` time DEFAULT NULL,
  `video_url` varchar(1100) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `vintage` int(11) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `sight_score` int(3) DEFAULT NULL,
  `nose_score` int(7) DEFAULT NULL,
  `palate_score` int(10) DEFAULT NULL,
  `product_code` varchar(255) DEFAULT NULL,
  `threshold` int(11) DEFAULT NULL,
  `alchohols` decimal(2,0) DEFAULT NULL,
  `standard_drink` int(11) DEFAULT NULL,
  `food_pairing` text,
  `winemaker` text,
  `brand_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `GrapeType_id` int(11) DEFAULT NULL,
  `creator_user_id` bigint(20) DEFAULT NULL,
  `updator_user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_product_comment
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_product_comment`;
CREATE TABLE `gocellar_product_comment` (
  `id` int(11) NOT NULL,
  `create_time` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `star` tinyint(4) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `order_item_id` bigint(20) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_product_picture
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_product_picture`;
CREATE TABLE `gocellar_product_picture` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_scanning
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_scanning`;
CREATE TABLE `gocellar_scanning` (
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_ship_info
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_ship_info`;
CREATE TABLE `gocellar_ship_info` (
  `id` int(11) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(19,2) DEFAULT NULL,
  `ship_no` varchar(255) DEFAULT NULL,
  `address_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_state
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_state`;
CREATE TABLE `gocellar_state` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_supplier
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_supplier`;
CREATE TABLE `gocellar_supplier` (
  `userId` bigint(20) DEFAULT NULL,
  `permissionId` int(11) DEFAULT NULL,
  `description` text,
  `winery_info_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_task
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_task`;
CREATE TABLE `gocellar_task` (
  `id` int(11) NOT NULL,
  `createTime` date DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `taskDetail` text,
  `creator` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='		';

-- ----------------------------
-- Table structure for gocellar_user
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_user`;
CREATE TABLE `gocellar_user` (
  `id` bigint(255) DEFAULT NULL,
  `creat_time` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `update_time` bigint(20) DEFAULT NULL,
  `briefDescription` text,
  `accessToken` varchar(255) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `awardCreditId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_user_coupon
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_user_coupon`;
CREATE TABLE `gocellar_user_coupon` (
  `quantiy` int(11) NOT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`quantiy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gocellar_winery_info
-- ----------------------------
DROP TABLE IF EXISTS `gocellar_winery_info`;
CREATE TABLE `gocellar_winery_info` (
  `id` int(11) NOT NULL,
  `wineryName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `postCode` varchar(255) DEFAULT NULL,
  `establishedTime` int(5) DEFAULT NULL,
  `description` text,
  `websiteUrl` varchar(255) DEFAULT NULL,
  `wineProduction` varchar(255) DEFAULT NULL,
  `plantArea` varchar(255) DEFAULT NULL,
  `haveCellarDoor` binary(1) DEFAULT NULL,
  `openingHourse` varchar(255) DEFAULT NULL,
  `ownerName` varchar(255) DEFAULT NULL,
  `wineMakerName` varchar(255) DEFAULT NULL,
  `ABN` varchar(255) DEFAULT NULL,
  `ACN` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `mobilePhone` varchar(255) DEFAULT NULL,
  `Fax` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `insuranceProvided` binary(1) DEFAULT NULL,
  `wineryImage` varchar(45) DEFAULT NULL,
  `logoImage` varchar(45) DEFAULT NULL,
  `otherDocsImage` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gogogo
-- ----------------------------
DROP TABLE IF EXISTS `gogogo`;
CREATE TABLE `gogogo` (
  `id` varchar(255) NOT NULL,
  `Company_type` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Established` varchar(255) DEFAULT NULL,
  `CompanyName` varchar(255) DEFAULT NULL,
  `WineryAddress` varchar(255) DEFAULT NULL,
  `WineryAddressLine_1` varchar(255) DEFAULT NULL,
  `WineryAddressLine_2` varchar(255) DEFAULT NULL,
  `WineryCity` varchar(255) DEFAULT NULL,
  `WineryState` varchar(255) DEFAULT NULL,
  `WineryPostCode` varchar(255) DEFAULT NULL,
  `WineryCountry` varchar(255) DEFAULT NULL,
  `CellarDoorSalesRange` varchar(255) DEFAULT NULL,
  `WineryCellarDoororVineyard` varchar(255) DEFAULT NULL,
  `CellarDoorHours` varchar(255) DEFAULT NULL,
  `CellarDoorAddress` varchar(255) DEFAULT NULL,
  `CellarDoorAddressLine_1` varchar(255) DEFAULT NULL,
  `CellarDoorAddressLine_2` varchar(255) DEFAULT NULL,
  `CellarDoorCity` varchar(255) DEFAULT NULL,
  `CellarDoorState` varchar(255) DEFAULT NULL,
  `CellarDoorPostcode` varchar(255) DEFAULT NULL,
  `CellarDoorCountry` varchar(255) DEFAULT NULL,
  `CellarDoorTelephone` varchar(255) DEFAULT NULL,
  `CellarDoorFax` varchar(255) DEFAULT NULL,
  `CellarDoorEmail` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `Fax` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `Facebook` varchar(255) DEFAULT NULL,
  `Twitter` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for new zealand wine producers
-- ----------------------------
DROP TABLE IF EXISTS `new zealand wine producers`;
CREATE TABLE `new zealand wine producers` (
  `Title` varchar(255) DEFAULT NULL,
  `Preferred Winery Contact` varchar(255) DEFAULT NULL,
  `Winery Address` varchar(255) DEFAULT NULL,
  `Winery Address Line 1` varchar(255) DEFAULT NULL,
  `Winery Address Line 2` varchar(255) DEFAULT NULL,
  `Winery City` varchar(255) DEFAULT NULL,
  `Winery State` varchar(255) DEFAULT NULL,
  `Winery Post Code` varchar(255) DEFAULT NULL,
  `Winery, Cellar Door or Vineyard` varchar(255) DEFAULT NULL,
  `Cellar Door Address` varchar(255) DEFAULT NULL,
  `Cellar Door Address Line 1` varchar(255) DEFAULT NULL,
  `Cellar Door Address Line 2` varchar(255) DEFAULT NULL,
  `Cellar Door City` varchar(255) DEFAULT NULL,
  `Cellar Door State` varchar(255) DEFAULT NULL,
  `Cellar Door Postcode` varchar(255) DEFAULT NULL,
  `Cellar Door Country` varchar(255) DEFAULT NULL,
  `Cellar Door Telephone` varchar(255) DEFAULT NULL,
  `Cellar Door Fax` varchar(255) DEFAULT NULL,
  `Cellar Door Email` varchar(255) DEFAULT NULL,
  `Cellar Door Website` varchar(255) DEFAULT NULL,
  `Cellar Door Facebook` varchar(255) DEFAULT NULL,
  `Cellar Door Twitter` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `Fax` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `Facebook` varchar(255) DEFAULT NULL,
  `Twitter` varchar(255) DEFAULT NULL,
  `GI Region` varchar(255) DEFAULT NULL,
  `GI Subregion` varchar(255) DEFAULT NULL,
  `Hectares Under Vine` varchar(255) DEFAULT NULL,
  `Varieties` varchar(255) DEFAULT NULL,
  `Vineyards` varchar(255) DEFAULT NULL,
  `Other Varieties` varchar(255) DEFAULT NULL,
  `Tonnes Crushed` varchar(255) DEFAULT NULL,
  `Cases` varchar(255) DEFAULT NULL,
  `Brands` varchar(255) DEFAULT NULL,
  `Distributors` varchar(255) DEFAULT NULL,
  `Cleanskin` varchar(255) DEFAULT NULL,
  `Cleanskin Cases` varchar(255) DEFAULT NULL,
  `Cleanskin Case Sales` varchar(255) DEFAULT NULL,
  `Staff` varchar(255) DEFAULT NULL,
  `Personnel 1 Title` varchar(255) DEFAULT NULL,
  `Personnel 1 First Name` varchar(255) DEFAULT NULL,
  `Personnel 1 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 2 Title` varchar(255) DEFAULT NULL,
  `Personnel 2 First Name` varchar(255) DEFAULT NULL,
  `Personnel 2 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 3 Title` varchar(255) DEFAULT NULL,
  `Personnel 3 First Name` varchar(255) DEFAULT NULL,
  `Personnel 3 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 4 Title` varchar(255) DEFAULT NULL,
  `Personnel 4 First Name` varchar(255) DEFAULT NULL,
  `Personnel 4 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 5 Title` varchar(255) DEFAULT NULL,
  `Personnel 5 First Name` varchar(255) DEFAULT NULL,
  `Personnel 5 Last Name` varchar(255) DEFAULT NULL,
  `Personnel 6 Title` varchar(255) DEFAULT NULL,
  `Personnel 6 First Name` varchar(255) DEFAULT NULL,
  `Personnel 6 Last Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
