function btnFind_onclick() {
    // variable initialization
    var pr = 0, cr = 0, nr = 0;

    pr = uToInt(numpr.value);
    cr = uToInt(numcr.value);

    nr = cr - pr;

    if(pr<0){
        alert("Previous reading cannot be negative.");
        location.href='eb001.html';
    }
    else if(cr<0){
        alert("Current reading cannot be negative.");
        location.href='eb001.html';
    }
    else if(nr<0){
        alert("Invalid previous and current readings.");
        location.href='eb001.html';
    }

    var cc = cmbbxcc.value;
    var mc = 0, np = 0, tip = 0, tia = 0, cuu100 = 0, cuu200 = 0, cuu400 = 0, cua400 = 0, puau100 = 0, puau200 = 0, puau400 = 0, puaa400 = 0, cuau100 = 0, cuau200 = 0, cuau400 = 0, cuaa400 = 0;
    if (cc == "Agriculture"){
        mc = 12.5, puau100 = 0.5, puau200 = 1.0, puau400 = 1.5, puaa400 = 2;
        if  (nr > 400){
            cuu100 = 100, cuu200 = 100, cuu400 = 200, tip = 1.0;
            cua400 = nr - 400;

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;
            cuau400 = puau400 * cuu400;
            cuaa400 = puaa400 * cua400;

            tia = (tip/100) * cuaa400;

            np = cuau100 + cuau200 + cuau400 + cuaa400 + mc + tia;
        }
        else if(nr > 200){
            cuu100 = 100, cuu200 = 100;
            cuu400 = nr - 200

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;
            cuau400 = puau400 * cuu400;

            np = cuau100 + cuau200 + cuau400 + mc;
        }else if(nr > 100){
            cuu100 = 100;
            cuu200 = nr - 100;

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;

            np = cuau100 + cuau200 + mc;
        }
        else if(nr > 0){
            cuu100 = nr;
            cuau100 = puau100 * nr;

            np = cuau100 + mc;
        }
    }

    else if (cc == "Domestic"){
        mc = 25, puau100 = 1, puau200 = 1.5, puau400 = 2, puaa400 = 2.5;
        if  (nr > 400){
            cuu100 = 100, cuu200 = 100, cuu400 = 200, tip = 1.5;
            cua400 = nr - 400;

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;
            cuau400 = puau400 * cuu400;
            cuaa400 = puaa400 * cua400;

            tia = (tip/100) * cuaa400;

            np = cuau100 + cuau200 + cuau400 + cuaa400 + mc + tia;
        }
        else if(nr > 200){
            cuu100 = 100, cuu200 = 100;
            cuu400 = nr - 200

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;
            cuau400 = puau400 * cuu400;

            np = cuau100 + cuau200 + cuau400 + mc;
        }else if(nr > 100){
            cuu100 = 100;
            cuu200 = nr - 100;

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;

            np = cuau100 + cuau200 + mc;
        }
        else if(nr > 0){
            cuu100 = nr;
            cuau100 = puau100 * nr;

            np = cuau100 + mc;
        }
    }

    else if (cc == "Commercial"){
        mc = 200, puau100 = 2, puau200 = 3, puau400 = 4, puaa400 = 5;
        if  (nr > 400){
            cuu100 = 100, cuu200 = 100, cuu400 = 200, tip = 2;
            cua400 = nr - 400;

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;
            cuau400 = puau400 * cuu400;
            cuaa400 = puaa400 * cua400;

            tia = (tip/100) * cuaa400;

            np = cuau100 + cuau200 + cuau400 + cuaa400 + mc + tia;
        }
        else if(nr > 200){
            cuu100 = 100, cuu200 = 100;
            cuu400 = nr - 200

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;
            cuau400 = puau400 * cuu400;

            np = cuau100 + cuau200 + cuau400 + mc;
        }else if(nr > 100){
            cuu100 = 100;
            cuu200 = nr - 100;

            cuau100 = puau100 * cuu100;
            cuau200 = puau200 * cuu200;

            np = cuau100 + cuau200 + mc;
        }
        else if(nr > 0){
            cuu100 = nr;
            cuau100 = puau100 * nr;

            np = cuau100 + mc;
        }
    }

    numpr.value = pr;
    numcr.value = cr;
    numnr.value = nr;
    numcuu100.value = cuu100;
    numcuu200.value = cuu200;
    numcuu400.value = cuu400;
    numcua400.value = cua400;
    numpuau100.value = puau100.toFixed(2);
    numpuau200.value = puau200.toFixed(2);
    numpuau400.value = puau400.toFixed(2);
    numpuaa400.value = puaa400.toFixed(2);
    numcuau100.value = cuau100.toFixed(2);
    numcuau200.value = cuau200.toFixed(2);
    numcuau400.value = cuau400.toFixed(2);
    numcuaa400.value = cuaa400.toFixed(2);
    nummc.value = mc.toFixed(2);
    numtip.value = tip.toFixed(2);
    numtia.value = tia.toFixed(2);
    num}