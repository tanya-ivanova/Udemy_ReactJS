import {useRef} from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: inputNameHasError, 
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: inputEmailHasError, 
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));
  
  // const [formIsValid, setFormIsValid] = useState(false);  

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);  

  const formSubmissionHandler = (event) => {
    event.preventDefault();    

    if(!formIsValid) {      
      return;
    }    

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; // NOT IDEAL; DON'T MANIPULATE THE DOM
    resetNameInput();

    resetEmailInput();
  }; 

  const nameInputClasses = inputNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = inputEmailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef}
          type='text' 
          id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {inputNameHasError && <p className='error-text'>Name must not be empty!</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input           
          type='email' 
          id='email' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {inputEmailHasError && <p className='error-text'>Please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
