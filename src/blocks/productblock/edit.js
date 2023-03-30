import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToolbarGroup,
	ToolbarButton,
	Button,
	TextControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes }) {
	const {
		ratingScore,
		ratingOn,
		counterText,
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
		buttonUrl,
		relativeLinkUrl,
		relatedLinkText,
	} = attributes;
	return (
		<Fragment>
			{phLogo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									phLogo: media,
								})
							}
							allowedTypes={['image']}
							value={phLogo && phLogo.id}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									label="Edit"
									icon="edit"
								/>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'product-block')}
					initialOpen={true}
				>
					<p className="ph_editor_label">
						{__('Counter Text', 'product-block')}
					</p>
					<TextControl
						label="Write a Number"
						value={counterText}
						onChange={(value) =>
							setAttributes({
								counterText: value,
							})
						}
					/>
					<p className="ph_editor_label">
						{__('Button URL', 'product-block')}
					</p>
					<TextControl
						label="Write Link Here"
						value={buttonUrl}
						onChange={(value) =>
							setAttributes({
								buttonUrl: value,
							})
						}
					/>

					<p className="ph_editor_label">
						{__('Relative Link URL', 'product-block')}
					</p>
					<TextControl
						label="Write Link Here"
						value={relativeLinkUrl}
						onChange={(value) =>
							setAttributes({
								relativeLinkUrl: value,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="ph_container">
					<div className="ph_logo_section">
						{phLogo ? (
							<img
								src={phLogo.url}
								alt={phLogo.alt ? phLogo.alt : 'image title'}
							/>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											phLogo: media,
										})
									}
									allowedTypes={['image']}
									value={phLogo && phLogo.id}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{__('Add Image', 'flexguten')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
					</div>
					<div className="ph_rating_section">
						<strong>
							<RichText
								value={ratingScore}
								onChange={(score) =>
									setAttributes({ ratingScore: score })
								}
							/>
						</strong>
						/
						<RichText
							value={ratingOn}
							className="rating_on"
							onChange={(score) =>
								setAttributes({ ratingOn: score })
							}
						/>
					</div>
					<div className="ph_bonus_section">
						<strong>
							<RichText
								value={bonusText}
								onChange={(bonus) =>
									setAttributes({ bonusText: bonus })
								}
							/>
						</strong>
					</div>
					<div className="ph_highlight_section">
						<RichText
							value={highlightText}
							className="highlight-text"
							onChange={(highlight) =>
								setAttributes({ highlightText: highlight })
							}
						/>
					</div>
					<div className="ph_payrate_section">
						<p>
							<RichText
								value={payRateText}
								onChange={(payrate) =>
									setAttributes({ payRateText: payrate })
								}
							/>
						</p>
						<RichText
							value={payRateDetails}
							onChange={(payratedetails) =>
								setAttributes({
									payRateDetails: payratedetails,
								})
							}
						/>
					</div>
					<div className="ph_payduration_section">
						<p>
							<RichText
								value={payDurationText}
								onChange={(payduration) =>
									setAttributes({
										payDurationText: payduration,
									})
								}
							/>
						</p>
						<RichText
							value={payDurationDetails}
							onChange={(paydurationdetails) =>
								setAttributes({
									payDurationDetails: paydurationdetails,
								})
							}
						/>
					</div>
					<div className="ph_activeplayers_section">
						<p>
							<RichText
								value={payActive}
								onChange={(pactive) =>
									setAttributes({
										payActive: pactive,
									})
								}
							/>
						</p>
						<RichText
							value={payActiveDetails}
							onChange={(pactivedetails) =>
								setAttributes({
									payActiveDetails: pactivedetails,
								})
							}
						/>
					</div>
					<div className="ph_golink_section">
						<button className="act1" target="_blank" rel="nofollow">
							<RichText
								value={goLinkText}
								onChange={(golink) =>
									setAttributes({
										goLinkText: golink,
									})
								}
							/>
						</button>
					</div>
					<div className="ph_relativelink_section">
						<span href="http://facebook.com">
							<RichText
								value={relatedLinkText}
								onChange={(relatedlink) =>
									setAttributes({
										relatedLinkText: relatedlink,
									})
								}
							/>
						</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
