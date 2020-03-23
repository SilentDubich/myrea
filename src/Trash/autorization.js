import React from "react";

function Auto() {
    return(
        <div className="column-sidebar">
            <div className="tile">
                <form className="login-form">
                    <h3>Логин</h3>
                    <p>
                        <label htmlFor="username">Имя</label>
                        <input id="username" type="text"
                               name="username"/>
                    </p>
                    <p>
                        <label htmlFor="password">Пароль</label>
                        <input id="password" type="password"
                               name="password"/>
                    </p>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Auto