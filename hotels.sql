-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 23 2023 г., 08:06
-- Версия сервера: 10.1.33-MariaDB
-- Версия PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `hotels`
--

-- --------------------------------------------------------

--
-- Структура таблицы `t_booking`
--

CREATE TABLE `t_booking` (
  `ID` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `ArrivalDate` date NOT NULL,
  `DepartureDate` date NOT NULL,
  `RoomId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_extrashotel`
--

CREATE TABLE `t_extrashotel` (
  `ID` int(11) NOT NULL,
  `HotelID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_extrasroom`
--

CREATE TABLE `t_extrasroom` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_hotel`
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

-- --------------------------------------------------------

--
-- Структура таблицы `t_hotelpicture`
--

CREATE TABLE `t_hotelpicture` (
  `ID` int(11) NOT NULL,
  `HotelPicture` blob NOT NULL,
  `HotelID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_reviewpicture`
--

CREATE TABLE `t_reviewpicture` (
  `ID` int(11) NOT NULL,
  `ReviewsID` int(11) NOT NULL,
  `ReviewPicture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_reviews`
--

CREATE TABLE `t_reviews` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `BookingId` int(11) NOT NULL,
  `Opinion` varchar(150) DEFAULT NULL,
  `Rating` decimal(2,1) DEFAULT NULL,
  `ReviewPictureID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_room`
--

CREATE TABLE `t_room` (
  `HotelID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `RoomTypeID` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `RoomPictureID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_roompicture`
--

CREATE TABLE `t_roompicture` (
  `ID` int(11) NOT NULL,
  `RoomID` int(11) NOT NULL,
  `RoomPicture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_roomtype`
--

CREATE TABLE `t_roomtype` (
  `ID` int(11) NOT NULL,
  `Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_services`
--

CREATE TABLE `t_services` (
  `ID` int(11) NOT NULL,
  `Name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `t_user`
--

CREATE TABLE `t_user` (
  `ID` int(11) NOT NULL,
  `Username` varchar(25) NOT NULL,
  `UserPassword` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `t_booking`
--
ALTER TABLE `t_booking`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `RoomId` (`RoomId`);

--
-- Индексы таблицы `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelID` (`HotelID`),
  ADD KEY `ServiceID` (`ServiceID`);

--
-- Индексы таблицы `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RoomID` (`RoomID`),
  ADD KEY `Service` (`ServiceID`);

--
-- Индексы таблицы `t_hotel`
--
ALTER TABLE `t_hotel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `HotelPictureID` (`HotelPictureID`);

--
-- Индексы таблицы `t_hotelpicture`
--
ALTER TABLE `t_hotelpicture`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `t_reviewpicture`
--
ALTER TABLE `t_reviewpicture`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `t_reviews`
--
ALTER TABLE `t_reviews`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ReviewPictureID` (`ReviewPictureID`),
  ADD KEY `BookingId` (`BookingId`),
  ADD KEY `UserID` (`UserID`);

--
-- Индексы таблицы `t_room`
--
ALTER TABLE `t_room`
  ADD PRIMARY KEY (`RoomID`),
  ADD KEY `RoomTypeID` (`RoomTypeID`),
  ADD KEY `HotelID` (`HotelID`),
  ADD KEY `RoomPictureID` (`RoomPictureID`);

--
-- Индексы таблицы `t_roompicture`
--
ALTER TABLE `t_roompicture`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `t_roomtype`
--
ALTER TABLE `t_roomtype`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `t_services`
--
ALTER TABLE `t_services`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `t_booking`
--
ALTER TABLE `t_booking`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_hotel`
--
ALTER TABLE `t_hotel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_hotelpicture`
--
ALTER TABLE `t_hotelpicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_reviewpicture`
--
ALTER TABLE `t_reviewpicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_reviews`
--
ALTER TABLE `t_reviews`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_room`
--
ALTER TABLE `t_room`
  MODIFY `RoomID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_roompicture`
--
ALTER TABLE `t_roompicture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_roomtype`
--
ALTER TABLE `t_roomtype`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_services`
--
ALTER TABLE `t_services`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `t_user`
--
ALTER TABLE `t_user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `t_booking`
--
ALTER TABLE `t_booking`
  ADD CONSTRAINT `t_booking_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `t_user` (`ID`),
  ADD CONSTRAINT `t_booking_ibfk_2` FOREIGN KEY (`RoomId`) REFERENCES `t_room` (`RoomID`);

--
-- Ограничения внешнего ключа таблицы `t_extrashotel`
--
ALTER TABLE `t_extrashotel`
  ADD CONSTRAINT `t_extrashotel_ibfk_1` FOREIGN KEY (`HotelID`) REFERENCES `t_hotel` (`ID`),
  ADD CONSTRAINT `t_extrashotel_ibfk_2` FOREIGN KEY (`ServiceID`) REFERENCES `t_services` (`ID`);

--
-- Ограничения внешнего ключа таблицы `t_extrasroom`
--
ALTER TABLE `t_extrasroom`
  ADD CONSTRAINT `t_extrasroom_ibfk_1` FOREIGN KEY (`RoomID`) REFERENCES `t_room` (`RoomID`),
  ADD CONSTRAINT `t_extrasroom_ibfk_2` FOREIGN KEY (`ServiceID`) REFERENCES `t_services` (`ID`);

--
-- Ограничения внешнего ключа таблицы `t_hotel`
--
ALTER TABLE `t_hotel`
  ADD CONSTRAINT `t_hotel_ibfk_1` FOREIGN KEY (`HotelPictureID`) REFERENCES `t_hotelpicture` (`ID`);

--
-- Ограничения внешнего ключа таблицы `t_reviews`
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
-- Ограничения внешнего ключа таблицы `t_room`
--
ALTER TABLE `t_room`
  ADD CONSTRAINT `t_room_ibfk_1` FOREIGN KEY (`RoomTypeID`) REFERENCES `t_roomtype` (`ID`),
  ADD CONSTRAINT `t_room_ibfk_2` FOREIGN KEY (`HotelID`) REFERENCES `t_hotel` (`ID`),
  ADD CONSTRAINT `t_room_ibfk_3` FOREIGN KEY (`RoomPictureID`) REFERENCES `t_roompicture` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
