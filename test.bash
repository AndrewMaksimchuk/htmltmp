
output_string='<div style="background-color:blue; accent-color:blue;" id="13"><a title="Where is the end?" href="google.com">This is the end!</a></div> <hr></hr> <br></br>'
test_result=$(deno run test.ts)
test_result_js=$(deno run test.js)

if [[ $test_result = $output_string ]];then
    echo '[ OK ] Typescript good'
fi

if [[ $test_result_js = $output_string ]];then
    echo '[ OK ] Javascript good'
    exit
fi

echo '[ ERROR ] Test fail'
echo $test_result
