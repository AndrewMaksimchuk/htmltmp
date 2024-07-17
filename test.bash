
output_string='<div style="background-color:blue; accent-color:blue;" id="13"><a title="Where is the end?" href="google.com">This is the end!</a></div> <hr></hr> <br></br>'
test_result=$(deno run test.ts)

if [[ $test_result = $output_string ]];then
    echo '[ OK ] All good'
    exit
fi

echo '[ ERROR ] Test fail'
echo $test_result
