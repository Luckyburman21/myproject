
$undertow.onGet("/getdata",
    { headers: { "Access-Control-Allow-Origin": "http://localhost:3000" } },
    ['jndi:java:jboss/datasources/SQLServerDS', function ($exchange, db) {
        try {

            var result = db.select("SELECT employee_id, first_name, hls_schema_common.tbl_department_details.department_name, hls_schema_common.tbl_employee_designation_type_details.employee_designation_type_name FROM hls_schema_common.tbl_employee_details INNER JOIN hls_schema_common.tbl_department_site_details ON hls_schema_common.tbl_employee_details.department_site_ref_id = hls_schema_common.tbl_department_site_details.ref_id INNER JOIN hls_schema_common.tbl_department_details ON hls_schema_common.tbl_department_site_details.department_id = hls_schema_common.tbl_department_details.department_id INNER JOIN hls_schema_common.tbl_employee_designation_type_details ON hls_schema_common.tbl_employee_details.designation_id = hls_schema_common.tbl_employee_designation_type_details.employee_designation_type_id WHERE first_name NOT IN('','A')")
            var jsonResult = JSON.stringify(result);

            $exchange.send(jsonResult);
        } catch (e) {

            var errorResult = JSON.stringify({ success: false, error: e.message });
            $exchange.send(errorResult);
        }
    }]
);



