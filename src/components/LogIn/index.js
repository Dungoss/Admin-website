import "./LogIn.css";

function LogIn(){
    return(
        <div className="root">
            <div className="login">
                    <div className="form">
                        <img className="login-img" src="../../login.png" alt="login"></img>
                        <div className="form-in">
                            <form>
                                <h2 className="login-title">Đăng nhập</h2>
                                <h6 className="login-explain">Vui lòng đăng nhập để sử dụng các chức năng của hệ thống</h6>
                                <div className="input-container">
                                    <input className="input-text" type="text" placeholder="Tên đăng nhập" />
                                </div>
                                <div className="input-container">
                                    <input className="input-text" type="password" placeholder="Mật khẩu" />
                                </div>
                                <div className="button-container">
                                    <input className="submit" type="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default LogIn;