import { isEmptyArray } from './CommonArray'

const FOCUSABLE_ELEMENTS =
  'select:not([disabled]), input[type="text"]:not([disabled]), input[type="file"]:not([disabled]), textarea:not([disabled]), button:not([disabled])'

type FocusableTypes = HTMLButtonElement | HTMLAnchorElement

const activeElementConvertArray = (elem: HTMLElement) => {
  return Array.from(elem.querySelectorAll<FocusableTypes>(FOCUSABLE_ELEMENTS))
}

export const focusElem = (parentElem: HTMLElement, isFirstFocus = true) => {
  if (!parentElem) return

  const focusableArray = activeElementConvertArray(parentElem)

  if (isEmptyArray(focusableArray)) {
    focusableArray[0].focus({ focusVisible: true })
    return
  }

  focusableArray[isFirstFocus ? 0 : focusableArray.length - 1].focus({
    focusVisible: true,
  })
}

export const modalFocus = (
  e: KeyboardEvent,
  parentElem: HTMLElement,
  modalClose: () => void,
) => {
  if (!parentElem) return

  switch (e.key) {
    case 'Enter':
    case 'Space':
      break
    case 'Escape':
      modalClose()
      break
    case 'Tab': {
      const activeElArray = activeElementConvertArray(parentElem)
      const focusIndex = activeElArray.findIndex(
        el => el === document.activeElement,
      )

      if (activeElArray.length === 1) {
        e.preventDefault()
        e.stopImmediatePropagation()
        focusElem(parentElem)
        break
      }

      if (focusIndex === 0) {
        if (e.shiftKey) {
          e.preventDefault()
          e.stopImmediatePropagation()
          focusElem(parentElem, false)
        }
      } else if (focusIndex >= activeElArray.length - 1) {
        // 最後の要素の場合 1番目の要素にフォーカスを当てる
        if (!e.shiftKey) {
          e.preventDefault()
          e.stopImmediatePropagation()
          focusElem(parentElem)
        }
      } else if (focusIndex === -1) {
        // 画面外の要素にフォーカスが当たっていたら1番目の要素へフォーカス
        focusElem(parentElem)
      }
      break
    }
  }
}
