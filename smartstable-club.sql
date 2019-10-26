-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 21, 2019 at 05:02 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ahaly`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middle_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified_at` datetime DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `national_id_photo_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `first_name`, `middle_name`, `last_name`, `email`, `verified_at`, `password`, `mobile`, `date_of_birth`, `national_id_photo_url`, `created_at`, `updated_at`) VALUES
(1, 'Justina', 'Freda', 'Berniece', 'noemi.corkery@example.org', '2019-08-21 17:20:55', '$2y$10$WX3LOzfkEessgXCoVIJBDeU8MbRTUCYTU5R8z893wWNYc02Y.WKOC', '908-490-8771', '2019-08-21 16:31:44', 'http://www.jerde.biz/eaque-aut-voluptatum-culpa-autem-aperiam-provident', '2019-08-21 14:31:44', '2019-08-21 15:20:55'),
(2, 'Reed', 'Amiya', 'Edd', 'dejon.pouros@example.net', NULL, '$2y$10$u1Ozn8IRDiKgbcmzHPtZEOUnR49vFLvZ6Dc0QPd7nKCAeP4XaEwwq', '595-330-2631 x309', '2019-08-21 16:31:44', 'http://www.wintheiser.info/laboriosam-consectetur-unde-nam-tenetur-voluptatibus-quas-facere-et.html', '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(3, 'Timmy', 'Florine', 'Eliseo', 'mcdermott.gino@example.org', NULL, '$2y$10$i5p8Cpy2UbUGRJxK6J9rMOoMBsk1OOmeUg.aZ9Te8PbwEcz2q/WB.', '+1.898.935.1139', '2019-08-21 16:31:44', 'http://www.stamm.com/nesciunt-ab-ab-iste-dolorem-sint-autem-dolorem', '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(4, 'Marie', 'Serena', 'Mozelle', 'lblock@example.org', NULL, '$2y$10$Cxuhadqjt896ZcLeX0RUieGTJvByi9iAvEwt3.sgHI/gh60gbOTzC', '321-965-7814 x38123', '2019-08-21 16:31:44', 'http://nienow.com/sint-repellendus-modi-veritatis-dolor-vero-sed-accusamus-itaque.html', '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(5, 'Floyd', 'Lenna', 'Keara', 'bruen.lia@example.net', NULL, '$2y$10$HJC3YymJ/2N5De0AD9ZF8e2Ea5wSIQ3SJID86TdH18p73RpM4R0ki', '(738) 830-0933 x67252', '2019-08-21 16:31:44', 'https://schuster.com/inventore-eum-qui-sunt-autem.html', '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(6, 'Ida', 'Rachael', 'Estrella', 'mkoepp@example.net', NULL, '$2y$10$olw5E4OF4ZHEoyRU7Gy4a.Zzig.HUhOuJ7VLoZUeYXdXNmyYUF5uu', '609.994.2549 x917', '2019-08-21 16:31:45', 'https://www.hermiston.com/ut-hic-perferendis-aspernatur-dicta-saepe-ratione-qui', '2019-08-21 14:31:45', '2019-08-21 14:31:45'),
(7, 'Paxton', 'Pierce', 'Eveline', 'oscar33@example.net', NULL, '$2y$10$qlqtypZ81x.DEJJaBS7Kj.KHuLIhVIjfOlUES5tVnyfkiZBWB8BKu', '+1.345.949.9664', '2019-08-21 16:31:45', 'http://lakin.biz/', '2019-08-21 14:31:45', '2019-08-21 14:31:45'),
(8, 'Jesse', 'Nikko', 'Elwyn', 'porter.waelchi@example.net', NULL, '$2y$10$34cgawF/KAQ7HM.SxX.uku5qaFM85HCPyyVA3P.9B.v8/ANShCgJ2', '459.480.8844', '2019-08-21 16:31:45', 'http://frami.com/repudiandae-rerum-quia-repellat-dolor', '2019-08-21 14:31:45', '2019-08-21 14:31:45'),
(9, 'Perry', 'Natasha', 'Myrtie', 'camryn.torp@example.org', NULL, '$2y$10$DEpTuMbxlvkwq.s7W0mf.evn5f.KpIriYDtf8aiooPKkjKFi9xJum', '(867) 840-0846', '2019-08-21 16:31:45', 'http://www.okeefe.com/suscipit-et-eius-amet-consequatur-iure-eum-non', '2019-08-21 14:31:45', '2019-08-21 14:31:45'),
(10, 'Lyric', 'Anderson', 'Keira', 'corene.langosh@example.com', NULL, '$2y$10$P3OpS3TR5ZG91OuqgnbOs.CwT2aNIjgzlmA1zl4ZD17keeLsjXaXi', '461.232.2479 x88059', '2019-08-21 16:31:45', 'http://www.hagenes.com/', '2019-08-21 14:31:45', '2019-08-21 14:31:45'),
(20, 'Joan', 'Alba', 'Janie', 'ozella33@example.net', NULL, '$2y$10$ilEBu2KQcXGABFcJp0y.MOaxRryYjHL27bi4BQ6pdo4JBhyF2.E.6', '543.272.2008 x3683', '2019-08-19 14:14:17', '1c1a9bc33cfc53b64ebf54c9e7b3e03b.jpg', '2019-08-24 08:28:31', '2019-08-24 08:28:31'),
(22, 'Mohamed', 'Ehab', 'Swilam', 'mohamed_swilam@hotmail.com', '2019-08-24 10:32:04', '$2y$10$F9nIerlAPbYqZmGkh.t1AeITFBc9n4MpRL9p51/fF5qGtLAxFUzbe', '01096436702', '2019-08-20 00:00:00', '00b19238105120e3d19358f092391ec5.jpg', '2019-08-24 08:31:37', '2019-08-24 08:32:04');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enable` tinyint(1) NOT NULL,
  `priority` enum('basic','optional') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `horses`
