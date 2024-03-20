import { CardHeader, Drawer, TextField } from "@mui/material"
import Box from '@mui/material/Box';
import Button from "../button";

const AddDrawer = ({ open, toggleDrawer }: { open: boolean, toggleDrawer: any }) => {
    const handleSubmit=()=>{
        toggleDrawer()
    }
    const list = (anchor: any) => (
        <Box
            sx={{ width: '30vw' }}
            className="p-10 space-y-10"
            role="presentation"
        >
            <CardHeader title='Add Passenger details' className='font-[900] text-[#696969ee]'  />
            <TextField
                id="outlined"
                label="Full Name"
                placeholder="Full Name"
                className="w-full"
            />
            <TextField
                id="outlined"
                label="Email"
                placeholder="Email"
                className="w-full"
            />
            <TextField
                id="outlined"
                label="Price"
                placeholder="Price"
                className="w-full"
            />
            <div className="full">
                <Button onClick={handleSubmit} title="Submit"></Button>
            </div>
        </Box>
    );
    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer}
        >
            {list('right')}
        </Drawer>
    )
}
export default AddDrawer