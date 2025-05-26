import { Button } from "./Button";

export const SigninComponent = function(){
    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
    {/* <a href="#">:

    This is an anchor (<a>) tag that typically represents a hyperlink. The href="#" attribute means that clicking the link will not navigate anywhere; it just points to the top of the current page. In a production environment, you should replace "#" with the actual URL or a more appropriate action, such as a JavaScript function for form submission or an event handler if you're using it as a button. */}
    {/* CSS Classes:

        block: Makes the anchor tag a block-level element, allowing it to take up the full width of its container.

        max-w-sm: Sets the maximum width of the element to a small size (defined by Tailwind, typically around 24rem or 384px).

        p-6: Adds padding on all sides (padding of 1.5rem or 24px).

        bg-white: Sets the background color of the element to white.

        border border-gray-200: Adds a border with a light gray color around the element.

        rounded-lg: Applies large border-radius to the corners, making them rounded.

        shadow: Adds a default shadow effect around the element to create a subtle depth.

        hover:bg-gray-100: Changes the background color to a lighter gray when the element is hovered over, providing a visual feedback effect. 
        */}
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <div>
            {/* px-10 is a utility class that applies horizontal padding (padding-left and padding-right) of 2.5rem (or 40px) to an element. */}
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Sign in
                    </div>
                </div>
                {/* In Tailwind CSS, pt-2 is a utility class that applies top padding of 0.5rem (or 8px) to an element. */}
                <div className="pt-">
                    <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" />
                    
                    <Button />
                </div>
            </div>
        </a>
    </div>
</div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}