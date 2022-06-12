import React, {Dispatch, FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from 'react-router-dom';
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";


const Navbar: FC = () => {
    const router = useNavigate()
    const {isAuth, user} = useTypedSelector(state=> state.auth);
    const {logout} = useActions()
    console.log(router)
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                ?
                    <>
                    <div style={{color:'white'}}>{user.username}</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>

                        <Menu.Item onClick={logout} key={1}>
                            Logout
                        </Menu.Item>
                    </Menu>
                    </>
                :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => router(RouteNames.LOGIN)} key={1}>
                            Login
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;