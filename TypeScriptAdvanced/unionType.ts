let address: string | number;
address = "Dhaka";
console.log(address);

address = 10;
console.log(address);




function ProcessAddress(address:string | number):void {
    if (typeof(address)=="string") {
        console.log("String value :" + address);
    }
    else
    {
        console.log("Number Value :"+address);
    }
}

ProcessAddress("Dhaka");
ProcessAddress(15);
