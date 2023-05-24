let menu_responsive = document.querySelector('.menu_responsive');
let menu_responsive_bar = document.querySelectorAll('.menu_responsive_bar');
let predictor_responsive = document.querySelector('.predictor_responsive');
let disease_responsive = document.querySelector('.disease_responsive');
menu_responsive.addEventListener('click', function(e) {
    if (menu_responsive.style.backgroundColor == "white") {
        menu_responsive_bar.forEach((bar) => {
            bar.style.backgroundColor = "white";
        });
        menu_responsive.style.backgroundColor = "#173158";
        disease_responsive.style.opacity=0;
        disease_responsive.style.pointerEvents="none";
        setTimeout(function(){
            disease_responsive.style.display="none";
        },500);
        setTimeout(function(){
            predictor_responsive.style.opacity=0;
            predictor_responsive.style.pointerEvents="none";
            setTimeout(function(){
                predictor_responsive.style.display="none";
            },500);
        },100);
    } 
    else {
        menu_responsive.style.backgroundColor = "white";
        menu_responsive_bar.forEach((bar) => {
            bar.style.backgroundColor = "#173158";
        });
        predictor_responsive.style.display="flex";
        setTimeout(function(){
            predictor_responsive.style.opacity=1;
            predictor_responsive.style.pointerEvents="auto";
        },100);
        setTimeout(function(){
            disease_responsive.style.display="flex";
            setTimeout(function(){
                disease_responsive.style.opacity=1;
                disease_responsive.style.pointerEvents="auto";
            },100);
        },200);
    }
});

let penyakit_select = document.querySelector('.penyakit_selected');
let jenis_kelamin = document.querySelector('.jenis_kelamin_selected');
let status_genetik = document.querySelector('.status_genetik_selected');
let penyakit_dropdown = document.querySelector('.penyakit_dropdown');
let status_genetik_dropdown = document.querySelector('.status_genetik_dropdown');
let jenis_kelamin_dropdown = document.querySelector('.jenis_kelamin_dropdown');
let penyakit_count = 0, jenis_kelamin_count = 0, status_genetik_count=0;
penyakit_select.addEventListener('click',function(e){
    if(penyakit_count%2==0){
        penyakit_dropdown.style.display="flex";
        penyakit_dropdown.style.pointerEvents="auto";
    }
    else{
        penyakit_dropdown.style.display="none";
        penyakit_dropdown.style.pointerEvents="none";
    }
    penyakit_count = penyakit_count + 1;
});
status_genetik.addEventListener('click',function(e){
    if(status_genetik_count%2==0){
        status_genetik_dropdown.style.display="flex";
        status_genetik_dropdown.style.pointerEvents="auto";
    }
    else{
        status_genetik_dropdown.style.display="none";
        status_genetik_dropdown.style.pointerEvents="none";
    }
    status_genetik_count = status_genetik_count + 1;
});
jenis_kelamin.addEventListener('click',function(e){
    if(jenis_kelamin_count%2==0){
        jenis_kelamin_dropdown.style.display="flex";
        jenis_kelamin_dropdown.style.pointerEvents="auto";
    }
    else{
        jenis_kelamin_dropdown.style.display="none";
        jenis_kelamin_dropdown.style.pointerEvents="none";
    }
    jenis_kelamin_count = jenis_kelamin_count + 1;
});


let penyakit_default = document.querySelector('.penyakit-default');
let penyakit_option = document.querySelectorAll('.penyakit_option');
let status_sakit= document.querySelector('.status_sakit');
for(let i=0;i<penyakit_option.length;i++){
    penyakit_option[i].addEventListener('click',function(e){
        if(e.target.classList.contains('penyakit_hemofilia')){
            penyakit_default.innerText=status_sakit.innerText="Hemofilia";
        }
        else if(e.target.classList.contains('penyakit_anodontia')){
            penyakit_default.innerText=status_sakit.innerText="Anodontia";
        }
        else if(e.target.classList.contains('penyakit_buta_warna')){
            penyakit_default.innerText=status_sakit.innerText="Buta Warna";
        }
        else if(e.target.classList.contains('penyakit_thalassemia')){
            penyakit_default.innerText=status_sakit.innerText="Thalassemia";
        }
        else if(e.target.classList.contains('penyakit_albino')){
            penyakit_default.innerText=status_sakit.innerText="Albino";
        }
        penyakit_default.style.color="#173158";
        penyakit_default.style.fontWeight="600";
        penyakit_dropdown.style.display="none";
        penyakit_dropdown.style.pointerEvents="none";
        penyakit_count = penyakit_count + 1;
        if(status_genetik_default.innerText!="Normal"&&status_genetik_default.innerText!="Carrier"&&status_genetik_default.innerText!="Select"){
            status_genetik_default.innerText=penyakit_default.innerText;
        }
    });
}

