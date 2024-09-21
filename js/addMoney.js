
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
            if(isNaN(addMoney)){
                alert('Failed to add Money');
                return;
            }

            if(addPin === 1234){
                const balance =textById('account-balance');


                const updateBalance = balance + addMoney;
                // console.log(updateBalance);

                document.getElementById('account-balance')
                .innerText = updateBalance;


                const p = document.createElement('p');
                p.innerText = `Added: ${addMoney}Tk. New Balance: ${updateBalance}Tk.`
                console.log(p);

                document.getElementById('transetion-container').appendChild(p);




            }
            else{
                alert('Worng Pin')
            }




        })