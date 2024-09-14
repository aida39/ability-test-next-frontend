export default function LoginPage() {
    return (
        <div className="auth__content">
            <div className="auth__heading">
                <h1>Login</h1>
            </div>
            <div className="auth__form">
                <form className="form" action="/login" method="post">
                    <label>メールアドレス</label>
                    <div className="auth__form__group">
                        <input type="email" className="auth__form__input" name="email" placeholder="例:test@example.com" />
                        <div className="error-message">
                        </div>
                    </div>
                    <label>パスワード</label>
                    <div className="auth__form__group">
                        <input type="password" className="auth__form__input" name="password" placeholder="例:coachtech1106" />
                        <div className="error-message">
                        </div>
                    </div>
                    <div className="button__area">
                        <button className="common-button" type="submit">ログイン</button>
                    </div>
                </form>
            </div>
        </div>
    );
}