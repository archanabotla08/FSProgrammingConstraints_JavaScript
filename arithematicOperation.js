let a = 100;
let b = 200;
let c = 50;
let FE = (a + b * c);
let SE = (a % b + c);
let TE = (c + a / b);
let FoE = (a * b + c);

console.log(FE, SE, TE, FoE);


if (((FE > SE) && (FE > TE) && (FE > FoE))) {
    if (((SE < TE) && (SE < FoE)))

        var Smallest = SE
    else if (((TE < SE) && (TE < FoE)))

        Smallest = TE
    else if (((FoE < SE) && (FoE < TE)))

        Smallest = FoE

    console.log("Largest: ", FE);
    console.log("Smallest: ", Smallest);
}


else if (((SE > FE) && (SE > TE) && (SE > FoE))) {

    if (((FE < TE) && (FE < FoE)))

        Smallest = FE
    else if (((TE < FE && TE < FoE)))

        Smallest = TE
    else if (((FoE < FE) && (FoE < TE)))

        Smallest = FoE

    console.log("Largest: ", SE);
    console.log("Smallest:", Smallest);
}

else if (((TE > FE) && (TE > SE) && (TE > FoE))) {
    if (((FE < SE) && (FE < FoE)))

        Smallest = FE
    else if (((SE < FE) && (SE < FoE)))

        Smallest = SE
    else if (((FoE < FE) && (FoE < SE)))

        Smallest = FoE

    console.log("Largest: ", TE);
    console.log("Smallest: ", Smallest);
}


else if (((FoE > FE) && (FoE > SE) && (FoE > TE))) {
    if (((FE < SE) && (FE < TE)))

        Smallest = FE
    else if (((SE < FE) && (SE < TE)))

        Smallest = SE
    else if (((TE < FE) && (TE < SE)))

        Smallest = TE

    console.log("Largest: ", FoE);
    console.log("Smallest: ", Smallest);
}


