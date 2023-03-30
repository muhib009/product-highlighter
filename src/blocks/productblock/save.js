// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		ratingScore,
		ratingOn,
		phLogo,
		bonusText,
		highlightText,
		payRateText,
		payRateDetails,
		payDurationText,
		payDurationDetails,
		payActive,
		payActiveDetails,
		goLinkText,
		relatedLinkText,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="ph_container">
				<div className="ph_logo_section">
					{phLogo && (
						<img
							src={phLogo.url}
							alt={phLogo.alt ? phLogo.alt : 'image title'}
						/>
					)}
				</div>
				<div className="ph_rating_section">
					<strong>
						<RichText.Content value={ratingScore} />
					</strong>
					/<RichText.Content value={ratingOn} />
				</div>
				<div className="ph_bonus_section">
					<strong>
						<RichText.Content value={bonusText} />
					</strong>
				</div>
				<div className="ph_highlight_section">
					<RichText.Content value={highlightText} />
				</div>
				<div className="ph_payrate_section">
					<p>
						<RichText.Content value={payRateText} />
					</p>
					<RichText.Content value={payRateDetails} />
				</div>
				<div className="ph_payduration_section">
					<p>
						<RichText.Content value={payDurationText} />
					</p>
					<RichText.Content value={payDurationDetails} />
				</div>
				<div className="ph_activeplayers_section">
					<p>
						<RichText.Content value={payActive} />
					</p>
					<RichText.Content value={payActiveDetails} />
				</div>
				<div className="ph_golink_section">
					<a
						href="/zu/vulkanvegas-main"
						className="act1"
						target="_blank"
						rel="nofollow"
					>
						<RichText.Content value={goLinkText} />
					</a>
				</div>
				<div className="ph_relativelink_section">
					<a href="http://facebook.com">
						<RichText.Content value={relatedLinkText} />
					</a>
				</div>
			</div>
		</div>
	);
}
