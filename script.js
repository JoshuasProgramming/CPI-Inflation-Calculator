/**
 * CPI Inflation Calculator JavaScript File
 * author(Joshua Thomas)
 * date(14.01.2022)
 * version:1.0
 */

const select_options = document.getElementById('select_options');
const itemName = document.getElementById('itemName');
const prev_value = document.getElementById('prev_value');
const current_value = document.getElementById('current_value');
const btn = document.getElementById('btn');
const select_options2 = document.getElementById('select_options2');
const output = document.getElementById('output');
const output_info = document.getElementById('output_info');

btn.addEventListener("click", (e)=>{
    let year_diff = " over " + (select_options2.value - select_options.value);
    
    let calc1 = (current_value.value / prev_value.value) * 100;
    let cal2 = ((calc1 - 100) / 100) * 100;
    
    if((current_value.value == "") || (prev_value.value == "") || (itemName.value == "") || (select_options.value == "Previous Year") || (select_options2.value == "Current Year")){
        alert("Fill in all fields");
        return;
    }
    
    output.innerText = cal2.toFixed(2) + "%";
    output_info.innerText = (itemName.value + " has gained " + cal2.toFixed(2) + "% " + year_diff + " years");
});