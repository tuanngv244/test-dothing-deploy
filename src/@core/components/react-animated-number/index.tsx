import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';

const numberWithCommas = (count: number) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

type ReactAnimatedNumberProps = {
    number: number
}

const ReactAnimatedNumber = ({number}: ReactAnimatedNumberProps) => {
    return <CountUp end={number} decimal=","/>
}

export default ReactAnimatedNumber