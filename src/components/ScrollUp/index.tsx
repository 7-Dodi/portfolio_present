import "./style.css";

export const ScroolUp = () => {
    window.addEventListener("scroll", () => {
        const scrollup = document.querySelector(".scrollup");
        if(scrollY >= 560) scrollup?.classList.add("showScroll");
        else scrollup?.classList.remove("showScroll");
    });

    return(
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}