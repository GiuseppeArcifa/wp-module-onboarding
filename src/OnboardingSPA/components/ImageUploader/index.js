import { useRef } from '@wordpress/element';
import { uploadImage } from '../../utils/api/uploader';

 /*
 * Image Uploader
 *
 */
const ImageUploader = ({ icon, iconSetter }) => {

    const inputRef = useRef(null);
    async function updateItem(fileData) {
        const res = await uploadImage(fileData);
        
        const id = res.body.id;
        const url = res.body.source_url;
        iconSetter({
            id,
            url
        });
    }

    const handleClick = () => {
        inputRef.current.click();
    };

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            updateItem(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        iconSetter(0);
    };

    return (
        <div className="image-uploader">
            <h4 className="image-uploader_heading">Logo</h4>
            <div className="image-uploader_window">
                <div className="image-uploader_window-empty"></div>
                <div className="image-uploader_window-logo">
                    {(icon == 0 || icon == undefined) && (
                        <div className="image-uploader_window-logo-icon" style={{ content: 'var(--default-logo-icon)' }}></div>)
                    }
                    {(icon != 0 && icon != undefined) && (
                        <img
                            className="image-uploader_window-logo-icon"
                            src={icon.url}
                            style={{width: '80%', height: '90%'}}
                            alt="Thumb"
                        />
                    )}
                </div>
                <div className="image-uploader_window-reset">
                    {(icon != 0 && icon != undefined) && (<button className="image-uploader_window-reset-btn" 
                            onClick={removeSelectedImage}>
                                RESET
                    </button>)}
                    {(icon == 0 || icon == undefined) && (<button className="image-uploader_window-reset-btn" 
                            onClick={handleClick}>
                                UPLOAD
                    </button>)}
                    <input
                        className="image-uploader_window-select-btn"
                        accept="image/*"
                        type="file"
                        ref={inputRef}
                        onChange={imageChange}
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default ImageUploader;