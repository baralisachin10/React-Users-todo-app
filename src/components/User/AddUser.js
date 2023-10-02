import React, { useRef, useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
    const [isError, setIsError] = useState(false);

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = nameInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setErrorMessage({
                title : 'Invalid input',
                message: 'Please Enter a valid name and age (non-empty values).'
            })
            setIsError(true)
            return;
        }
        if (+enteredUserAge < 1) {
            setErrorMessage({
                title: 'Invlaid age',
                message: 'Please enter the valid age ( >0 ) '
            })
            setIsError(true)
            return;
        }
        props.onAddUser(enteredName, enteredUserAge)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }

    const closeErrorModal = () => {
        setIsError(false)
    }

    return (
        <div>
            {
               isError && <ErrorModal title = {errorMessage['title']} message = {errorMessage['message']} onCloseErrorModal = {closeErrorModal}/>
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    id="username" 
                    // value={enteredUsername} 
                    // onChange={usernameChangeHandler}
                    ref={nameInputRef}
                    />
                    <label htmlFor="age">Age(years)</label>
                    <input 
                    type="number" 
                    id="age" 
                    // value={enteredAge} 
                    // onChange={ageChangeHandler}
                    ref = {ageInputRef} 
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser