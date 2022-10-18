import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


const CartIndex = () => {
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) return <Redirect to="/login" />
    if (sessionUser) return console.log(sessionUser);

    return (<></>)
}

export default CartIndex;