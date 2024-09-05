import React, { useEffect, useState } from "react";
import NavComponent from "../components/Nav";
import { getDeformationData, getDeformationTrend } from "../requests/deformation";
import DeformationControl from "../components/DeformationControl";
import SideNav from "../components/SideNav";
import Page from "../components/Page";

const DeformationControlPage = () => {
    const [data, setData] = useState(null)
    const [trend, setTrend] = useState(null)

    useEffect(() => {
        getDeformationData()
            .then(data => setData(data))
            .catch(e => console.log(e))

        getDeformationTrend()
            .then(data => setTrend(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <NavComponent />
            <Page>
                <SideNav />
                <DeformationControl {...{ data, trend }} />
            </Page>
        </>
    )
}

export default DeformationControlPage
