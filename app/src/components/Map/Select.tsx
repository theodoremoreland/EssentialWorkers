// React
import { ReactElement } from "react";

// MUI
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Styles
import "./Select.css";

interface Props {
    label: string;
    selectedValue: string;
    setSelectedValue: (value: string) => void;
    options: { value: string; label: string }[];
}

const Dropdown = ({
    label,
    selectedValue,
    setSelectedValue,
    options,
}: Props): ReactElement => {
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl className="Dropdown-container" size="small">
            <InputLabel id={`${label}-select-label`} className="Dropdown-label">
                {label}
            </InputLabel>
            <Select
                labelId={`${label}-select-label`}
                id={`${label}-select`}
                className="Dropdown"
                value={selectedValue}
                label={label}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
