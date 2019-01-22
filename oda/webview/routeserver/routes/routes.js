var appRouter = function (app) {
 
    
//app.post("/webviewparams",function(request,response){ //***ENABLE this line if you have any parameters to be sent from webview component. Pls. update the "webAppUrl" property of "webview" component as well.
app.post("/",function(request,response){	//***DISABLE this if you are enabling above line.
console.log(JSON.stringify(request.body));

 request.body.parameters.forEach(parameter => {
                if (parameter.key === 'firstname') {
                    result = parameter.value;
                    
                }
 });
    //var vbcsurl = 'https://abcs1-oracletemplates.builder.us.oraclecloud.com/rt/testwebview/1.0/webApps/testwebviewapp/?firstname=' + result;
	var webvwurl = 'http://webp.nplocal.pagekite.me/';//<<PUT YOUR web application link here>>
    
    console.log(webvwurl);
	
  const resbody = {
        'webview.url': webvwurl
    };
    console.log('Response body: ' + JSON.stringify(resbody));
    response.json(resbody);
    
    
}
        );
}

module.exports = appRouter;