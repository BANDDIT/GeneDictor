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
let genetik_istri = document.querySelector('.genetik_istri_selected');
let genetik_suami = document.querySelector('.genetik_suami_selected');
let penyakit_dropdown = document.querySelector('.penyakit_dropdown');
let genetik_suami_dropdown = document.querySelector('.genetik_suami_dropdown');
let genetik_istri_dropdown = document.querySelector('.genetik_istri_dropdown');
let penyakit_count = 0, genetik_suami_count = 0, genetik_istri_count=0;
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
genetik_suami.addEventListener('click',function(e){
    if(genetik_suami_count%2==0){
        genetik_suami_dropdown.style.display="flex";
        genetik_suami_dropdown.style.pointerEvents="auto";
    }
    else{
        genetik_suami_dropdown.style.display="none";
        genetik_suami_dropdown.style.pointerEvents="none";
    }
    genetik_suami_count = genetik_suami_count + 1;
});
genetik_istri.addEventListener('click',function(e){
    if(genetik_istri_count%2==0){
        genetik_istri_dropdown.style.display="flex";
        genetik_istri_dropdown.style.pointerEvents="auto";
    }
    else{
        genetik_istri_dropdown.style.display="none";
        genetik_istri_dropdown.style.pointerEvents="none";
    }
    genetik_istri_count = genetik_istri_count + 1;
});


let penyakit_default = document.querySelector('.penyakit-default');
let penyakit_option = document.querySelectorAll('.penyakit_option');
let nama_penyakit_suami = document.querySelector('.nama_penyakit_suami');
let nama_penyakit_istri = document.querySelector('.nama_penyakit_istri');
let istri_penyakit = document.querySelector('.istri_penyakit');
for(let i=0;i<penyakit_option.length;i++){
    penyakit_option[i].addEventListener('click',function(e){
        if(e.target.classList.contains('penyakit_hemofilia')){
            penyakit_default.innerText="Hemofilia";
            nama_penyakit_suami.innerText="Hemofilia";
            nama_penyakit_istri.innerText="Hemofilia";
        }
        else if(e.target.classList.contains('penyakit_anodontia')){
            penyakit_default.innerText="Anodontia";
            nama_penyakit_suami.innerText="Anodontia";
            nama_penyakit_istri.innerText="Anodontia";
        }
        else if(e.target.classList.contains('penyakit_buta_warna')){
            penyakit_default.innerText="Buta Warna";
            nama_penyakit_suami.innerText="Buta Warna";
            nama_penyakit_istri.innerText="Buta Warna";
        }
        else if(e.target.classList.contains('penyakit_thalassemia')){
            penyakit_default.innerText="Thalassemia";
            nama_penyakit_suami.innerText="Thalassemia";
            nama_penyakit_istri.innerText="Thalassemia";
        }
        else if(e.target.classList.contains('penyakit_albino')){
            penyakit_default.innerText="Albino";
            nama_penyakit_suami.innerText="Albino";
            nama_penyakit_istri.innerText="Albino";
        }
        penyakit_default.style.color="#173158";
        penyakit_default.style.fontWeight="600";
        penyakit_dropdown.style.display="none";
        penyakit_dropdown.style.pointerEvents="none";
        penyakit_count = penyakit_count + 1;

        if(genetik_suami_default.innerText!="Normal"&&genetik_istri_default.innerText!="Select"){
            genetik_suami_default.innerText=penyakit_default.innerText;
        }
        if(genetik_istri_default.innerText!="Normal"&&genetik_istri_default.innerText!="Carrier"&&genetik_istri_default.innerText!="Select"){
            genetik_istri_default.innerText=penyakit_default.innerText;
        }
    });
}


