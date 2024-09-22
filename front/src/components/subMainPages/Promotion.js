import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Promotion = () => {
    const [myPromos, setMyPromos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(0);
    useEffect(() => {
        fetchPromotions();
    });

    const fetchPromotions = async () => {
        try {
            setLoading(true);
            const token = window.localStorage.getItem("token");

            const options = {
                method: "GET",
                url: process.env.REACT_APP_BACKEND + "/api/promotion/getpromotions",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-auth-token": token,
                },
            };

            await axios
                .request(options)
                .then(function (response) {
                    console.log("responseeeeeeeeeee"+response.data[0]);
                   
                    setMyPromos(response.data);
                    setLoading(false);
                    
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false);
                });
        } catch (error) {
            console.error("Error fetching promotions:", error);
        }
    };

    return (
        <div className='text-white flex justify-center h-[500px] items-center'>
          {myPromos[0].title}
        </div>
    )
}
