import styles from "@/styles/KundenSection.module.css";
import {IKundenVideoSektion} from "../../../@types/generated/contentful";


const Kunden_section = ({kunden}: { kunden: IKundenVideoSektion}) => {
    const YouTubeGetID = (url) => {
        let ID = ""
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }
    // console.log(YouTubeGetID(video.fields.youtubeLink))
    return (
        <div className={styles.KundenSection_component}>
            <div className={styles.KundenSection_block}>
                <p className={styles.KundenSection_Title}>{kunden.fields.title}</p>
                <p className={styles.KundenSection_Description}>{kunden.fields.description}</p>
                <div className={styles.KundenSection_VideoConteiner}>
                    <iframe className={styles.KundenSection_Video}
                            src={`https://www.youtube.com/embed/${YouTubeGetID(kunden.fields.youtubeLink)}`}>
                    </iframe>
                </div>

            </div>
        </div>
    )
}

export default Kunden_section