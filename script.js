const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('#hireme1').forEach(button => {
            button.addEventListener("click", () => {
                hireme1();
            });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('viewwork').addEventListener("click", () => {
            viewwork();
        });
    });
    //page 2
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('#hireme2').forEach(button => {
            button.addEventListener("click", () => {
                hireme2();
            });
        });
    });
    //page3 
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('b1').addEventListener("click", () => {
            b1();
        });
        document.getElementById('b2').addEventListener("click", () => {
            b2();
        });
        document.getElementById('b3').addEventListener("click", () => {
            b3();
        });
        document.getElementById('b4').addEventListener("click", () => {
            b4();
        });
    });
};
init();
const hireme1 = () => {
    window.location.href = "contact.html";
}
const viewwork = () => {
    window.location.href = "project.html";
}
//page 2
const hireme2 = () => {
    window.location.href = "contact.html";
}
//page 3
const b1 = () => {
    window.location.href = "https://github.com/zikou058/rose_valley_hotel";
}
const b2 = () => {
    window.location.href = "https://github.com/zikou058/mini_pro_tailwindcss.git";
}
const b3 = () => {
    window.location.href = "https://github.com/zikou058/Management-System-For-Student.git";
}
const b4 = () => {
    window.location.href = "https://github.com/zikou058/Alvin-s-Pizzeria.git";
}
// page 4
const hireme3 = () => {
    window.location.href = "contact.html";
};