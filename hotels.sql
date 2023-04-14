-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2023 at 08:43 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotels`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_booking`
--

CREATE TABLE `t_booking` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ArrivalDate` date NOT NULL,
  `DepartureDate` date NOT NULL,
  `RoomID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_extrashotel`
--

CREATE TABLE `t_extrashotel` (
  `ID` int(11) NOT NULL,
  `HotelID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_extrasroom`
--

CREATE TABLE `t_extrasroom` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_hotel`
--

CREATE TABLE `t_hotel` (
  `ID` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `Adress` varchar(40) NOT NULL,
  `Floors` int(11) NOT NULL,
  `Stars` decimal(2,1) DEFAULT NULL,
  `HotelPictureID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_hotelpicture`
--

CREATE TABLE `t_hotelpicture` (
  `ID` int(11) NOT NULL,
  `HotelPicture` blob NOT NULL,
  `HotelID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_reviewpicture`
--

CREATE TABLE `t_reviewpicture` (
  `ID` int(11) NOT NULL,
  `ReviewsID` int(11) NOT NULL,
  `ReviewPicture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_reviews`
--

CREATE TABLE `t_reviews` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `BookingID` int(11) NOT NULL,
  `Opinion` varchar(150) DEFAULT NULL,
  `Rating` decimal(2,1) DEFAULT NULL,
  `ReviewPictureID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_room`
--

CREATE TABLE `t_room` (
  `HotelID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `RoomTypeID` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `RoomPictureID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_roompicture`
--

CREATE TABLE `t_roompicture` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `RoomPicture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_roomtype`
--

CREATE TABLE `t_roomtype` (
  `ID` int(11) NOT NULL,
  `Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_services`
--

CREATE TABLE `t_services` (
  `ID` int(11) NOT NULL,
  `Name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `ID` int(11) NOT NULL,
  `Username` varchar(25) NOT NULL,
  `UserPassword` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_booking`
--
ALTER TABLE `t_booking`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserId` (`UserID`),
  ADD KEY `RoomId` (`RoomID`);

--
-- Indexes for table `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelID` (`HotelID`),
  ADD KEY `ServiceID` (`ServiceID`);

--
-- Indexes for table `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RoomID` (`RoomID`),
  ADD KEY `Service` (`ServiceID`);

--
-- Indexes for table `t_hotel`
--
ALTER TABLE `t_hotel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelPictureID` (`HotelPictureID`);

--
-- Indexes for table `t_hotelpicture`
--
ALTER TABLE `t_hotelpicture`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `t_reviewpicture`
--
ALTER TABLE `t_reviewpicture`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `t_reviews`
--
ALTER TABLE `t_reviews`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ReviewPictureID` (`ReviewPictureID`),
  ADD KEY `BookingId` (`BookingID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `t_room`
--
ALTER TABLE `t_room`
  ADD PRIMARY KEY (`RoomID`),
  ADD KEY `RoomTypeID` (`RoomTypeID`),
  ADD KEY `HotelID` (`HotelID`),
  ADD KEY `RoomPictureID` (`RoomPictureID`);

--
-- Indexes for table `t_roompicture`
--
ALTER TABLE `t_roompicture`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `t_roomtype`
--
ALTER TABLE `t_roomtype`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `t_services`
--
ALTER TABLE `t_services`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_booking`
--
ALTER TABLE `t_booking`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_hotel`
--
ALTER TABLE `t_hotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_hotelpicture`
--
ALTER TABLE `t_hotelpicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_reviewpicture`
--
ALTER TABLE `t_reviewpicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_reviews`
--
ALTER TABLE `t_reviews`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_room`
--
ALTER TABLE `t_room`
  MODIFY `RoomID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_roompicture`
--
ALTER TABLE `t_roompicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_roomtype`
--
ALTER TABLE `t_roomtype`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_services`
--
ALTER TABLE `t_services`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `t_booking`
--
ALTER TABLE `t_booking`
  ADD CONSTRAINT `t_booking_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `t_user` (`ID`),
  ADD CONSTRAINT `t_booking_ibfk_2` FOREIGN KEY (`RoomId`) REFERENCES `t_room` (`RoomID`);

--
-- Constraints for table `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  ADD CONSTRAINT `t_extrashotel_ibfk_1` FOREIGN KEY (`HotelID`) REFERENCES `t_hotel` (`ID`),
  ADD CONSTRAINT `t_extrashotel_ibfk_2` FOREIGN KEY (`ServiceID`) REFERENCES `t_services` (`ID`);

--
-- Constraints for table `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  ADD CONSTRAINT `t_extrasroom_ibfk_1` FOREIGN KEY (`RoomID`) REFERENCES `t_room` (`RoomID`),
  ADD CONSTRAINT `t_extrasroom_ibfk_2` FOREIGN KEY (`ServiceID`) REFERENCES `t_services` (`ID`);

--
-- Constraints for table `t_hotel`
--
ALTER TABLE `t_hotel`
  ADD CONSTRAINT `t_hotel_ibfk_1` FOREIGN KEY (`HotelPictureID`) REFERENCES `t_hotelpicture` (`ID`);

--
-- Constraints for table `t_reviews`
--
ALTER TABLE `t_reviews`
  ADD CONSTRAINT `t_reviews_ibfk_1` FOREIGN KEY (`ReviewPictureID`) REFERENCES `t_reviewpicture` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_2` FOREIGN KEY (`BookingId`) REFERENCES `t_booking` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_3` FOREIGN KEY (`UserID`) REFERENCES `t_user` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_4` FOREIGN KEY (`ReviewPictureID`) REFERENCES `t_reviewpicture` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_5` FOREIGN KEY (`BookingId`) REFERENCES `t_booking` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_6` FOREIGN KEY (`UserID`) REFERENCES `t_user` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_7` FOREIGN KEY (`ReviewPictureID`) REFERENCES `t_reviewpicture` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_8` FOREIGN KEY (`BookingId`) REFERENCES `t_booking` (`ID`),
  ADD CONSTRAINT `t_reviews_ibfk_9` FOREIGN KEY (`UserID`) REFERENCES `t_user` (`ID`);

--
-- Constraints for table `t_room`
--
ALTER TABLE `t_room`
  ADD CONSTRAINT `t_room_ibfk_1` FOREIGN KEY (`RoomTypeID`) REFERENCES `t_roomtype` (`ID`),
  ADD CONSTRAINT `t_room_ibfk_2` FOREIGN KEY (`HotelID`) REFERENCES `t_hotel` (`ID`),
  ADD CONSTRAINT `t_room_ibfk_3` FOREIGN KEY (`RoomPictureID`) REFERENCES `t_roompicture` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
