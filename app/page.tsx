import Header from "@/components/header";
import CustomButton from "@/components/shared/CustomButton";
import Dialogue from "@/components/shared/Dialogue";

const Home = () => {
    return (
        <div className={'w-screen h-screen flex flex-col justify-center items-center'}>
            <Header/>
            <Dialogue/>
        </div>
    );
}

export default Home
