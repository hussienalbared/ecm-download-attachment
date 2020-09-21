var container = document.getElementById("container")
var list = []
var namesValue = []
var submit = document.getElementById('submit')
var ids = document.getElementById('ids')
var names = document.getElementById('names')
var output= document.getElementById('output') 
document.getElementById('inputfile') 
.addEventListener('change', function() { 
  
var fr=new FileReader(); 
fr.onload=function(){ 
    output.textContent=fr.result; 
} 
  
fr.readAsText(this.files[0]); 
})
submit.addEventListener('click', function () {
    console.log('clicked')
    try {
        // list = ids.value.split(',').filter(e => e.trim().length > 0).map(e => parseInt(e))
        list = output.textContent.split(',').filter(e => e.trim().length > 0).map(e => parseInt(e))
        console.log(list)
        createUrls(list)
    }
    catch (e) {
        alert(e)
    }

})
function createUrls(urlList) {
    removeOldLinks()
 for (let index = 0; index < urlList.length; index++) {
        let p = document.createElement('p')
        let element = urlList[index];
        console.log(element)
        let a = document.createElement('a');
        a.target = '_blank';
        a.setAttribute('download', element);
        let url = "http://sas-sql-srv-st/SASEntCaseManagement/Attachments.do?command=download&key=" + element;
        a.setAttribute('href', url);
        a.innerHTML = element;
        p.appendChild(a)
        container.appendChild(p)
        a.click()
    }



}
function removeOldLinks(){
    container.innerHTML = '';
}

