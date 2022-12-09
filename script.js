function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1);   
}

function clean(){
    document.form.textarea.value = "";
}

function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

