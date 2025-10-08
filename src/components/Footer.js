import React from "react";
function Footer(){
    return (
        <footer className = "bg-gray-800 text-white py-6 mt-10">
                {/*/Copyright */}
                <p className = "text-sm text-centerc">&copy;{new Date().getFullYear()} Sudip Sharma. All Rights reserved</p>
        </footer>
    );
}
export default Footer;