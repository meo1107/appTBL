-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2019 at 01:30 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app`
--

-- --------------------------------------------------------

--
-- Table structure for table `sach`
--

CREATE TABLE `sach` (
  `mas` int(11) NOT NULL,
  `tens` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  `tloai` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  `matg` int(11) NOT NULL,
  `gia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `sach`
--

INSERT INTO `sach` (`mas`, `tens`, `tloai`, `matg`, `gia`) VALUES
(11, 'Chi em khac me', 'Van hoc', 11, 56000),
(13, 'Chiec ngai vang', 'Van hoc', 13, 28000),
(14, 'Ngay vui', 'Van hoc', 14, 78000);

-- --------------------------------------------------------

--
-- Table structure for table `tacgia`
--

CREATE TABLE `tacgia` (
  `matg` int(11) NOT NULL,
  `tentg` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  `diachi` varchar(50) COLLATE utf8_croatian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `tacgia`
--

INSERT INTO `tacgia` (`matg`, `tentg`, `diachi`) VALUES
(1, 'Shimabukuro Mitsutoshi', 'Nhat Ban'),
(3, 'Bo giao duc va dao tao', 'Viet Nam'),
(4, 'Gosho Aoyama', 'Nhat Ban'),
(5, 'Shimabukuro Mitsutoshi', 'Nhat Ban'),
(6, 'Nguyen Dong Chi', 'Viet Nam'),
(7, 'Nguyen Van Khoa', 'Viet Nam'),
(8, 'Nguyen Du', 'Trung Quoc'),
(9, 'Marie Voriskova', 'Nga'),
(11, 'Thuy Y', 'Viet Nam'),
(12, 'Agatha Christie', 'Nga'),
(13, 'Lan Khai', 'Viet Nam'),
(14, 'Dang Tran Huan', 'Viet Nam'),
(16, 'Nam cao', 'Viet Nam');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  `pass` varchar(50) COLLATE utf8_croatian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `pass`) VALUES
(1, 'anh', '11'),
(2, 'abc', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sach`
--
ALTER TABLE `sach`
  ADD PRIMARY KEY (`mas`);

--
-- Indexes for table `tacgia`
--
ALTER TABLE `tacgia`
  ADD PRIMARY KEY (`matg`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sach`
--
ALTER TABLE `sach`
  MODIFY `mas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `tacgia`
--
ALTER TABLE `tacgia`
  MODIFY `matg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