let jenis_kelamin_option = document.querySelectorAll('.jenis_kelamin_option');
let jenis_kelamin_default = document.querySelector('.jenis_kelamin-default');
let carrier = document.querySelector('.carrier');
for(let i=0;i<jenis_kelamin_option.length;i++){
    jenis_kelamin_option[i].addEventListener('click',function(e){
        if(e.target.classList.contains("laki_laki")){
            jenis_kelamin_default.innerText="Laki-laki";
            carrier.style.display="none";
        }
        else if(e.target.classList.contains("perempuan")){
            jenis_kelamin_default.innerText="Perempuan";
            carrier.style.display="flex";
        }
        jenis_kelamin_default.style.color="#173158";
        jenis_kelamin_default.style.fontWeight="600";
        jenis_kelamin_dropdown.style.display="none";
        jenis_kelamin_dropdown.style.pointerEvents="none";
        jenis_kelamin_count = jenis_kelamin_count + 1;
    });
}

let status_genetik_option = document.querySelectorAll('.status_genetik_option');
let status_genetik_default = document.querySelector('.status_genetik-default');
for(let i=0;i<status_genetik_option.length;i++){
    status_genetik_option[i].addEventListener('click',function(e){
        if(e.target.classList.contains("normal")){
            status_genetik_default.innerText="Normal";
        }
        else if(e.target.classList.contains("carrier")){
            status_genetik_default.innerText="Carrier";
        }
        else if(e.target.classList.contains("penyakit_anda")){
            status_genetik_default.innerText=status_sakit.innerText;
        }
        status_genetik_default.style.color="#173158";
        status_genetik_default.style.fontWeight="600";
        status_genetik_dropdown.style.display="none";
        status_genetik_dropdown.style.pointerEvents="none";
        status_genetik_count = status_genetik_count + 1;
    });
}

