import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.png" alt="g.obraz" />
                <nav>
                    <a className={ styles.active } href="" > Início </a>
                    <a href="">Planos</a>
                    <a href="">Sobre</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}