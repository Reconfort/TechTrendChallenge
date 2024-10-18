import {Button} from "@mui/material";

interface ButtonProps {
    title: string
    classes?: string
    variants?: 'contained' | 'outlined' | 'text'
    click?: () => void;
}

const CustomButton = ({title, classes, variants = 'contained', click}: ButtonProps) => {
    return <Button variant={variants} onClick={click} className={`!px-12 !py-4 !capitalize !font-medium !rounded-lg !bg-[#8D57FA] ${classes}`}>{title}</Button>
}

export default CustomButton