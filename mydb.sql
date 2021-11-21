-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2021 at 08:14 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` int(6) NOT NULL,
  `book_name` varchar(80) NOT NULL,
  `book_url` mediumtext NOT NULL,
  `book_price` int(6) NOT NULL,
  `book_status` int(1) NOT NULL,
  `add_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `book_name`, `book_url`, `book_price`, `book_status`, `add_date`) VALUES
(5, 'ขุมทรัพย์สุดปลายฝัน', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786160451692_1.png', 220, 0, '2021-11-20 07:12:15'),
(9, 'Ichigo Ichie ละเลียดปัจจุบัน ดื่มด่ำชีวิต', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786160452415.jpg', 250, 1, '2021-11-20 07:13:09'),
(10, 'ยังไงฉันก็จะเลิกงานตรงเวลาค่ะ', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786168293249.png', 320, 1, '2021-11-20 06:40:54'),
(11, 'เจ้าชายน้อย ฉบับ 2 ภาษา', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786164342569_1.jpg', 280, 0, '2021-11-20 06:43:35'),
(12, 'แปดขุนเขา (ปกแข็ง)', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786169348795.png', 300, 0, '2021-11-20 06:43:51'),
(13, 'เซเปียนส์: ประวัติย่อมนุษยชาติ', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786163016560.jpg', 520, 1, '2021-11-20 06:44:09'),
(14, 'Aesthetica สาวใช้กับปริศนาคดีศิลป์ เล่ม 2', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786165723275.jpg', 285, 1, '2021-11-20 06:47:36'),
(15, 'หนังสือเล่มหนึ่งซึ่งไม่มีวางขาย', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786161843397_1.png', 220, 1, '2021-11-20 06:48:16'),
(16, 'ทะมงกับเด็กชายและความหมายของชีวิต', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786161843670.jpg', 285, 0, '2021-11-20 06:54:02'),
(17, 'แด่เธอผู้เปล่งประกายใต้แสงจันทร์', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786161843229.jpg', 240, 1, '2021-11-20 06:54:19'),
(18, 'โตเกียวทาวเวอร์แม่กับผมและพ่อในบางครั้งคราว', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786161842161_1.png', 300, 1, '2021-11-20 06:54:37'),
(19, 'ฤดูร้อนครั้งต่อไป จะไม่ได้เจอกันอีกแล้วสินะ', 'https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786165159043.png', 330, 0, '2021-11-20 06:54:51');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `mem_id` int(6) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `mem_password` varchar(200) NOT NULL,
  `mem_permission` int(1) NOT NULL DEFAULT 0,
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--
INSERT INTO `member` (`mem_id`, `first_name`, `last_name`, `username`, `mem_password`, `mem_permission`, `reg_date`) VALUES
(1, 'User123', 'User123', 'User123', '$2a$10$D4RI3YmfFHS2JRadGx7LaOGoaN2UHH.lx3OkgGvb3aWymgA5Apcpq', 0, '2021-11-20 07:18:21'),
(2, 'admin123', 'admin123', 'admin123', '$2a$10$dxCgNP1GikfxmaLarDyi7.rV61/On6OZhOeSEjU0sPw5MwNyFLKaC', 1, '2021-11-20 07:18:24');

--
-- Table structure for table `orderlist`
--

CREATE TABLE `orderlist` (
  `order_id` int(6) NOT NULL,
  `mem_id` int(6) NOT NULL,
  `book_id` int(6) NOT NULL,
  `order_status` int(1) NOT NULL DEFAULT "0",
  `destination` varchar(300) NOT NULL,
  `oder_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`mem_id`);

--
-- Indexes for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `book_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `mem_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `order_id` int(6) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
