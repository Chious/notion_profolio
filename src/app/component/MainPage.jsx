import PageNavbar from './PageNavbar'
import Protfolio from "./Protfolio/Protfolio"
import Project from "./Project/Project"
import Contract from './Contract/Contract'
import { Box } from '@mui/material'

export default function Mainpage() {
    return (<>

        <div className='bg-primary overflow-hidden' style={{ width: "100vw", background: "#151515" }}>
            <PageNavbar />
            <Box>
                <Protfolio />
                <Project />
                <Contract style={{ margin: 0 }} />
            </Box>
        </div>
    </>)
}