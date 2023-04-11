import {IJetztLoslegenSection} from "../../../@types/generated/contentful";
import styles from "@/styles/JetztSection.module.css";
import {useState} from "react";


const Jetzt_section = ({jetzt} : {jetzt: IJetztLoslegenSection}) => {
    const [vorname, setVorname] = useState('')
    const [nachname, setNachname] = useState('')
    const [email, setEmail] = useState('')
    const [chkbox, setChkbox] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            vorname,
            nachname,
            email,
        };
        console.log(data);
    }
    // console.log(chkbox)
    return (
        <div
            className={styles.JetztSection_component}
            style={{
                background: `url("http:${jetzt.fields.backgroundImg?.fields.file.url}") no-repeat center`,
                minHeight: 812,
                backgroundSize: "100%"
            }}
        >
            <div className={styles.JetztSection_context}>
                <div className={styles.JetztSection_left}>
                </div>
                <div className={styles.JetztSection_right}>
                    <div className={styles.JetztSection_rightContener}>
                        <h3>{jetzt.fields.title}</h3>
                        <form className={styles.JetztSection_form} onSubmit={handleSubmit}>
                            <input
                                name="Vorname"
                                className={styles.JetztSection_right_input}
                                placeholder="Vorname"
                                type="text"
                                onChange={e => setVorname(e.target.value)}
                                required
                            />
                            <input
                                name="Nachname"
                                className={styles.JetztSection_right_input}
                                placeholder="Nachname"
                                type="text"
                                onChange={e => setNachname(e.target.value)}
                                required
                            />
                            <input
                                name="email"
                                className={styles.JetztSection_right_input}
                                placeholder="E-Mail Adresse"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <button className={styles.JetztSection_formBtn}>{jetzt.fields.btnName}</button>
                            <div className={styles.JetztSection_checkboxConteiner}>
                                <input type="checkbox" onChange={() => setChkbox(!chkbox)} required  />
                                <p>{jetzt.fields.checkboxText}</p>
                            </div>
                        </form>
                        <p>{jetzt.fields.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jetzt_section