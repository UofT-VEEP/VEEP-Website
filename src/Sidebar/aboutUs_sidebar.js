import {CgProfile, CgSearch, CgHomeAlt, CgHeart, CgPen, CgLogOut} from 'react-icons/cg'
import React, {useEffect} from 'react';
import '../Sidebar/sidebar.css';
import SideBarButton from "../components/input/SideBarButton";
import {useNavigate} from "react-router-dom";

function SideBar(props) {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchUserSession(user, navigate, dispatch).then()
    }, [dispatch, navigate, user])


    const isSelected = (path) => {
        return props.currentSelected === path ? 'selected' : ''
    }
    const WrappedSideBarButton = ({title, path, icon, onClick}) => {
        return (<SideBarButton onClick={onClick} setSideBarOpen={props.setSideBarOpen} title={title} path={path}
                               isSelected={isSelected} icon={icon}/>)
    }
    return (
        <div className={`side-bar ${props.sideBarOpen ? null : 'closed'}`} onClick={(e) => {
            e.stopPropagation();
        }}>
            <div className={'avatar__container'}>
                <img src={user.avatar} alt='avatar'/>
            </div>

            <div className={'side-bar__username'}>{user.name}</div>

            <div className={'side-bar-top-group'}>
                <WrappedSideBarButton title='Dashboard' path='/dashboard' icon={<CgHomeAlt/>}/>
                <WrappedSideBarButton title='Browse Recipes' path='/browse' icon={<CgSearch/>}/>
                
                
            </div>
            
        </div>
    );
}

export default SideBar;