// console.log('welcome')


function inputById(id){
    // console.log('Welcome to')
    // const addMoney = document.getElementById('add-amount').ariaValueMax
    // return addMoney;
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id, inputValue, inputNumber);
    return inputNumber;

}


function textById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber =parseFloat(textValue);
    return textNumber; 
}


function showFeatureById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('out-money-form').classList.add('hidden');
    document.getElementById('transe-tion').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}