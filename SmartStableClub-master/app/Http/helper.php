<?php
if (!function_exists('downloadFile'))
{
    function downloadFile($image, $path)
    {
        $file_name = md5(random_int(10000, 99999) . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
        $destinationPath = public_path() . $path;
        $image->move($destinationPath, $file_name);
        return $file_name;
    }

}
