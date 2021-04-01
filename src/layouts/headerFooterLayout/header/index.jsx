import React from 'react';
import { isLogin, clearLocalStorage, RoutePath,  } from '../../../helpers';
import Button from '../../../shared/forms/button';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';

const Header = () => {
    const history = useHistory();
    const queryClient = useQueryClient();
    // clear local storage,cache and redirect on logout
    const logout = () => {
        clearLocalStorage();
        history.push(RoutePath.login);
        queryClient.clear();
    };
    return (
        <nav className="navbar shadow">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-brand font-weight-bold">
                        <img src="/logo.png" alt="logo" className="mr-2" style={{ width: '30px' }} />
                        HANGMAN
                    </div>
                </div>
                {/* show logout button if user is logged in */}
                {isLogin() ? (
                    <div className="nav navbar-nav navbar-right" onClick={logout}>
                        <Button title={'Logout'} btnType={'button'} loading={false} />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </nav>
    );
};
export default React.memo(Header);
