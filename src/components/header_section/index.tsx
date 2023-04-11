import styles from '@/styles/HeaderSection.module.css'
import Link from "next/link";
import {IHeaderSektion} from "../../../@types/generated/contentful";

const Header_section = ({header}: { header: IHeaderSektion}) => {
    return (
        <div className={styles.HeaderSection_component}>
            <div className={styles.HeaderSection_block}>
                <p className={styles.HeaderSection_preTitle}>{header.fields.preTitle}</p>
                <h2 className={styles.HeaderSection_Title}>{header.fields.title}</h2>
                <p className={styles.HeaderSection_Description}>{header.fields.description}</p>
                <Link href={`${header.fields.linkBtn}`}><div className={styles.HeaderSection_Btn}>{header.fields.btnName}</div></Link>
            </div>

        </div>
    )
}

export default Header_section

