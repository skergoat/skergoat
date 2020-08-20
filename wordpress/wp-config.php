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
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

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
define( 'AUTH_KEY',         ']3]uu~9KRUwU=.!9:>s4o<%nbc*</4s=>sfb.sfY!.AT-b/~]dA[DF(<MtH:+?B/' );
define( 'SECURE_AUTH_KEY',  '^NZ(:T#8P/>6n[TImA1DB^Flz /`PiJ&]&00TUsH-d/m>3{_u3}Y).1bdE4Rbw5f' );
define( 'LOGGED_IN_KEY',    'Y%V2yI,>2:3d@um1sTZd9z;jxp`Yz|lv[8}TP%1pnTez+^Ya2XLSLQodI1fFw)C{' );
define( 'NONCE_KEY',        'zPZz)X.t<g|{@5#P~F]Gkw21|>D%+D%UF]<;c9+0D_e!rAs@rhm)x{i@vAnmn eZ' );
define( 'AUTH_SALT',        'd6fV+I a4~hC_[,<l6$&m#eHV&^f,EN=;1jHg8U^)1:y%=SKz9U>%FM{~@AsSa+[' );
define( 'SECURE_AUTH_SALT', '$gq8p~=T:_Jt8IBhHvHfH<n/>)/,4>qavz~<E]jHTI!1G*-Un^cY6q*5Z;dEW`IV' );
define( 'LOGGED_IN_SALT',   '&c]J8$k^q{M7sXoVuzl`OFZ!e!X)0BZ-xPmn*OvLkc=AFGoI0?L(?P</Bnh+-3@}' );
define( 'NONCE_SALT',       '7)FrVY+o@is~IEQ:ZOumUD^P<L6&Zj)N+>{WC~QU:j)2t0$&#,&1;AJ^k{@FCMGV' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'sk_';

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
