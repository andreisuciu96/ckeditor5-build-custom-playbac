/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Heading,
	Link,
	List,
	Paragraph,
	Highlight
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'|',
			'highlight:yellowMarker',
			'highlight:redMarker',
			'highlight:bluePen',
			'highlight:orangePen',
			'removeHighlight'
		]
	},
	highlight: {
		options: [
			{
				model: 'yellowMarker',
				class: 'marker-yellow',
				title: 'Yellow Highlight',
				color: '#cac407',
				type: 'marker'
			},
			{
				model: 'redMarker',
				class: 'marker-red',
				title: 'Red Highlight',
				color: '#ff0000',
				type: 'marker'
			},
			{
				model: 'bluePen',
				class: 'pen-blue',
				title: 'Blue Color',
				color: '#148f88',
				type: 'pen'
			},
			{
				model: 'orangePen',
				class: 'pen-orange',
				title: 'Orange Color',
				color: '#ec6851',
				type: 'pen'
			}
		]
	},
	language: 'en'
};
