
// console.log('this is')


document.getElementById('btn-add')      
        .addEventListener('click', function(event){
            event.preventDefault();

            // const addMoney = document.getElementById('add-amount').value
            // const addnumber = parseFloat(addMoney);
            // console.log('Add money btn click')
            // const addMoney = inputById();
            // console.log('cjdcjc')
            const addMoney = inputById('add-amount');
            const addPin = inputById('add-pin');
            // console.log(addMoney, addPin);


            if(addPin === 1234){
                const balance =textById('account-balance');
                const updateBalance = balance + addMoney;
                console.log(updateBalance);

                document.getElementById('account-balance')
                .innerText = updateBalance;
            }
            else{
                alert('Worng Pin')
            }




        })