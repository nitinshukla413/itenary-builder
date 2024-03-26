import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const DropDown = ({ value,size="medium", handleChange, menuItems = [],title,label }:{ value?:any, size?:any,handleChange?:any, menuItems ?:any[],title?:any,label ?:any}) => {
    return <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={handleChange}
            size={size||"small"}
        >
            {menuItems.map((veh,i) => <MenuItem key={i} value={veh}>{veh}</MenuItem>)}
        </Select>
    </FormControl>
}
export default DropDown;