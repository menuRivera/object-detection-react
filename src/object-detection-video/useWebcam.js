import { useEffect } from 'react'

const useWebcam = (videoRef, onLoaded) => {
  useEffect(() => {
    // Checa si hay dispositivos disponibles en el navegador (camaras)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({// Los solicita
          audio: false,
          video: {
            facingMode: 'environment',
            width: { ideal: 4096 },
            height: { ideal: 2160 },
          }, 
        })
        .then((stream) => {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => {
            onLoaded()
          }
        })
    }
  }, [onLoaded, videoRef])
}

export default useWebcam
