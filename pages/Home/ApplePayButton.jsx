// // import React, { useState } from "react";

// // const ApplePayButton = () => {
// //   const [scriptLoaded, setScriptLoaded] = useState(false);
// //   const clientId = "ARkUA6rLslG8DMLakAsqKyYvpR3_ynw5EDW6fLSb-htLooa-hyIXgdEbYQ62NIJK_j0GTnVJ8qLvg3Be"
// //   const SUB_MERCHANT_ID = "P2C6BDS8CBTXW"
// //   const loadScript = () => {
// //     if (!scriptLoaded) {
// //       const script = document.createElement("script");
// //       script.src =
// //         `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&buyer-country=US&merchant-id=${SUB_MERCHANT_ID}&components=applepay`;
// //       script.onload = () => console.log("PayPal Apple Pay script loaded");
// //       script.onerror = () => console.error("Error loading PayPal script");
// //       document.body.appendChild(script);
// //       setScriptLoaded(true);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center mt-6" id="applepay-container">
// //       <button
// //         id="applepay-container"
// //         // className="apple-pay-button"
// //         onClick={loadScript}
// //       >
// //         Pay with Apple Pay
// //       </button>
// //     </div>
// //   );
// // };

// // export default ApplePayButton;
// import React, { useState } from "react";

// const ApplePayButton = () => {
//     const [scriptLoaded, setScriptLoaded] = useState(false);
//     const clientId = "ARkUA6rLslG8DMLakAsqKyYvpR3_ynw5EDW6fLSb-htLooa-hyIXgdEbYQ62NIJK_j0GTnVJ8qLvg3Be";
//     const SUB_MERCHANT_ID = "P2C6BDS8CBTXW";

//     const loadScript = () => {
//         if (!scriptLoaded) {
//             const script = document.createElement("script");
//             script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&buyer-country=US&merchant-id=${SUB_MERCHANT_ID}&components=applepay`;
//             script.onload = () => console.log("PayPal Apple Pay script loaded");
//             script.onerror = () => console.error("Error loading PayPal script");
//             document.body.appendChild(script);
//             setScriptLoaded(true);
//         }
//     };

//     return (
//         <div className="flex justify-center mt-6">
//             <button
//                 id="applepay-container"
//                 className="apple-pay-fallback"
//                 onClick={loadScript}
//             >
//                 Pay with Apple Pay
//             </button>

//             {/* Fallback CSS for unsupported browsers */}
//             <style jsx>{`
//                 .apple-pay-fallback {
//                     background-color: black;
//                     color: white;
//                     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
//                     font-size: 16px;
//                     padding: 10px 20px;
//                     border-radius: 5px;
//                     border: none;
//                     cursor: pointer;
//                     display: inline-block;
//                     text-align: center;
//                 }
//                 .apple-pay-fallback:hover {
//                     background-color: #333;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ApplePayButton;
import React, { useEffect, useState } from "react";

const ApplePayButton = () => {
    const [isEligible, setIsEligible] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const clientId = "ARkUA6rLslG8DMLakAsqKyYvpR3_ynw5EDW6fLSb-htLooa-hyIXgdEbYQ62NIJK_j0GTnVJ8qLvg3Be";
    const SUB_MERCHANT_ID = "P2C6BDS8CBTXW";

    // Function to load the PayPal SDK script dynamically
    const loadScript = () => {
        if (!scriptLoaded) {
            const script = document.createElement("script");
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&buyer-country=US&merchant-id=${SUB_MERCHANT_ID}&components=applepay`;
            script.onload = () => {
                console.log("PayPal Apple Pay script loaded");
                setScriptLoaded(true);
            };
            script.onerror = () => console.error("Error loading PayPal script");
            document.body.appendChild(script);
        }
    };

    // Function to check Apple Pay eligibility
    const checkApplePayEligibility = async () => {
        try {
            if (!window.ApplePaySession) {
                console.error("This device does not support Apple Pay");
                return;
            }
            if (!ApplePaySession.canMakePayments()) {
                console.error("This device is not capable of making Apple Pay payments");
                return;
            }

            const applepay = paypal.Applepay();
            const applepayConfig = await applepay.config();

            if (applepayConfig.isEligible) {
                setIsEligible(true);
            } else {
                console.error("Apple Pay is not eligible for this user");
            }
        } catch (error) {
            console.error("Error while fetching Apple Pay configuration.", error);
        }
    };

    // Effect to load the script and check eligibility
    useEffect(() => {
        loadScript();
    });

    useEffect(() => {
        if (scriptLoaded) {
            checkApplePayEligibility();
        }
    }, [scriptLoaded]);

    return (
        <div className="flex justify-center mt-6">
            {isEligible ? (
                <div
                    id="applepay-container"
                    dangerouslySetInnerHTML={{
                        __html: `<apple-pay-button id="btn-appl" buttonstyle="black" type="buy" locale="en"></apple-pay-button>`,
                    }}
                />
            ) : (
                <p>Apple Pay is not supported or eligible on this device.</p>
            )}
        </div>
    );
};

export default ApplePayButton;
