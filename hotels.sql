-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2023 at 11:38 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
  `UserId` int(11) NOT NULL,
  `ArrivalDate` date NOT NULL,
  `DepartureDate` date NOT NULL,
  `RoomId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_booking`
--

INSERT INTO `t_booking` (`ID`, `UserId`, `ArrivalDate`, `DepartureDate`, `RoomId`) VALUES
(1, 2, '2023-04-12', '2023-04-15', 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_extrashotel`
--

CREATE TABLE `t_extrashotel` (
  `ID` int(11) NOT NULL,
  `HotelID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_extrashotel`
--

INSERT INTO `t_extrashotel` (`ID`, `HotelID`, `ServiceID`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_extrasroom`
--

CREATE TABLE `t_extrasroom` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_extrasroom`
--

INSERT INTO `t_extrasroom` (`ID`, `RoomID`, `ServiceID`) VALUES
(1, 1, 4),
(2, 2, 5),
(3, 3, 4),
(4, 4, 5);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_hotel`
--

INSERT INTO `t_hotel` (`ID`, `Name`, `Description`, `Adress`, `Floors`, `Stars`, `HotelPictureID`) VALUES
(1, 'Noma', 'В отеле Noma гости могут отдохнуть на лоне природы, посетить ресторан и воспользоваться бесплатным WiFi на всей территории отеля. В каждом номере есть телевизор и стол со стульями. В собственной ванной комнате установлен душ, а из окон открывается ви', 'Urnas 25', 4, '4.0', 1),
(2, 'Voma', 'В отеле Noma гости могут отдохнуть на лоне природы, посетить ресторан и воспользоваться бесплатным WiFi на всей территории отеля. В каждом номере есть телевизор и стол со стульями. В собственной ванной комнате установлен душ, а из окон открывается ви', 'Poma 12', 6, '5.0', 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_hotelpicture`
--

CREATE TABLE `t_hotelpicture` (
  `ID` int(11) NOT NULL,
  `HotelPicture` blob NOT NULL,
  `HotelID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_hotelpicture`
--

INSERT INTO `t_hotelpicture` (`ID`, `HotelPicture`, `HotelID`) VALUES
(1, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3236353531313935382e6a70673f6b3d61393632613362366161643130653231323132303666616336626263313164656433663164363432623539343934333132383663373031303731653835366233266f3d2668703d31, 1),
(2, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3339373132303131362e6a70673f6b3d61363230396264383763666630633736636134316537396130653338373531303363636338616162343661323836663363386364373734643465633830356564266f3d2668703d31, 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_reviewpicture`
--

CREATE TABLE `t_reviewpicture` (
  `ID` int(11) NOT NULL,
  `ReviewsID` int(11) NOT NULL,
  `ReviewPicture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_reviewpicture`
--

INSERT INTO `t_reviewpicture` (`ID`, `ReviewsID`, `ReviewPicture`) VALUES
(1, 1, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3434353238383635312e6a70673f6b3d65623233633262323834646533663166323138623361636537623637313766326461373139656332343736333734663366613437643534323364343264336633266f3d2668703d31),
(2, 2, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3434353238383635312e6a70673f6b3d65623233633262323834646533663166323138623361636537623637313766326461373139656332343736333734663366613437643534323364343264336633266f3d2668703d31);

-- --------------------------------------------------------

--
-- Table structure for table `t_reviews`
--

CREATE TABLE `t_reviews` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `BookingId` int(11) NOT NULL,
  `Opinion` varchar(150) DEFAULT NULL,
  `Rating` decimal(2,1) DEFAULT NULL,
  `ReviewPictureID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_reviews`
--

INSERT INTO `t_reviews` (`ID`, `UserID`, `BookingId`, `Opinion`, `Rating`, `ReviewPictureID`) VALUES
(1, 2, 1, 'Прекрасный отель для отдыха', '5.0', 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_room`
--

INSERT INTO `t_room` (`HotelID`, `RoomID`, `RoomTypeID`, `Price`, `Amount`, `RoomPictureID`) VALUES
(1, 1, 1, 70, 24, 1),
(1, 2, 2, 85, 30, 2),
(2, 3, 2, 76, 34, 3),
(2, 4, 3, 90, 60, 4);

-- --------------------------------------------------------

--
-- Table structure for table `t_roompicture`
--

CREATE TABLE `t_roompicture` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `RoomPicture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_roompicture`
--

INSERT INTO `t_roompicture` (`ID`, `RoomID`, `RoomPicture`) VALUES
(1, 1, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3236353530393032332e6a70673f6b3d65353936653437313933316465323538353264633737643835336365343432313462316532653865643765636166356661353039666132643562386431346461266f3d2668703d31),
(2, 2, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3236353530393931302e6a70673f6b3d62313361383434643835656335623937363838303633343034313236306331396432353133613037363234346533646638356135636663323935316536343235266f3d2668703d31),
(3, 3, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3236353530393931302e6a70673f6b3d62313361383434643835656335623937363838303633343034313236306331396432353133613037363234346533646638356135636663323935316536343235266f3d2668703d31),
(4, 4, 0x68747470733a2f2f63662e627374617469632e636f6d2f78646174612f696d616765732f686f74656c2f6d617831323830783930302f3236353530393032332e6a70673f6b3d65353936653437313933316465323538353264633737643835336365343432313462316532653865643765636166356661353039666132643562386431346461266f3d2668703d31);

-- --------------------------------------------------------

--
-- Table structure for table `t_roomtype`
--

CREATE TABLE `t_roomtype` (
  `ID` int(11) NOT NULL,
  `Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_roomtype`
--

INSERT INTO `t_roomtype` (`ID`, `Type`) VALUES
(1, 'double room'),
(2, 'single room'),
(3, 'Family room');

-- --------------------------------------------------------

--
-- Table structure for table `t_services`
--

CREATE TABLE `t_services` (
  `ID` int(11) NOT NULL,
  `Name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_services`
--

INSERT INTO `t_services` (`ID`, `Name`) VALUES
(1, 'SPA'),
(2, 'Baby room'),
(3, 'Garden'),
(4, 'Wi-fi'),
(5, 'kitchen');

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `ID` int(11) NOT NULL,
  `Username` varchar(25) NOT NULL,
  `UserPassword` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`ID`, `Username`, `UserPassword`) VALUES
(1, 'Admin', 'adm12345'),
(2, 'User', 'User123'),
(3, 'Mars', 'Mars123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_booking`
--
ALTER TABLE `t_booking`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `RoomId` (`RoomId`);

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
  ADD KEY `BookingId` (`BookingId`),
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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_hotel`
--
ALTER TABLE `t_hotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_hotelpicture`
--
ALTER TABLE `t_hotelpicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_reviewpicture`
--
ALTER TABLE `t_reviewpicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_reviews`
--
ALTER TABLE `t_reviews`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `t_room`
--
ALTER TABLE `t_room`
  MODIFY `RoomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_roompicture`
--
ALTER TABLE `t_roompicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_roomtype`
--
ALTER TABLE `t_roomtype`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `t_services`
--
ALTER TABLE `t_services`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
