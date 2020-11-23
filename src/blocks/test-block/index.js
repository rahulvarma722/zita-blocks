import { directive } from "@babel/types";

import { registerBlockType } from "@wordpress/blocks";
import { RichText,InspectorControls,ColorPalette,MediaUpload,MediaUploadCheck,AlignmentToolbar } from "@wordpress/block-editor";
import { PanelBody,IconButton,RangeControl } from "@wordpress/components";

registerBlockType( 'wpgt-blocks/test-block', {
	title: 'basic example by wpgt',
	icon: 'smiley',
    category: 'wpgt-category',
    
    attributes:{
        title:{
                type:'string',
                source:'html',
                selector:'h2',
            },
            titleColor:{
                type:'string',
                default:'black'
            },
            body:{
                type:'string',
                source:'html',
                selector:'p'
            },
            backgroundImage:{
                type:'string',
                default:null
            },
            overlayColor:{
                type:'string',
                default:'black',
            },
            overlayOpacity:{
                type:'number',
                default:0.3
            }

    },
	edit: ( props ) => {
            const {attributes,setAttributes,className} = props;
            // console.log( attributes );
            const { title,body,titleColor,backgroundImage,overlayColor,overlayOpacity } = attributes;

        function onChangeTitle(newTitle){
            setAttributes({title:newTitle});
        }
        function onChangeBody(newBody){
            setAttributes({body:newBody});
        }
        function onTitleColorChange(newColor){
            setAttributes({titleColor:newColor});
        }
        function onSelectImage(newImage){
            setAttributes( {backgroundImage:newImage.sizes.full.url } );
        }
        return ([

            <InspectorControls style={ { marginBottom : '40px' } }>
                
                <PanelBody title={'Font Color Settings Outer ->'}>
                    <p><strong>Select a Title Coolor inner : </strong></p>
                    <ColorPalette value={ titleColor } 
                    onChange={ onTitleColorChange } />
                </PanelBody>

                <PanelBody title={'Background Image Settings'}>
                    <p><strong>Select a Background Image:</strong></p>
                    <MediaUpload
                            onSelect={ onSelectImage }
                            value={ backgroundImage }
                            render={ ( { open } ) => (
                                <IconButton onClick={ open } icon="upload" className="editor-media-placeholder__button is-button is-default is-large">Open Media Library</IconButton>
                            ) }
                        />
                </PanelBody>

            </InspectorControls>,
            

            <div className={className} style={{
                    backgroundImage:`url(${backgroundImage})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat'
                }}>
                <RichText key="editable"
                    tagName="h2"
                    placeholder="Your wppgt Title"
                    value={ attributes.title }
                    onChange={ onChangeTitle }
                    style={ { color:titleColor } }
                />
                <RichText key="editable"
                    tagName="p"
                    placeholder="this is body description"
                    value={ attributes.body }
                    onChange={ onChangeBody }
                />
            </div>
        ]);
        
        },
	save: (props) => {
            const {attributes,className} = props;
            const { title,body,titleColor,backgroundImage } = attributes;
        return (
            <div className={className} style={{
                backgroundImage:`url(${backgroundImage})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
                }}>
                <h2 style={{color:titleColor}}>{ title }</h2>

                <RichText.Content tagName="p"
                value={ body }/>

            </div>
        );
    },

} );
// block two
