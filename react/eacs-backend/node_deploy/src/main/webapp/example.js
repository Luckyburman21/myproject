$undertow
    .onGet("/hello",
        { headers: { "content-type": "text/plain", "Access-Control-Allow-Origin": "*" } },
        [function ($exchange) {
            $exchange.send("Hello World");
        }]);


$undertow.onGet("/test-route",
    { headers: { "content-type": "text/plain", "Access-Control-Allow-Origin": "*" } },
    [function ($exchange) {
        var id = 1;
        $exchange.send("Test route received ID: " + id);
    }]
);
$undertow.onGet("/getdata",

    ['jndi:java:jboss/datasources/SQLServerDS', function ($exchange, db) {
        try {
            // Perform a query to fetch limited data
            var result = db.select("SELECT first_name , employee_id  FROM hls_schema_common.tbl_employee_details");
            
            // var toObject = {'Name' : result.first_name , 'Emp_id' :result.employee_id }

            // Convert the relevant part of the result to JSON
            // var data = Object.values(result);
          
            var jsonResult = JSON.stringify(result);
            
            // Send JSON result
            $exchange.send(jsonResult);
        } catch (e) {
            // Handle error by sending a JSON response
            var errorResult = JSON.stringify({ success: false, error: e.message });
            $exchange.send(errorResult);
        }
    }]
);



$undertow.onGet("/read-record",
    { headers: { "content-type": "application/json" } },
    ['jndi:java:jboss/datasources/ExampleDS', function ($exchange, db) {


        try {
            var result = db.select("SELECT * FROM lucky WHERE id = 1"); // Adjust as needed
            var jsonResult = JSON.stringify(result);

            // Attempt to set headers and send response
            $exchange.send(jsonResult);
        } catch (e) {
            // Basic error handling
            var errorResult = JSON.stringify({ error: e.message });
            $exchange.send(errorResult);
        }
    }]
);

