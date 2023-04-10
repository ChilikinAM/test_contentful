import styles from "@/styles/SupportSection.module.css";
import {ISupportSection} from "../../../@types/generated/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {useState} from "react";


const Support_section = ({support}: { support: ISupportSection}) => {
    const [selectSupport, setSelectSupport] = useState(true)
    return (
        <div className={styles.SupportSection_component}>
            <div className={styles.SupportSection_block}>
                <p>{support.fields.title}</p>
                <div className={styles.SupportSection_selector}>
                    <p
                        className={selectSupport ? styles.SupportSection_selector_active : ''}
                        onClick={() => setSelectSupport(true)}
                    >{support.fields.leftBtnName}</p>
                    <p
                        className={!selectSupport ? styles.SupportSection_selector_active : ''}
                        onClick={() => setSelectSupport(false)}
                    >{support.fields.rightBtnName}</p>
                </div>
                <div className={styles.SupportSection_content}>
                    <div className={styles.SupportSection_content_left}>
                        {selectSupport ?
                            documentToReactComponents(support.fields.leftBtnText) :
                            documentToReactComponents(support.fields.rightBtnText)
                        }
                    </div>
                    <div className={styles.SupportSection_content_right}>
                        {selectSupport ?
                            <img
                                className={styles.SupportSection_content_img}
                                src={support.fields.leftBtnImage.fields.file.url}
                                alt="img"
                            /> :
                            <img
                                className={styles.SupportSection_content_img}
                                src={support.fields.rightBtnImage.fields.file.url}
                                alt="img"
                            />
                        }
                    </div>
                </div>
                {/*<div>*/}

                {/*    {documentToReactComponents(support.fields.leftBtnText)}*/}
                {/*    <img src={support.fields.leftBtnImage.fields.file.url} alt="img"/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {documentToReactComponents(support.fields.rightBtnText)}*/}
                {/*    <img src={support.fields.rightBtnImage.fields.file.url} alt="img"/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Support_section