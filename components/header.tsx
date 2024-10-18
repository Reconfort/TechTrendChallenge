import {Typography} from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/logo.svg"
import Home from "@/assets/home.svg"
import Users from "@/assets/Users.svg"
import Link from "next/link";
import CustomButton from "@/components/shared/CustomButton";

interface NavItemProps {
    icon: string,
    title: string,
    path: string,
}

const NavItemArr: NavItemProps[] = [
    {
        icon: Home,
        title: "Home",
        path: "/"
    },
    {
        icon: Users,
        title: "Community",
        path: "/community"
    }
]


const NavItem = ({icon, title, path}: NavItemProps) => {
    return (
        <Link href={`/${path}`} className={'flex items-center gap-2 text-[#A6A6A6]'}>
            <Image src={icon} alt={'Tech Trends logo'} width={60} height={60} className={'w-[20px] h-[20x]'}/>
            <Typography
                variant="h6"
                className={"!font-medium"}>
                {title}
            </Typography>
        </Link>
    )
}


const Header = () => {
    return (
        <div
            className={'fixed top-0 left-0 w-screen px-[4%] md:px-[8%] py-[12px] bg-[#141B29] text-white flex justify-between items-center'}>

            {/*Logo*/}
            <div className={'flex items-center gap-1 pr-4 border-r-2 border-white/10'}>
                <Image src={Logo} alt={'Tech Trends logo'} width={60} height={60} className={'w-[42px] h-[42px]'}/>
                <Typography
                    variant="h5"
                    className={"!font-bold hidden md:block"}>
                    Tech Trending
                </Typography>
                <Typography
                    variant="h5"
                    className={"!font-black text-[#8D57FA] bold hidden md:block"}>
                    '
                </Typography>
            </div>


            {/*Navs*/}
            <nav className={'hidden md:flex items-center gap-4'}>
                <ul className="flex items-center gap-4">
                    {NavItemArr.map((data, index) => (
                        <li key={index} className={'px-2 py-4 text'}>
                            <NavItem icon={data.icon} title={data.title} path={data.path}/>
                        </li>
                    ))}
                </ul>
                <   ul className="flex items-center gap-4">
                    <CustomButton variants={'outlined'} title={'Log in'}
                                  classes={`!bg-[#202634] !px-6 !py-3 !text-white !border-white`}/>
                    <CustomButton title={'Sign up'}
                                  classes={`!bg-[#8D57FA] !px-6 !py-3 !text-white !border-white`}/>
                </ul>
            </nav>
        </div>
    )
}

export default Header