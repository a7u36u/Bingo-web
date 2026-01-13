export const frasesBingo = {
    1: "¡El uno! El sollozo.",
    5: "¡Cinco! ¡Por el culo te la hinco!",
    11: "¡Once! ¡Chúpalo entonces!",
    13: "¡Trece! La mala suerte... (ya saben)",
    18: "¡Dieciocho! ¡Tiquitiquití! ¡Viva Chile!",
    22: "¡Veintidós! Los patitos.",
    24: "¡Veinticuatro! La nochebuena.",
    33: "¡Treinta y tres! ¡Los mineros!",
    45: "¡Cuarenta y cinco! La vieja de la esquina.",
    69: "¡Sesenta y nueve! ¡Dala vuelta!",
    75: "¡Setenta y cinco! ¡Se acabó la weá!",
    // Los números que no tienen frase especial dirán algo genérico
};

export function obtenerFrase(numero) {
    return frasesBingo[numero] || "¡Número " + numero + "!";
}