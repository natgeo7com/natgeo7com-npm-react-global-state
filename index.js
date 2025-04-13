"use client"

import { useState, useEffect } from "react"

// this is an observable object
// that wraps a global variable
// and keeps a list of set-state functions
// which are used to update all components
// that are hooked to the global
class GlobalState {
    #value // the global value
    #subs = new Set() // a list of set-states

    constructor(initialValue) {
        this.#value = initialValue
    }

    get value() { return this.#value }

    set value(newValue) {
        this.#value = newValue
        this.notify()
    }

    sub(cb) { this.#subs.add(cb) }

    unsub(cb) { this.#subs.delete(cb) }

    // call set-states to update all components
    notify() { this.#subs.forEach(cb => cb({})) }
}

// this provides the hooking mechanism
function useGlobalState(globalState) {
    // when set-state is called
    // this function will re-run
    // and so are all components that use this hook
    const state = globalState.value
    const [, setState] = useState()

    function setState2(newState) {
        // the setter will call set-states of all components
        globalState.value = newState
    }

    useEffect(_ => {
        // sub set-state for the current component that uses the hook
        globalState.sub(setState)
        return _ => globalState.unsub(setState)
    }, [])

    return [state, setState2]
}

export { GlobalState, useGlobalState }
