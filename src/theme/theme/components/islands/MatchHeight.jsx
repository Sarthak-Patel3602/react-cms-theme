import { useEffect } from "react";
import $ from "jquery";
import "jquery-match-height";

const MatchHeight = ({ selectors = [] }) => {
    useEffect(() => {
        function applyMatchHeight() {
            if ($ && $.fn.matchHeight && selectors.length > 0) {
                selectors.forEach((selector) => {
                    $(selector).matchHeight();
                });
            }
        }

        // Apply once
        applyMatchHeight();

        // Apply again on window resize
        window.addEventListener("resize", applyMatchHeight);

        return () => window.removeEventListener("resize", applyMatchHeight);
    }, [selectors]);

    return null; // No UI, logic only
};

export default MatchHeight;
