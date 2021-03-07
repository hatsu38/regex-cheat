import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { alphanumeric } from 'lib/templates/regex'

let store: any

const initialState = {
  regexText: alphanumeric.regexText,
  targetText: alphanumeric.targetText,
  selected_name: alphanumeric.name,
  regexFlags: [
    { name: 'g', checked: true, note: 'すべての一致' },
    { name: 'm', checked: true, note: '複数行の一致' },
    { name: 'i', checked: false, note: '大文字/小文字を区別しない' },
  ],
}

type State = {
  regexText: string
  targetText: string
  selected_name: string
  regexFlags: []
}

type Action = {
  type: string
  targetText: string
  regexText: string
  selected_name: string
  regexFlags: []
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_TARGET_TEXT':
      return {
        ...state,
        targetText: action.targetText,
      }
    case 'UPDATE_REGEX_TEXT':
      return {
        ...state,
        regexText: action.regexText,
      }
    case 'UPDATE_ALL_TEXT':
      return {
        targetText: action.targetText,
        regexText: action.regexText,
        regexFlags: initialState.regexFlags,
        selected_name: action.selected_name,
      }
    case 'UPDATE_FLAGS':
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
    composeWithDevTools(applyMiddleware()),
  )
}

export const initializeStore = (preloadedState: any) => {
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

export function useStore(initialState: State) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
