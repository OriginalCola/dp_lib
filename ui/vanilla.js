`$(function(){
    window.onload = (global) => {
        window.addEventListener("message", (event) => {
            var percent = 50;
            function LoadingUpdate(percent) {
                $('#Fill').css("width", percent + "%");
            }
            LoadingUpdate();
        })
    }
})`

let percent = 50;
function LoadingUpdate(percent) {
    $('#Fill').css("width", percent + "%");
}
LoadingUpdate(percent);



const LoaderAnim = anime({
    
})