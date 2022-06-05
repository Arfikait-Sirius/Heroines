@ECHO OFF

set DIR_HEROINES=%1\heroines
set DIR_GIRLS=%DIR_HEROINES%\girls

IF NOT exist %DIR_HEROINES% (
     mkdir %DIR_HEROINES%
     mkdir %DIR_GIRLS%
)

copy .\dir_Girls\Emily\Emily.js %DIR_GIRLS%\. > NUL
copy .\dir_Girls\Jessica\Jessica.js %DIR_GIRLS%\. > NUL
copy .\dir_Girls\Louise\Louise.js %DIR_GIRLS%\. > NUL

copy .\dir_Modules\heroines.js %1\. > NUL

echo Completed!
