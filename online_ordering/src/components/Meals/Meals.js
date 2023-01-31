import styles from './Meals.module.css'
import Card from '../../UI/Card/Card'
import MealItem from './MealItem';

const Meals = (props) => {
    return (
        <Card className ={styles.main}>
            <ul>
                {props.meals.map((meal) => {
                    return (<li key={meal.id}><MealItem meal={meal} /></li>);
                })}
            </ul>
            
        </Card>
    );
}

export default Meals;