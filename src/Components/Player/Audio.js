import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useSelector } from "react-redux";
import { playerSelector } from "./playerSlice";

const Audio = ({ onLoadedData, onTimeUpdate, onEnded }, ref) => {
   const {dataItemPlaying} = useSelector(playerSelector)

   const audioRef = useRef();
   useImperativeHandle(ref, () => {
      return {
         play: () => {
            audioRef.current.play();
         },
         pause: () => {
            audioRef.current.pause();
         },
         getDuration: () => {
            return audioRef.current.duration;
         },
         getPauseStatus: () => {
            return audioRef.current.paused;
         },
         getCurrentTime: () => {
            return audioRef.current.currentTime;
         },
         setCurrentTime: (currentTime) => {
            audioRef.current.currentTime = currentTime;
         },
         setVolumeAudio: (volume) => {
            audioRef.current.volume = volume;
         }
      };
   });

   return (
      <div className="audio">
         <audio
            src={dataItemPlaying.source}
            ref={audioRef}
            onLoadedData={onLoadedData}
            onTimeUpdate={onTimeUpdate}
            onEnded={onEnded}
         />
      </div>
   );
};

export default forwardRef(Audio);
