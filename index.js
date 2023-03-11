// Code your solutions in this file

//writeCards(["Charlie", "Samip", "Ali"], "birthday");
//countDown(5);

function writeCards(names, eventName)
{
    let messages = [];

    for (let i=0; i < names.length; i++)
    {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);

        //console.log(messages);
    }

    return messages;
}

function countDown(num)
{
    let i = num;
    while (i >= 0)
    {
        console.log(i);
        i--;
    }    
}