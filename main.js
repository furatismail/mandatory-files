// funkce umi nacist script z internetu
function loadScript(src, callback) {
    // vytvatrim html element script
    let script = document.createElement('script');
    // do script nacitam cestu na dany script - www.nekdekdesenachazitenscript.cz
    script.src = src;
    // jakmile se nacte tak volam callback
    script.onload = () => callback(script);
    // pripojuju element script do hlavicky
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
  });

  
