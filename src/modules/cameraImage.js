const REPLACE_IMG = 'cameraImage/REPLACE_IMG'

export function replaceImage(imgSrc) {
  return {
    type: REPLACE_IMG,
    payload: imgSrc,
  }
}

export default function cameraImageReducer(state = {}, action) {
  switch (action.type) {
    case REPLACE_IMG:
      return { ...state, success: action.payload }
    default:
      return state
  }
}
