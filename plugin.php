<?php
/**
 * Plugin Name:       Product Highlighter
 * Description:       A simple product highlighter plugins for Wordpress Editor.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       product-block
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [ph] && [PH] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class PH_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->ph_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'ph_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'ph_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'ph_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'ph_external_libraries' ] );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function ph_define_constants() {
		define( 'PH_VERSION', '1.0.0' );
		define( 'PH_URL', plugin_dir_url( __FILE__ ) );
		define( 'PH_INC_URL', PH_URL . 'includes/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function ph_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function ph_blocks_init() {
		// register single block
		$this->ph_register_block( 'productblock');
	}

	/**
	 * Register Block Category
	 */

	public function ph_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'ph',
					'title' => __( 'Product Block', 'ph' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function ph_external_libraries() {
		// enqueue JS
		wp_enqueue_script( 'ph-lib', PH_INC_URL . 'js/plugin.js', array(), PH_VERSION, true );
	}

}

/**
 * Kickoff
*/

PH_BLOCKS_CLASS::init();