--

CREATE TABLE `horses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth_year` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_of_birth` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` int(11) NOT NULL,
  `fei_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `national_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `renewal` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discipline` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` int(11) NOT NULL,
  `color` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stud_book` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `microchip_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fei_expiry_date` date NOT NULL,
  `pony` tinyint(1) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `horses`
--

INSERT INTO `horses` (`id`, `name`, `birth_year`, `country_of_birth`, `height`, `fei_id`, `national_id`, `renewal`, `discipline`, `sex`, `color`, `stud_book`, `microchip_number`, `fei_expiry_date`, `pony`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Ernestina Littel', '2005', 'VA', 115, 'aut', '359360', '1988-03-10', 'qui', 1, 'Gold', 'in', 'praesentium', '1979-07-20', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(2, 'Giles McGlynn', '1990', 'KY', 207, 'iure', '461863', '2014-05-14', 'repudiandae', 0, 'Magenta', 'nesciunt', 'distinctio', '1988-03-18', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(3, 'Blaise Armstrong', '1994', 'GR', 114, 'inventore', '222203', '2017-11-24', 'voluptatem', 1, 'Green', 'voluptas', 'et', '2008-04-12', 1, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(4, 'Jake Hills', '1972', 'PY', 265, 'distinctio', '916534', '1986-02-04', 'dolore', 1, 'Peru', 'qui', 'occaecati', '1979-08-17', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(5, 'Junior Stoltenberg', '2008', 'HT', 130, 'culpa', '772459', '2009-06-27', 'recusandae', 2, 'DimGray', 'quos', 'sed', '1975-03-09', 1, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(6, 'Miss Ottilie Beier', '1973', 'VE', 239, 'voluptas', '852752', '2013-12-21', 'deserunt', 1, 'Cornsilk', 'qui', 'consequatur', '1996-03-01', 1, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(7, 'Prof. River Carter', '1974', 'RS', 207, 'qui', '706997', '1970-09-24', 'perspiciatis', 0, 'Pink', 'fugiat', 'quibusdam', '2014-10-14', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(8, 'Keara Rath', '1979', 'UG', 102, 'vel', '477851', '1973-06-01', 'ut', 2, 'PaleGreen', 'amet', 'reiciendis', '1990-02-10', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(9, 'Prof. Rae Lockman', '1987', 'IN', 152, 'praesentium', '110338', '1998-10-06', 'sunt', 1, 'SteelBlue', 'quia', 'voluptate', '2008-09-18', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(10, 'Mr. Bennie Feeney V', '1979', 'JO', 109, 'autem', '466517', '2004-11-17', 'repellat', 2, 'LightBlue', 'qui', 'vel', '1984-05-30', 0, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44');

-- --------------------------------------------------------

--
-- Table structure for table `horse_files`
--

CREATE TABLE `horse_files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `old_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `horse_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `horse_parents`
--

