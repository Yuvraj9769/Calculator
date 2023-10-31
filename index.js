let input = document.getElementById("input");
let btns = document.getElementsByTagName("button");
let string = "";
let check = false;


Array.from(btns).forEach((e) => {
    e.addEventListener("click", () => {
        input.value += e.innerText;

        if (e.innerText === 'AC') {
            check = false;
            string = "";
            input.value = "";
        }
        else if (e.innerText === '=') {
            string = eval(string);
            input.value = string;
            check = true;

        }
        else if (e.innerText === '←') {
            if (check) {
                input.value = string;
            }
            else {
                let len = string.length;
                string = string.slice(0, len - 1);
                input.value = string;
                len--;
            }
        }
        else {
            string += e.innerText;
            check = false;
        }
    })
});
