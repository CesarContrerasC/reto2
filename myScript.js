function getClients(){
    $.ajax({ 
        url : 'https://g39aa9bb75e0a25-rluarqchrdaxaxy1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',
        success : function(client) {
            let cs = client.items;
            $("#clients").empty();
            for (let i = 0; i < cs.length; i++) {
                let k = cs[i].id+" "+cs[i].name+" "+cs[i].email+" "+cs[i].age+" "+"<button onclick='deleteClients("+cs[i].id+")'>Borrar</button>";
                k+= "<button onclick='getDetailClients("+cs[i].id+")'>Actualizar</button>"+" "+"<br>";
                $("#clients").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
};


function getClientInfo(){
    let idClient = $("#idClient").val();
    let nameClient = $("#nameClient").val();
    let emailClient = $("#emailClient").val();
    let ageClient = $("#ageClient").val();

    let client = {
        id:idClient,
        name:nameClient,
        email:emailClient,
        age:ageClient
    }
    return client;
}

function cleanInputs(){
    $("#idClient").val("");
    $("#nameClient").val("");
    $("#emailClient").val("");
    $("#ageClient").val("");
}

function saveClients(){
    let data =  getClientInfo();
    let dataToSend = JSON.stringify(data);
    console.log(data);   
    console.log(dataToSend);  
    
    $.ajax({ 
        url : 'https://g39aa9bb75e0a25-rluarqchrdaxaxy1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        contentType : 'application/json',
        data: dataToSend,
        success : function(client) {
            console.log('Ingreso al metodo de guardado');
            cleanInputs()
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteClients(idClient){
    let data =  {id:idClient};
    let dataToSend = JSON.stringify(data);
    
    $.ajax({ 
        url : 'https://g39aa9bb75e0a25-rluarqchrdaxaxy1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'DELETE',
        contentType : 'application/json',
        data: dataToSend,
        success : function(client) {
            cleanInputs()
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateClients(){
    let data =  getClientInfo();
    let dataToSend = JSON.stringify(data);
    
    $.ajax({ 
        url : 'https://g39aa9bb75e0a25-rluarqchrdaxaxy1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        contentType : 'application/json',
        data: dataToSend,
        success : function(client) {
            console.log('Ingreso al metodo de guardado');
            cleanInputs()
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailClients(idClient){

    $.ajax({ 
        url : 'https://g39aa9bb75e0a25-rluarqchrdaxaxy1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client'+"/"+idClient,
        type : 'GET',
        dataType : 'json',
        success : function(client) {
            let cs = client.items;
            console.log(cs);
            $("#idClient").val(cs[0].id);
            $("#nameClient").val(cs[0].name);
            $("#emailClient").val(cs[0].email);
            $("#ageClient").val(cs[0].age);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}    










































