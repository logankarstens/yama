import styles from "./Intro.module.css";
import Card from "../../UI/Card/Card";


const Intro = () => {
    
    return (
        <Card className={styles.main}>
            <h1>sushi entrees</h1>
            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or
                dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </Card>
    );
};

export default Intro;
