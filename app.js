    let num1 = +prompt('Birinchi sonni kiriting'),
        num2 = +prompt('Ikkinchi sonni kiriting'),
        num3 = +prompt('Uchunchi sonni kiriting')
        
        if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3) {
            alert(num1)
        } else if (num2 < num3 && num2 > num1 || num2 > num3 && num2 < num1) {
            alert(num2)
        } else if (num3 < num2 && num3 > num1 || num3 > num2 && num3 < num1) {
            alert(num3)
        }