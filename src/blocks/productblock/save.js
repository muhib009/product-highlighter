// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, color } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="ph_container">
				<div className="ph_logo_section">
					<img
						alt="abc"
						src="http://gutenberg.local/wp-content/uploads/2023/03/ladbrokes.webp"
					/>
				</div>
				<div className="ph_rating_section">
					<strong>5</strong>/5
				</div>
				<div className="ph_bonus_section">
					<strong>€1,000*</strong>
				</div>
				<div className="ph_highlight_section">Top Loyalty Program</div>
				<div className="ph_payrate_section">
					<p>Auszahlungsquote</p>
					over 97.00%
				</div>
				<div className="ph_payduration_section">
					<p>Auszahlungsquote</p>
					14 days
				</div>
				<div className="ph_activeplayers_section">
					<p>Sonstiges</p>
					85k+ active players
				</div>
				<div className="ph_golink_section">
					<a
						href="/zu/vulkanvegas-main"
						className="act1"
						target="_blank"
						rel="nofollow"
					>
						Play Now
					</a>
				</div>
				<div className="ph_relativelink_section">
					<a href="http://facebook.com">To the test report</a>
				</div>
			</div>
		</div>
	);
}
