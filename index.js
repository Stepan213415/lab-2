function calculatefunction() 
{
    let x = parseFloat(document.getElementById('x').value);
    let y = Math.cbrt(Math.pow(x, 5) + 5 * Math.pow(x, 4) - 4 * Math.pow(x, 3));
    document.getElementById('y').value = y.toFixed(4);

    if (y > 0) 
    {
        document.body.style.backgroundColor = 'green';
    } else if (y < 0) 
    {
        document.body.style.backgroundColor = 'blue';
    } else 
    {
        document.body.style.backgroundColor = 'red';
    }
}

function clearfields() 
{
    document.getElementById('x').value = '';
    document.getElementById('y').value = '';
    document.body.style.backgroundColor = 'white';
}

