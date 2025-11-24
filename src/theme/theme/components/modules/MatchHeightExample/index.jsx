import MatchHeight from '../../islands/MatchHeight?island';
import styles from "./module.module.css";


export function Component(props) {

    const {

    } = props;

    logInfo(props, 'props');
    return (
        <>
            <section>
                <Island module={MatchHeight} selectors={[`.${styles.card}`, `.${styles.title}`]} clientOnly hydrateOn='idle' />
                <div className={styles.card}>Content 1</div>
                <div className={styles.card}>Content 2</div>

                <h3 className={styles.title}>Heading A</h3>
                <h3 className={styles.title}>Heading B</h3>
            </section>
        </>
    );
}

export const meta = {
    label: 'MatchHeight Example',
};