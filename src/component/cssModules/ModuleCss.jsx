import styles from "./index.module.css"
export const ModuleCss=()=>{
    console.log(styles)
    return <p className={`${styles.title} ${styles.textBold}`}>Testing Module css</p>
}