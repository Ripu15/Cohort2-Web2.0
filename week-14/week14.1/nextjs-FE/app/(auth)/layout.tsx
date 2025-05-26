import React from "react";
//taking 'children' as props
export default function({ children }:{
    children: React.ReactNode
}){
    return <div>
        <div className="border-b p-5 text-center">
        {/* Below banner is common for both signin and signout components */}
        {/* all children will rendered or layout after this  Banner*/}
        SignUp now and get 20% OFF for next few days !!!
         </div>
         {/* components will not get rendered
         if children is missed */}
         {children}
    </div>
}