import { Suspense, useEffect, useRef } from "react"
import { Outlet } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"

import { Box } from "@mui/material"
import { COMMON } from "../../lib/constants/common"
import { useAppContext } from "../context/AppContext"

const USE_LOGIN = import.meta.env.VITE_USE_LOGIN === "true"

const AuthPage = () => {
    const { loadVertical, VerticalApp } = useAppContext()

    const isLoggedin = USE_LOGIN ? useSelector((state: any) => state.auth?.user?.isLoggedin) : true

    const { vertical } = useSelector((state: any) => {
        return {
            vertical: state.app?.vertical
        }
    }, shallowEqual)

    const lastLoadedVertical = useRef<string | null>(null)

    useEffect(() => {
        if (!isLoggedin || !vertical) return
        if (lastLoadedVertical.current === vertical) return
    
        loadVertical(vertical)
        lastLoadedVertical.current = vertical
    
    }, [isLoggedin, loadVertical, vertical])

    return (
        <Suspense fallback={<p>Loading Vertical...</p>}>
            {isLoggedin && VerticalApp ? <VerticalApp /> :
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    // background: `
                    //     url(/src/lib/assets/bg/authbg.svg) 100% / 80% no-repeat,
                    //     linear-gradient(270deg, #0A1B3D 0%, #0A1B3D 38.02%, #1065EF 100%)
                    // `,
                    }}
                >
                
                    <>
                        <Outlet />
                        <Box
                            style={{
                                color: "#FFFFFF",
                                fontSize: "13px",
                                lineHeight: "18px",
                                position: "fixed",
                                bottom: "2rem",
                                left: "2rem",
                        }}
                        >
                            {COMMON.COPYRIGHT}
                            <br />
                            {COMMON.ALL_RIGHTS_RESERVED}
                        </Box>
                    </>
                </Box>
            }
        </Suspense>
    )
}

export default AuthPage
