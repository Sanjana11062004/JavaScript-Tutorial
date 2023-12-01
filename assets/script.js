function checkMe() {
    const checkBoxes = document.querySelectorAll(".myCheckBox");
    const progress = document.querySelector(".progress-inner");
    const checklistProgressInterval = 100 / checkBoxes.length;
    let width = 0;
    
    for(let i = 0; i < checkBoxes.length; i++){
      if(checkBoxes[i].checked){
        width += checklistProgressInterval;
      }
    }
    
      progress.style.width = `${width}%`;
  }