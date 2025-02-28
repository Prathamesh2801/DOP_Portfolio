@echo off
cd src\assets\video

REM Process MP4 files
for %%i in (*.mp4) do (
    ffmpeg -y -i "%%i" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "compressed\%%~ni.mp4"
)

REM Process MKV files
for %%i in (*.mkv) do (
    ffmpeg -y -i "%%i" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "compressed\%%~ni.mp4"
) 