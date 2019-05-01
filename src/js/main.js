function setHeader() {
    if (document.querySelector("#form").clientWidth >= 768) {
        if (document.querySelector("#form #hide").className == "hidden") {
            document.querySelector("h1").innerHTML = "FORMULARIO INDIVIDUAL";
        } else {
            document.querySelector("h1").innerHTML = "FORMULARIO PAREJAS";
        }
    } else {
        document.querySelector("h1").innerHTML = "FORMULARIO";
    }
}

function validateParticipant(participant) {
    return participant.replace(/\s+/g, " ").trim().split(" ").length >= 3;
}

function validateEmptyString(string) {
    return string.replace(/\s/g, '').length == 0;
}

function validateDate(date) {
    date = date.split("-");
    if (date.length != 3) {
        return false;
    }
    year = date[0];
    month = date[1];
    day = date[2];
    if (month < 1 || month > 12) {
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        return false;
    }
    if (month == 2) {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            return false;
        }
    }
    if (day < 1 || day > 31) {
        return false;
    }
    return true;
}

function precision(a) {
    if (!isFinite(a)) {
        return 0;
    }
    var e = 1;
    var p = 0;
    while (Math.round(a * e) / e !== a) {
        e *= 10;
        p++;
    }
    return p;
}

function validateNote(note) {
    return !isNaN(note) && note >= 0 && note <= 7 && precision(note) <= 2;
}

function calculateNote(difficulty, execution, esthetic) {
    if (!validateNote(difficulty)) {
        difficulty = 0;
    }
    if (!validateNote(execution)) {
        execution = 0;
    }
    if (!validateNote(esthetic)) {
        esthetic = 0;
    }
    document.querySelector("#note").innerHTML = "Nota total: " + ((difficulty + execution + esthetic) / 3).toFixed(2);
}

window.onload = function () {
    setHeader();
    // Hide button
    document.querySelector("#form button[name=hider]").onclick = function () {
        var hide = document.querySelector("#form #hide");
        if (hide.className == "hidden") {
            hide.className = "";
            document.querySelector("#form button[name=hider] span").innerHTML = "<";
        } else {
            hide.className = "hidden";
            document.querySelector("#form button[name=hider] span").innerHTML = ">";
        }
        setHeader();
    };

    // Input single
    var single = document.querySelector("#form input[name=single]");
    single.onblur = function () {
        if (validateParticipant(single.value)) {
            single.className = "";
        } else {
            single.className = "error";
        }
    };
    single.onfocus = function () {
        single.className = "";
    };

    // Input couples
    var couples = document.querySelector("#form input[name=couples]");
    couples.onblur = function () {
        if (!validateEmptyString(couples.value)) {
            if (validateParticipant(couples.value)) {
                couples.className = "";
            } else {
                couples.className = "error";
            }
        }
    };
    couples.onfocus = function () {
        couples.className = "";
    };

    // Input date
    var date = document.querySelector("#form input[name=date]");
    date.onblur = function () {
        if (validateDate(date.value)) {
            date.className = "";
        } else {
            date.className = "error";
        }
    };
    date.onfocus = function () {
        date.className = "";
    };

    // Input difficulty
    var difficulty = document.querySelector("#form input[name=difficulty]");
    difficulty.onblur = function () {
        var difficultyValue = parseFloat(difficulty.value);
        if (validateNote(difficultyValue)) {
            difficulty.className = "";
        } else {
            difficulty.className = "error";
        }
    };
    difficulty.onfocus = function () {
        difficulty.className = "";
    };
    difficulty.oninput = function () {
        var difficultyValue = parseFloat(difficulty.value);
        var executionValue = parseFloat(execution.value);
        var estheticValue = parseFloat(esthetic.value);
        calculateNote(difficultyValue, executionValue, estheticValue);
    };

    // Input execution
    var execution = document.querySelector("#form input[name=execution]");
    execution.onblur = function () {
        var executionValue = parseFloat(execution.value);
        if (validateNote(executionValue)) {
            execution.className = "";
        } else {
            execution.className = "error";
        }
    };
    execution.onfocus = function () {
        execution.className = "";
    };
    execution.oninput = function () {
        var difficultyValue = parseFloat(difficulty.value);
        var executionValue = parseFloat(execution.value);
        var estheticValue = parseFloat(esthetic.value);
        calculateNote(difficultyValue, executionValue, estheticValue);
    };

    // Input esthetic
    var esthetic = document.querySelector("#form input[name=esthetic]");
    esthetic.onblur = function () {
        var estheticValue = parseFloat(esthetic.value);
        if (validateNote(estheticValue)) {
            esthetic.className = "";
        } else {
            esthetic.className = "error";
        }
    };
    esthetic.onfocus = function () {
        esthetic.className = "";
    };
    esthetic.oninput = function () {
        var difficultyValue = parseFloat(difficulty.value);
        var executionValue = parseFloat(execution.value);
        var estheticValue = parseFloat(esthetic.value);
        calculateNote(difficultyValue, executionValue, estheticValue);
    };

    // Button save
    document.querySelector("#form button[name=save]").onclick = function (event) {
        event.preventDefault();
        var error = false;
        if (!validateParticipant(single.value)) {
            if (!error) {
                alert("Nombre y apellidos del primer miembro incorrectos.");
            }
            error = true;
            single.className = "error";
        }
        if (!validateEmptyString(couples.value) && !validateParticipant(couples.value)) {
            if (!error) {
                alert("Nombre y apellidos del segundo miembro incorrectos.");
            }
            error = true;
            couples.className = "error";
        }
        if (!validateDate(date.value)) {
            if (!error) {
                alert("Fecha del concurso incorrecta.");
            }
            error = true;
            date.className = "error";
        }
        if (!validateNote(parseFloat(difficulty.value))) {
            if (!error) {
                alert("Nota de dificultad técnica incorrecta.");
            }
            error = true;
            difficulty.className = "error";
        }
        if (!validateNote(parseFloat(execution.value))) {
            if (!error) {
                alert("Nota de ejecución incorrecta.");
            }
            error = true;
            execution.className = "error";
        }
        if (!validateNote(parseFloat(esthetic.value))) {
            if (!error) {
                alert("Nota de estética incorrecta.");
            }
            error = true;
            esthetic.className = "error";
        }
        if (!error) {
            alert("Formulario guardado correctamente.");
            single.value = "";
            couples.value = "";
            date.value = "";
            difficulty.value = "";
            execution.value = "";
            esthetic.value = "";
        }
    };
}

window.onresize = function () {
    setHeader();
};