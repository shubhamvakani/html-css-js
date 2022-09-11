const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSel = document.getElementById('temp_diff')
    const valueTemp = temp_diff.options[tempSel.selectedIndex].value;
    // console.log(valueTemp);

    let result;
    const celTofah = (numberTemp) =>{
        return (numberTemp * 1.8) + 32
    }
    const fahtocel = (numberTemp) =>{
        return (numberTemp - 32) * .5556
    }
    if (valueTemp === 'cel'){
        result = celTofah(numberTemp);
        const tempval = document.getElementById('resultContainer').innerHTML = result
        console.log(tempval);
    }
    else{
        result = fahtocel(numberTemp);
        const tempval = document.getElementById('resultContainer').innerHTML = result
        console.log(tempval);
    }

}