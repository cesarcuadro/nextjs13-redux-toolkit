"use client";
// providers need to be client side components 

import { store } from "./store";
import { Provider } from "react-redux"

export function Providers({children}: {children: React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>
    // Provider component makes the Redux store available to any nested components that need the Redux store
        // children are the nested components 
}