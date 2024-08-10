import React from "react";
import { fetchApi, API_URL } from '../../api/api';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import AppContextHOC from "../HOC/AppContextHOC";

class UserMenu extends React.Component {
    state = {
        dropdownOpen: false
    };

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    handleLogOut = () => {
        fetchApi(`${API_URL}/api/User/Logout`, {
            method: "DELETE",
            mode: "cors",
        })
            .then(() => {
                this.props.onLogOut();
            })
            .catch(error => {
                console.error("Logout error", error);
            });
    };

    render() {
        const { user } = this.props;
        return (
            <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
            >
                <DropdownToggle
                    tag="div"
                    onClick={this.toggleDropdown}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <img
                        width="50"
                        alt=""
                        className="Avatar-Default-Img"
                        src={`${API_URL}${user.avatarUri}`}
                        onClick={this.toggleDropdown}
                    />
                </DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem onClick={this.handleLogOut}>Выйти</DropdownItem>
                    <DropdownItem onClick={this.handleMyAccount}>MyAccount</DropdownItem>
                    <DropdownItem onClick={this.handleMyOrders}>MyOrders</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default AppContextHOC (UserMenu);




