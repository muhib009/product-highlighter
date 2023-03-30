import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes }) {
	const { content, color } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'product-block')}
					initialOpen={true}
				>
					<p className="custom__editor__label">
						{__('Text Color', 'product-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={color}
						onChange={(newColor) =>
							setAttributes({ color: newColor })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
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
					<div className="ph_highlight_section">
						Top Loyalty Program
					</div>
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
				<RichText
					tagName="h4"
					value={content}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
					style={{ color }}
				/>
			</div>
		</Fragment>
	);
}
