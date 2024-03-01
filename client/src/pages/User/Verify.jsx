import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Verify = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { userId } = useParams();
    useEffect(() => {
        verifyAccount();
    }, []);

    const verifyAccount = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/verify/", {
                id: userId,
            });
            if (response.status === 202) {
                setLoading(false);
                alert("Account verified")
                navigate('/login')
            }
        } catch (error) {
            console.error(error);
        }
        
    };
    return <>{loading && <div>Loading</div>}</>;
};

export default Verify;
