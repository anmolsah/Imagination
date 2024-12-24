// import React, { useContext } from "react";
// import { assets, plans } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { motion } from "framer-motion";

// const BuyCredit = () => {
//   const { backendUrl, loadCreditsData, user, token, setShowLogin } =
//     useContext(AppContext);

//   const navigate = useNavigate();

//   const initPay = async (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: "Credits Payment",
//       description: "Credits Payment",
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         try {
//           const { data } = await axios.post(
//             backendUrl + "/api/user/verify-razor",
//             response,
//             { headers: { token } }
//           );
//           if (data.success) {
//             loadCreditsData();
//             navigate("/");
//             toast.success("Credit Added");
//           }
//         } catch (error) {
//           toast.error(error.message);
//         }
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const paymentRazorpay = async (planId) => {
//     try {
//       if (!user) {
//         setShowLogin(true);
//       }

//       const { data } = await axios.post(
//         backendUrl + "/api/user/pay-razor",
//         { planId },
//         { headers: { token } }
//       );
//       if (data.success) {
//         initPay(data.order);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // const paymentStripe = async (planId) => {
//   //   try {
//   //     const { data } = await axios.post(
//   //       backendUrl + "/api/user/pay-stripe",
//   //       { planId },
//   //       { headers: { token } }
//   //     );
//   //     if (data.success) {
//   //       const { session_url } = data;
//   //       window.location.replace(session_url);
//   //     } else {
//   //       toast.error(data.message);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //     toast.error(error.message);
//   //   }
//   // };

//   return (
//     <motion.div
//       className="min-h-[80vh] text-center pt-14 mb-10"
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
//         Our Plans
//       </button>
//       <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
//         Choose the plan{" "}
//       </h1>
//       <div className="flex flex-wrap justify-center gap-6 text-left">
//         {plans.map((item, index) => (
//           <div
//             className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
//             key={index}
//           >
//             <img width={40} src={assets.logo_icon} alt="" />
//             <p className="mt-3 mb-1 font-semibold">{item.id}</p>
//             <p className="text-sm">{item.desc}</p>
//             <p className="mt-6">
//               <span className="text-3xl font-medium">₹{item.price}</span>/{" "}
//               {item.credits} credits
//             </p>
//             <div className="flex flex-col mt-4">
//               <button
//                 onClick={() => paymentRazorpay(item.id)}
//                 className="w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:border-blue-400"
//               >
//                 <img className="h-4" src={assets.razorpay_logo} alt="" />
//               </button>
//               {/*<button onClick={() => paymentStripe(item.id)} className='w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:border-blue-400'>
//                 <img className='h-4' src={assets.stripe_logo} alt="" />
//               </button>*/}
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default BuyCredit;

import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

const BuyCredit = () => {
  const { backendUrl, loadCreditsData, user, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit Added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className="border border-blue-600 text-blue-600 px-10 py-2 rounded-full mb-6 hover:bg-blue-600 hover:text-white transition-all">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10 text-blue-600">
        Choose the plan
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            className="bg-white drop-shadow-md border border-gray-300 rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
            key={index}
          >
            {/* <h2 className="text-4xl font-bold mb-3 text-blue-600">
              imagiNATION
            </h2> */}
            <Logo />
            <p className="mt-3 mb-1 font-semibold text-orange-500">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium text-blue-600">
                ₹{item.price}
              </span>
              / {item.credits} credits
            </p>
            <div className="flex flex-col mt-4">
              <button
                onClick={() => paymentRazorpay(item.id)}
                className="w-full flex justify-center gap-2 border border-orange-500 mt-2 text-sm rounded-md py-2.5 min-w-52 bg-orange-500 text-white hover:bg-orange-400 transition-colors"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
