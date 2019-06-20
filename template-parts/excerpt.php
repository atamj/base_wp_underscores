<?php
/**
 * Template part for others excerpt
  */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php

			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		?>

	</header><!-- .entry-header -->

	<?php base_wp_post_thumbnail(); ?>

	<div class="entry-excerpt">
		<?php 
		the_excerpt(); ?>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
