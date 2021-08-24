function modal() {
    $(".modal, .backdrop").addClass("active");
}

function closeModal() {
    $(".modal, .backdrop").removeClass("active");
}

$(".close, .modal .cancel, .backdrop").on("click", function () {
    closeModal();
});

/*
$(document).keyUp(function(e) {
    if(e.keyCode === 27) {
        closeModal();
    }
});*/


function previewFile() {

    var preview = document.querySelector('img');
    var file = document.querySelector('#id_photo').files[0];
    var reader = new FileReader();
    var label = document.querySelector('label');
    var icon = document.querySelector('ion-icon');

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

    label.classList.add('active');
    icon.parentNode.removeChild(icon);
};

function selectbox() {
   var selectboxCurrent = document.getElementsByClassName('selectbox-current');

}

/*
$(document).ready(function () {

    // Selectbox
    $(".selectbox-current").click(function () {
        $(".selectbox-options").addClass("active");
    });

    $(".selectbox-options li").click(function () {
        $(".selectbox-current .selected").text($(this).text());
        $(".selectbox-options").removeClass("active");
    });
});*/
