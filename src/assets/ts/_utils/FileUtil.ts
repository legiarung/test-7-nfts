export class FileUtil {
  public static isValidUrl = (str: string) => {
    try {
      const url = new URL(str);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  }

  public static checkImage = (url: string, errorCallback?: () => void, successCallback?: () => void) => {
    const img = document.createElement('img')

    img.setAttribute('src', url)
    img.addEventListener('error', ({ target }) => {
      errorCallback?.()
    })
    img.addEventListener('load', ({ target }) => {
      successCallback?.()
    })
  }

  public static getImageSize = (url: string, callback?: (size: any) => void) => {
    const img = new Image()

    img.onload = () => {
      callback?.({
        height: img.height,
        width: img.width
      })
    }
    img.src = url
  }
}
