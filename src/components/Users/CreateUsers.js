import React, {useState} from 'react'
import Card from '../UI/Card';
import styles from './CreateUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const CreateUsers = (props) => {
    const [inputName, setInputName] = useState(""); 
    const [inputAge, setInputAge] = useState("");

    const nameChangeHandler = (e) =>{
        setInputName(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setInputAge(e.target.value);
    }


    const userAddHandler = (e) =>{
        e.preventDefault();
        if (inputName.trim().length === 0 || inputAge.trim().length === 0){
            return
        }
        if (+inputAge < 1){
            return
        }
        props.createNewUsers(inputName,inputAge);
        setInputName("");
        setInputAge("");
    }

  return (
    <div>
    <ErrorModal title="Произошла ошибка" message="Что-то пошло не так ..."/>
    <Card className={styles.input}>
     <form onSubmit={userAddHandler}>
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" value={inputName} onChange={nameChangeHandler}/>
        <label htmlFor="age">Возраст</label>
        <input type="text" id="age" value={inputAge} onChange={ageChangeHandler}/>
        <Button type='submit'>Добавить пользователя</Button>
     </form>
    </Card>
    </div>


  )
}

export default CreateUsers