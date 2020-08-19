import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router";

const initialFormValues = {
    credentials: {
        username: '',
        password: ''
        }
}



export default function LoginForm () {

    const [formValues, setFormValues] = useState(initialFormValues)


    const handleChange = (e) => {
        setFormValues({ credentials: {
            ...formValues.credentials,
            [e.target.name]: e.target.value,
        }});
      };

      const history = useHistory()


      const login = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/login", formValues.credentials)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.payload));
            history.push("/protected");
          })
          .catch((err) => console.log(err));

          setFormValues({credentials: {
              username: '',
              password: ''
          }})
      };

    return (
    <div>
        <form onSubmit={login}>
          <label htmlFor="username">Username:</label>
          <input 
            id="username"
            type="text"
            name="username"
            value={formValues.credentials.username}
            onChange={handleChange}
            ></input>

          <br></br>

          <label>Password:</label>
          <input 
            id="password"
            type="password"
            name="password"
            value={formValues.credentials.password}
            onChange={handleChange}

            ></input>
          <br></br><br></br>
          <button className="login2" type="submit">Submit</button>
        </form>
    </div>
    )
}