CREATE TABLE `horse_parents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` char(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `horse_id` bigint(20) UNSIGNED DEFAULT NULL,
  `horse_parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `horse_parents`
--

INSERT INTO `horse_parents` (`id`, `name`, `gender`, `horse_id`, `horse_parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Mr. Bradly West', 's', 1, NULL, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(2, 'Marcelina Tromp', 's', 2, 1, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(3, 'Jordane Beatty V', 's', 3, 1, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(4, 'Eleanore Ruecker', 's', 4, 2, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(5, 'Stanley Hyatt', 'm', 5, 3, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(6, 'Reva McClure', 'm', 6, 3, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(7, 'Emely Ondricka', 's', 7, 3, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(8, 'Dr. Hailee Abbott', 'm', 8, 5, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(9, 'Wilhelmine Waters', 's', 9, 4, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(10, 'Mrs. Asa Gerhold IV', 's', 10, 1, '2019-08-21 14:31:44', '2019-08-21 14:31:44'),
(12, 'Father', 's', 1, 9, '2019-08-24 07:45:53', '2019-08-24 07:45:53');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_07_01_162602_create_permission_tables', 1),
(9, '2019_07_15_155136_create_features_table', 1),
(10, '2019_07_24_183301_create_horses_table', 1),
(11, '2019_07_24_185432_create_horse_parents_table', 1),
(12, '2019_07_24_185610_create_horse_files_table', 1),
(13, '2019_08_17_122342_create_clients_table', 1),
(14, '2019_08_21_162840_create_verify_clients_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('406f1a1e9ad4b8ab3bb75984adc9d3df47b09fa2d45ca4f29364718cea0fbdb88cdae1b81e38e621', 7, 1, 'Personal Access Token', '[]', 0, '2019-09-21 11:30:50', '2019-09-21 11:30:50', '2020-09-21 13:30:50'),
('57084810bd986a881a1fb5b5c339d67387145efda1ef01274c8eddbb2511aa7cb405eb74a5135f53', 5, 1, 'Personal Access Token', '[]', 0, '2019-09-21 11:22:10', '2019-09-21 11:22:10', '2020-09-21 13:22:10'),
('5e4e75f6dfdcfc9c308e742158b0510c687c816e0a10b7b49a28ae3057d9e8d82b0236bb1c603ecd', 4, 1, 'Personal Access Token', '[]', 1, '2019-08-21 14:53:57', '2019-08-21 14:53:57', '2020-08-21 16:53:57'),
('649cfcdf13269c02232e7b925606708de22654784120b52ad075295605edec09eda4293bfd252400', 7, 1, 'Personal Access Token', '[]', 1, '2019-09-21 11:28:34', '2019-09-21 11:28:34', '2020-09-21 13:28:34'),
('6512c98fb96c6e2afb9326036346d60e325786b2b0e5a3588374552d183d1105ff0ad440dca954df', 8, 1, 'Personal Access Token', '[]', 0, '2019-09-21 11:52:04', '2019-09-21 11:52:04', '2020-09-21 13:52:04'),
('6a28f1b0f203fdeeec707635eebc05b5a1c3381c8459bf5db386712d49fcf76ac0c6b6e0136d1342', 8, 1, 'Personal Access Token', '[]', 0, '2019-09-21 11:48:17', '2019-09-21 11:48:17', '2020-09-21 13:48:17'),
('7bd8c1f155a7e307f71d249e9fe369ea34065122ed67304c0ce005a062b8a75f41ec3f17ec8df5f4', 4, 1, 'Personal Access Token', '[]', 0, '2019-08-24 07:44:57', '2019-08-24 07:44:57', '2020-08-24 09:44:57'),
('ac20d687de348e85eb8fc8d35869b7c7f128a7bbaa5befdfe06f875b8e1248d138a31e4801dac415', 4, 1, 'Personal Access Token', '[]', 0, '2019-08-21 16:15:15', '2019-08-21 16:15:15', '2020-08-21 18:15:15'),
('adbcf302c47e4558147fd110af3aa819c6eb7d0a002ccd2b934bae3c1662b0dda1e44d09cc975837', 8, 1, 'Personal Access Token', '[]', 0, '2019-09-21 11:48:19', '2019-09-21 11:48:19', '2020-09-21 13:48:19'),
('c31991f4292c771ff780c9517434609729f39c4f22bc76c238ec5b6cb9be2479597030b795bfa362', 5, 1, 'Personal Access Token', '[]', 1, '2019-09-21 11:12:33', '2019-09-21 11:12:33', '2020-09-21 13:12:33');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'uecvAvxypx6iFgj6hNkMSVpgxZuzFGLJIU6baLbt', 'http://localhost', 1, 0, 0, '2019-08-21 14:32:02', '2019-08-21 14:32:02'),
(2, NULL, 'Laravel Password Grant Client', 'CPGYxY2R6w2tH8mYR4dcf8EERtEcOYYIuVFauOGi', 'http://localhost', 0, 1, 0, '2019-08-21 14:32:02', '2019-08-21 14:32:02');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-08-21 14:32:02', '2019-08-21 14:32:02');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `verify_clients`
--

CREATE TABLE `verify_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `verify_clients`
--

INSERT INTO `verify_clients` (`id`, `client_id`, `token`, `created_at`, `updated_at`) VALUES
(1, 17, '43dcfd10a67334a0bd69c951080b143af6374497', '2019-08-21 15:11:51', '2019-08-21 15:11:51'),
(2, 18, '64dd7543c5e975b86804cefd26f3666e45030bbc', '2019-08-21 15:13:17', '2019-08-21 15:13:17'),
(3, 1, 'd16e9468d0e7b8840bc005d1196339f81ca5063f', '2019-08-21 15:16:38', '2019-08-21 15:16:38'),
(4, 1, '16ce11b0e6a7aaac98940099010b51cede709253', '2019-08-21 15:17:04', '2019-08-21 15:17:04'),
(5, 1, '4c81309a36b3d7de225de1b7d8b46555b9db9d9e', '2019-08-21 15:18:32', '2019-08-21 15:18:32'),
(6, 19, '05a0323a6af33b9077fa9c485895b33a72249f73', '2019-08-21 15:39:02', '2019-08-21 15:39:02'),
(7, 21, '2094fa8388010edcf181bd6a2acc79acb9a6d492', '2019-08-24 08:29:26', '2019-08-24 08:29:26'),
(8, 22, '176c9a2f27431715d99c29047c51efb9cc84495f', '2019-08-24 08:31:37', '2019-08-24 08:31:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `horses`
--
ALTER TABLE `horses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `horses_fei_id_unique` (`fei_id`);

--
-- Indexes for table `horse_files`
--
ALTER TABLE `horse_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `horse_files_horse_id_foreign` (`horse_id`);

--
-- Indexes for table `horse_parents`
--
ALTER TABLE `horse_parents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `horse_parents_horse_id_foreign` (`horse_id`),
  ADD KEY `horse_parents_horse_parent_id_foreign` (`horse_parent_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `verify_clients`
--
ALTER TABLE `verify_clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `horses`
--
ALTER TABLE `horses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `horse_files`
--
ALTER TABLE `horse_files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `horse_parents`
--
ALTER TABLE `horse_parents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `verify_clients`
--
ALTER TABLE `verify_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `horse_files`
--
ALTER TABLE `horse_files`
  ADD CONSTRAINT `horse_files_horse_id_foreign` FOREIGN KEY (`horse_id`) REFERENCES `horses` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `horse_parents`
--
ALTER TABLE `horse_parents`
  ADD CONSTRAINT `horse_parents_horse_id_foreign` FOREIGN KEY (`horse_id`) REFERENCES `horses` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `horse_parents_horse_parent_id_foreign` FOREIGN KEY (`horse_parent_id`) REFERENCES `horse_parents` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
