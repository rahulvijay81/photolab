import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context'
import PasswordChecklist from 'react-password-checklist'
import '../../Style.scss'


export default function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { firebase } = useContext(FirebaseContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: username }).then(() => {
                firebase.firestore().collection('users').add({
                    id: result.user.uid,
                    username: username,
                }).then(() => {
                    navigate('/login')
                })
            })
        })
    }

    return (
        <div>
            <div className="signupParentDiv">
                <div className='brandName' style={{textAlign: 'center'}}>
                    Photo Lab
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="fname"
                        name="name"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="fname"
                        name="email"
                    />
                    <br />
                   
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="lname"
                        name="password"
                    />
                    <PasswordChecklist
                        rules={["minLength"]}
                        minLength={10}
                        value={password}
                        valueAgain={password}
                        onChange={(isValid) => { }}
                    />
                    <br />
                    <br />
                    <button>Signup</button>
                </form>
                <p href="" onClick={() => {
                    navigate('/login')
                }}>Back to Login Page</p>
            </div>
        </div>
    );
}
