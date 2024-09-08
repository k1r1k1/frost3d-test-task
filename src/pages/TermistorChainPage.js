import React, { useEffect, useState } from "react";
import NavComponent from "../components/Nav";
import Page from "../components/Page";
import SideNav from "../components/SideNav";
import { getTermoData, getTermoTrend } from "../requests/termo";
import TermistorChain from "../components/TermistorChain";

const TermistorChainPage = () => {
    const [data, setData] = useState(null)
    const [trend, setTrend] = useState(null)

    useEffect(() => {
        getTermoData()
            .then(data => setData(data))
            .catch(e => console.log(e))

        getTermoTrend()
            .then(data => setTrend(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <NavComponent />
            <Page>
                <SideNav />
                <TermistorChain {...{ data, trend }} />
            </Page>
        </>
    )
}

export default TermistorChainPage
