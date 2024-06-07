import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { MouseEventHandler, useState } from 'react'

const Register = ({ switchAuth }: { switchAuth: MouseEventHandler }) => {
    const [isShow, setIsShow] = useState(false)
    // const capitalLetter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z][A-Za-z\d@$!%*?&]{8,}$/;
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })


    return (
        <div className="container space-y-5 lg:space-y-16 bg-cyan-600/15 lg:bg-white/15 backdrop-blur-lg p-10 rounded-md mx-5 lg:mx-0 md:w-5/12 lg:w-4/12">
            <div className="space-y-8">
                <h1 className="lg:text-3xl text-lg text-center font-medium">We are <span className="text-cyan-900 font-bold">HomeHaven</span></h1>
                <p className="lg:text-lg text-sm font-light p-3 w-[95%] text-cyan-600">Hello There!, Welcome to <b className='text-cyan-700 font-semibold'>HomeHeaven,</b> Create your account and see your <b className="font-medium text-blue-950">Nest</b></p>
            </div>
            <form className="lg:space-y-10 space-y-5">
                <div className="flex items-center gap-x-3">
                    <div className="hidden lg:block">
                        <User className="stroke-cyan-900" />
                    </div>
                    <input type="text" className="bg-transparent w-full px-3 py-2 outline-none font-normal border-cyan-700 focus:border-cyan-300 lg:border-b-2 placeholder:text-cyan-400 placeholder:font-normal lg:placeholder:text-base border-b placeholder:text-xs" placeholder="Username" />
                </div>
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
                            <input type={isShow ? "text" : "password"} onChange={(e) => setUser({ ...user, password: e.target.value })} className="bg-transparent w-full px-3 py-2 outline-none font-normal border-cyan-700 focus:border-cyan-300 lg:border-b-2 placeholder:text-cyan-400 placeholder:font-normal lg:placeholder:text-base border-b placeholder:text-xs" placeholder="Password" />
                            <div className="absolute" onClick={() => setIsShow(!isShow)}>
                                {isShow ? <Eye className="stroke-cyan-800 size-5 lg:size-7" /> : <EyeOff className="stroke-cyan-800 size-5 lg:size-7" />}
                            </div>
                        </div>
                        <ul className="list-none p-0 text-xs lg:text-base">
                            <li className="mb-2 flex items-center">
                                <span className="text-green-500 mr-2">{/^[A-Z]/.test(user.password) ? '✔' : '❌'}</span>

                                Must start with a capital letter
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="text-green-500 mr-2">{/[a-z]/.test(user.password) ? '✔' : '❌'}</span>
                                Must contain at least one lowercase letter
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="text-green-500 mr-2">{/[\d]/.test(user.password) ? '✔' : '❌'}</span>
                                Must contain at least one digit
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="text-green-500 mr-2">{user.password.length >= 8 ? '✔' : '❌'}</span>
                                Must be at least 8 characters long
                            </li>
                            <li className="mb-2 flex items-center">
                                <span className="text-green-500 mr-2">{/[@$!%*?&]/.test(user.password) ? '✔' : '❌'}</span>

                                Must contain at least one special character (@, $, !, %, *, ?, &)
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className="capitalize flex lg:font-normal text-sm gap-x-2 lg:p-3 p-1.5 w-full justify-center bg-cyan-700 rounded-md text-white">register <ArrowRight className="animate-pulse" /></button>
                    <p className="mt-5 text-xs first-letter:capitalize lg:text-white text-cyan-800">I already have an account, <button type="button" onClick={switchAuth} className="underline cursor-pointer text-cyan-950">Log in</button> </p>
                </div>
            </form>
        </div>
    )
}

export default Register