let genetik_suami_option = document.querySelectorAll('.genetik_suami_option');
let genetik_suami_default = document.querySelector('.genetik_suami-default');
for(let i=0;i<genetik_suami_option.length;i++){
    genetik_suami_option[i].addEventListener('click',function(e){
        if(e.target.classList.contains("suami_normal")){
            genetik_suami_default.innerText="Normal";
        }
        // else if(e.target.classList.contains("suami_carrier")){
        //     genetik_suami_default.innerText="Carrier";
        // }
        else if(e.target.classList.contains("suami_penyakit")){
            genetik_suami_default.innerText=nama_penyakit_suami.innerText;
        }
        genetik_suami_default.style.color="#173158";
        genetik_suami_default.style.fontWeight="600";
        genetik_suami_dropdown.style.display="none";
        genetik_suami_dropdown.style.pointerEvents="none";        
        genetik_suami_count = genetik_suami_count + 1;
    });
}

let genetik_istri_option = document.querySelectorAll('.genetik_istri_option');
let genetik_istri_default = document.querySelector('.genetik_istri-default');
for(let i=0;i<genetik_istri_option.length;i++){
    genetik_istri_option[i].addEventListener("click",function(e){
        if(e.target.classList.contains("istri_normal")){
            genetik_istri_default.innerText="Normal";
        }
        else if(e.target.classList.contains("istri_carrier")){
            genetik_istri_default.innerText="Carrier";
        }
        else if(e.target.classList.contains("istri_penyakit")){
            genetik_istri_default.innerText=nama_penyakit_istri.innerText;
        }
        genetik_istri_default.style.color="#173158";
        genetik_istri_default.style.fontWeight="600";
        genetik_istri_dropdown.style.display="none";
        genetik_istri_dropdown.style.pointerEvents="none";
        genetik_istri_count = genetik_istri_count + 1;
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
    else if(genetik_suami_default.innerText=="Select"){
        errorMessage.innerText="Silahkan mengisi status genetik suami";
        return false;
    }
    else if(genetik_istri_default.innerText=="Select"){
        errorMessage.innerText="Silahkan mengisi status genetik istri";
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

        let h3_1 = document.createElement('h3');
        let h3_2 = document.createElement('h3');
        let text_laki = document.createTextNode("Jika Anda memiliki anak laki-laki:");
        let text_perempuan = document.createTextNode("Jika Anda memiliki anak perempuan:");
        h3_1.appendChild(text_laki);
        h3_2.appendChild(text_perempuan);
        
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');
        let text1,text2,text3,text4;

        if(genetik_istri_default.innerText=="Normal"){
            if(genetik_suami_default.innerText=="Normal"){
                text1 = document.createTextNode("Anak Anda 100% normal");
                text2 = document.createTextNode("Anak Anda 100% normal");
            }
            else if(genetik_suami_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
                text1 = document.createTextNode("Anak Anda 100% normal");
                text2 = document.createTextNode("Anak Anda 100% carrier");
            }
            li1.appendChild(text1);
            li2.appendChild(text2);
            result_box_content.appendChild(h3_1);
            result_box_content.appendChild(li1);
            result_box_content.appendChild(h3_2);
            result_box_content.appendChild(li2);
        }
        else if(genetik_istri_default.innerText=="Carrier"){
            if(genetik_suami_default.innerText=="Normal"){
                text1 = document.createTextNode("Kemungkinan anak Anda normal sebesar 50%");
                text2 = document.createTextNode("Kemungkinan anak Anda mengidap sebesar 50%");
                text3 = document.createTextNode("Kemungkinan anak Anda normal sebesar 50%");
                text4 = document.createTextNode("Kemungkinan anak Anda carrier sebesar 50%");  
            }
            else if(genetik_suami_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
                text1 = document.createTextNode("Kemungkinan anak Anda normal sebesar 50%");
                text2 = document.createTextNode("Kemungkinan anak Anda mengidap sebesar 50%");
                text3 = document.createTextNode("Kemungkinan anak Anda mengidap sebesar 50%");
                text4 = document.createTextNode("Kemungkinan anak Anda carrier sebesar 50%");       
            }
            li1.appendChild(text1);
            li2.appendChild(text2);
            li3.appendChild(text3);
            li4.appendChild(text4);
            result_box_content.appendChild(h3_1);
            result_box_content.appendChild(li1);
            result_box_content.appendChild(li2);
            result_box_content.appendChild(h3_2);
            result_box_content.appendChild(li3);
            result_box_content.appendChild(li4);
        }
        else if(genetik_istri_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
            if(genetik_suami_default.innerText=="Normal"){
                text1 = document.createTextNode("Anak Anda 100% mengidap");
                text2 = document.createTextNode("Anak Anda 100% carrier");
            }
            else if(genetik_suami_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
                text1 = document.createTextNode("Anak Anda 100% mengidap");
                text2 = document.createTextNode("Anak Anda 100% mengidap");
            }
            li1.appendChild(text1);
            li2.appendChild(text2);
            result_box_content.appendChild(h3_1);
            result_box_content.appendChild(li1);
            result_box_content.appendChild(h3_2);
            result_box_content.appendChild(li2);
        }
    }
});
/*
btn.addEventListener('click',function(e){
    e.preventDefault();

    while(result_box_content.firstChild){
        result_box_content.removeChild(result_box_content.firstChild);
    }

    let h3_1 = document.createElement('h3');
    let h3_2 = document.createElement('h3');
    let text_laki = document.createTextNode("Jika Anda memiliki anak laki-laki:");
    let text_perempuan = document.createTextNode("Jika Anda memiliki anak perempuan:");
    h3_1.appendChild(text_laki);
    h3_2.appendChild(text_perempuan);
    
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let text1,text2,text3,text4;

    if(genetik_istri_default.innerText=="Normal"){
        if(genetik_suami_default.innerText=="Normal"){
            text1 = document.createTextNode("Anak Anda 100% normal");
            text2 = document.createTextNode("Anak Anda 100% normal");
        }
        else if(genetik_suami_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
            text1 = document.createTextNode("Anak Anda 100% normal");
            text2 = document.createTextNode("Anak Anda 100% carrier");
        }
        li1.appendChild(text1);
        li2.appendChild(text2);
        result_box_content.appendChild(h3_1);
        result_box_content.appendChild(li1);
        result_box_content.appendChild(h3_2);
        result_box_content.appendChild(li2);
    }
    else if(genetik_istri_default.innerText=="Carrier"){
        if(genetik_suami_default.innerText=="Normal"){
            text1 = document.createTextNode("Kemungkinan anak Anda normal sebesar 50%");
            text2 = document.createTextNode("Kemungkinan anak Anda mengidap sebesar 50%");
            text3 = document.createTextNode("Kemungkinan anak Anda normal sebesar 50%");
            text4 = document.createTextNode("Kemungkinan anak Anda carrier sebesar 50%");  
        }
        else if(genetik_suami_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
            text1 = document.createTextNode("Kemungkinan anak Anda normal sebesar 50%");
            text2 = document.createTextNode("Kemungkinan anak Anda mengidap sebesar 50%");
            text3 = document.createTextNode("Kemungkinan anak Anda mengidap sebesar 50%");
            text4 = document.createTextNode("Kemungkinan anak Anda carrier sebesar 50%");       
        }
        li1.appendChild(text1);
        li2.appendChild(text2);
        li3.appendChild(text3);
        li4.appendChild(text4);
        result_box_content.appendChild(h3_1);
        result_box_content.appendChild(li1);
        result_box_content.appendChild(li2);
        result_box_content.appendChild(h3_2);
        result_box_content.appendChild(li3);
        result_box_content.appendChild(li4);
    }
    else if(genetik_istri_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
        if(genetik_suami_default.innerText=="Normal"){
            text1 = document.createTextNode("Anak Anda 100% mengidap");
            text2 = document.createTextNode("Anak Anda 100% carrier");
        }
        else if(genetik_suami_default.innerText==penyakit_default.innerText&&penyakit_default.innerText!="Select"){
            text1 = document.createTextNode("Anak Anda 100% mengidap");
            text2 = document.createTextNode("Anak Anda 100% mengidap");
        }
        li1.appendChild(text1);
        li2.appendChild(text2);
        result_box_content.appendChild(h3_1);
        result_box_content.appendChild(li1);
        result_box_content.appendChild(h3_2);
        result_box_content.appendChild(li2);
    }
});
*/

/*
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
});*/