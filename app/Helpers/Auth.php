<?php

if (!function_exists('pass')) {

    /**
     * Get random password
     *
     * @param string $length password length
     * @return string
     */
    function pass($length=16) {
        $char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $pass = array();
        $temp = strlen($char)-1;
        for ($i=0;$i<$length;$i++) {
            $n = rand(0, $temp);
            $pass[] = $char[$n];
        }
        return implode($pass);
    }

}

if (!function_exists('uid')) {

    /**
     * Get user role
     * @return int
     */
    function uid() {
        if (!Auth::check()) return 0;
        return Auth::user()->id;
    }

}

if (!function_exists('name')) {

    /**
     * Get user name
     * @return string
     */
    function name() {
        if(!Auth::check()) return "Guest";
        return Auth::user()->name;
    }

}

if (!function_exists('role')) {

    /**
     * Get user role
     * @return int
     */
    function role() {
        if(!Auth::check()) return 0;
        return Auth::user()->role;
    }

}
