import styles from './Header.module.css'
import CartButton from './CartButton';
import mealsImage from '../../assets/meals.jpg'
import bg from '../../assets/background.png'
import logo from '../../assets/logo.png'
const Header = () => {
    var background = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "120rem"
    };

    return (
        <>
            <header style={background} className={styles['header-main']}>
                <img src={logo} alt="Yama Japanese Restaurant"></img>
                <CartButton />
            </header>
            <div className={styles.img}>
                <img src={mealsImage} alt="Restaurant Banner" />
            </div>
        </>
    )
}

export default Header;