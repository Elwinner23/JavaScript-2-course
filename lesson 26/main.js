input.onkeyup= function(e){
    var len= this.value.replace(/\s+/g, '').length;
  
    if(len>16) return this.value= this.fix;
    if(len%4 === 0) {
      if(len === 16) {
        b.hidden= 0;
        this.fix= this.value;
        return;
      }
      this.value +=' ';
    }
  }

  var numericInput = document.getElementById("numericInput");
  numericInput.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
  });

  var numericInput = document.getElementById("numericInput1");
  numericInput.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");

  });
  var numericInput = document.getElementById("numericInput2");
  numericInput.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
  });