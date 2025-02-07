let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    if (age >= 100) {
        document.write("INVALID AGE .");
    } else {
        document.write("AAP VOTE KAR SAKTE HOO !");
    }
} else {
    if (age >= 0) {
        if (age >= 16) {
            document.write("APP VOT NHI KAR SAKTE HOO.");
        } else {
            document.write("APP VOT NHI KAR SAKTE HOO.");
        }
    } else {
        document.write("INVALId AGE .");
    }
}
