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

let main_menu_responsive = document.querySelector('.main_menu_responsive');
let main_left_content = document.querySelector('.main_left_content2_isi');
main_menu_responsive.addEventListener('click',function(e){
    if(main_left_content.style.opacity==1){
        main_left_content.style.opacity=0;
        main_left_content.style.pointerEvents="none";
        main_menu_responsive.style.border="0px";
    }
    else{
        main_left_content.style.opacity=1;
        main_left_content.style.pointerEvents="auto";
        main_menu_responsive.style.border="2px solid #173158";
    }
});
