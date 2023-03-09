import React from 'react'
import '../../Style.scss'

export default function Signup() {
    return (
        <div>
            <div className="signupParentDiv">
                <form>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        id="fname"
                        name="name"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="fname"
                        name="email"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        className="input"
                        type="number"
                        id="lname"
                        name="phone"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="lname"
                        name="password"
                    />
                    <br />
                    <br />
                    <button>Signup</button>
                </form>
                <a href='"'>Back to Login Page</a>
            </div>
        </div>
    );
}
