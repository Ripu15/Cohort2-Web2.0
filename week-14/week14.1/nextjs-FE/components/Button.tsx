//By creating this file we have moved button component to this file
//avoiding the signin component from becoming server side rendered  as button can not be pressed on server side

"use client"
export function Button() {
    function handler(){
        console.log("Hi There !!! ");
    }
// a) mt-8
// mt-8: Adds a top margin of 8 units. Tailwind's spacing scale is 0-12, and mt-8 corresponds to a specific value (32px).

// b) w-full
// w-full: Sets the width of the button to be 100% of its container's width.

// c) text-white
// text-white: Sets the button's text color to white.

// d) bg-gray-800
// bg-gray-800: Sets the background color of the button to a dark gray (gray-800 is one of Tailwind's predefined color classes).

// e) focus:ring-10
// focus:ring-10: Defines the size (spread) of the focus ring around the button when it's focused (usually during keyboard navigation).

// f) focus:ring-gray-300
// focus:ring-gray-300: Sets the color of the focus ring to a light gray (gray-300).

// g) font-medium
// font-medium: Sets the font weight to medium, giving the button text a slightly bolder appearance (but not as bold as font-bold).

// h) rounded-lg
// rounded-lg: Adds a large border radius, making the button's corners rounded.

// i) text-sm
// text-sm: Sets the font size of the button text to small.

// j) px-5
// px-5: Adds horizontal padding of 5 units on both sides of the button (padding-left and padding-right).

// k) py-2.5
// py-2.5: Adds vertical padding of 2.5 units on both the top and bottom (padding-top and padding-bottom).

// l) mr-2
// It seems like you intended to use mr-2 (margin-right of 2 units) instead of me-2.

// m) mb-12
// mb-13: This is also invalid in Tailwind. Tailwind's margin classes typically go up to mb-12. If you need a custom value like mb-13, you'd need to configure that in your Tailwind config file.

    return  <button onClick= {handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-10 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-12">Sign in</button>

}