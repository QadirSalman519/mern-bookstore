import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            email:data.email,
            password:data.password
        }
        await axios.post('http://localhost:4000/user/login',userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("LoggedIn Successfully!")
                document.getElementById("my_modal_3").close()
                setTimeout(()=>{
                    window.location.reload()
                    localStorage.setItem("User",JSON.stringify(res.data.user))
                },1500)
            }
        }).catch((error)=>{
            if(error.response){
                toast.error(error.response.data.message)
                setTimeout(()=>{},1500)
            }
        })
    }
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your Email" {...register("email", { required: true })} className="w-80 px-3 border rounded-md outline-none" />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter your Password" {...register("password", { required: true })} className="w-80 px-3 border rounded-md outline-none" />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">Login</button>
                            <p>Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
                        </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
