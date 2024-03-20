import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const DropDown = ({ value, handleChange, menuItems = [],title,label }:{ value:any, handleChange:any, menuItems :any[],title:any,label :any}) => {
    return <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={handleChange}
        >
            {menuItems.map(veh => <MenuItem value={veh}>{veh}</MenuItem>)}
        </Select>
    </FormControl>
}
export default DropDown;