-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 18 2024 г., 21:32
-- Версия сервера: 10.1.48-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `certificates_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `data`
--

CREATE TABLE `data` (
  `Id` int(11) NOT NULL,
  `Certificate_Number` varchar(50) NOT NULL,
  `Topic` varchar(255) NOT NULL,
  `Date_Of_Receiving` date NOT NULL,
  `Lastname` varchar(50) NOT NULL,
  `Firstname` varchar(50) NOT NULL,
  `Image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `data`
--

INSERT INTO `data` (`Id`, `Certificate_Number`, `Topic`, `Date_Of_Receiving`, `Lastname`, `Firstname`, `Image`) VALUES
(4, 'GH4', 'GH4', '2019-09-04', 'GH4', 'GH4', ''),
(5, 'GH4', 'GH4', '2019-09-04', 'GH4', 'GH4', ''),
(6, 'EF3', 'EF3', '2019-09-03', 'EF3', 'EF3', ''),
(7, 'CD2', 'CD2', '2019-09-02', 'CD2', 'CD2', ''),
(10, '557733', 'Создание сайтов на HTML', '2019-09-29', 'Науменко', 'Виталий', '_20181212_17293307.jpg'),
(11, 'fedfd', 'fвава', '2019-09-21', 'авав', 'ававав', ''),
(12, 'папап', 'апапа', '2019-09-03', 'папап', 'апапа', ''),
(13, 'апапа', 'папап', '2019-08-27', 'апа', 'папапа', ''),
(14, 'папа', 'папап', '2019-09-03', 'апап', 'апапа', ''),
(15, 'папа', 'папапа', '2019-09-11', 'папа', 'папапапа', ''),
(16, '1', 'test', '2023-12-04', 'test', 'test', 'img'),
(17, '2', 'test', '2023-12-04', 'test', 'test', ''),
(18, '2', 'test', '2023-12-04', 'test', 'test', '4.png'),
(19, '2', 'test', '2023-12-04', 'test', 'test', '4.png'),
(20, '12345', 'Тема', '2023-12-04', 'Тест', 'Тест', '10.png'),
(21, '123', 'Тема ', '2023-12-04', 'Имя и фамилия', 'Имя и фамилия', 'img/'),
(22, '1234', 'Тема', '2023-12-04', 'Имя и фамилия ', 'Имя и фамилия ', 'img/3.png'),
(23, '', '', '0000-00-00', '', '', 'img/'),
(24, '', '', '0000-00-00', '', '', 'img/'),
(25, '11', '', '0000-00-00', '', '', 'img/9.png'),
(27, '678', 'Тема', '2023-12-05', 'Имя и фамили', 'Имя и фамили', 'img/9.png'),
(28, 'Номер сертификата', '', '0000-00-00', '', '', 'img/'),
(29, '123', '', '0000-00-00', '', '', 'img/'),
(30, '12345', 'Тема сертификат', '2023-12-21', 'Имя и фамили', 'Имя и фамили', 'teest.jpeg'),
(31, '111111', 'Тема сертификат', '2023-12-21', 'Имя и фамили', 'Имя и фамили', 'teest.jpeg'),
(32, '22222', 'Тема сертификат', '2023-12-21', 'Имя и фамили', 'Имя и фамили', '_58.jpeg'),
(33, '33333', 'Тема сертификат', '2023-12-21', 'Имя и фамили', 'Имя и фамили', '_76.jpeg'),
(34, '44444', 'Тема сертификат', '2023-12-21', 'Имя и фамили', 'Имя и фамили', '20231221-91.jpeg'),
(35, '55555', 'Тема сертификат', '2023-12-21', 'Имя и фамили', 'Имя и фамили', '20231221-75.jpeg'),
(36, '66666', 'Тема сертификат', '2023-12-21', 'Имя и фамилия', 'Имя и фамилия', '20231221-1615.jpeg'),
(37, 'Номер сертификат', 'Тема сертификат', '2023-12-24', 'Имя и фамили', 'Имя и фамили', '20231224-46868.jpeg'),
(38, 'Номер сертификат', 'Тема сертификата', '2023-12-24', 'Имя и фамили', 'Имя и фамили', '20231224-81379.jpeg'),
(39, 'Номер сертификат', 'Тема сертификат', '2023-12-24', 'Имя и фамили', 'Имя и фамили', '20231224-71497.jpeg'),
(40, 'Номер сертификат', 'Тема сертификат', '2023-12-24', 'Имя и фамили', 'Имя и фамили', '20231224-24634.jpeg'),
(41, 'Номер сертификат', 'Тема сертификат', '2023-12-24', 'Имя и фамили', 'Имя и фамили', '20231224-3655.jpeg'),
(42, 'Номер сертификат', 'Тема сертификат', '2023-12-24', 'Имя и фамили', 'Имя и фамили', '20231224-58101.jpeg'),
(43, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240106-53907.jpeg'),
(44, 'Номер сертификата', 'Тема сертификата', '2024-01-06', 'Имя и фамилия', 'Имя и фамилия', '20240106-172543.jpeg'),
(45, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240106-172709.jpeg'),
(46, 'Номер сертификата', 'Тема сертификата', '2024-01-06', 'Имя и фамилия', 'Имя и фамилия', '20240106-173718.jpeg'),
(47, 'Номер сертификата', 'Тема сертификата', '2024-01-23', 'Имя и фамилия', 'Имя и фамилия', '20240123-062809.jpeg'),
(48, 'Номер сертификата', 'Тема сертификата', '2024-01-23', 'Имя и фамилия', 'Имя и фамилия', '20240123-063006.jpeg'),
(49, 'Номер сертификата', 'Тема сертификата', '2024-01-23', 'Имя и фамилия', 'Имя и фамилия', '20240123-063204.jpeg'),
(50, 'Номер сертификата', 'Тема сертификата', '2024-01-23', 'Имя и фамилия', 'Имя и фамилия', '20240123-063450.jpeg'),
(51, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-142918.jpeg'),
(52, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-143458.jpeg'),
(53, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-144140.jpeg'),
(54, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-144155.jpeg'),
(55, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-144230.jpeg'),
(56, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-144306.jpeg'),
(57, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-144331.jpeg'),
(58, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-144752.jpeg'),
(59, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-145334.jpeg'),
(60, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-152720.jpeg'),
(61, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-152804.jpeg'),
(62, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-152933.jpeg'),
(63, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Имя и фамилия', 'Имя и фамилия', '20240205-152957.jpeg'),
(64, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-152956.jpeg'),
(65, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-153046.jpeg'),
(66, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-154441.jpeg'),
(67, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'Соболев', 'Николай', '20240214-154529.jpeg'),
(68, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-161404.jpeg'),
(69, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-162458.jpeg'),
(70, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-162554.jpeg'),
(71, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-162843.jpeg'),
(72, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-162901.jpeg'),
(73, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-162930.jpeg'),
(74, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-162954.jpeg'),
(75, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-163421.jpeg'),
(76, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-163439.jpeg'),
(77, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-163515.jpeg'),
(78, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-163529.jpeg'),
(79, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-163658.jpeg'),
(80, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-164100.jpeg'),
(81, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-165927.jpeg'),
(82, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-170021.jpeg'),
(83, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-170048.jpeg'),
(84, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-170334.jpeg'),
(85, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-170631.jpeg'),
(86, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171215.jpeg'),
(87, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171231.jpeg'),
(88, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171311.jpeg'),
(89, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171340.jpeg'),
(90, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171402.jpeg'),
(91, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171533.jpeg'),
(92, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171555.jpeg'),
(93, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171608.jpeg'),
(94, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171619.jpeg'),
(95, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171928.jpeg'),
(96, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-171957.jpeg'),
(97, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-172903.jpeg'),
(98, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173002.jpeg'),
(99, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173101.jpeg'),
(100, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173336.jpeg'),
(101, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173444.jpeg'),
(102, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173531.jpeg'),
(103, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173554.jpeg'),
(104, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173608.jpeg'),
(105, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173809.jpeg'),
(106, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173824.jpeg'),
(107, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173848.jpeg'),
(108, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-173954.jpeg'),
(109, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-174005.jpeg'),
(110, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-174022.jpeg'),
(111, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-183056.jpeg'),
(112, 'Номер сертификатаsdsdsd', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-183603.jpeg'),
(113, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-183620.jpeg'),
(114, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-183731.jpeg'),
(115, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-183917.jpeg'),
(116, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-184011.jpeg'),
(117, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-185551.jpeg'),
(118, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-185632.jpeg'),
(119, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-185720.jpeg'),
(120, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-185755.jpeg'),
(121, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-190201.jpeg'),
(122, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191218.jpeg'),
(123, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191358.jpeg'),
(124, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191359.jpeg'),
(125, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191403.jpeg'),
(126, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191406.jpeg'),
(127, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191429.jpeg'),
(128, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191451.jpeg'),
(129, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191507.jpeg'),
(130, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191623.jpeg'),
(131, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-191634.jpeg'),
(132, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-192018.jpeg'),
(133, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-192117.jpeg'),
(134, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-192349.jpeg'),
(135, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-193155.jpeg'),
(136, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-193431.jpeg'),
(137, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-193515.jpeg'),
(138, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-204840.jpeg'),
(139, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-204913.jpeg'),
(140, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-205236.jpeg'),
(141, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-205313.jpeg'),
(142, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-210559.jpeg'),
(143, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-210703.jpeg'),
(144, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-210812.jpeg'),
(145, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-210916.jpeg'),
(146, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211013.jpeg'),
(147, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211038.jpeg'),
(148, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211119.jpeg'),
(149, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211249.jpeg'),
(150, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211319.jpeg'),
(151, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211714.jpeg'),
(152, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-211802.jpeg'),
(153, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-212011.jpeg'),
(154, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-212022.jpeg'),
(155, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-212954.jpeg'),
(156, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213117.jpeg'),
(157, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213225.jpeg'),
(158, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213253.jpeg'),
(159, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213456.jpeg'),
(160, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213507.jpeg'),
(161, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213710.jpeg'),
(162, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213729.jpeg'),
(163, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213741.jpeg'),
(164, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213919.jpeg'),
(165, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213931.jpeg'),
(166, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-213959.jpeg'),
(167, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-214024.jpeg'),
(168, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-214042.jpeg'),
(169, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-214102.jpeg'),
(170, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-214117.jpeg'),
(171, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-214716.jpeg'),
(172, 'Номер сертификатаasdasd', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-215241.jpeg'),
(173, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240214-220729.jpeg'),
(174, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-204933.jpeg'),
(175, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-205005.jpeg'),
(176, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-211549.jpeg'),
(177, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-211654.jpeg'),
(178, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-212159.jpeg'),
(179, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-212233.jpeg'),
(180, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-212253.jpeg'),
(181, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-212327.jpeg'),
(182, 'Номер сертификата', 'Тема сертификата', '0000-00-00', 'и', 'Имя', '20240218-212405.jpeg');

-- --------------------------------------------------------

--
-- Структура таблицы `logs`
--

CREATE TABLE `logs` (
  `Id` int(11) NOT NULL,
  `User_Email` varchar(100) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Type` int(11) NOT NULL,
  `Certificate_Number` varchar(100) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `Firstname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `logs`
--

INSERT INTO `logs` (`Id`, `User_Email`, `Date`, `Type`, `Certificate_Number`, `Lastname`, `Firstname`) VALUES
(1, '123@123.ru', '2019-09-29 05:52:53', 2, 'AB1', 'AB1', 'AB1'),
(2, '123@123.ru', '2019-09-29 06:14:44', 1, '123', '1212311', '1123123123'),
(3, '123@123.ru', '2019-09-29 06:14:50', 2, '123', '1212311', '1123123123'),
(4, '123@123.ru', '2019-09-29 06:25:21', 1, '123', '123', '123'),
(5, '123@123.ru', '2019-09-29 06:25:32', 2, '123', '123', '123'),
(6, '123@123.ru', '2019-09-29 09:42:05', 1, '557733', 'Науменко', 'Виталий'),
(7, '123@123.ru', '2019-09-29 09:46:17', 2, 'CD2', 'CD2', 'CD2'),
(8, '123@123.ru', '2019-09-29 09:57:45', 1, 'fedfd', 'авав', 'ававав'),
(9, '123@123.ru', '2019-09-29 09:58:00', 1, 'папап', 'папап', 'апапа'),
(10, '123@123.ru', '2019-09-29 09:58:10', 1, 'апапа', 'апа', 'папапа'),
(11, '123@123.ru', '2019-09-29 09:58:20', 1, 'папа', 'апап', 'апапа'),
(12, '123@123.ru', '2019-09-29 09:58:27', 1, 'папа', 'папа', 'папапапа'),
(13, '123@123.ru', '2020-02-11 10:25:25', 2, 'EF3', 'EF3', 'EF3');

-- --------------------------------------------------------

--
-- Структура таблицы `search_page_info`
--

CREATE TABLE `search_page_info` (
  `Id` int(11) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Auth_Image` varchar(255) NOT NULL,
  `Admin_Image` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `search_page_info`
--

INSERT INTO `search_page_info` (`Id`, `Image`, `Auth_Image`, `Admin_Image`, `Title`, `Description`) VALUES
(1, 'KlasterWEB.png', 'KlasterWEB.png', 'KlasterWEB.png', 'Система сертификации', 'Система сертификации');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Master_Password` varchar(20) NOT NULL,
  `IsAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`Id`, `Email`, `Password`, `Master_Password`, `IsAdmin`) VALUES
(1, '123@123.ru', '3259104678SerJ', '123zxc', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `search_page_info`
--
ALTER TABLE `search_page_info`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `data`
--
ALTER TABLE `data`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT для таблицы `logs`
--
ALTER TABLE `logs`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `search_page_info`
--
ALTER TABLE `search_page_info`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
