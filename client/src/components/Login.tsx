import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react"
import { MouseEventHandler, useState } from "react"

const Login = ({ switchAuth }: { switchAuth: MouseEventHandler }) => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className="container space-y-5 lg:space-y-24 bg-white/15 backdrop-blur-lg p-10 rounded-md w-fit mx-5 md:w-6/12 lg:w-3/12">
            <div className="space-y-8">
                <h1 className="lg:text-3xl text-lg text-center font-medium">We are <span className="text-cyan-900 font-bold">HomeHaven</span></h1>
                <p className="lg:text-lg text-sm font-light p-3 w-[95%] text-cyan-500">Welcome back!, Login to your account and see your <b className="font-medium text-blue-950">Nest</b></p>
            </div>
            <form className="lg:space-y-20 space-y-10">
                <div className="flex items-center gap-x-3">
                    <div className="hidden lg:block">
                        <Mail className="stroke-cyan-900" />
                    </div>
                    <input type="text" className="bg-transparent w-full px-3 py-2 outline-none font-normal border-cyan-700 focus:border-cyan-300 lg:border-b-2 placeholder:text-cyan-400 placeholder:font-normal lg:placeholder:text-base border-b placeholder:text-xs" placeholder="Email" />
                </div>
                <div className="flex items-start gap-x-3">
                    <div className="hidden lg:block">
                        <Lock className="stroke-cyan-900" />
                    </div>
                    <div className='w-full space-y-10'>
                        <div className="relative flex justify-end items-center w-full">
                            <input type={isShow ? "text" : "password"} className="bg-transparent w-full px-3 py-2 outline-none font-normal border-cyan-700 focus:border-cyan-300 lg:border-b-2 placeholder:text-cyan-400 placeholder:font-normal lg:placeholder:text-base border-b placeholder:text-xs" placeholder="Password" />
                            <div className="absolute" onClick={() => setIsShow(!isShow)}>
                                {isShow ? <Eye className="stroke-cyan-800 size-5 lg:size-7" /> : <EyeOff className="stroke-cyan-800 size-5 lg:size-7" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="flex lg:font-normal text-sm gap-x-2 lg:p-3 p-1.5 w-full justify-center bg-cyan-700 rounded-md text-white">Login <ArrowRight className="animate-pulse" /></button>
                    <p className="mt-5 text-xs capitalize text-white">I don't have an account, <button type="button" onClick={switchAuth} className="underline cursor-pointer text-cyan-950">Sign-up</button> </p>
                </div>
            </form>
        </div>
    )
}

export default Login
