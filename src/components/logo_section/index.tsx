import styles from "@/styles/LogoSection.module.css";
import {ILogoSection} from "../../../@types/generated/contentful";


const Logo_section = ({logo}: { logo: ILogoSection}) => {
    return (
        <div className={styles.LogoSection_component}>
            <div className={styles.LogoSection_block}>
                <h3>{logo.fields.title}</h3>
                <div className={styles.LogoSection_blockImg}>
                    {logo.fields.images?.map((img, index) => (<img key={index} src={img.fields.file.url} alt="img"/>))}
                </div>
                <div className={styles.LogoSection_Btn}>{logo.fields.btnName}</div>
            </div>

        </div>
    )
}

export default Logo_section