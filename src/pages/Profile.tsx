import axios from "axios";
import { useEffect, useState } from "react";

const Profile =()=>{

    const [pro, proData]:any = useState({});  

    useEffect(()=>{
       userprofile()
    },[])
    
    const userprofile=()=>{
      const tokenString = localStorage.getItem("token");
      const token: string | undefined = tokenString ? JSON.parse(tokenString) : undefined;
       
      const header ={
        headers : {
            Authorization: `Bearer ${token}`
        }
      }
     
      axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
      .then((res)=>{
        proData(res.data);
        // console.log('Done', res.data)
      })
      .catch((err)=>{
         console.log('error', err);
      })
       
    }

    return(
        <section className="profile">
           <div className="xl:max-w-[1200px] mx-auto">

             <div className="rounded-box bg-base-200 mt-7">
              <div className="hero-content justify-start">
                <img
                  src={pro.avatar}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">{pro.name}</h1>
                  <p className="py-2 mt-3">
                    Email : {pro.email}
                  </p>
                   <p className="py-2">
                      Password : {pro.password}
                  </p>
                  <p className="py-2 mb-5">
                      Role : {pro.role}
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
           </div>
        </section>
    )
}

export default Profile;