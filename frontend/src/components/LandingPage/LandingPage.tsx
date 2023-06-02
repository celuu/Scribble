import * as React from "react";
import NavBar from "../NavBar/NavBar";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import "./LandingPags.css"
import Logout from "../../features/Logout/Logout";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Navigate } from "react-router-dom";
import { useState } from "react";


const LandingPage: React.FC  = () => {
    let {user} = useAuthContext();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userDropDown, setUserDropDown] = useState<boolean>(false);

    if (!user) {
        return <Navigate to='/login' replace/>
    }

    const clickHandlerUser = () => {
      setUserDropDown(!userDropDown)
      return (
        <div>Logout</div>
      )
    }

    return(
        <>
   
        <div className="hamburger-menu" onClick={onOpen}>
            <HamburgerIcon boxSize={6} className="hamburger-icon"/>
        </div>
        <div className="whole-nav-bar">
          <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
          >
          <DrawerOverlay />
            <DrawerContent>
              <div className="arrow-left-container">
                <div className="user-scribble-text" onClick={() => clickHandlerUser()}>{user.user.email}'s Scribble</div>
                
                <ArrowLeftIcon onClick={onClose} className="nav-bar-arrow-left"/>
              </div>
              <DrawerBody>
                <NavBar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
      </div>
      {user && <Logout />}
        </>
    )

}

export default LandingPage;