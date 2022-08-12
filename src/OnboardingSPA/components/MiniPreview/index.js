import { __ } from '@wordpress/i18n';
import content from './miniPreview.json'; 
import { useState, useEffect } from '@wordpress/element';

/**
 * A Mini Preview Section.
 *
 * @returns
 */
const MiniPreview = ({ title, desc, icon, socialData }) => {
    var iconPreview = icon == "" || icon == undefined ? content.icon : icon;
    var titlePreview = title == "" ? content.title : title?.substring(0, 20);
    var descPreview = desc == "" ? content.desc : desc;
    var urlPreview = title == "" ? content.url : titleToUrl(title);

    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYouTube] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [yelp, setYelp] = useState("");
    const [tiktok, setTikTok] = useState("");

    useEffect(() => {
        setFacebook((socialData?.facebook_site) ?? "");
        setTwitter(socialData?.twitter_site ?? "");
        setInstagram(socialData?.instagram_url ?? "");
        setYouTube(socialData?.youtube_url ?? "");
        setLinkedIn(socialData?.linkedin_url ?? "");
        if (Object.keys(socialData).includes("other_social_urls"))
        {
            const otherURLS = socialData.other_social_urls;
            if (Object.keys(otherURLS).includes("yelp_url"))
                setYelp(otherURLS["yelp_url"] ?? "");

            if (Object.keys(otherURLS).includes("tiktok_url"))
                setTikTok(otherURLS["tiktok_url"] ?? "");
        }
    }, [socialData]);

    const isValidUrl = (urlString) => {
        let url;
        try {
            url = new URL(urlString);
        }
        catch (e) {
            return false;
        }

        if (url.protocol !== "http:" && url.protocol !== "https:")
            return false;
        return true;
    }

    var socialDataset = [
        {url: facebook, image: 'var(--facebook-colored-icon)'},
        {url: twitter, image: 'var(--twitter-colored-icon)'},
        {url: instagram, image: 'var(--instagram-colored-icon)'},
        {url: linkedin, image: 'var(--linkedin-colored-icon)'},
        {url: youtube, image: 'var(--youtube-colored-icon)'},
        {url: yelp, image: 'var(--yelp-colored-icon)'},
        {url: tiktok, image: 'var(--tiktok-colored-icon)'},
    ]

    var socialIcons = {
        facebook : !facebook || [facebook, 'var(--facebook-colored-icon)'],
        twitter : !twitter || 'var(--twitter-colored-icon)',
        instagram: !instagram || 'var(--instagram-colored-icon)',
        linkedin: !linkedin || 'var(--linkedin-colored-icon)',
        youtube: !youtube || 'var(--youtube-colored-icon)',
        yelp: !yelp || 'var(--yelp-colored-icon)',
        tiktok: !tiktok ||'var(--tiktok-colored-icon)',
    } 
    
    function titleToUrl(title) {
        return `https://${title?.substring(0, 20).toLowerCase().replace(/\s/g, '').replace(/\W/g, '')}.com`;
    }

    function socialIconList() {
        var socialIconList = []
        socialDataset.map( (socialInfo) => {
                !socialInfo.url ||
                socialIconList.push(
                <div className={`browser-content_social_icon ${isValidUrl(socialInfo.url) || 'invalid-url'}`} style={{ backgroundImage: socialInfo.image }} />)
        })

        // for (var icon in socialIcons) {
        //     (socialIcons[icon]==true ) ||
        //     socialIconList.push( 
        //         <div className={`browser-content_social_icon ${isValidUrl(icon) || 'invalid-url'}`} style={{ backgroundImage: socialIcons[icon] }} />
        //     )
        // }
        return socialIconList;
    }
    
    return (
        <div>
            <h4 className="mini-preview">Preview</h4>
            <div className="browser-container">
                <div className="browser-row-title">
                    <div className="browser-row-title_buttons">
                        <span className="browser-dot" style={{ background: '#ED594A' }}></span>
                        <span className="browser-dot" style={{ background: '#FDD800' }}></span>
                        <span className="browser-dot" style={{ background: '#5AC05A' }}></span>
                    </div>
                    <div className="browser-row-title_bar">
                        { (icon == 0 || icon == undefined) && (<div className="browser-icon" style={{ content: 'var(--default-logo-icon)'}}></div>)}
                        { (icon != 0 && icon != undefined) && (<img
                            className="browser-icon"
                            src={iconPreview.url}
                            alt="Thumb"
                        />)}
                        <div className="browser-row-title_bar-text">{__(
                            titlePreview?.substring(0, 18),
                            'wp-module-onboarding'
                        )}</div>
                    </div>
                </div>
                <div className="browser-row-search">
                    <div className="browser-row-search__icons">
                        <div className="browser-icon" style={{ backgroundImage: 'var(--back-icon)' }}></div>
                        <div className="browser-icon" style={{ backgroundImage: 'var(--forward-icon)' }}></div>
                        <div className="browser-icon" style={{ backgroundImage: 'var(--reload-icon)' }}></div>
                    </div>
                    <div className="browser-row-search__search-box">
                        <input className="browser-row-search__search-box_input" type="text" defaultValue={__(
                            urlPreview,
                            'wp-module-onboarding'
                        )}></input>
                    </div>
                    <div className="browser-row-search__more">
                        <div className="browser-icon" style={{ backgroundImage: 'var(--more-icon)' }}></div>
                    </div>
                </div>
                <div className="browser-content">
                    <div className="browser-content_top-row">
                        <h4 className="browser-content_top-row-name">{__(
                            titlePreview,
                            'wp-module-onboarding'
                        )}</h4>
                        <a className="browser-content_top-row-link">{__(
                            urlPreview,
                            'wp-module-onboarding'
                        )}</a>
                    </div>
                    <h5 className="browser-content_desc">
                        {__(
                            descPreview,
                            'wp-module-onboarding'
                        )}
                    </h5>
                    <div className="browser-content_social">
                        {socialIconList()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniPreview;