let btn = document.querySelector('.predict_btn');
let result_box_content = document.querySelector('.result_box_content');
let errorMessage = document.getElementById("errorMessage");
let body = document.querySelector('body');
function checking(){
    if(penyakit_default.innerText=="Select"){
        //alert("YES");

        errorMessage.innerText="Silahkan mengisi jenis penyakit";
        return false;
    }
    else if(jenis_kelamin_default.innerText=="Select"){
        errorMessage.innerText="Silahkan mengisi jenis kelamin Anda";
        return false;
    }
    else if(status_genetik_default.innerText=="Select"){
        errorMessage.innerText="Silahkan mengisi status genetik Anda";
        return false;
    }
    else{
        errorMessage.innerText="";
        return true;
    }
}
btn.addEventListener('click',function(e){
    e.preventDefault();

    if(checking()){
        body.scrollIntoView({ behavior: "smooth", block: "end" });

        while(result_box_content.firstChild){
            result_box_content.removeChild(result_box_content.firstChild);
        }

        let h3 = document.createElement('h3');
        var text = document.createTextNode("Berikut ini adalah kemungkinan kondisi genetik pada orangtua Anda:");
        h3.appendChild(text);
        result_box_content.appendChild(h3);
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');
        let text1,text2,text3,text4;
        if(jenis_kelamin_default.innerText=="Laki-laki"){
            if(status_genetik_default.innerText=="Normal"){
                text1 = document.createTextNode("Ayah Normal - Ibu Normal");
                text2 = document.createTextNode("Ayah Normal - Ibu Carrier");
                text3 = document.createTextNode("Ayah Anda Mengidap - Ibu Anda Normal");
                text4 = document.createTextNode("Ayah Anda Mengidap - Ibu Anda Carrier");
            }
            else if(status_genetik_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
                text1 = document.createTextNode("Ayah Normal - Ibu Carrier");
                text2 = document.createTextNode("Ayah Normal - Ibu Mengidap");
                text3 = document.createTextNode("Ayah Anda Mengidap - Ibu Anda Carrier");
                text4 = document.createTextNode("Ayah Anda Mengidap - Ibu Anda Mengidap");
            }
            li1.appendChild(text1);
            li2.appendChild(text2);
            li3.appendChild(text3);
            li4.appendChild(text4);
            result_box_content.appendChild(li1);
            result_box_content.appendChild(li2);
            result_box_content.appendChild(li3);
            result_box_content.appendChild(li4);
        }
        else if(jenis_kelamin_default.innerText=="Perempuan"){
            if(status_genetik_default.innerText=="Normal"){
                text1 = document.createTextNode("Ayah Normal - Ibu Normal");
                text2 = document.createTextNode("Ayah Normal - Ibu Carrier");
                li1.appendChild(text1);
                li2.appendChild(text2);
                result_box_content.appendChild(li1);
                result_box_content.appendChild(li2);
            }
            else if(status_genetik_default.innerText=="Carrier"){
                text1 = document.createTextNode("Ayah Normal - Ibu Carrier");
                text2 = document.createTextNode("Ayah Normal - Ibu Mengidap");
                text3 = document.createTextNode("Ayah Anda Mengidap - Ibu Anda Normal");
                text4 = document.createTextNode("Ayah Anda Mengidap - Ibu Anda Carrier");
                li1.appendChild(text1);
                li2.appendChild(text2);
                li3.appendChild(text3);
                li4.appendChild(text4);
                result_box_content.appendChild(li1);
                result_box_content.appendChild(li2);
                result_box_content.appendChild(li3);
                result_box_content.appendChild(li4);
            }
            else if(status_genetik_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
                text1 = document.createTextNode("Ayah Mengidap - Ibu Carrier");
                text2 = document.createTextNode("Ayah Mengidap - Ibu Mengidap");
                li1.appendChild(text1);
                li2.appendChild(text2);
                result_box_content.appendChild(li1);
                result_box_content.appendChild(li2);
            }
        }
    }
});
/*
let penyakit_default = document.querySelector('.penyakit-default');
let penyakit_option = document.querySelectorAll('.penyakit_option');
let nama_penyakit_suami = document.querySelector('.nama_penyakit_suami');
let nama_penyakit_istri = document.querySelector('.nama_penyakit_istri');
let istri_penyakit = document.querySelector('.istri_penyakit');
for(let i=0;i<penyakit_option.length;i++){
    penyakit_option[i].addEventListener('click',function(e){
        if(e.target.classList.contains('penyakit_hemofilia')){
            penyakit_default.innerHTML="Hemofilia";
            nama_penyakit_suami.innerText="Hemofilia";
            nama_penyakit_istri.innerText="Hemofilia";
        }
        else if(e.target.classList.contains('penyakit_anodontia')){
            penyakit_default.innerHTML="Anodontia";
            nama_penyakit_suami.innerText="Anodontia";
            nama_penyakit_istri.innerText="Anodontia";
        }
        else if(e.target.classList.contains('penyakit_buta_warna')){
            penyakit_default.innerHTML="Buta Warna";
            nama_penyakit_suami.innerText="Buta Warna";
            nama_penyakit_istri.innerText="Buta Warna";
        }
        else if(e.target.classList.contains('penyakit_thalassemia')){
            penyakit_default.innerText="Thalassemia";
            nama_penyakit_suami.innerText="Thalassemia";
            nama_penyakit_istri.innerText="Thalassemia";
        }
        else if(e.target.classList.contains('penyakit_albino')){
            penyakit_default.innerHTML="Albino";
            nama_penyakit_suami.innerText="Albino";
            nama_penyakit_istri.innerText="Albino";
        }
        console.log(e);
        penyakit_default.style.color="#173158";
        penyakit_default.style.fontWeight="600";
        penyakit_dropdown.style.display="none";
        penyakit_dropdown.style.pointerEvents="none";
        penyakit_count = penyakit_count + 1;
    });
}*/


/*
menu_responsive.addEventListener('mouseenter',function(e){
    if (menu_responsive.style.backgroundColor == "white") {
        menu_responsive_bar.forEach((bar) => {
            bar.style.backgroundColor = "white";
        });
        menu_responsive.style.backgroundColor = "#173158";
    } 
    else {
        menu_responsive.style.backgroundColor = "white";
        menu_responsive_bar.forEach((bar) => {
            bar.style.backgroundColor = "#173158";
        });
    }    
});

menu_responsive.addEventListener('mouseleave',function(e){
    if (menu_responsive.style.backgroundColor == "white") {
        menu_responsive_bar.forEach((bar) => {
            bar.style.backgroundColor = "white";
        });
        menu_responsive.style.backgroundColor = "#173158";
    } 
    else {
        menu_responsive.style.backgroundColor = "white";
        menu_responsive_bar.forEach((bar) => {
            bar.style.backgroundColor = "#173158";
        });
    }    
});*/