<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'reactiv1_wp830' );

/** MySQL database username */
define( 'DB_USER', 'reactiv1_wp830' );

/** MySQL database password */
define( 'DB_PASSWORD', '5S])S1p52U' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6vcr30532aefsruj473crjzwwx02kenrdthikdkoxe7wdo1tlvzifnqzyjjpxvfa' );
define( 'SECURE_AUTH_KEY',  'nmsy3gicdy0w2srubfnczsvvywcb2xqiut61wnsdrt8rqhyf43gd71xjepmkozpl' );
define( 'LOGGED_IN_KEY',    'prtfdysmgjuhjtnxkphduhwhjcc5tsz1lh7cz1mtilgbpt1kj2nohqkvzuzofvoy' );
define( 'NONCE_KEY',        '73okk3bxuyoyethrykokkzusvcemjiujxfxpmdmssa5nkqdgtpa1w1x66mvgll00' );
define( 'AUTH_SALT',        'ecjmm2fdcrnv93qvaqs3jezukjauijnx5kyi6smut5uuis4vtu2w8tclqvgyoavj' );
define( 'SECURE_AUTH_SALT', 'ub2y8iwrlpj4qoau4gb5yg9gk3shv1gvlorp92jkpk29pw49c3hcasfwjkbbinvx' );
define( 'LOGGED_IN_SALT',   'y1uit57lj28suqrqqlcr6yivz4pennx6oltyauqaddvdsz1mtdizx9znyvxke4na' );
define( 'NONCE_SALT',       'rvvmtbjcwfvumxxhno5tiv6mhilywx5cgiw3rxzcgtnpy85wtybh9jipfbx8iyko' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wptc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
