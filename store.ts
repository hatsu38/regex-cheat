import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const initialState = {
  regexText: "([A-Z])\\w+",
  targetText: "RegExr was created by gskinner.com, and is proudly hosted by Media Temple.",
  regexFlags: [
    { name: "g", checked: true, note: "すべての一致" },
    { name: "m", checked: true, note: "複数行の一致" },
    { name: "i", checked: false, note: "大文字/小文字を区別しない" },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TARGET_TEXT":
      return {
        ...state,
        targetText: action.targetText
      }
    case "UPDATE_REGEX_TEXT":
      return {
        ...state,
        regexText: action.regexText
      }
    case "UPDATE_ALL_TEXT":
      return {
        targetText: action.targetText,
        regexText: action.regexText,
        regexFlags: initialState.regexFlags,
      }
    case "UPDATE_FLAGS":
      return {
        ...state,
        regexFlags: action.regexFlags,
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
